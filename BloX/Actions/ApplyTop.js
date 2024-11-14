{
    "type": "ApplyTop",
    "title": "title"
  }

  const topN = parseInt(payload.data.message.topNumber);
const widget = payload.data.widgetToModify;
prism.activeDashboard.widgets.$$widgets
    .filter(i => widget.includes(i.oid))
    .forEach(function (widget) {
        widget.metadata.panels
            .filter(j => j.type == 'filters')
            .forEach(function (panel) {
                panel.items
                    .filter(k => k.jaql.title == 'Top N')
                    .forEach(function (item) {
                        item.jaql.filter.top = topN;
                    })
            })
        widget.title = "Revenue by Country ( Showing Top " + topN + " )";
        widget.changesMade('plugin-BloX', 'metadata');
        widget.refresh();
    })
