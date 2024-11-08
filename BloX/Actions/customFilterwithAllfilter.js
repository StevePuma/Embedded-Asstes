// 

// title customFilterWithAllFilter


{
    "type": "customFilterWithAllFilter",
    "title": "title"
  }

  const filVal = payload.data.SelectVal_fil;
const filterDims = payload.data.FilterFields;

const dash = payload.widget.dashboard;
let newFilter = {};

if (filVal == 'All Values') {
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