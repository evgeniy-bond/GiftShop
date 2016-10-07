$(document).on('click', ".carousel-button-right1",function(){ 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
});
$(document).on('click',".carousel-button-left2",function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});

function left_carusel(carusel){
   var block_width = $(carusel).find('.product').outerWidth(true);
   $(carusel).find(".products-carousel .product").eq(-1).clone().prependTo($(carusel).find(".products-carousel")); 
   $(carusel).find(".products-carousel").css({"left":"-"+block_width+"px"});
   $(carusel).find(".products-carousel .product").eq(-1).remove();    
   $(carusel).find(".products-carousel").animate({left: "0px"}, 500); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.product').outerWidth(true);
   $(carusel).find(".products-carousel").animate({left: "-"+ block_width +"px"}, 500, function(){
	  $(carusel).find(".products-carousel .product").eq(0).clone().appendTo($(carusel).find(".products-carousel")); 
      $(carusel).find(".products-carousel .product").eq(0).remove(); 
      $(carusel).find(".products-carousel").css({"left":"0px"}); 
   }); 
}
$(function() {
	auto_right('.carousel:first');
})


function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}

$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})

$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})






//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right2",function(){ 
	var carusela = $(this).parents('.carousela');
	right_carusela(carusela);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left2",function(){ 
	var carusela = $(this).parents('.carousela');
	left_carusela(carusela);
	return false;
});

function left_carusela(carusela){
   var block_width = $(carusela).find('.featured_products_product').outerWidth(true);
   $(carusela).find(".featured_products-carousel .featured_products_product").eq(-1).clone().prependTo($(carusela).find(".featured_products-carousel")); 
   $(carusela).find(".featured_products-carousel").css({"left":"-"+block_width+"px"});
   $(carusela).find(".featured_products-carousel .featured_products_product").eq(-1).remove();    
   $(carusela).find(".featured_products-carousel").animate({left: "0px"}, 400); 
   
}
function right_carusela(carusela){
   var block_width = $(carusela).find('.featured_products_product').outerWidth(true);
   $(carusela).find(".featured_products-carousel").animate({left: "-"+ block_width +"px"}, 400, function(){
	  $(carusela).find(".featured_products-carousel .featured_products_product").eq(0).clone().appendTo($(carusela).find(".featured_products-carousel")); 
      $(carusela).find(".featured_products-carousel .featured_products_product").eq(0).remove(); 
      $(carusela).find(".featured_products-carousel").css({"left":"0px"}); 
   }); 
}
$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
	auto_righta('.carousela:first');
})

// Автоматическая прокрутка
function auto_righta(carusela){
	setInterval(function(){
		if (!$(carusela).is('.hover'))
			right_carusela(carusela);
	}, 4000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousela', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousela', function(){$(this).removeClass('hover')})


