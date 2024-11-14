{
    "type": "SwitchMeasure",
    "title": "SwitchMeasure"
  }

  var dimIndex = payload.data.selectVal - 1;
var dimToSwapTo = payload.widget.metadata.panels[1].items[dimIndex].jaql;

var widgetIds = payload.data.widgetToModify;


payload.widget.dashboard.widgets.$$widgets
    .filter(i => widgetIds.includes(i.oid))
    .forEach(function (widget) {
        if (widget.metadata.panels[1].$$widget.type == 'indicator') {
            widget.metadata.panels[0].items[0].jaql = dimToSwapTo;
        }
        else {
            widget.metadata.panels[1].items[0].jaql = dimToSwapTo;
        }

        widget.changesMade('plugin-BloX', 'metadata');
        widget.refresh();
    })