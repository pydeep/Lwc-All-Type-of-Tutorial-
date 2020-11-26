import { LightningElement } from 'lwc';
export default class BoatSearchForm extends LightningElement {
    value = 'All Type';
    get options(){
        return[
            {label:'new', value:'inprogress'},   
        ];
    }
    handleChange(event){
        this.value = event.detail.value;
    }

}