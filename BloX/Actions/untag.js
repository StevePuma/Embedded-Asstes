// Title UnTag

const dash = payload.widget.dashboard;
const dashId = dash.oid;
const tagsW = dash.widgets.$$widgets.find(w => w.title === "Tags (API)");
const tagList = payload.data.Tags;
let tags = tagList.split(' ');
tags.forEach(function (tag) {
    SisenseModuleManager.modules['plugin-jsLib2'].jsLib2.unTag(dashId, tag);
});
tagsW.refresh();

{
    "type": "UnTag",
    "title": "Delete Tags"
}