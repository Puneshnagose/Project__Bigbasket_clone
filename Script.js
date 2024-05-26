
//slider of home page
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// -------signup---------


function submitForm(){
  let name=document.getElementById("name");
  let email=document.getElementById("email");
  let password=document.getElementById("password");
  let UserData=[];
  let obj={};
  obj.name=name.value;
  obj.email=email.value;
  obj.password=password.value;
  // console.log(obj)
  UserData.push(obj);
  // console.log(arr)
  localStorage.setItem("UserData",JSON.stringify(UserData))
}

// -------------login--------------
let UserData=JSON.stringify(localStorage.getItem("UserData")) || []
let loginemail=document.getElementById("login-email")
let loginpassword =document.getElementById("login-password")
function log_btn(){
  let checkuser=false;
  UserData.forEach((ele) => {
    if(ele.email==loginemail.value && ele.password==loginpassword.value){
      checkuser=true;
      console.log("login success")
      alert("login succesfull")
    }
  });
  if(checkuser==false){
    console.log("not found")
    alert("wrong passwordd")
  }
}