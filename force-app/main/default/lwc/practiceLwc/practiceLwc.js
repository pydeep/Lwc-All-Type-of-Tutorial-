import { LightningElement} from 'lwc';

export default class IFTrue extends LightningElement {
    showText = false;
    showText(){
        this.showText= true;
    }
}