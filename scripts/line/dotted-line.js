/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

widget.on('processresult', function(widget, result) {
	
	let targetSeries = result.result.series[1];
	
	targetSeries.dashStyle = 'Dot'
})