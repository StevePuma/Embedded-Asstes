//title filter-date

{
    "type": "filter-date",
    "title": "title"
  }


  const filVal_from = payload.data.SelectVal_from
const filVal_to = payload.data.SelectVal_to
const filterDims = payload.data.FilterFields;

const dash = payload.widget.dashboard;
let newFilter = {};

newFilter = {
    jaql: {
        dim: "",
        filter: {
            from: filVal_from,
            to: filVal_to
        }
    }
};

filterDims.forEach(function (dim) {
    newFilter.jaql.dim = dim;
    dash.filters.update(newFilter, { refresh: true, save: true })
})