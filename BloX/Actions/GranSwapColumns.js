{
    "type": "GranSwapColumns",
    "title": "title"
  }

  // Holds the chosen granularity from the selected button, 'months' for example
const dategran = payload.dategran;
var widgetIds = payload.data.widgetToModify;

// Set background-color for all buttons
payload.widget.style.currentCard.actions.forEach(function (i) {
    i.style["background-color"] = '#D3D3D3'
})

// Set background-color for selected button
payload.widget.style.currentCard.actions
    .filter(i => i.dategran == dategran)[0].style["background-color"] = "#1D426C"

// refresh
payload.widget.redraw()


//for each widget id - change DateGran and refresh
widgetIds.forEach(myfunction)
function myfunction(item) {
    var widgetfindid = prism.activeDashboard.widgets.$$widgets.find(w => w.oid === item)
    widgetfindid.metadata.panels[2].items[0].jaql.level = dategran //change the level of granularity to the chosen value 'months' for example
    widgetfindid.changesMade('plugin-BloX', ['metadata']) //apply changes to Mongo
    widgetfindid.refresh() //refresh the widget
}
