public with sharing class SearchResult {
@AuraEnabled(cacheable = true)
    public static List<Account> getacclist(String name){
        String strname = '%'+ name + '%';
        List<Account> acc = [SELECT ID, Name, Industry, Phone, Type From Account WHERE name LIKE :strname];
        if(acc.isEmpty()){
            throw new AuraHandledException('no Record');
        }
        return acc;
    }

}
