var isBold = false
var BT=document.getElementById('boldBtn')
var TA=document.getElementById('txtArea')
BT.addEventListener('click',By)
function By(){
    if (isBold) {
                 txtArea.style.fontWeight = '500'
                 boldBtn.style.fontWeight = '500'
                 isBold = false
        
        } else {
                 txtArea.style.fontWeight = 'bold';
                 boldBtn.style.fontWeight = 'bold'
                 isBold = true
            }

}
var italic=document.getElementById('italicBtn')
var isIT=false

italic.addEventListener('click',IY)
function IY(){
 if (isIT) {
    txtArea.style.fontStyle='normal'
    italic.style.fontStyle='normal'
    isIT=false
 }else{
    txtArea.style.fontStyle='italic'
    italic.style.fontStyle='italic'
    isIT=true
 }
}

var und=document.getElementById('und')
var isund=false
und.addEventListener('click',underline)
function underline(){
    if(isund){
        txtArea.style.textDecoration='none'
        und.style.textDecoration="none"
        isund=false;
    }else{
        txtArea.style.textDecoration = "underline";
        isund=true;

    }
}

var left=document.getElementById('left')
var isL=false
left.addEventListener('click',LE)
function LE () {
  if(isL){
    txtArea.style.textAlign = "start";
    txtArea.style.fontWeight = "normal";
    
    isL=false
  }else{
    txtArea.style.textAlign = "left";
    // txtArea.style.fontWeight = "bold";
    isL=true
  }
}

var right=document.getElementById('right')
var isR=false
right.addEventListener('click',RE)

function RE(){
    if(isL){
        txtArea.style.textAlign = "start";
        txtArea.style.fontWeight = "normal";
        
        isL=false
      }else{
        txtArea.style.textAlign = "right";
        // txtArea.style.fontWeight = "bold";
        isL=true
      }
    
}

var centre=document.getElementById('centre')
var isC=false
centre.addEventListener('click',CE)
function CE(){
    if(isL){
        txtArea.style.textAlign = "start";
        txtArea.style.fontWeight = "normal";
        
        isL=false
      }else{
        txtArea.style.textAlign = "center";
        // txtArea.style.fontWeight = "bold";
        isL=true
      }
    
}

var inp=document.getElementById('inp')
inp.addEventListener('click',chng)
function chng(){
txtArea.style.color=inp.value
}