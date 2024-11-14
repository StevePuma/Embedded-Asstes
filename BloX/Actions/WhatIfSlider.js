{
    "type": "WhatIf Slider",
    "title": "title"
  }

  var val = payload.container.outerText;
var valX = payload.data.selectValX;
val = val.split('\n');
console.log('val: ' + val[4]);

var widgetIds = payload.data.widgetToModify;

payload.widget.dashboard.widgets.$$widgets
    .filter(i => widgetIds.includes(i.oid))
    .forEach(function (widget) {
        if (widget.type == 'indicator') {
            var formula_old = widget.metadata.panels[0].items[0].jaql.formula;
            var formula_new = formula_old.split("*")[0] + "*" + val[4];
            widget.metadata.panels[0].items[0].jaql.formula = formula_new;
        }
        else {
            var formula_old = widget.metadata.panels[1].items[0].jaql.formula;
            var formula_new = formula_old.split("*")[0] + "*" + val[4];
            widget.metadata.panels[1].items[0].jaql.formula = formula_new;
        }
        widget.changesMade('plugin-BloX', 'metadata');
        widget.refresh();
    })