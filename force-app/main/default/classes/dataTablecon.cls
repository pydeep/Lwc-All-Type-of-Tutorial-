public class dataTablecon {
    public List<Account> getAccount(){
            List<Account> accounts = [Select Id, Name, AnnualRevenue From Account Limit 10];
            return accounts;
    }
}