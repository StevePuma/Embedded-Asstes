/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/



widget.on('processresult', function(sender, ev){ 
	_.each(ev.result.series,function(series,i){
	_.each(series.data,function(value){
// Enable dataLabels, change its font, make it bold and rotate by 0
value.dataLabels = {enabled:true, style:{'fontSize':'30px', 'fontWeight':'bold'}, rotation: 0}; 
}); 
});
});
