{
    "type": "NotNewConditions",
    "title": "title"
  }

  const widget = payload.data.widgetToModify;

//Before Taxes button style
payload.widget.style.currentCard.body[1].columns[1].items[0].items[0].actions[0].style.backgroundColor = "#ffcb05";
payload.widget.style.currentCard.body[1].columns[1].items[0].items[0].actions[0].style.color = "#333";

//After Taxes button style
payload.widget.style.currentCard.body[1].columns[2].items[0].items[0].actions[0].style.backgroundColor = "#ccc";
payload.widget.style.currentCard.body[1].columns[2].items[0].items[0].actions[0].style.color = "#888";

payload.widget.changesMade();
payload.widget.refresh();


prism.activeDashboard.widgets.$$widgets
    .filter(i => widget.includes(i.oid))
    .forEach(function (widget) {
        widget.metadata.panels
            .filter(j => j.type == 'filters')
            .forEach(function (panel) {
                panel.items
                    .filter(k => k.jaql.title == 'Condition' || k.jaql.title == 'condition')
                    .forEach(function (item) {
                        if (item.jaql.filter.all == true) {
                            delete item.jaql.filter.all;
                            item.jaql.filter.exclude = {
                                "members": [
                                    "New"
                                ]
                            };
                        }
                        else {
                            console.log('Button disabled!')
                        }
                    })
            })
        widget.changesMade();
        widget.refresh();
    })
