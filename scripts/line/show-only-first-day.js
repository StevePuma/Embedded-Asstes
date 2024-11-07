/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


widget.on("beforeviewloaded", function(w, args) {

	// Find which labels (ticks) to present on x-axis. returns array of indexes
    var findFirstDayOfMonthTicks = function(values) {
		if(!values) {
			console.log('No values found');
		}
        var positions = []
        values.forEach(function(item, index) {
            if (moment(item[0].data).format('D') === "1") {
                positions.push(index);
                console.log(item[0].data, index)
            }
        })
        return positions;
    }
 
    
    args.options.xAxis.tickPositions = findFirstDayOfMonthTicks(w.rawQueryResult.values);

})