function dis(y){
  document.getElementById("aa").value+=y
}
function cl(){
  document.getElementById("aa").value=""
}
function calc(){
let x=document.getElementById("aa").value
let y= eval(x)
document.getElementById("aa").value=y
}
