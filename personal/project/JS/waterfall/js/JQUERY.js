$(window).on("load",function(){
     waterfall();
     var dataInt={"data":[{"src":"35.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"}]};
     console.log(checkScrollSlide());
     $(window).on("scroll",function(){

     	if(checkScrollSlide()){
           $.each(dataInt.data,function(key,value){
             var $oBox=$('<div>').addClass('box').appendTo($('#main'));
             var $oPic=$('<div>').addClass('pic').appendTo($oBox);
             $('<img>').attr('src','./images/'+$(value).attr('src')).appendTo($oPic);
             console.log(key);
             console.log(value);
           }
           	);
           waterfall();
     	}     	
     });
});

function waterfall(){
	var $boxs=$("#main>div");
	var w=$boxs.eq(0).outerWidth();//width()获取的是div的宽度，而outerWidth()会包含padding和border的宽度
	var cols=Math.floor($(window).width()/w);
	$("#main").width(w*cols).css('margin','0 auto');
	var hArr=[];
	$boxs.each(function(index,value){
    var h=$boxs.eq(index).outerHeight();
         if(index<cols){
         hArr[index]=h;
     }else{
      var minH=Math.min.apply(null,hArr);
      var minIndex=$.inArray(minH,hArr);
      $(value).css({
      	'position':'absolute',
         'top':minH+'px',
         'left':minIndex*w+'px'
      })
      hArr[minIndex]+=h;
     }
	})
	
}
function checkScrollSlide(){
	var $lastBox=$('#main>div').last();
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop=$(window).scrollTop();
	var documentH=$(window).height();
	return (lastBoxDis<scrollTop+documentH)?true:false;

}