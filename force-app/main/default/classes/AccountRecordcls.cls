public class AccountRecordcls {
    public Account acclistval{get;set;}
    public List<Account> acclist{get;set;}
     
    public AccountRecordcls(){
    	acclistval = new Account();    
    }
    public pageReference saveAccount(){
        insert acclistval;
        return new pageReference(' '+acclistval.id);
    }
    
    public AccountRecordcls(ApexPages.StandardController stdcontroller){
        acclist = new List<Account>();
        acclist = [Select Id, Name, Type, Rating From Account Limit 10];
       
    }
}