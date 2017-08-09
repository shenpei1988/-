function project(){
   var p=document.querySelector('p');
   p.onclick=function(){
       alert('研发就要结束了')
   }
   var div=document.querySelector('div')
   window.onkeypress=function(){
       div.style.backgroundColor='red';
   }
   
}