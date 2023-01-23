function test(){
    var uid = document.getElementById("name").value;
    var em = document.getElementById("email").value;
    var tel = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    //storing data
    var user = localStorage.setItem("uid", uid);
    var mail = localStorage.setItem("em", em);
    var ph = localStorage.setItem("tel", tel);
    var da = localStorage.setItem("date", date);
    var tim = localStorage.setItem("time", time);

    //Retrive
    var user = localStorage.getItem("uid",uid);
    var mail = localStorage.getItem("em", em);
    var ph = localStorage.getItem("tel", tel);
    var da = localStorage.getItem("date", date);
    var tim = localStorage.getItem("time", time);

    // var a,b;
    // a = document.getElementById("name").value;
    // b = document.getElementById("password").value;

    if(uid==user && em==mail && tel==ph && date==da && time==tim){
      alert("Login Successfully!");
    }
    else{
      alert("Invalid Credentials");
    }
  }