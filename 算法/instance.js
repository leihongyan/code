function instansceof(L,R){
  const o=R.prototype;
  L=L.__proto__;
  while(true){
   
    if(L===null)return false;
    if(L===o){
      return true;
    }
    L=L.__proto__;  
  }
}
