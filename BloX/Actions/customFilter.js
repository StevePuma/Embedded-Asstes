// title customFilter

{
    "type": "customFilter",
    "title": "customFilter"
  }

  const filVal = payload.data.SelectVal_fil;
const filterDims = payload.data.FilterFields;
const resetFil = payload.data.SetToAll;

const dash = payload.widget.dashboard;
let newFilter = {};

if (resetFil) {
    newFilter = {
        jaql: {
            dim: "",
            filter: {
                all: true
            }
        }
    }
} else {
    newFilter = {
        jaql: {
            dim: "",
            filter: {
                explicit: true,
                members: [filVal]
            }
        }
    }
}

filterDims.forEach(function (dim) {
    newFilter.jaql.dim = dim;
    dash.filters.update(newFilter, { refresh: true, save: false })
})