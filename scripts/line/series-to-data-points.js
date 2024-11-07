/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/



widget.on('processresult', function(widget, args) {

    var series=args.result.series[1];
        
        series.lineWidth = 0.001;
        series.states = {
            hover: {
                enabled: false
            }
        };
        
        $.each(series.data, function(idx, el) {
            el.marker.enabled = true;
        });
    });