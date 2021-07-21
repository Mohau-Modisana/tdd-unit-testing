function findItemsOver20(item_List){
    var results=[];
    for (var i=0; i<item_List.length; i++){
      if(item_List[i].qty>20){
         results.push(item_List[i]);
       }
    }
    return results;
  }
  
  
  
  