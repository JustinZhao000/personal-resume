
/*function show(){
    document.getElementById("triggerId").onmouseover=function(){
    	document.getElementById(targetId).style.display="block";
    }
    document.getElementById("triggerId").onmouseout=function(){
    	document.getElementById(targetId).style.display="none";
    }
}
show_hide(customer_service,customer_dropdown);*/
function showHide(hiddenDiv,status){
   document.getElementById(hiddenDiv).style.display=status;
   this.background="white";
}

function onmouseShow(showId){
        
    	document.getElementById(showId).style.display="block";
    
}
