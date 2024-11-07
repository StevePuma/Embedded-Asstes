/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


//Series you want to adjust. Leaving this array empty will adjust all series int he chart.
var categoriesToChange = [] 
//Opacity value between 0 (completely transparent) and 1 (completely solid)
var opacity = 0.1


widget.on('beforeviewloaded',function(se,ev){
	
	
	// if the array is empty, change opacity for all categories
	if(categoriesToChange.length==0){
		ev.options.series.forEach(function(ser){
			if (ser.marker){
				ser.marker.fillOpacity=opacity
			}
		})
	}
	else {
		categoriesToChange.forEach(function(category){
		
		var ser = ev.options.series.find(function(s){return s.name.toLowerCase()==category.toLowerCase()})
		if (ser.marker){
			ser.marker.fillOpacity=opacity
		}
		})
	
	}
})