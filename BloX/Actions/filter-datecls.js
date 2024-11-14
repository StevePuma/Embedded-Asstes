{
    "type": "filter-datecls",
    "title": "title"
  }
  const filVal_from = "1980-03-04T00:00:00"
const filVal_to = "2063-03-04T00:00:00"
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