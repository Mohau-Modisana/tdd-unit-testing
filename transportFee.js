function transportFee(work_time){
 
    switch(work_time){
      case 'morning':
       var payment = 'R20';
        break;
        
        case 'afternoon':
       var payment = 'R10';
        break;
        
        case 'nightshift':
       var payment = 'free';
        break;
        
                    }
    
    return payment; 
  }