if(_ !== undefined && _ !== null){
  __ = _
}
var _ = {
  val(varname){
    return window[varname];
  },
  back(varval){
    var vararr = []
    for(var v in window){
      if(v===varval){
        vararr.push(v)
      }
    }
    return vararr
  },
  replace(vars,val){
    if(vars === "*"){
      window = val; // Dangerous!
      return "Reloading this page now!";
    }
    var arr = this.back(vars)
    for(var i in arr){
      window[i] = val
    }
    return arr
  },
  set(name,value){
    window[name] = value
    return _;
  },
  global_getter(name,func){
    var geto;
    eval(`geto = {get ${name} = func}`)
    var hypervisor = Object.assign(geto,window)
    window = hypervisor // Untested!
    return _;
  },
  globalize(ob){
    for(var i in ob){
      window[i] = ob[i]
    }
    return _;
  },
  hv : {
    get hv_make(){
      var body = document.querySelectorAll("body")[0]
      var hypervisor = document.createElement("iframe")
      hypervisor.src = ""
      hypervisor.style = "length:0px;width:0px;"
      var h = hypervisor;
      body.appendChild(h)
      this.h = h
    },
    h : undefined,
    get hv(){
      return this.h.contentWindow;
    },
    set(name,val){
      this.hv[name] = val;
    },
    call(func_str){
      this.hv[func_str]["call"]();
    }
  },
  del(){
  
  }
  //tdrh
}
