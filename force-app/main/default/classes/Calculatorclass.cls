public class Calculatorclass {
    public  decimal firstnumber{get;set;}
    public decimal secondnumber{get;set;}
    public decimal result{get;set;}
    public void sum(){
       result = firstnumber + secondnumber;
    }
    public void sub(){
       result = firstnumber - secondnumber;
    }
    public void mul(){
       result = firstnumber * secondnumber;
    }
	
}