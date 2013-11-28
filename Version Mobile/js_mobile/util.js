var score=0;

$(document).ready(function(){

  $('.valider').click(function() {

	 $('input:radio').each(function () {
	 	if ($(this).prop('checked') && $(this).hasClass('ok') ) 
	 	{
	 		score +=2;
	 	}
	 });
	 if(score !=0)
		{$('.resultat').html('<p>VOTRE SCORE :' + score + '/20 </p>');}
		$('.valider').attr('disabled', true);
	});

 });

function showOrHide(div)
{
	if(div=='menu'){
	var affichageMenu = document.getElementById('menu');

	if(affichageMenu.style.display == 'block')
	{
		affichageMenu.style.display = 'none';
	} 
	else
	{
		affichageMenu.style.display = 'block';
	}}
	else
	{
		document.getElementById('questions').style.display='none';
		document.getElementById('statshare').style.display='block';
	}
}