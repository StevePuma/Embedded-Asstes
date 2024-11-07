/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


//Enter the name of the series for which you want to hide the data labels
var seriesName = "Goal"; 


widget.on('processresult', function(sender, ev){ 
	
	//This disables the labels for the series based on the seriesName
	var data = _.find(ev.result.series, function (ser) {return ser.name == seriesName}).data 
	_.each(data, function(value){ 
		value.dataLabels = {enabled: false} 
	})

})
