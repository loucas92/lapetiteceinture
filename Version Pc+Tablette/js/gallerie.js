var gallerie = new Instafeed({
        get: 'tagged',
        tagName: 'petiteceinture',
        clientId: '9f6b0518b3e24362983cf7271702fd37',
       	resolution: 'thumbnail',
        sortBy: 'random',
        limit: '60',
        after: function () {
		    var images = $("#instafeed").find('a');
		    $.each(images, function(index, image) {
		      var delay = (index * 75) + 'ms';
		      $(image).css('-webkit-animation-delay', delay);
		      $(image).css('-moz-animation-delay', delay);
		      $(image).css('-ms-animation-delay', delay);
		      $(image).css('-o-animation-delay', delay);
		      $(image).css('animation-delay', delay);
		      $(image).addClass('animated flipInX');
		    });
			$(".scroll_photo").mCustomScrollbar({
                    verticalScroll:true, // barre verticale
                    theme:"light",
                    scrollInertia: 13,
                    scrollButtons:{
                            enable: false

                    }
                });
		},
        template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'
        
    });