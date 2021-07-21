function countAllPaarl(registration){
    var reg=registration.split(',');
    var Paarl_list=[];
    for(var i=0; i<reg.length; i++){
      reg[i]=reg[i].trim();
      if(reg[i].includes('CJ')===true){
         Paarl_list.push(reg[i]);
         }
    }
    return Paarl_list.length;
  }