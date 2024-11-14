{
    "type": "WhatIf",
    "title": "title"
  }

  var val = payload.data.selectVal;
console.log('val: ' + val);

var widgetIds = payload.data.widgetToModify;

payload.widget.dashboard.widgets.$$widgets
    .filter(i => widgetIds.includes(i.oid))
    .forEach(function (widget) {
        if (widget.type == 'indicator') {
            console.log(widget.metadata.panels[0].items[0]);
            var formula_old = widget.metadata.panels[0].items[0].jaql.formula;
            var formula_new = "";
            if (formula_old.includes('*')){
                formula_new = formula_old.split("*")[0] + "*" + val;
            }
            else {
                formula_new = formula_old + "*" + val;
            }
            widget.metadata.panels[0].items[0].jaql.formula = formula_new;
        }
        else {
            console.log(widget.metadata.panels[1].items[0]);
            var formula_old = widget.metadata.panels[1].items[0].jaql.formula;
            var formula_new = "";
            if (formula_old.includes('*')) {
                formula_new = formula_old.split("*")[0] + "*" + val;
            }
            else {
                formula_new = formula_old + "*" + val;
            }
            widget.metadata.panels[1].items[0].jaql.formula = formula_new;
       }
        widget.changesMade('plugin-BloX', 'metadata');
        widget.refresh();
    })
