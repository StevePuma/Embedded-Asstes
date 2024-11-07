/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

//Customize value labels formatting
widget.on('processresult', function(w, e) {

	// Iterate through each series in the chart data
	e.result.series.forEach(function(series) {

		// Check if the dataLabels object exists for the current series
		if (!series.dataLabels) {
			series.dataLabels = {};
		}

		// Enable the data labels
		series.dataLabels.enabled = true;

		series.dataLabels.style = {

			// Change the font color
			color: "#000000",

			// Change the font size
			fontSize: "25px",

			// Change the font weight
			fontWeight: "bold"

		};
		
		// Change the font rotation
		series.dataLabels.rotation = 350;
		
		// Change the y position offset of the label relative to the point in pixels
		series.dataLabels.x = 0;

	});
});