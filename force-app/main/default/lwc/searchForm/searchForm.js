import { LightningElement, track} from 'lwc';
import SearchAccs from '@salesforce/apex/SearchResult.getacclist';
//datatable columns
const columns = [
    {
        label: 'Name',
        fieldName: 'AccName',
        type: 'url',
        typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'}    
    },
    {
        label:'Industry',
        fieldName:'Industry'
    },
    {   
        label:'Phone',
        fieldName:'Phone'   
    },
    {   
        label:'Type',
        fieldName:'Type',
        type:'text'
    },
];
export default class SearchForm extends LightningElement {
  @track searchData;
  @track columns = columns;
  @track errorMessage = '';
    strAccName = '';
    handleAccountChange(event){
        this.strAccName = event.target.value;
        console.log(this.strAccName);
    }
    //click on the button
    handleSearch(){
        if(!this.strAccName){
            this.errorMessage = 'Please Enter Your Name';
            this.searchData = undefined;
            return;
        }
        SearchAccs({name : this.strAccName})//destructing in javascript
        .then(result => {
            result.forEach((record) => {
                record.AccName = '/' + record.Id;
            });
            this.searchData = result;          
        })
        .catch(error=>{ 
            this.searchData = undefined;
            window.console.log(' '+JSON.stringify(error));
            if(error){
                this.errorMessage = error.body.message;
            }
        })
       
    }

}