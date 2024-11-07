/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://developer.sisense.com/pages/viewpage.action?pageId=557127
*/

widget.on('beforeviewloaded',function(se,ev){
	ev.options.chart.type='heatmap'
})