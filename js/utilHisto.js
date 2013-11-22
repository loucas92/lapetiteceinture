var newCarousel=null;
Carousel = function(cont, next, prev){
 this.next_btn = next;
 this.prev_btn = prev;
 this.cont = cont; 
 this.currentFocus = null;
 
 this.__construct = function(){
  this._updateContent();
  if(!this.currentFocus){
   this.currentFocus = this.cont.find('.item:first');
   this.setFocus(this.currentFocus, false);
  }
  
  var self = this;

  this.next_btn.click(function(){
   self.next();
  });
  
  this.prev_btn.click(function(){
   self.prev();
  });
 }
 
 this._updateContent = function(){
  var width = 0;
  this.cont.find('.item').each(function(){
   width += $(this).outerWidth(true);
  });
  
  this.cont.find('.carousel-wmax').width(width);
 }
 
 this.setFocus = function(itm, dnext){
  var off = itm.position();
  
  this.currentFocus = itm;
  
  if(off.left == 0)
   return; 
  if(this.cont.scrollLeft() + this.cont.width() + off.left > this.cont.find('.carousel-wmax').width() && dnext != null){
   if(dnext)  
    return this.next();
   else
    return this.prev();
  }
  
  this.cont.animate({'scrollLeft': '+=' + off.left + 'px'}, 200);
 }
 
 this.next = function(){
  var next = this.currentFocus.next('.item');
  if(next.size() <= 0)
   next = this.cont.find('.item:first');
  this.setFocus(next, true);
 }
 
 this.prev = function(){
  var prev = this.currentFocus.prev('.item');
  if(prev.size() <= 0)
   prev = this.cont.find('.item:last'); 
  this.setFocus(prev, false);
 }
 
 this.__construct();
}

$(document).ready(function() {

	$('.gallery').each(function(){
		var element = $(this);
		setInterval(function(){
			var nextfocus=element.find('.focus').removeClass("focus").next('.galImg');
					
					if(nextfocus.size()<=0)
					{
						nextfocus=element.find('.galImg:first');
					}

					nextfocus.addClass("focus");
					var image = nextfocus.attr("rel");

					element.find('.feature').fadeOut('slow',function(){

						element.find('.feature').html('<img src="' + image + '"/>');
						element.find('.feature').fadeIn('slow');	

					});
		},5000);

	});
	newCarousel=new Carousel($('.histo'),$('.next'),$('.prev'));
  $('.friseAll a').each(function(){
            $(this).click(function(){
            $(this).parents('.friseAll').find('.focus').removeClass('focus');
            $(this).addClass('focus');
            newCarousel.setFocus($('.' + $(this).data('elem')));
            });
  });

});