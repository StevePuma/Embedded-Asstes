/*
	This is a widget script
*/

widget.on('domready', function(se, ev) {

    /*** USER CONFIGURATION ***/
    var columnToMakeUrls = 0; // set the column to make linkable (index starts at 0)
    var removeLinkDecoration = false; // remove the link underline
    var newText = 'My link'; // Replace the text in the column to be specifc text, leave blank to keep the original text
        
    var realColumnIndex = columnToMakeUrls + 1; //nth-child function is 1 based, make it zero for consistency with pivot version
    var cellsSelector = 'table tbody td:nth-child(' + realColumnIndex + ')';
    
	var cells = $(cellsSelector, element); //get all the cells of the column
	
	if (cells.length > 0) {
		cells.each(function() {
			createLinkHTML($(this));
		});
	} else {
		console.log('Cells were not found');
	}

    // create html link tag according to the cell and tag
    function createLinkHTML(cell) {
        var linkElement = $(cell);
        var link = linkElement.text();
        var linkText = newText || link;
        var htmlLink = '<a href="' + link + '" target="_blank">' + linkText + '</a>';
        if (removeLinkDecoration) {
            htmlLink = $(htmlLink).css('textDecoration', 'none').prop('outerHTML');
        }
        linkElement.html(htmlLink);
    }
	
	// an event fired on each table readraw	
	$(element).on('draw.dt', function() {		
		var cells = $(cellsSelector, element);
		cells.each(function(){			
			createLinkHTML($(this)); 
		});
    });
});