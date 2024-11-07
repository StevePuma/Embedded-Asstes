/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/

// set the background color here
var bgColor = '#8b57a3';
var fontColor = '#ffffff';
var fontStyle_1 = 'bold';

widget.on('initialized', function(w, e) {
 var options = {
	backgroundColor: bgColor,
	 title: {
          fontSizes: {
              big: 25,
              medium: 20
          },
          color: fontColor
      },
      value: {
          fontStyle: fontStyle_1,
		  fontSizes: {
              big: 65,
              medium: 60
          },
          color: fontColor
      },
     secondaryValue: {
		fontSizes: {
              big: 20,
              medium: 18
          },
		color: fontColor
      },
   secondaryTitle: {
          fontSizes: {
              big: 20,
              medium: 18
          },
		color: fontColor
      },
	  borderColor: bgColor
 };

 w.indicatorInstance.setOptions('numericSimple', options);
});


widget.on('domready', function (w) {
	$(element).css('background-color', bgColor);
	$('widget-header' ,element.parent()).css({'background-color':bgColor});
	$('widget-header' ,element.parent()).css({'margin':'0px 0px 0px 0px'});
	$('widget-header' ,element.parent()).css({'padding':'0px 0px 0px 8px'});
	$('widget-header' ,element.parent()).css({'color':fontColor});
});