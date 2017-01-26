function $(id){
    return document.getElementById(id);
  }
  
   function initial(){
    m=0;
    srcUl=document.querySelectorAll(".godItem");

    $("godCar").addEventListener("dragenter",tar_dragenter,false);
    $("godCar").addEventListener("dragover",tar_dragover,false);
    $("godCar").addEventListener("drop",tar_drop,false);
    $("godCar").addEventListener("dragleave",tar_dragleave,false);

    }
   
    function tar_dragenter(e){
      e.preventDefault();
    }
    function tar_dragover(e){
      e.preventDefault();
    }

    function tar_drop(e){
         
     /* var goodsList=document.getElementsByClassName("goodsItem");
      for(var i=0;i<goodsList.length;i++){
      var keys=document.getElementsByClassName("godInfo");
      localStorage.setItem(key,value);
       }*/
     
               /* for(num=0;num<localStorage.length;num++){

                if(key0!=localStorage.key(num).value){
                   localStorage.setItem(key0,value);
                   $("dnum").innerHTML=m;              
                }else{                  
                   --m;
                    $("dnum").innerHTML=m;
                }               
              }
               $("dnum").innerHTML=m;
              }       
             }*/   
      for(var i=0;i<srcUl.length;i++){
            var src0=srcUl[i];           
                bindLi(src0,i);            
                } 

      function bindLi(li,num){
              li.ondragend=function(){
              //
              var m=0;
              var key=document.querySelectorAll(".godInfo")[num].innerHTML;
              console.log(key);
              var value=document.querySelectorAll(".godPrice")[num].innerHTML;
              localStorage.setItem(key,value);
              for(num=0;num<localStorage.length;num++){

                if(key!=localStorage.key(num).value){                  
                   ++m;                               
                }else{                  
                    --m;                  
                } 
                $("dnum").innerHTML=m;                
              }
              
            }
          }
      e.preventDefault();
     }

    function tar_dragleave(e){
      e.preventDefault();
    }
  
    
   window.addEventListener("load",initial,false);
  