{
    "type": "SwitchMeasureWithFormatAllWidgets",
    "title": "title"
  }

  /**
 * Welcome to BloX action editor.
 * Create your own action by using the Action body below.
 * To learn more, see the online documentation at https://documentation.sisense.com/latest/addons/sisenseblox.htm
 * 
 * Notes:
 * The payload Object is accessible as a parameter.
 * @param {Object} payload - Action's payload as described in Blox JSON.
 * @param {String} payload.type - Name of the Action IE: 'Action.Submit'.
 * @param {String} payload.title - Button text IE: 'Submit'.
 * @param {...Object} payload.* - Custom properties.
 * 
 * @example will create an action that will replace sisense's logo
 * from payload.imageUrl as described in Action's JSON.
 * Example below, delete and replace it with your own.
 */

var dimIndex = payload.data.selectVal - 1;

var dimToSwapTo = payload.widget.metadata.panels[1].items[dimIndex].jaql;
var dimToSwapToFormat = payload.widget.metadata.panels[1].items[dimIndex].format;

var widgetIds = payload.data.widgetToModify;

payload.widget.dashboard.widgets.$$widgets

    .forEach(function (widget) {

        if (widget.metadata.panels[1].$$widget.type == 'indicator') {
            widget.metadata.panels[0].items[0].jaql = dimToSwapTo;
            widget.metadata.panels[0].items[0].format = dimToSwapToFormat;
        }

        else {
            widget.metadata.panels[1].items[0].jaql = dimToSwapTo;
            widget.metadata.panels[1].items[0].format = dimToSwapToFormat;
        }

        widget.changesMade();
        widget.refresh();

    })

