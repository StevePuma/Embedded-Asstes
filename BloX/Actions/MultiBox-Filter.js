//MultiBox Filter

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

 $('blox input:checked').parent().each(function () {
    var values = $('.fillmeup').attr('value') + $(this).text();
    $('.fillmeup').attr('value', values);
})

console.log('payload =' + payload);
var outputFilters = payload.data.data.split(",");
console.log('outputFilters =' + outputFilters);
prism.activeDashboard.filters.update(
    {
        'jaql': {
            'dim': '[Category.Category]',
            'title': 'category',
            'filter': { 'members': outputFilters },
            'datatype': 'text'
        }
    }, { 'save': true, 'refresh': true }
)

{
    "type": "MultiBox Filter",
    "title": "MultiBox Filter"
}