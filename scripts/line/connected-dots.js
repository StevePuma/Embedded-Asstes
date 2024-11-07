/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

widget.on('beforeviewloaded',function(w,args){
    
    args.options.plotOptions.series.connectNulls= true; // connect points that have null value in between
    
});