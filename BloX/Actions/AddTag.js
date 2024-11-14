{
    "type": "AddTag",
    "title": "Submit"
  }

  const dash = payload.widget.dashboard;
const dashId = dash.oid;
const tagsW = dash.widgets.$$widgets.find(w => w.title === "Tags (API)");
const tagList = payload.data.Tags;
const isPrivate = payload.data.IsPrivate;
let tags = tagList.split(' ');
tags.forEach(function (tag) {
    SisenseModuleManager.modules['plugin-jsLib2'].jsLib2.tag(dashId, tag, isPrivate)
});
tagsW.refresh();