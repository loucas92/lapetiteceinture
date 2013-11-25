var historique={

		defaults:{},
		init:function(){

			$('.gallery').each(function(){

				var element = $(this);
				setInterval(function()
				{
					var nextfocus=element.find('.focus').removeClass("focus").next('.galImg');

					if(nextfocus.size()<=0)
					{
						nextfocus=element.find('.galImg:first');
					}

					nextfocus.addClass("focus");
					var image = nextfocus.attr("rel");

					element.find('.feature').fadeOut('slow',function()
					{
						element.find('.feature').html('<img src="' + image + '"/>');
						element.find('.feature').fadeIn('slow');
					});
				},5000);

			});

			this.carrousel=new carrousel();
			this.carrousel.init({
				next_btn:$('.next'),
				prev_btn:$('.prev'),
				cont:$('.histo')
			});


			$('.friseAll a').each(function(){
				$(this).click(function(){
					$(this).parents('.friseAll').find('.focus').removeClass('focus');
					$(this).addClass('focus');
					historique.carrousel.setFocus($('.' + $(this).data('elem')));
				});
			});
		}


}