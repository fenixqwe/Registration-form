var snowmax= 50;
var snowcolor=new Array("#AAAACC","#DDDDFF","#CCCCDD","#F3F3F3","#F0FFFF","#FFFFFF","#EFF5FF")
var snowfont=new Array("Arial Black","Arial Narrow","Times","Comic Sans MS");
var snowflake="*";
var sinkspeed=0.1;
var snowmaxsize=40;
var snowminsize=8;


var snow=new Array();
var marginbottom;
var marginright;
var timer;
var map=new Array();
var corwards=new Array();
var lftrght=new Array();
var info=navigator.userAgent;
var intern=document.all&&document.getElementById&&!info.match(/Opera/);
var nous=document.getElementById&&!document.all;
var opera=info.match(/Opera/);
var browsers=intern||nous||opera;
function randommaker(range) {
  rand=Math.floor(range*Math.random());
  return rand;
}
function initsnow() {
  if (intern || opera) {
    marginbottom=document.body.clientHeight;
    marginright=document.body.clientWidth;
  }
  else if (nous) {
    marginbottom=window.innerHeight;
    marginright=window.innerWidth;
  }
  var snowsizerange=snowmaxsize-snowminsize;
  for (i=0;i<=snowmax;i++) {
    corwards[i]=0;
    lftrght[i]=Math.random()*15;
    map[i]=0.03+Math.random()/10;
    snow[i]=document.getElementById("s"+i);
    snow[i].style.fontFamily=snowfont[randommaker(snowfont/length)];
    snow[i].size=randommaker(snowsizerange)+snowminsize;
    snow[i].style.fontSize=snow[i].size+"px";
    snow[i].style.color=snowcolor[randommaker(snowcolor.length)];
    snow[i].sink=sinkspeed*snow[i].size/5;
    snow[i].posx=randommaker(marginright-snow[i].size)
    snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size);
    snow[i].style.left=snow[i].posx+"px";
    snow[i].style.top=snow[i].posy+"px";
  }
  movesnow();
}
function movesnow() {
  for(i=0;i<=snowmax;i++) {
    corwards[i]+=map[i];
    snow[i].posy+=snow[i].sink;
    snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(corwards[i])+"px";
    snow[i].style.top=snow[i].posy+"px";
    if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])) {
      snow[i].posx=randommaker(marginright-snow[i].size)
      snow[i].posy=0;
    }
  }
  var timer=setTimeout("movesnow()",50);
}
for (i=0;i<=snowmax;i++) {
  document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"px;'>"+snowflake+"</span>");
}
if (browsers) {
  window.onload=initsnow;
}
function change(){
  sinkspeed = document.getElementById("input").value;
  initsnow();
}
document.getElementById('name').oninput = function (){
  if(document.getElementById('name').value == ''){
    first.style.display = "none";
  }
}
document.getElementById('surname').oninput = function (){
  if(document.getElementById('surname').value == ''){
    second.style.display = "none";
  }
}
document.getElementById('pass').oninput = function (){
  if(document.getElementById('pass').value == ''){
    fourth.style.display = "none";
  }
}
let login = document.getElementById('login').value;
function validateEmail(login) {
  var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern .test(login);
}
function Element(){
  let name = document.getElementById('name').value;
  let surname = document.getElementById('surname').value;
  let login = document.getElementById('login').value;
  let password = document.getElementById('pass').value;
  let first = document.getElementById('first');

  name = name.trim();
  surname = surname.trim();
  login = login.trim();
  password = password.trim();

  if (validateEmail(login)) {
    third.setAttribute("src", "images/success.jpg")
    third.style.display = "block";
    third.classList.add("true");
  } else {
    third.setAttribute("src", "images/fail.png")
    third.style.display = "block"
    third.classList.add("false");
    third.classList.remove("true");
  }

  if(first.classList.contains("true") && second.classList.contains("true") && third.classList.contains("true") && fourth.classList.contains("true")){
    window.open("http://lib.nure.ua/", "_blank")
  }

  for(let i = 0; i < name.length;i++){
    if(isNaN(name[i])){
      first.setAttribute("src", "images/success.jpg")
      first.style.display = "block";
      first.classList.add("true");
    }
  }

  for(let i = 0; i < surname.length;i++){
    if(isNaN(surname[i])){
      second.setAttribute("src", "images/success.jpg")
      second.style.display = "block";
      second.classList.add("true");
    }
  }
  for(let i = 0; i < password.length;i++){
    if(password[i].match(/[!a-zA-Zа-яА-Я0-9]+$/g)){
      fourth.setAttribute("src", "images/success.jpg")
      fourth.style.display = "block";
      fourth.classList.add("true");
    }
    else{
      fourth.setAttribute("src", "images/fail.png")
      fourth.style.display = "block";
      fourth.classList.add("false");
      fourth.classList.remove("true");
    }
  }
}
