function countAllFromTown(registration,strt_string){ 
    var reg=registration.split(',');
    var Town_=[];
    
    for(var i=0; i<reg.length; i++){
    reg[i]=reg[i].trim();
      if(reg[i].includes(strt_string)===true ){
       Town_.push(reg[i]);
        
      } 
      
    }
    return Town_.length;
  }