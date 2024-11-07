

widget.on('render', function(se, ev) {
	
    $(element).on('draw.dt', function() {
		
        $(element).find("tr").each(function() {

				$(this).find('td').each(function() {
					
					
                    $(this).css('color', 'red'); //formatting done on this line. If multiple formats wanted, repeat  the following and update attribute and value $(this).css('[attribute]', '[value]');
					$(this).css('font-family', '"Times New Roman", Times, serif'); 
					$(this).css('font-size', '200%');
					
        	});

        });
		
    });
	
});


