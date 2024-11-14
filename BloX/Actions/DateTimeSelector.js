{
    "type": "DateTimeSelector",
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

var datetimeCol = payload.data.NumDateTimeColumn;
var dash = payload.widget.dashboard;

//grab the start date and start time and parsing values
var dt1 = payload.data.datevalstart;
dt1 = dt1.substring(0, 4) + dt1.substring(5, 7) + dt1.substring(8);
var t1 = payload.data.timevalstart;

if (t1 == '') {
    t1 = '00:00';
}

t1 = t1.substring(0, 2) + t1.substring(3);
var dtstart = parseInt((dt1 + t1 + '00'), 10);

//grab the end date and end time and parsing values
var dt2 = payload.data.datevalend;
dt2 = dt2.substring(0, 4) + dt2.substring(5, 7) + dt2.substring(8);
var t2 = payload.data.timevalend;

if (t2 == '') {
    t2 = '23:59';
}

t2 = t2.substring(0, 2) + t2.substring(3);
var dtend = parseInt((dt2 + t2 + '00'), 10);

//console.log(dtstart + '-' + dtend);

//create JAQL filter definition
let newFilter = {};

newFilter = {
    jaql: {
        dim: "",
        filter: {
            from: dtstart,
            to: dtend
        }
    }
}

//apply the filter
datetimeCol.forEach(function (dim) {
    newFilter.jaql.dim = dim;
    dash.filters.update(newFilter, { refresh: true, save: true })
})