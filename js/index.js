/**function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

ed = false;


  

  document.getElementById("Button").disabled = true;
//Enabling a html button

document.getElementById("Button").disabled



var noti  =  document.querySelector('h1');
var select = document.querySelector('.select');
var button = document.getElementsByTagName('button');
for(but of button){
  but.addEventListener('click',(e)=>{
    var add = Number(noti.getAttribute('data-count')|| 0);
    noti.setAttribute('data-count', add+1);
    noti.classList.add('zero');
  })
}


var noti  =  document.getElementById('cartno').valu;
var select = document.querySelector('.select');
var buttonn = document.getElementsByClassName('se');
for(but of buttonn){
  but.addEventListener('click',(e)=>{
    var add = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count', add+1);
    noti.classList.add('zero');
  })
}


//var i = 0;
//function addtocart() {
   // document.getElementsByClassName('cartno').value = ++i;
//}

//function addtocart() {
//document.getElementById("cartno").innerHTML =document.querySelector('.rounded-pill').valu.valu+1;

//var element = document.getElementById("cartno").valu; 
//element.innerHTML("element++"); 
//}

function addtocart() {
 
  var isdisabled= document.getElementById('.tbn1').disabled;
  var span  = document.getElementById("cartno").valu;

  let count = 0;
  
  if(isdisabled) {

    document.getElementById('tbn1').disabled = false;
    document.getElementById("span").innerHTML =count + 1;

  }else {
    document.getElementById('tbn1').disabled = true;
    console.log("disabled")
  
    }
  }
 */




let carts = document.querySelectorAll('.adbtn');

for (let i=0; i < carts.length; i++){
  carts[i].addEventListener('clik', ()=>{
   
  })

}

function addtocart() {
  let productNumbers = localStorage.getItem('cartNumbers');
 
  
  productNumbers = parseInt(productNumbers);

  if( productNumbers){
    localStorage.setItem('cartNumbers', productNumbers +1);
    document.querySelector('.btn-dark span').textContent = productNumbers +1;

  }else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.btn-dark span').textContent = 1;
  }
 
 
}


localStorage.clear();




