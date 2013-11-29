var carrousel=function(){

	this.defaults={
		next_btn:null,
		prev_btn:null,
		cont:null
	};
	this.init =function(options){
		this.params=$.extend(this.defaults,options);
		this.currentFocus = null;
		this._updateContent();
		 if(!this.currentFocus){
		   this.currentFocus = this.params.cont.find('.item:first');
		   this.setFocus(this.currentFocus, false);
		 }

		  var self = this;

		  this.params.next_btn.click(function(){
		   self.next();
		  });
		  
		  this.params.prev_btn.click(function(){
		   self.prev();
		  });
	};

	this._updateContent= function(){
	 var width = 0;
	 this.params.cont.find('.item').each(function(){
	  width += $(this).outerWidth(true);
	 });
	 
	 this.params.cont.find('.carousel-wmax').width(width);
	};
	
	this.setFocus=function(itm, dnext){
	 var off = itm.position();
	 
	 this.currentFocus = itm;
	 
	 if(off.left == 0)
	  return; 
	 if(this.params.cont.scrollLeft() + this.params.cont.width() + off.left > this.params.cont.find('.carousel-wmax').width() && dnext != null){
	  if(dnext)  
	   return this.next();
	  else
	   return this.prev();
	 }
	 
	 this.params.cont.animate({'scrollLeft': '+=' + off.left + 'px'}, 200);
	};
	
	this.next=function(){
	 var next = this.currentFocus.next('.item');
	 if(next.size() <= 0)
	  next = this.params.cont.find('.item:first');
	 this.setFocus(next, true);
	};
	
	this.prev=function(){
	 var prev = this.currentFocus.prev('.item');
	 if(prev.size() <= 0)
	  prev = this.params.cont.find('.item:last'); 
	 this.setFocus(prev, false);
	};
}