/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

widget.on('processresult', function(widget,result) {
	
	// Collect objects from the widget
	let lowRangeSeries = result.result.series[0]
	let highRangeSeries = result.result.series[1]
	let dataRangeSeries = result.result.series[2]
	
	dataPointsCount = lowRangeSeries.data.length
	
	// Create a new "Area Range" object
	let newRangeSeries = JSON.parse(JSON.stringify(lowRangeSeries));
	newRangeSeries.type = 'arearange'
	newRangeSeries.fillOpacity = 0.3
	newRangeSeries.marker = {enabled: false}
	newRangeSeries.name = 'Range'
	
	// Determine the maximl value
	maxValue = dataRangeSeries.data[0].y;
	
	for (let i =0 ; i < dataPointsCount ; i++) { 
		
		// Fix the data series's marker color
		dataRangeSeries.data[i].y = Math.round(dataRangeSeries.data[i].y*100)/100
		if(dataRangeSeries.data[i].y > highRangeSeries.data[i].y || dataRangeSeries.data[i].y < lowRangeSeries.data[i].y)
    		dataRangeSeries.data[i].marker.lineColor = 'red'
		else
			dataRangeSeries.data[i].marker.lineColor = 'green'
		
		// Add range values
		newRangeSeries.data[i] = [i,Math.round(lowRangeSeries.data[i].y*100)/100,Math.round(highRangeSeries.data[i].y*100)/100]
		
		// Determine the maximl value
		if (dataRangeSeries.data[i].y > maxValue) maxValue = dataRangeSeries.data[i].y;
		if (lowRangeSeries.data[i].y > maxValue) maxValue = lowRangeSeries.data[i].y;
		if (highRangeSeries.data[i].y > maxValue) maxValue = highRangeSeries.data[i].y;
		
	}
	
	// Remove the "High" & "Low" line charts
	result.result.series.splice(0,2)
	result.result.series.unshift(newRangeSeries)
	
	// Format the tooltip
	result.result.tooltip.enabled = true;
	result.result.tooltip.shared = true;
	result.result.tooltip.crosshairs = true;
	Highcharts.setOptions({
		lang: {
			decimalPoint: '.',
			thousandsSep: ','
		}
	})
	
	// Set the Y axis max range
	result.result.yAxis[0].min - null;
	result.result.yAxis[0].max = Math.floor(maxValue*1.02);
})

widget.on('beforedatapointtooltip', function(widget,result,abc) {
	//Disable OOTB tooltips
	//result.cancel = true; 
})