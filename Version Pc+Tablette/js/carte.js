var carte={

defaults : { 
				target:'map_canvas'					
       		},
    
    init : function(options){
	this.params=$.extend(this.defaults,options);
    this.indice = 0;
	
	this.villes = [
    ['Auteuil-Boulogne', 48.8483, 2.2599],
	['Passy-la-Muette', 48.8581, 2.2724],
	['Avenue Henri-Martin', 48.8643, 2.2721],
	['Avenue du Bois-de-Boulogne', 48.8706, 2.2753],
	['Neuilly-Maillot', 48.8778, 2.2841],
	['Courcelles-Levallois', 48.8854, 2.298],
	['Batignolles', 48.8878, 2.3141],
	['Avenue de Saint-Ouen', 48.8957, 2.3285],
	['Boulevard Ornano', 48.8976, 2.3441],
    ['Est-Ceinture', 48.8965, 2.3735],
	['Pont de Flandre', 48.8954, 2.3815],
	['Charonne', 48.8594, 2.403],
    ['Rue d\'Avron', 48.8533, 2.4075],
	['Avenue de Vincennes', 48.8479, 2.4096],
	['Orléans-Ceinture', 48.8255, 2.3799],
	['Gobelins', 48.824, 2.3667],
	['Montrouge-Ceinture', 48.8246, 2.3255],
	['Ouest-Ceinture', 48.8292, 2.3062],
	['Vaugirard-Ceinture', 48.8333, 2.2904]
	];

	this.imgStation = [
	['images/Photos_des_gares/1/auteuil.jpg'],
	['images/Photos_des_gares/2/passy.jpg'],
	['images/Photos_des_gares/3/Avenue-Henri-Martin.jpg'],
	['images/Photos_des_gares/4/Avenue-Bois-Boulogne_1938_Illustration_1.jpg'],
	['images/Photos_des_gares/5/Neuilly-Porte-Maillot2.jpg'],
	['images/Photos_des_gares/6/Gare_de_Courcelles-Levallois.jpg'],
	['images/Photos_des_gares/7/Tunnel-Batignolles-1895.jpg'],
	['images/Photos_des_gares/8/Avenue-Saint-Ouen3.jpg'],
	['images/Photos_des_gares/9/Ancienne_Gare_du_Boulevard_Ornano.JPG'],
    ['images/Photos_des_gares/10/Paris_ceinture_au_dessous_voies_gare_de_est.jpg'],
	['images/Photos_des_gares/11/gare_flandres_1.jpg'],
	['images/Photos_des_gares/12/gare_menilmontant.jpg'],
	['images/Photos_des_gares/13/800px-Charonne.JPG'],
	['images/Photos_des_gares/14/GareAvron.jpg'],
	['images/Photos_des_gares/15/Avenue_de_Vincennes.jpg'],
	['images/Photos_des_gares/16/bvouest06.jpg'],
	['images/Photos_des_gares/17/Les_Gobelins_Charbon1.jpg'],
	['images/Photos_des_gares/18/montrouge_2.jpg'],
	['images/Photos_des_gares/19/800px-Ouest_Ceinture.JPG'],
	['images/Photos_des_gares/20/Vaugirard3.jpg']
	];

	this.txtStation = [
	['La gare d\'Auteuil-Boulogne est ouverte aux voyageurs le 2 mai 1854 comme terminus de la ligne d\'Auteuil, la reliant à la gare Saint-Lazare.Elle reçoit les trains de la Petite-Ceinture à partir du 25 février 1867, jusqu\'au 20 décembre 1915.- En 2007, les voies désaffectées au nord constituant la Petite Ceinture du 16e sont ouvertes aux piétons.- Les quais de la gare furent détruits fin 2009 pour faire place à un projet immobilier mais ce dernier est bloqué.- Bâtiment actuellement occupé par un restaurant = « tendance »'],
	['La ligne ferme le 6 janvier 1985, lors des travaux de construction du RER C.- Cette station faisait partie de la ligne des Batignolles à Auteuil, dite « ligne d’Auteuil » Comme ses consœurs de la ligne d’Auteuil, elle vit se juxtaposer au trafic habituel des trains circulaires de la Petite Ceinture, à partir du 25 février 1867, date de la mise en service de la Petite Ceinture Rive Gauche.- Le 2 janvier 1925, la traction vapeur laisse la place à des rames automotrices électriques qui circuleront jusqu’au 6 janvier 1985, afin de laisser la place aux travaux de construction du RER C.- Bâtiment actuellement occupé par un restaurant'],
	[':- elle fut construite à l’occasion de l’Exposition Universelle de 1878.- L’architecture de cette gare est typique de la Compagnie des Chemins de Fer de l’Ouest pour les gares à cheval sur les voies.- Aujourd’hui, cette gare est desservie par la ligne C du RER.- Depuis 1931, un restaurant, Le Flandrin, occupe une partie de la gare.'],
	['- Cette gare est située à proximité de la porte Dauphine au débouché de la très prestigieuse avenue du Bois de Boulogne (l’actuelle avenue Foch), qui relie cette porte à la place de l’Étoile. Comme pour la gare Neuilly-Porte Maillot, le bâtiment voyageurs de cette gare, initialement identique à celui de la gare de l’Avenue Henri Martin, fut reconstruit dans un style prestigieux pour l’Exposition Universelle de 1900 par l’architecte Juste Lisch, également auteur des gares Saint-Lazare et des Invalides.- La Gare des Souverains :Vu son emplacement, cette gare fut utilisée pour accueillir des souverains et chefs d’État étrangers. Elle reçut ainsi le surnom de « la Gare des Souverains ». Elle joua ce rôle jusqu’en 1956, avec la visite à Paris du Maréchal Tito.-  Actuelle gare de l\'avenue Foch du RER C'],
	['- Cette gare est située à proximité de la porte Maillot, au débouché de la prestigieuse Avenue de la Grande Armée, qui relie cette porte à la place de l’Étoile. Comme pour la gare de l’Avenue du Bois de Boulogne, le bâtiment voyageurs de cette gare fut reconstruit dans un style prestigieux pour l’Exposition Universelle de 1900 par l’architecte Juste Lisch, également auteur des gares Saint-Lazare et des Invalides.'],
	['La grande crue de la Seine de 1910 : Aussi surprenant que cela puisse paraître, puisque la place Péreire est éloignée de la Seine, la tranchée du boulevard Péreire fut envahie par l’eau pendant la crue de 1910. D’ailleurs, ce fut la seule section de la Petite Ceinture à être atteinte par cette inondation. Sans doute l’eau de la Seine est parvenue à se faufiler jusque-là par des réseaux souterrains.'],
	['Située au carrefour de la rue de Rome, du boulevard Péreire et de la rue Cardinet, cette gare fut reconstruite dans un style « Art Déco » dans les années Vingt, suite à la suppression du tunnel des Batignolles. - Le 2 janvier 1925, la traction vapeur laisse la place à des rames automotrices électriques qui circuleront jusqu’au 6 janvier 1985, afin de laisser la place aux travaux de construction du RER C.- Elle est aujourd’hui encore en service, sous le nom de « Pont-Cardinet ».'],
	['Cette station fut mise en service le 16 novembre 1863, puis reconstruite pour le 16 mai 1889 lors de la suppression des passages à niveau sur la Petite Ceinture Rive Droite. Elle était située à proximité du raccordement entre la Petite Ceinture et la ligne des Docks de Saint-Ouen.- Le bâtiment voyageurs possède deux caractéristiques remarquables : 1-	Un quai qui supporte au moyen d’une colonnade en fonte le trottoir de la rue   Leibnitz. 2-  Un bâtiment-voyageurs à cheval sur les voies- Après la fermeture du service de voyageurs le dimanche 22 juillet 1934, le bâtiment servit encore pour le service de messageries. Puis, fin 1938, il fut transformé en un cinéma nommé le "Lumière". Ce cinéma fonctionna jusqu’à la fin des années Cinquante. - Depuis, le bâtiment est occupé par des commerces.'],
	['Cette station se trouve porte de Clignancourt, dans le 18e arrondissement, à deux pas du marché aux Puces de Saint-Ouen. - Ce bâtiment existe toujours. - Son architecture est caractéristique des gares situés à cheval sur les voies sur les sections Nord et Est de la Petite Ceinture. La même architecture fut utilisée pour les stations de porte de La Chapelle-Saint Denis (aujourd’hui démolie) et Charonne (préservée).'],
	['Ouverte d’abord de façon provisoire pour l’Exposition Universelles de 1867, elle fut réouverte pour celle de 1878 afin d’assurer les correspondances entre les trains de la Petite Ceinture desservant la gare du Champ-de-Mars avec ceux de la gare de l’Est. Puis, une fois l’Exposition terminée, elle resta ouverte.'],
	['Cette station fut ouverte le 26 avril 1869. Situé dans un quartier industriel déjà très urbanisé, elle fut établie en hauteur, comme la Petite ceinture à cet endroit, sur une structure porteuse en maçonnerie.- Comme le reste de la Petite Ceinture, la gare est fermée au trafic voyageur depuis le 1er avril 1934. Le bâtiment voyageur est actuellement utilisé comme habitation.'],
	['C\'est l’actuelle salle de concert «  La Flèche d’or »- Cette station fut ouverte le 14 juillet 1862 afin de permettre notamment la circulation de trains ouvriers pour desservir les usines de ces quartiers en pleine phase d’industrialisation et d’urbanisation. Les trains ouvriers étaient des trains circulant uniquement le matin et le soir pour permettre aux ouvriers d’aller travailler et de rentrer chez eux. À ces trains était associé un tarif préférentiel.- Avant de devenir un café-concert-restaurant, le bâtiment voyageurs fut utilisé après la fin du service voyageurs, comme beaucoup d’anciennes stations de la Petite Ceinture, comme bureau de messageries.'],
	['La gare de la rue d\'Avron ne figure pas dans les stations mises en service sur la Petite Ceinture dans les années 1850-1860. Elle n\'est ouverte aux voyageurs que le 15 mai 1895, après un ensemble de travaux visant à supprimer les passages à niveau de la ligne sur la rive droite de la Seine.- Les murs de la gare sont construits en moellons enduits de crépis. L’étage, situé au niveau des quais, partage le style architectural des gares de voyageurs de la Grande Ceinture construites à la fin du XIXe siècle. - Les édifices n\'ont pas été réutilisés. Si le bâtiment sur la rue a bénéficié d\'un ravalement, les équipements du quai sont couverts de graffitis. Sur les voies, un quai subsiste.'],
	['- Cette station, proche du Bois de Vincennes, fut ouverte le 26 avril 1869.- Le Président de la République de l\'époque, Sadi Carnot, visita les chantiers de suppression des passages à niveau sur la Petite Ceinture, le 14 décembre 1888, à hauteur de cette station.'],
	['- Renommée gare du boulevard Masséna après l\'arrêt des circulations sur la Petite Ceinture- Elle fut ouverte le 20 septembre 1840 lors de l\'ouverture de la première section de la ligne de Paris à Orléans, et fermée le 3 décembre 2000 lors de l\'ouverture de la gare de la Bibliothèque François-Mitterrand.-  Cependant, les quais sont maintenus en l`\'état, au cas où une réouverture le justifierait. La gare elle-même a été abondamment squattée et est, aujourd\'hui, en piteux état.- En 2009, la Ville de Paris a acheté la gare à la SNCF pour la convertir en un lieu dédié aux arts de la rue, du cirque et de la marionnette.'],
	['Ouverte en 1903 pour faire face au développement du trafic, notamment de charbon, dans les gares locales de marchandises de la Petite Ceinture, la gare des Gobelins fut desservie par le rail jusqu’en 1993. - Aujourd’hui, elle est toujours desservie...mais par camions et abritent des magasins de gros de produits asiatiques et le garage d’un loueur de voitures'],
	['- Cette station est située près de la porte d’Orléans, dans le 14e arrondissement.- Elle fut ouverte aux voyageurs de la Petite Ceinture entre le 25 février 1867 et le 22 juillet 1934.- Après la fermeture de la gare au service des voyageurs le 22 juillet 1934, un service de messageries subsista dans une partie du bâtiment.- La partie du bâtiment située le long de l’actuelle avenue du Général Leclerc fut rapidement occupée par un café nommé « Le Relais de Montrouge ».- Cette station fait l’objet depuis 2007 de la mobilisation du Conseil de Quartier Jean Moulin - Porte d’Orléans pour sa préservation et sa réhabilitation en lieu de vie de quartier.'],
	['- Ce bâtiment fut construit vers 1866.- Cette station est située près de la porte de Vanves et le long des voies de la gare Montparnasse, dans le 14e arrondissement. - Elle permettait les correspondances entre la Petite Ceinture et le réseau banlieue partant de la gare Montparnasse.- Le bâtiment existe toujours. Les voies et les quais sont couverts par une dalle en béton. - Son architecture, caractérisée par une façade en brique roses et des merlonsblancs, est typique des gares de la banlieue Ouest de Paris et de Normandie. '],
	['- La station Vaugirard-Ceinture fut mise en service le 25 février 1867, comme l’ensemble de la Petite Ceinture Rive Gauche. Le bâtiment voyageurs existe toujours.- Son architecture est identique à celle de la station Orléans-Ceinture. Elle est caractérisée par une façade en brique roses et des merlons blancs, typique des gares de la banlieue Ouest de Paris et de Normandie.- Cette station étant située près de la porte de Versailles, au début du XXe siècle, elle fut munie d’un couloir de correspondances avec la station de métro porte de Versailles.']
	 ];

	this.previousPosition = null;
	
	this.linesCoords = [
        new google.maps.LatLng( 48.8408, 2.2653),
        new google.maps.LatLng(48.8483, 2.2599),
        new google.maps.LatLng(48.8581, 2.2724),
        new google.maps.LatLng(48.8643, 2.2721),
        new google.maps.LatLng(48.8706, 2.2753),
        new google.maps.LatLng(48.8778, 2.2841),
        new google.maps.LatLng(48.8854, 2.298),
        new google.maps.LatLng(48.8862, 2.2998),
        new google.maps.LatLng(48.8878, 2.3141),
        new google.maps.LatLng(48.8925, 2.3124),
        new google.maps.LatLng(48.8957, 2.3285),
        new google.maps.LatLng(48.8976, 2.3441),
        new google.maps.LatLng(48.8982, 2.3554),
        new google.maps.LatLng(48.8965, 2.3735),
        new google.maps.LatLng(48.8954, 2.3815),
        new google.maps.LatLng(48.886, 2.385),
        new google.maps.LatLng(48.8703, 2.3882), 
		new google.maps.LatLng(48.886, 2.385),	  
        new google.maps.LatLng(48.8703, 2.3882),
        new google.maps.LatLng(48.8594, 2.403),
        new google.maps.LatLng(48.8498, 2.41),	
        new google.maps.LatLng(48.8533, 2.4075),	
        new google.maps.LatLng(48.8479, 2.4096),	
        new google.maps.LatLng(48.8404, 2.4078),	
        new google.maps.LatLng(48.834, 2.4009),
        new google.maps.LatLng(48.8294, 2.3896),	
        new google.maps.LatLng(48.8255, 2.3799),	
        new google.maps.LatLng(48.824, 2.3667),	
		new google.maps.LatLng(48.8219, 2.3588),	
        new google.maps.LatLng(48.8217, 2.3452),		
        new google.maps.LatLng(48.8214, 2.343),		
        new google.maps.LatLng(48.8246, 2.3255),		
        new google.maps.LatLng(48.8292, 2.3062),		
        new google.maps.LatLng(48.8314, 2.3),	
        new google.maps.LatLng(48.8333, 2.2904),	
        new google.maps.LatLng(48.8394, 2.2707),
        new google.maps.LatLng(48.8381, 2.2725)
    ];
	
	this.mapOptions = {
			zoom: 12,
			center: new google.maps.LatLng(48.86057012853454, 2.352447509765625),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		  };
			
	this.map = new google.maps.Map(document.getElementById(this.params.target),this.mapOptions);
	this.setMarkers(this.map, this.villes, this.imgStation, this.txtStation);
	this.img = "cercle.png";
	
	
	
	this.optionsCircle = {
        center: new google.maps.LatLng(48.85057012853454, 2.352447509765625),
        map: this.map,
        radius: 0,
        strokeColor: '#44aad9',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#afdbf0',
        fillOpacity: 0.35
    }
	this.myCircle = new google.maps.Circle(this.optionsCircle);
	
		
	this.styles =   [
		{featureType:"water",elementType:"all",stylers:[{color:"#2a2d3e"},{visibility:"on"}]},
		{featureType:"landscape",elementType:"all",stylers:[{color:"#eeeeee"},{saturation:24},{lightness:36},{visibility:"on"}]},
		{featureType:"road",elementType:"all",stylers:[{hue:"#991b20"},{saturation:0},{lightness:60},{visibility:"on" }]},
		{featureType:"road.highway",elementType:"all",stylers:[{hue:"#991b20"},{saturation:0},{lightness:30},{visibility:"on"}]},
		{featureType:"transit",elementType:"all",stylers:[{hue:"#2a2d3e"},{visibility:"simplified"}]},
		{featureType:"poi",elementType:"all",stylers:[{color:"#ffffff"},{visibility:"simplified"}]}
		];
	
	this.styledMap = new google.maps.StyledMapType(this.styles, {name: "Gmap stylée"});
	this.newLine = new google.maps.Polyline({
		  path: this.linesCoords,        
		  strokeColor: "#000000",
		  strokeOpacity: 1.0,
		  strokeWeight: 5
		});
		this.newLine.setMap(this.map);
		this.map.mapTypes.set('map_style', this.styledMap);
		this.map.setMapTypeId('map_style');
    },

    nextStation:function(){

		this.hideDiv();
		
		if(this.indice == 18)
			{this.indice=0;}
		else
			{this.indice++;}

		var city = this.villes[this.indice];
		var photo = this.imgStation[this.indice];
		var hist = this.txtStation[this.indice];
		this.showDiv(city[0],photo[0],hist[0]);

	},

	prevStation:function (){
		
		this.hideDiv();
		
		if(this.indice == 0)
			{this.indice=18;}
		else
			{this.indice--;}

		var city = this.villes[this.indice];
		var photo = this.imgStation[this.indice];
		var hist = this.txtStation[this.indice];
		this.showDiv(city[0],photo[0],hist[0]);
	},

 	hideDiv:function() { 

	    if (document.getElementById) { // DOM3 = IE5, NS6 
	        document.getElementById('hideshow').style.visibility = 'hidden'; 
	    } else { 
	        if (document.layers) { // Netscape 4 
	            document.hideshow.visibility = 'hidden'; 
	        } else { // IE 4 
	            document.all.hideshow.style.visibility = 'hidden'; 
	        } 
	    } 
	},

	showDiv:function(villes, img, textStation) {
		
	    if (document.getElementById) { // DOM3 = IE5, NS6 
	        document.getElementById('hideshow').style.visibility = 'visible'; 
	    } else { 
	        if (document.layers) { // Netscape 4 
	            document.hideshow.visibility = 'visible'; 
	        } else { // IE 4 
	            document.all.hideshow.style.visibility = 'visible'; 
	        } 
	    } 

		document.getElementById('nom_arret').innerHTML = "<div id='arret_content'> <h3>" + villes + "</h3><br /><p>" + textStation + "</p> </div>";
		document.getElementById('nom_arret').style.backgroundImage="url("+ img +")";
	},

	 setMarkers:function(map, locations, station,txtStation) {

			var image = 'images/nav/station.png';
			for (var i = 0; i < locations.length; i++) {
				var villes = locations[i];
				var myLatLng = new google.maps.LatLng(villes[1], villes[2]);
				var infoWindow = new google.maps.InfoWindow();
				var marker = new google.maps.Marker({
					position: myLatLng,
					map: map,
					animation: google.maps.Animation.DROP,
					icon: image
				});
				(function(i) {
					google.maps.event.addListener(marker, "click", function() {
						var villes = locations[i];
						var img = station[i];
						var textStation=txtStation[i];
						carte.indice = i;
						carte.showDiv(villes[0],img[0],textStation[0]);
					});
				})(i);
			}
	}


}