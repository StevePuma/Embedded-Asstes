//This is the widget script to selectively hide widget toolbar buttons.

//Hide widget toolbar options
widget.on('buildquery', ()=> {

	//Uncomment the code below if you want to hide the buttons only for viewers
	//if(prism.user.roleName == 'consumer') {

	//Hide Edit (pencil) button
	$(element).parent().find('.widget-toolbar-btn--edit').remove();
	//Hide Expand / Full Screen (diagonal double-headed arrow) button
	$(element).parent().find('.widget-toolbar-btn--fullscreen').remove();

	//Hide Detail (circled i) button
	$(element).parent().find('.btn--no-background').remove();

	//Hide Menu (vertical ellipsis) button
	$(element).parent().find('.widget-toolbar-btn--menu').remove();

	//Hide Analyze It (graduation owl) button
	$(element).parent().find('.analyze-it-button').remove();

	//Uncomment the closing curly bracket below if you want to hide the buttons only for viewers
	//}

})

