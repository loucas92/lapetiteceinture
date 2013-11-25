var sondage={

defaults : { 
				target:'.statistique',
				width: 350,
				height:350,
				responseBlock:'#etape1',
				surveyBlock:'#etape2'		
       		},
    
    init : function(options){

        this.params=$.extend(this.defaults,options);
        this.radius = Math.min(this.params.width, this.params.height) / 2 - 10;

		this.color = d3.scale.ordinal()
		    .range(["#422e0f", "#b1b1b1", "#0fa127"]);

		this.arc = d3.svg.arc()
		    .outerRadius(this.radius - 10)
		    .innerRadius(this.radius - 70);

		this.pie = d3.layout.pie()
		    .sort(null)
		    .value(function(d) { return d.population; });

		this.svg = null;

		this.initialize=false;
            
    },

    showSurvey: function(){

			$(this.params.responseBlock).css('animation','rtl 3s');

		    setTimeout(function(){$(sondage.params.responseBlock).hide();},2000);

		    setTimeout(function(){  

			    $(sondage.params.responseBlock).css('display','none');
			    $(sondage.params.surveyBlock).css('visibility','visible');
				sondage.createSurvey();
			    $(sondage.params.surveyBlock).css('animation','rtlReturn 2s');
			
			},2000);
    },

    createSurvey: function(){

    	if(this.initialize==false){

			this.svg=d3.selectAll(this.params.target).append("svg")
			    .attr("width", this.params.width)
			    .attr("height", this.params.height)
			    .append("g")
			    .attr("transform", "translate(" + this.params.width / 2 + "," + this.params.height / 2 + ")");
			    
			d3.csv("js/data.csv", function(error, data) {

			  data.forEach(function(d) {
			    d.population = +d.population;
			  });

			  var g = sondage.svg.selectAll(".arc")
			      .data(sondage.pie(data))
			    .enter().append("g")
			      .attr("class", "arc");

			  g.append("path")
			      .attr("d", sondage.arc)
			      .style("fill", function(d) { return sondage.color(d.data.age); })
			      .transition()
			      .ease("bounce")
			      .duration(4000)
			      .attrTween("d",  function(b){
			      		b.innerRadius = 0;
	  					var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
	  					return function(t) { return sondage.arc(i(t)); };
	  				})

			      

			  g.append("text")
			      .attr("transform", function(d) { return "translate(" + sondage.arc.centroid(d) + ")"; })
			      .attr("dy", ".35em")
			      .style("text-anchor", "middle")
			      .text(function(d) { return d.data.age; });

			});
			this.initialize=true;
		}	
    }
}