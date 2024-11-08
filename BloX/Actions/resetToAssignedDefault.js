//title "ResetToAssignedDefaultValue

{
    "type": "ResetToAssignedDefaultValue",
    "title": "title"
  }

  const filVal = payload.data.FilterValue
const filterDims = payload.data.FilterField;

const dash = payload.widget.dashboard;
let newFilter = {};

newFilter = {
    jaql: {
        dim: "",
        filter: {
            explicit: true,
            members: [filVal]
        }
    }
}

filterDims.forEach(function (dim) {
    newFilter.jaql.dim = dim;
    dash.filters.update(newFilter, { refresh: true, save: false })
})