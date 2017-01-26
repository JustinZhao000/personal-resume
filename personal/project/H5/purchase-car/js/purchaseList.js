function $(id){
    return document.getElementById(id);
  }
function initial(){
    show();
    $("clear").addEventListener("click",clear,false);
}

function show(){
var	sum=0,n=1;
for(var i=0;i<localStorage.length;i++){
var key=localStorage.key(i);
var ele=localStorage.getItem(key);
 
sum+=parseInt(ele);

var tr=document.createElement("tr");

var td1=document.createElement("td");
td1.innerHTML=key;

var td2=document.createElement("td");
td2.innerHTML=ele;

var td3=document.createElement("td");
tQty=1;
td3.innerHTML=tQty;
td3.className="qty";

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

$("tBody").insertBefore(tr,$("total"));
}


//总的金额
$("total_sum").innerHTML=sum;

//总的数量
var qtyItem=document.querySelectorAll(".qty");
var tQty=0;
for(var i=0;i<qtyItem.length;i++){
     tQty+=parseInt(qtyItem[i].innerHTML);
}
$("total_qty").innerHTML=tQty;

}

function clear(){
	localStorage.clear();
	show();
}

 window.addEventListener("load",initial,false);
