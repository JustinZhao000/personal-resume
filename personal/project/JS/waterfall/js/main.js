window.onload=function(){
  waterfall("main","box");
  var dataInt={"data":[{"src":"0.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"}]};
	window.onscroll=function(){
    if(checkScrollSlide){
      var oParent=document.getElementById("main");
      for(var i=0;i<dataInt.data.length;i++){
        var oBox=document.createElement("div");
        oBox.className="box";
        oParent.appendChild(oBox);
        var oPic=document.createElement("div");
        oPic.className="pic";
        oBox.appendChild(oPic);
        var oImg=document.createElement("img");
        oImg.src="images/"+dataInt.data[i].src;
        oPic.appendChild(oImg);
        waterfall("main","box");
      }
    }; 
  }
}

function waterfall(parent,box){
    //得到main下所有class为box的dom元素
      var oParent=document.getElementById(parent);
      var oBoxes=getByClass(oParent,box);
      
      // 计算整个页面的页数（页面宽/box宽度）
      var oBoxW=oBoxes[0].offsetWidth;
      var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
      //设置main的宽度
      oParent.style.cssText="width:"+oBoxW*cols+"px;margin:0 auto;";
      var hArr=[];
      for(var i=0;i<oBoxes.length;i++){
        if(i<cols){
          hArr.push(oBoxes[i].offsetHeight);                 
        }else{
          var minH=Math.min.apply(null,hArr);
          var index=getMinIndex(hArr,minH);
          oBoxes[i].style.position="absolute";
          oBoxes[i].style.top=minH+"px";
          oBoxes[i].style.left=index*oBoxW+"px";
          hArr[index]+=oBoxes[i].offsetHeight;
           
        }
      }
}
      //根据类名得到元素
      function getByClass(oParent,clsName){
        var boxes=new Array();
        var oElements=oParent.getElementsByTagName("*");
        for(var i=0;i<oElements.length;i++){
          if(oElements[i].className==clsName){
                boxes.push(oElements[i]);
          }
        }
        return boxes;
      }
      
      //获得最小值的索引
      function getMinIndex(arr,val){
         for(var i=0;i<arr.length;i++){
          if(arr[i]==val){
            return i;
            console.log(i);
          }
         }
      }
    function checkScrollSlide(){
      var oParent=document.getElementById("main");
      var oBoxes=oParent.getByClass("box");
      var lastBoxH=oBoxes[oBoxes.length-1].offsetTop+Math.floor(oBoxes[oBoxes.length-1].offsetHeight/2);
      var srollTop=document.body.scrollTop||document.documentElement.scrollTop;//混杂模式和标准模式
      var height=document.body.clientHeight||document.documentElement.clientHeight;
      return(lastBoxH>scrollTop+height?true:false)
    }  