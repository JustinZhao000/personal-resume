/**
 * Created by Administrator on 2016/8/7.
 */
//鼠标移入移出事件
$('#toolbar .drop').hover(function(){
    $('#toolbar .drop .dropmenu').fadeIn();
    $('#toolbar .drop>a').addClass('active');
},function(){
    $('#toolbar .drop .dropmenu').fadeOut();
    $('#toolbar .drop>a').removeClass('active');
});
//主导航的点击事件
$('.main_nav_left').on('click','a',function(e){
    e.preventDefault();
    $(this).addClass('active').parent().siblings().children('.active').removeClass('active');
});
//二级分导航鼠标移入移出事件绑定
$('#section>ul>li:not([class^="buttom"])').hover(function(){
    $(this).children(':last-child').fadeIn();
},function(){
    $(this).children(':last-child').fadeOut();
});
//网页加载时，对商品进行数据库的查询
  function selection(a,data){//每一次加载8个商品
	   for(var i=(a*8),html='';i<=((a+1)*8-1);i++){
            html+=`
                <dl>
                    <dt><a href="#"><img src="${data[i].product_img}" alt=""/></a></dt>
                    <dd>
                        <p>[包邮] ${data[i].product_name}</p>
                        <span>已售4827件</span>
                    </dd>
                    <dd>
                        <p><b>￥<i>${data[i].zhe_price}</i></b><s>￥${data[i].price}</s></p>
                        <span>特卖商城</span>
                    </dd>
                </dl>
             `
        }
         $('.goods_list').html(html);
  
    }



$(function(){
    $.getJSON('data/all_products.php',function(data){
          selection(0,data);//显示首页栏
		   /*for(var i=(a*8),html='';i<=((a+1)*8-1);i++){
            html+=`
                <dl>
                    <dt><a href="#"><img src="${data[i].product_img}" alt=""/></a></dt>
                    <dd>
                        <p>[包邮] ${data[i].product_name}</p>
                        <span>已售4827件</span>
                    </dd>
                    <dd>
                        <p><b>￥<i>${data[i].zhe_price}</i></b><s>￥${data[i].price}</s></p>
                        <span>特卖商城</span>
                    </dd>
                </dl>
             `
            }
               $('.goods_list').html(html);*/


		$(".goods_pager li a").click(function(e){
			  e.preventDefault();
			  var a=$(".goods_pager li a").index(this);
			  selection(a,data);
			/*for(var i=(a*8),html='';i<=((a+1)*8-1);i++){
            html+=`
                <dl>
                    <dt><a href="#"><img src="${data[i].product_img}" alt=""/></a></dt>
                    <dd>
                        <p>[包邮] ${data[i].product_name}</p>
                        <span>已售4827件</span>
                    </dd>
                    <dd>
                        <p><b>￥<i>${data[i].zhe_price}</i></b><s>￥${data[i].price}</s></p>
                        <span>特卖商城</span>
                    </dd>
                </dl>
             `
            }
               $('.goods_list').html(html);*/
		})
		
		//上一页标签效果(previous)
		$('.goods_pager li button.previous').click(function(){
		  var index= $('.goods_pager li a').index($('.goods_pager li a.pager_active'));
		  if(index!=0){//判断不是第一页
			  selection(index-1,data);
			  $('.goods_pager li a.pager_active').removeClass('pager_active');
			  $($('.goods_pager li a')[index-1]).addClass('pager_active');
		  }
		});

        

		//下一页标签效果(next)
		$('.goods_pager li button.next').click(function(){
		  var index = $('.goods_pager li a').index($('.goods_pager li a.pager_active'));
		  if(index!= (Math.ceil( data.length/8)-1) ){//判断不是第一页
			  selection(index+1,data);
			  $('.goods_pager li a.pager_active').removeClass('pager_active');
			  $($('.goods_pager li a')[index+1]).addClass('pager_active');
		  }
		});

		
		

        
    });
});
//分页效果
$(function(){
    $('.goods_pager').on('click','a',function(e){
        e.preventDefault();
        $(this).addClass('pager_active').parent().siblings().children('.pager_active').removeClass('pager_active');
        var curPage=$('.pager_active').html();
    });
});
function getPage(curPage){
    $.getJSON('data/goods_pager.php',{curPage:curPage},function(data){
        console.log(11111111111);
        console.log(this);
    });
}
getPage(1);