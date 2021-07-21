function totalPhoneBill(Phone_bills){
    var sms=0.65;
    var call=2.75;
    var bills=Phone_bills.split(',');
    var Total_call=[];
    var Total_sms=[];
    var Total_bill=0;
    
    for (var i=0; i<bills.length; i++){
      
     if ( bills[i].includes('sms')){
      Total_sms.push(bills[i]);
        }
      else if ( bills[i].includes('call')){
      Total_call.push(bills[i]);
        }
    }
    Total_bill=sms*Total_sms.length + call*Total_call.length;
    Total_bill=Total_bill.toFixed(2);
    return 'R'+Total_bill;
  }
  