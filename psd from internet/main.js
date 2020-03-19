///////dropdowntext///////////
let text = Array.from(document.querySelectorAll('.textunderbtn'));
let btnPlus = Array.from(document.querySelectorAll('.btn-plus'));
let redText = Array.from(document.querySelectorAll('.btn-plus a'));
let imgMinus = Array.from(document.querySelectorAll('.btn-plus img'));
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
