import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from  'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class GetPicklistValueDemo extends LightningElement {
    picklistvalue
    @wire(getObjectInfo,{objectApiName : ACCOUNT_OBJECT})
    objectInfo
    @wire(getPicklistValues, { recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName:INDUSTRY_FIELD})
    IndustryPicklistValues
    handlechange(event){
        this.picklistvalue = event.target.value;
    }
}