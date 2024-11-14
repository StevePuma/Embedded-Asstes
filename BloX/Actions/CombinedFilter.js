{
    "type": "CombinedFilter",
    "title": "title"
  }

  const filterName = payload.data.filterName;
const dategran = payload.dategran;
const maingran = payload.maingran;
var widgetIds = payload.data.widgetToModify;

const dash = payload.widget.dashboard;

var filterObject = dash.filters.$$items.find((item) => {
    if (item.jaql && item.jaql.title.indexOf(filterName) !== -1) {
        return true;
    }
});

console.log(maingran);

if(maingran=='MTD'){
    filterObject.jaql.level = 'Months';
    delete filterObject.jaql.filter;
    filterObject.jaql.filter = new Object();
    filterObject.jaql.filter.last = new Object();
    filterObject.jaql.filter.last.count = 1;
    filterObject.jaql.filter.last.offset = 0;
}
else if (maingran == 'QTD') {
    filterObject.jaql.level = 'Quarters';
    delete filterObject.jaql.filter;
    filterObject.jaql.filter = new Object();
    filterObject.jaql.filter.last = new Object();
    filterObject.jaql.filter.last.count = 1;
    filterObject.jaql.filter.last.offset = 0;
}
else if (maingran == 'YTD') {
    filterObject.jaql.level = 'Years';
    delete filterObject.jaql.filter;
    filterObject.jaql.filter = new Object();
    filterObject.jaql.filter.last = new Object();
    filterObject.jaql.filter.last.count = 1;
    filterObject.jaql.filter.last.offset = 0;
} 
else if (maingran == 'L30D') {
    filterObject.jaql.level = 'Days';
    delete filterObject.jaql.filter;
    filterObject.jaql.filter = new Object();
    filterObject.jaql.filter.last = new Object();
    filterObject.jaql.filter.last.count = 30;
    filterObject.jaql.filter.last.offset = 0;
}
else if (maingran == 'L90D') {
    filterObject.jaql.level = 'Days';
    delete filterObject.jaql.filter;
    filterObject.jaql.filter = new Object();
    filterObject.jaql.filter.last = new Object();
    filterObject.jaql.filter.last.count = 90;
    filterObject.jaql.filter.last.offset = 0;
}
else if (maingran == 'L12M') {
    filterObject.jaql.level = 'Months';
    delete filterObject.jaql.filter;
    filterObject.jaql.filter = new Object();
    filterObject.jaql.filter.last = new Object();
    filterObject.jaql.filter.last.count = 12;
    filterObject.jaql.filter.last.offset = 0;
};

//Change the background color for unselected buttons
payload.widget.style.currentCard.actions.forEach(function (i) {
    i.style["background-color"] = '#D3D3D3'
})

//Change the background color for selected buttons
payload.widget.style.currentCard.actions
    .filter(i => i.dategran == dategran)[0].style["background-color"] = "#1D426C"
//Redraw the changes
payload.widget.redraw()

//For each widget change the data granularity
payload.widget.dashboard.widgets.$$widgets
    .filter(i => widgetIds.includes(i.oid))
    .forEach(function (widget) {
        //change the level of granularity to the chosen value from our button: 'months' for example
        widget.metadata.panels[0].items[0].jaql.level = dategran;
        //Apply changes to Mongo
        widget.changesMade('someEvent', ['metadata', 'properties_changed']);
        //Refresh widget
        widget.refresh()
    })