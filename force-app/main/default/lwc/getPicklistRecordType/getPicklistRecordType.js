import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordId } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from 'lightning/uiObjectInfoApi';
export default class GetPicklistRecordType extends LightningElement {
    picklistvalue
    @wire (getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
    objectInfo;
    @wire(getPicklistValuesByRecordId,{objectApiName: ACCOUNT_OBJECT, recordTypeId : '$objectInfo.data.defaultRecordTypeId'})
    accountPicklistvalue({data, error}){
        if(data){
            console.log(data)
            this.shippingGeocodeAccuracy = data.picklistFieldValues.shippingGeocodeAccuracy
        }
        if(error){
            console.log(error)
        }
    }
    handlechange(event){
        this.picklistvalue = event.detail.value;   
    }
}