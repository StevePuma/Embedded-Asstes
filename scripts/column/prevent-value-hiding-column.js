/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

widget.on('processresult', function(widget,result) { 
	
	maxValue = -1; 
	result.result.series.forEach(set => { 
		set.data.forEach(value => { 
			if(maxValue < value.y) maxValue = value.y;
		}) 
	}); 
	
	result.result.yAxis[0].max = Math.floor(maxValue*1.02);
	result.result.yAxis[0].min = null; 
})