$('#start_button').click(function(){
	console.log('button clicked');
	$(this).fadeOut();$('#stop_button').fadeIn();
	});
	
$('#peopleli').click( function() {
	$.getJSON('path', function(data) {
		console.log ("done");
		html='';
		for (i in data)
		{
				html+='<li><div class="name">'+data[i].name+'</div><div class="number">'+data[i].number+'</div><div class="car">'+data[i].car+'</div><div class="distance">'+data[i].distance+' miles</div><div class="image"><img src='+data[i].url+'></div></li>';
		}
		$('#gallery').html(html);
	});
});

