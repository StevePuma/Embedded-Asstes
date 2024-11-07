/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

/*** This script is used to create colored plot bands based on defined thresholds.
This works for all Cartesian charts (Line, Column, Bar, Area, Scatter, Box & Whisker) as well as Polar chart. ***/
widget.on("processresult", function (widget, args){

	args.result.yAxis[0].plotBands = [
		//Define the color and the thresholds of each plot band in an object literal like shown in the examples below
		{
			color: '#ACACAC',
			from: Number.MIN_SAFE_INTEGER, //this represents the smallest integer value that can be safely represented in JavaScript -9007199254740991
			to: -3
		},
		{
			color: '#25AD84',
			from: -3,
			to: -2
		},
		{
			color: '#FFB74B',
			from: -2,
			to: -1
		},
		{
			color: '#F5435C',
			from: -1,
			to: 0
		},
		{
			color: '#F5435C',
			from: 0,
			to: 1
		},
		{
			color: '#FFB74B',
			from: 1,
			to: 2
		},
		{
			color: '#25AD84',
			from: 2,
			to: 3
		},
		{
			color: '#ACACAC',
			from: 3,
			to: Number.MAX_SAFE_INTEGER //this represents the largest integer value that can be safely represented in JavaScript, i.e. 9007199254740991
		}
	];

});