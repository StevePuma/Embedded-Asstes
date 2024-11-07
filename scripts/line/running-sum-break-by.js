widget.on('processresult', function(w, ev) {
	for (i=0; i<ev.result.series.length; i++) {
		var runSum=0;
		for (j=0; j<ev.result.series[i].data.length; j++) {
			//if selection Data is null or y is null, then we reached a break and reset the counter. Otherwise use the running Sum
			if (ev.result.series[i].data[j] && ev.result.series[i].data[j].y) {
				runSum+=ev.result.series[i].data[j].y;
				ev.result.series[i].data[j].y=runSum;
			}
			else {
				runSum=0;	
			}
		}
	}
} )