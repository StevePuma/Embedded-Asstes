// Title Dim Swapper Color V2

{
    "type": "Dim Swapper Color v2",
    "title": "Dim Swapper Color v2"
  }

  var dimIndex = payload.data.selectVal - 1;
var dimToSwapTo = payload.widget.metadata.panels[0].items[dimIndex].jaql;
var widgetIds = payload.data.widgetToModify;

payload.widget.dashboard.widgets.$$widgets
    .filter(i=>widgetIds.includes(i.oid))
    .forEach(function(widget){

        //Check if the widget type is treemap
        if(widget.subtype == 'treemap'){
            debugger
            widget.metadata.panels[0].items[0].jaql = dimToSwapTo;
            widget.metadata.panels[2].items[0].jaql = dimToSwapTo;
            widget.changesMade();
            widget.refresh();
        }
        else {
            widget.metadata.panels[2].items[0].jaql = dimToSwapTo;
            widget.changesMade();
            widget.refresh();
        }
    })