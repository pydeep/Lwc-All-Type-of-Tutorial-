import { LightningElement } from 'lwc';

export default class Iterator extends LightningElement {
    carlist = ['BMW','Safari','fortuner','bolero'];
    get uniqueKey(){
        return Math.random;
    }
}