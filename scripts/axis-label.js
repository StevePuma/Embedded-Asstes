/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/


/******************************************************************/
/********Change the Axis Titles, Color, Font Size, and Font********/
/******************************************************************/

widget.on('processresult', function(se,ev){


	ev.result.xAxis.title = {text:'Tier', style:{color:'#ffcb05', fontSize:'50px',fontFamily: 'Verdana'}}
	ev.result.yAxis[0].title = {text:'General Satisfaction', style:{color:'#ffcb05', fontSize:'32px',fontFamily: "Arial"}}
	//ev.result.yAxis[1].title = {text:'Secondary Y Axis Title', style:{color:'#ffcb05', fontSize:'24px',fontFamily: "Comic Sans MS"}}



})


/*************************************************/
/********Change the Axis Labels Formatting********/
/*************************************************/ 	

widget.on('render', function(se,ev){


	/*Change the X Axis Labels' Rotation, Distance from Axis, Color, Font Size, Font Weight, and Style*/

	// Check if the labels object exists for the series
	if (!se.queryResult.xAxis.labels) {
		se.queryResult.xAxis.labels = {};
	}

	se.queryResult.xAxis.labels.style = {

		// Change the font color
		color: "#ffcb05",

		// Change the font size
		fontSize: "25px",

		// Change the font weight
		fontWeight: "bold"

	};

	se.queryResult.xAxis.labels.rotation = -45;
	se.queryResult.xAxis.labels.y = 30;


	/*Change the Primary Y Axis Labels' Rotation, Distance from Axis, Color, Font Size, Font Weight, and Style*/

	// Check if the labels object exists for the series
	if (!se.queryResult.yAxis[0].labels) {
		se.queryResult.yAxis[0].labels = {};
	}

	se.queryResult.yAxis[0].labels.style = {

		// Change the font color
		color: "#ffcb05",

		// Change the font size
		fontSize: "12px",

		// Change the font weight
		fontWeight: "bold"

	};

	se.queryResult.yAxis[0].labels.rotation = 45;
	se.queryResult.yAxis[0].labels.x = -15;

}) 