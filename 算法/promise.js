class Promise{
  constructor(fn) {
    this.status='pending';
    this.resolveList=[];
    this.rejectList=[];
    fn(this.resolv.bind(this),this.reject.bind(this))
  }
  resolve(data){
    if(this.status!=='pending')return;
    this.status='fulfilled';
    setTimeout(()=>{
      this.resolveList.forEach(s=>{
        s(data);
      })
    })
  }

  reject() {
    if(this.status!=='pending')return;
    this.status='rejected';
    setTimeout(()=>{
      this.rejectList.forEach(f=>{
        f(data);
      })
    })
  }

  then(scb,fcb) {
    if(scb){
      this.resolveList.push(scb)
    }

    if(fcb){
      this.rejectList.push(fcb);
    }
    return this;
  }

  catch(cb) {
    if(cb){
      this.rejectList.push(cb)
    }
    return this;
  }

  static all(promises) {
    
  }

  static race() {

  }
}