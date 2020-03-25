'use srict'
//////////scrollTop/////////////////////
const scrollBtn = document.querySelector('.arrow-top');
scrollBtn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


///////dropdowntext///////////
const text = Array.from(document.querySelectorAll('.textunderbtn'));
const btnPlus = Array.from(document.querySelectorAll('.btn-plus'));
const redText = Array.from(document.querySelectorAll('.btn-plus a'));
const imgMinus = Array.from(document.querySelectorAll('.btn-plus img'));
adding.onclick = function(event){
    let target = event.target;
    function Showtext(a){
        if(text[a].style.display == 'block'){
            text[a].style.display = '';
            redText[a].style.color = '';
            imgMinus[a].src = "картинки/плюс.png";
        }
        else{
        text[a].style.display = 'block';
        redText[a].style.color = 'red';
        imgMinus[a].src = "картинки/минус.png";
        }
    }
    if(target == btnPlus[0]){
        Showtext(0);
    }
    else if(target == btnPlus[1]){
        Showtext(1);
      }
      else if(target == btnPlus[2]){ 
        Showtext(2);
      }
}
///////////////slider/////////
const images = document.querySelectorAll('.slider img');
const imgArray = [];
const textImg = document.querySelectorAll('.amr');
const textArray = [];
for(let i=0;i<images.length;i++){
    imgArray[i]= images[i].src;
    images[i].remove();
    textArray[i] = textImg[i].textContent;
    textImg[i].remove();
}

let step = 0;
let offset = 0;
function draw(){
let div = document.createElement('div');
div.className = 'slider-content';
let img = document.createElement('img');
img.src = imgArray[step];
let text = document.createElement('a');
text.className = 'amr';
text.textContent = textArray[step];
slider.appendChild(div);
div.appendChild(img);
div.appendChild(text);
div.style.left= offset*150+'px';
if(step+1 ==imgArray.length){
    step = 0;
}
else{
    step++;
}
offset=1;
}
draw();
draw();
 function ShowNext(){
    let offset2 = 0;
    draw();
    let divArray = Array.from(document.querySelectorAll('.slider-content'));
    for(let i=0;i<divArray.length;i++){
divArray[i].style.left = offset2*150 - 150 +'px';
offset2++;
    }
    setTimeout(function(){
  divArray[0].remove();
    },1000);
    
}
setInterval(ShowNext, 3000);
/////////////////SUbmit Form//////////////////////////
function nameCheck(){
    let name = document.querySelector('#name');
    if(name.value.length<6){
        nameRule.style.display = "block";
        return false;
    }
    else{
        nameRule.style.display = "";
        return true;
    }
}
function emailCheck(){
    let email = document.querySelector('#email');
    if(email.value.includes('@')){
        emailRule.style.display = "";
        return true;
    }
    else{
        emailRule.style.display = "block";
return false;
    }
}
function subjectCheck(){
    let subject = document.querySelector('#subject');
    if(subject.value.length<6){
        subjectRule.style.display = "block";
        return false;
    }
    else{
        subjectRule.style.display = "";
        return true;
    }
}

let modal = document.querySelector('.modal');
submitBtn.onclick = function(){
   if(nameCheck() == true && emailCheck()==true && subjectCheck()==true){
      modal.style.display = "block";
   }
}
document.onclick = function(event){
    let target = event.target;
    if(target.className =="close"||target.className =="close-btn"){
        modal.style.display = "";
    }
}