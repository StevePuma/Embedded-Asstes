widget.on('processresult', function(se, ev){

    /************* Configure here *********/
     var color = "#00ff00";
     var fontWeight = "bold";
     var fontSize = "24px";
     /************************************/
     
     var legend = ev.result.legend;
    
     legend.itemStyle.color = color;
     legend.itemStyle.fontWeight = fontWeight;
     legend.itemStyle.fontSize = fontSize;
    })