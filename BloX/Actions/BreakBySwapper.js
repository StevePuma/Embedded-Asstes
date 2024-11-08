//Title BreakBy Swapper

var dimIndex = payload.data.selectVal - 1;
var dimToSwapTo = payload.widget.metadata.panels[0].items[dimIndex];
var widgetIds = payload.data.widgetToModify;
payload.widget.dashboard.widgets.$$widgets
    .filter(i=>widgetIds.includes(i.oid))
    .forEach(function(widget){
        widget.metadata.panels[2].items[0] = dimToSwapTo;
        widget.changesMade();
        widget.refresh();
        })

{
    "type": "BreakBy Swapper",
    "title": "BreakBy Swapper"
  }