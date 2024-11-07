/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


linePattern=
	//  For all available line types, please see:
	//  http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-dashstyle-all/



widget.on('processresult', function(se,ev){

	var xAxis = ev.result.xAxis,
		yAxis = ev.result.yAxis[0]
		
	
	xAxis.plotLines= [{color: '#FF6666',width: 2,value: 10000,dashStyle:'Dash'}]
	yAxis.plotLines= [{color: '#FF6666',width: 2,value: 20,dashStyle:'Dash'}]
})