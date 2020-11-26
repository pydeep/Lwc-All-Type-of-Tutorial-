import { LightningElement, track} from 'lwc';
    export default class DataBinding extends LightningElement {
    @track title="Salesforce Developer"
    changeHandle(event){
        this.title = event.target.value;
    }

    
}