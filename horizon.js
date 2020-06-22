
// hide and show navigation bar for smaller screen
navslide();
function navslide(){
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navLinks');
const navInd = document.querySelectorAll('.navLinks li');
//toggle navigation

burger.addEventListener('click', () =>{


    nav.classList.toggle('nav-active');


//animating links
navInd.forEach((link, index) => {
    if(link.style.animation){
        link.style.animation ='';
    }else{
        link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.25}s`
    }
    });


    //burger animation
    burger.classList.toggle('toggle');
});

}



function formValidation(){

    var email = document.getElementById('email').value;
    var message= document.getElementById('message').value;

    if(email ==""){
        document.getElementById('emailText').innerHTML="**Please enter your email address";
        return false;      
    }
    if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")){
        document.getElementById('emailText').innerHTML="Please enter a valid email address";
        return false;
   
    }
    if(email.indexOf('@')<=0){
        document.getElementById('emailText').innerHTML=" ** Please enter a valid email address";
        return false;
    }
    else{
        document.getElementById('emailText').innerHTML="";
        document.getElementById('greenArea').innerHTML="&#10003";
       
    }


if(message==""){       
     document.getElementById('textArea').innerHTML="**Please enter your message";
 return false;
    }
   
else{
    document.getElementById('textArea').innerHTML="";   
    document.getElementById('greenArea2').innerHTML="&#10003";
  
}
return true;
};


//slider of home page
let navinParajuli=0;

slideEffect();



function slideEffect(){
    var b;
    var sliders= document.getElementsByClassName('slider');
    
    for(b=0;b<sliders.length;b++){
        sliders[b].style.display = "none";
    }
    navinParajuli++;
    if (navinParajuli>sliders.length){navinParajuli=1}

   
    sliders[navinParajuli-1].style.display ="block";
    
    setTimeout(slideEffect, 5000);

}




