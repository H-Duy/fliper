function numCol() {
    var person = prompt("Please input 2 - 9 Colum", "2");
    if (person != null && person >=2 && person <=9) {
        return person;
    }
}

function hasClassFlip(selecter){
	if(selecter.hasClass('flip')){
		selecter.removeClass('flip');
	}
	else{
		selecter.addClass('flip');
	}
}

jQuery(window).load(function(){
	var count = numCol();
	var step = 1;
	if(count != 0){
		$('#fliper-container').append('<ul></ul>');
		for (var i = 0; i < count; i++) {
			$('#fliper-container ul').append('<li></li>');
		};
		$('#fliper-container ul li').append('<ul></ul>');
		for (var j = 0; j < count; j++) {
			$('#fliper-container ul ul').append('<li></li>');
		};
	}

	jQuery('#fliper-container ul li li').click(function(){
		var par = $(this).parent('ul').index('#fliper-container ul ul');
		index = $('#fliper-container ul ul').eq(par).find(this).index();
		$('#fliper-container ul ul').each(function(idz){
			if(idz != par){
				if( idz == (par-1) || idz == (par+1)){
					hasClassFlip($(this).find('li').eq(index));
					if(index-1 >= 0){
						hasClassFlip($(this).find('li').eq(index-1));
					}
					if(index+1 >= 0){
						hasClassFlip($(this).find('li').eq(index+1));
					}
				}
			}
			else{
				if(index-1 >= 0){
					hasClassFlip($(this).find('li').eq(index-1));
				}
				if(index+1 >= 0){
					hasClassFlip($(this).find('li').eq(index+1));
				}
			}
		})

		$('#step b').text(step++);

		if($('#fliper-container ul ul li.flip').length == count*count){
			alert('win');
		}
	})
});