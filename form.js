
function fun1(){
    let username=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let cpassword=document.getElementById('cpassword').value;
    let mobile=document.getElementById('mobile').value;
    let dob=document.getElementById('dob').value;
    let resume=document.getElementById('resume').value;
    let address=document.getElementById('address').value;


    // username validation
    if (username == ""){
        document.getElementById('span1').innerHTML= "* please fill the name";
        return false;
    }
     if(username.length<=2||username.length>20){
        document.getElementById('span1').innerHTML= "*name length must be 3 to 20";
        return false;
     }
     if(!isNaN(username)){
        document.getElementById('span1').innerHTML= "*only characters are allowed";
        return false;
     }

    //  email validation
     if (email == ""){
        document.getElementById('span2').innerHTML= "* please fill the email";
        return false;
     }
     

    //  validation for password
     if (password == ""){
        document.getElementById('span3').innerHTML= "* please fill the password";
        return false;
     }
     if(password.length<=7||password.length>15){
        document.getElementById('span3').innerHTML= "*password length must be 8 to 15";
        return false;
     }


      //  validation for cpassword
      if (cpassword == ""){
        document.getElementById('span11').innerHTML= "* please fill the password";
        return false;
     }
     if(password!=cpassword){
        document.getElementById('span11').innerHTML= "* please fill correct password";
        return false;
     }


    //  mobile validation
     if (mobile == ""){
        document.getElementById('span10').innerHTML= "* please fill the mobile no";
        return false;
     }
     if(isNaN(mobile)){
        document.getElementById('span10').innerHTML= "* enter only digits";
        return false;
     }
     if(mobile.length<10||mobile.length>10){
        document.getElementById('span10').innerHTML= "*enter only 10 digits";
        return false;
     }

     
    //  dob validation
     if (dob == ""){
        document.getElementById('span4').innerHTML= "* please fill the date of birth";
        return false;
     }

        // classmode validation
      if (document.getElementById('online').checked==false && document.getElementById('offline').checked==false){
        document.getElementById('span5').innerHTML= "* please fill the classmode";
        return false;
     }

    //  degree validation
    if (document.getElementById('degree').selectedIndex==0){
        document.getElementById('span6').innerHTML= "* please fill the degree ";
        return false;
     }

        // course validation
        if (document.getElementById('java').checked==false && document.getElementById('python').checked==false
        && document.getElementById('angular').checked==false && document.getElementById('oracle').checked==false
        && document.getElementById('mysql').checked==false)
        {
            document.getElementById('span7').innerHTML= "* please fill the courses";
            return false;
        }


    //  resume validation
     if (resume == ""){
        document.getElementById('span8').innerHTML= "* please fill the resume";
        return false;
     }

    //  address validation
     if (address == ""){
        document.getElementById('span9').innerHTML= "* please fill the address";
        return false;
     }

     // checkbox validation
     if (document.getElementById('gridCheck').checked==false){
        document.getElementById('span12').innerHTML= "* please check this box";
        return false;
     }

    else{
       alert("send successfully") ;
        return true
    }


   
}
function fun2(){
    alert("reset form")
}