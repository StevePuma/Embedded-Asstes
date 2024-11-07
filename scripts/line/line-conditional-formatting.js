/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

widget.on('processresult', function(widget, result) {
	
	let dataSeries = result.result.series[0];
	let threshold = 0;
	let aboveColor = '#0000ff'
	let belowColor = '#ff0000'
	
	dataSeries.threshold = threshold;
	dataSeries.color = aboveColor;
	dataSeries.negativeColor = belowColor
})