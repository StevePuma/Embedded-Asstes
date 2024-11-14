{
    "type": "Swapper",
    "title": "title"
  }

  var dimIndex = payload.data.selectVal - 1;

var dimToSwapTo = payload.widget.metadata.panels[0].items[dimIndex].jaql;

var widgetIds = payload.data.widgetToModify;

payload.widget.style.currentCard.actions.forEach(function (i) {
    i.style["background-color"] = '#D3D3D3'
})

payload.widget.style.currentCard.actions[dimIndex].style["background-color"] = '#ffffff'; // Change 'yourDesiredColor' to the desired background color

payload.widget.redraw(); 

payload.widget.dashboard.widgets.$$widgets

    .filter(i => widgetIds.includes(i.oid))

    .forEach(function (widget) {

        if (widget.metadata.panels[1].$$widget.type == 'indicator') {

            widget.metadata.panels[0].items[0].jaql = dimToSwapTo;

        }

        else {

            widget.metadata.panels[0].items[0].jaql = dimToSwapTo;

        }

        widget.changesMade('plugin-BloX', ['metadata'])
        widget.refresh();
        

    })