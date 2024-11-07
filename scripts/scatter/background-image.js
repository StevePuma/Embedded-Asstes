widget.on('render', function(sender,event){
	
	//	URL to the background Image
	var imageLink = 'http://siliconangle.com/files/2014/12/BlackWhite-Logo.jpg'
	
	//	Set the chart background as the image
	sender.queryResult.chart.plotBackgroundImage = imageLink;
		
})