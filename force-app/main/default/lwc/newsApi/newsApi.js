import { LightningElement, track } from 'lwc';
import retrieveNews from "@salesforce/apex/newscontroller.retrieveNews";
export default class NewsApi extends LightningElement {
    @track result = [];
    connectedCallback(){
            this.fetchNews();
    }
    fetchNews(){
        retrieveNews().then(response=>{
            console.log(response);
            this.formatNewsData(response.articles)
        }).catch(error=>{
            console.log(error);
        })
    }
    formatNewsData(res){
       this.result = res.map((item, index)=>{
        let id   = `new_${index + 1}`;
        let date = new Date(item.publishedAt).toDateString();
        let name = item.source.name;
        return {...item, id:id, date:date, name:name}
        })
    }
}