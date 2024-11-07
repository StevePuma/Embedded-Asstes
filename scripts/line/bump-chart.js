/*
widget.manifest.data.panels.forEach(function(p){

 p.metadata.maxitems = 25; //or any other number that works for you

})
*/


widget.on('buildquery', function(widget, args){
	var valueItems = _.filter(args.query.metadata, function(e){
		return e.$$panel.title === 'values'
	})
	
	valueItems[1].disabled = false;
	
})

widget.on('render', function(widget, args){
	widget.redraw = function () {
		widget.refresh();
	}
})


widget.on('processresult', function(widget,args){
	
	args.result.yAxis[0].reversed = true;
	
	var series = args.result.series,
		values = args.rawResult.values;
	
	//console.log(series);
	//console.log(values);

	// get original domain

	var original_domain = [];
	var desired_domain_min = 1;
	var desired_domain_max = 25;

	series.forEach(function(group){
		var group_data = group.data;
		group_data.forEach(function(data_point){
			if (data_point.queryResultIndex){
				var values_selection_index = data_point.queryResultIndex;		
				var point_size = values[values_selection_index][3].data;
				original_domain.push(point_size);
			}
		})  
	})
	
	var original_domain_min = Math.min.apply(Math, original_domain);
	var original_domain_max = Math.max.apply(Math, original_domain);
	
	series.forEach(function(group){
		var group_data = group.data;
		group_data.forEach(function(data_point){
			if (data_point.queryResultIndex){0
				var values_selection_index = data_point.queryResultIndex;
				var point_size = values[values_selection_index][3].data;
				data_point.marker.radius = to_new_domain(point_size, original_domain_min, 
														 original_domain_max, desired_domain_min, desired_domain_max);
			}
		})  
	})
})


function to_new_domain(value, original_min, original_max, new_min, new_max){
	return (new_max - new_min) * ((value - original_min) / (original_max - original_min)) + new_min
}



widget.on('initialized', (widget) => {
$('head').append("<script src='https://d3js.org/d3.v5.min.js'></script>")
})


// select color theme from --> https://github.com/d3/d3-scale-chromatic
var colorTheme = 'interpolateSpectral';
var leftColorIntensity = 1;
var rightColorIntensity = 0;

widget.on("processresult", function(w, args) {

var originalSeries = args.result.series;
var dict = {};
var counter = 0;

function getSum(total, num) {
return total + num;
}

originalSeries.forEach(
function(i) {
var mySeries = [];
i.data.forEach(function(datapoint) {
mySeries.push(datapoint["y"])
});
var total = mySeries.reduce(getSum);
dict[counter] = total;
counter++;
})

var items = Object.keys(dict).map(function(key) {
return [key, dict[key]];
});

var OrderArray = items.sort(function(first, second) {
return first[1] - second[1];
});

var newSeries = [];

for (var i = 0; i < originalSeries.length; i++) {
var SeriesIndex = parseInt(OrderArray[i][0]);
newSeries.push(originalSeries[SeriesIndex]);
};

counter = 0;
newSeries.forEach(function(item) {
if (counter.toString().length == 1) {
counter = "0" + counter;
}
item["sortData"] = counter.toString() + item["sortData"];
counter++;
});

args.result.series = newSeries;


myScale = d3.scaleLinear()
.domain([0, args.result.series.length])
.range([leftColorIntensity, rightColorIntensity]);

args.result.series.forEach(function(v, i) {
var scaled = myScale(i);
//console.log(scaled);
v.color = d3[colorTheme](scaled);
})

})

