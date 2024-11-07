/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


widget.on('render', function(sender,se){
		 
    //Symbol Types: "circle", "square", "diamond", "triangle", "triangle-down"
console.log(sender.queryResult.series[0])
        
    sender.queryResult.series[0].marker = {enabled: true, symbol : 'circle'};
    sender.queryResult.series[1].marker= {enabled: true, symbol : 'square'};
    sender.queryResult.series[2].marker = {enabled: true, symbol : 'diamond'};
    sender.queryResult.series[3].marker = {enabled: true, symbol : 'triangle'};
    sender.queryResult.series[4].marker = {enabled: true, symbol : 'triangle-down'};
    

})



     