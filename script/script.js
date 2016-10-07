//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});

function left_carusel(carusel){
   var block_width = $(carusel).find('.product').outerWidth();
   $(carusel).find(".products-carousel .product").eq(-1).clone().prependTo($(carusel).find(".products-carousel")); 
   $(carusel).find(".products-carousel").css({"left":"-"+block_width+"px"});
   $(carusel).find(".products-carousel .product").eq(-1).remove();    
   $(carusel).find(".products-carousel").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.product').outerWidth();
   $(carusel).find(".products-carousel").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".products-carousel .product").eq(0).clone().appendTo($(carusel).find(".products-carousel")); 
      $(carusel).find(".products-carousel .product").eq(0).remove(); 
      $(carusel).find(".products-carousel").css({"left":"0px"}); 
   }); 
}
$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
	auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})

