/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

//Customize value labels formatting
widget.on('processresult',function(w,e){

	//Change background color
	e.result.plotOptions.series.dataLabels.backgroundColor = "lightgrey";
	
	//Change font color
	e.result.plotOptions.series.dataLabels.style.color = "grey";
	
	//Change font size
	e.result.plotOptions.series.dataLabels.style.fontSize = "19px";
	
	//Change font weight
	e.result.plotOptions.series.dataLabels.style.fontWeight = "bold";
});

