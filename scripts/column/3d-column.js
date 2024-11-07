

widget.on('processresult', function(w, args) {

    args.result.chart.options3d = {

enabled: true,

alpha: 15,

beta: 15,

depth: 50,

viewDistance: 25

};

    args.result.plotOptions.column.depth = 25;

});