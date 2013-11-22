 var width = 350,
    height = 350,
    radius = Math.min(width, height) / 2 - 10;

var color = d3.scale.ordinal()
    .range(["#422e0f", "#b1b1b1", "#0fa127"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.population; });

var svg = null;

function initSondage(){
 
svg=d3.selectAll(".statistique").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
d3.csv("js/data.csv", function(error, data) {

  data.forEach(function(d) {
    d.population = +d.population;
  });

  var g = svg.selectAll(".arc")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.age); })
      .transition()
      .ease("bounce")
      .duration(6000)
      .attrTween("d", tweenPie)
      .transition()
      .ease("elastic")
      .delay(function(d, i) { return 6000 + i * 150; })
      .duration(2250)
      .attrTween("d", tweenDonut);

  g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.data.age; });

});
}

function tweenPie(b) {
  b.innerRadius = 0;
  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
  return function(t) { return arc(i(t)); };
}

function tweenDonut(b) {
  b.innerRadius = radius * .6;
  var i = d3.interpolate({innerRadius: 0}, b);
  return function(t) { return arc(i(t)); };
}
$(document).ready(function(){

  $('.reponses').click(function() {

    $('#etape1').css('animation','rtl 5s');
    setTimeout(function(){$('#etape1').hide();},4000);
    setTimeout(function()
    {  
    $('#etape1').css('display','none');
    $('#etape2').css('visibility','visible');
	initSondage();
    $('#etape2').css('animation','rtlReturn 3s');
    },3000);
  });
});