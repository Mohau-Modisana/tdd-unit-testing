function mostProfitableDepartment(sales_Data){
    var sale=0;
    var department='';
    
    for (var i=0; i<sales_Data.length; i++){
      if(sales_Data[i].sales>=sale){
        sale = sales_Data[i].sales;
       department=sales_Data[i].department; 
       }
    }
    return department;
  }