{
    "type": "testing filters new",
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
console.log(payload);
var outputFilters = payload.data.data.split(',');
outputFilters.shift();
console.log(outputFilters)
    //"-01-01T00:00:00"
var outputFilters_mod = [];

outputFilters.forEach(member => outputFilters_mod.push(member + "-01-01T00:00:00"));

prism.activeDashboard.filters.update({
    'jaql': {
        'dim': '[Commerce.Date (Calendar)]',
        'title': 'Years',
        'filter': { 'members': outputFilters_mod },
        'level': 'years',
        'datatype': 'datetime'
    }
}, { 'save': true, 'refresh': true })
