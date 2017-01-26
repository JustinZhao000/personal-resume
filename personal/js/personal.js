window.onload=function(){
    var container=document.getElementById("container");
    var list=document.getElementById("list");
    var button=document.getElementById("button").getElementsByTagName("span");
    var pre=document.getElementById("pre");
    var next=document.getElementById("next");
    var index=1;
    var animated=false;
    var interval=3000;
    

    function animation(offset){
      if(offset==0){
        return;
      }
      animated=true;
      var newLeft=parseInt(list.style.left)+offset;     
      // debugger;
      var time=300;//位移总时间
      var inteval=10;//位移间隔时间
      var speed=offset/(time/inteval);//
      var timer;

      var go=function(){
      if((speed>0&&parseInt(list.style.left)<newLeft)||(speed<0&&parseInt(list.style.left)>newLeft)){
        list.style.left=parseInt(list.style.left)+speed+"px";
          setTimeout(go,inteval);         
      }else{
        animated=false;
        list.style.left=newLeft+'px';
        if(newLeft>-1100){
        list.style.left=-5500+"px";
      }
      if(newLeft<-5500){
        list.style.left=-1100+"px";
      }
      }
    }
    go(); 
  }
  function play(){
    timer=setTimeout(function(){  
      next.onclick();
      play();
    },interval);
  }
  function stop(){
    clearTimeout(timer);
  }
    next.onclick=function(){
      if(animated){
        return;
      }
         
      
      if(index==5){
        index=1;
      }else{
        index+=1;   
      }
      showButton();
      if(!animated){
      animation(-1100);
    }
    }
    pre.onclick=function(){    
      index-=1;     
      if(index==0){
        index=4;
      }
      showButton();
      if(!animated){
      animation(1100);
    }
   }
    function showButton(){
      for(var i=0;i<button.length;i++){
        if(button[i].className=="on"){
          button[i].className="";
          break;//退出循环
        }
      }
      button[index-1].className="on";
    }
   // 点击按钮切换效果
   for(var i=0;i<button.length;i++){
    button[i].onclick=function(){
      if(this.className=="on"){
        return;
      }
     var myIndex=parseInt(this.getAttribute('index'));
     var offset=-1100*(myIndex-index);
     animation(offset);
     index=myIndex;
     showButton();
   }
 }
 container.onmouseover=stop;
 container.onmouseout=play;
 play();
 }