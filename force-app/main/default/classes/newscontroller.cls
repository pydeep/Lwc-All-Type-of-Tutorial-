public with sharing class newscontroller {
   @AuraEnabled 
   public static Map<String, Object> retrieveNews(){
       HttpRequest httpRequest = new HttpRequest();
       httpRequest.setEndpoint('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d29e009cfaed4011a51e689e385828fb');
       httpRequest.setMethod('GET');
       
       Map<String, Object> newsdata = new Map<String, Object>();
       String strresponse = null;

       try{
            Http http = new Http();
            HttpResponse httpresponse = http.send(httpRequest);
            if(httpresponse.getStatusCode()==200){
                strresponse = httpresponse.getBody();
            }
            else{
                throw new CalloutException(httpresponse.getBody());
            }
       }
       catch(Exception e){
           throw e;
       }
       if(!String.isBlank(strresponse)){
        newsdata = (Map<String, Object>)JSON.deserializeUntyped(strresponse); 
       }    
       if(!newsdata.isEmpty()){
           return newsdata;
       }
       else {
           return null;
       }
   }
}   