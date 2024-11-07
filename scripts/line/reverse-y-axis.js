/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/




widget.on('processresult', function(se,ev){
    ev.result.yAxis[0].reversed = true;
 })