<html>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="jquery.mCustomScrollbar.concat.min.js"></script>
<link href="jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css" />

<script>

$(function () {

        $("#intro").mCustomScrollbar({ // on choisit la div "intro"
                verticalScroll:true, // barre verticale
                theme:"dark-thick", // th��me pour la barre, personnalisable
                set_height:"500px", // on fixe la hauteur �� 500 pixels
                set_width:"400px", // et la largeur �� 400 pixels
                scrollButtons:{
                        enable: true // on choisit d'afficher les fl��ches haut et bas
                }
  });
});
</script>

<div id="intro">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan, lorem sed mollis posuere, orci sapien ornare magna, quis rhoncus nisl tortor vitae ligula. Cras quis ipsum ut elit dapibus dignissim. Quisque ultrices gravida tortor, eu adipiscing nibh dictum vitae. Phasellus id nisl risus. Integer sapien enim, scelerisque a pharetra ac, hendrerit at diam. Duis fermentum justo eu orci tempus condimentum. Pellentesque ultrices, ligula vel euismod fermentum, enim erat aliquam felis, a lobortis sapien diam id justo. Sed vehicula adipiscing magna, in ultricies eros facilisis eget. Donec in orci diam, eu cursus orci. Nullam vehicula tellus purus. Cras magna libero, lobortis in posuere sed, gravida et eros. Nam pellentesque elit ut risus pretium eget commodo risus scelerisque. Pellentesque tristique nulla sed mauris sollicitudin non bibendum elit commodo. Morbi ut ligula in sem vulputate tincidunt. Sed leo mauris, consectetur in gravida vitae, egestas in ligula. Pellentesque et diam quis lacus sagittis aliquam.
<br /><br />
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ultricies velit aliquam enim elementum malesuada tempus felis ornare. Aliquam non molestie libero. Nam iaculis magna sit amet justo porta ullamcorper. Integer nec facilisis odio. Quisque rutrum, massa vitae varius luctus, mi leo ultricies justo, vel laoreet nunc dui ac nibh. Ut erat nulla, consectetur quis rhoncus ac, cursus eu nunc. Aenean orci odio, suscipit sed scelerisque vel, sollicitudin nec massa. Vestibulum libero erat, elementum a vehicula et, dignissim quis enim. Aenean porta, risus ut pellentesque fringilla, leo nisl ornare tortor, id varius est justo in quam. Vestibulum ultrices turpis ut sem sagittis laoreet. Nulla auctor accumsan eleifend.
</div>
</html>