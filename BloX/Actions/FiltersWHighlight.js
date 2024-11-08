//Title FiltersWHighlight

{
    "type": "FiltersWHighlight",
    "title": "FiltersWHighlight"
  }

  const { dashboard, metadata } = payload.widget;
  const { filters: dashboardFilters } = dashboard;
  const { filters: actionFilters } = payload.data;
  const widgetPanels = metadata.panel('Items').items;
  
  const dataindex = payload.dataindex;
  
  //Change the background color for unselected buttons
  payload.widget.style.currentCard.actions.forEach(function(i){
   i.style["background-color"] = '#D3D3D3' 
  })

  console.log(dataindex);

  //Change the background color for selected buttons
  payload.widget.style.currentCard.actions
  .filter(i => i.dataindex == dataindex)[0].style["background-color"] = "#1D426C"
  //Redraw the changes
  payload.widget.redraw()

  const filterOptions = {
      save: true,
      refresh: true
  }

  const newFilters = actionFilters.reduce((acc, obj) => {
      const { dim, filterName, panelName, filterJaql } = obj;
      let item = null;
      // If a dim attribute is provided, create dashboard Filter
      if (dim) {
          const { title, ...dimObject } = dim;
          item = {
              jaql: {
                  ...dimObject,
                  title: title || dimObject.column,
                  dim: `[${dimObject.table}.${dimObject.column}${dimObject.datatype == 'datetime' ? ' (Calendar)' : ''}]`
              }
          }
          if (dimObject.datatype == 'datetime' && !dimObject.level) {
              error({ message: 'To setup a date filter, Please select a date level (years, quarters, months, weeks or days )' });
              return acc;
          }
      }
      // If a filterNme attribute is provided, find the item in the dashboard Filters array
      else if (filterName) {
          item = dashboardFilters.$$items.find(({ jaql }) => jaql.title == filterName)
      }
      // alternatively, if a panelName was provided, find the item within the widget's items panel
      else if (panelName) {
          item = widgetPanels.find(({ PanelName }) => PanelName === panelName);
      }
      //If none of the above was provided, stop the function.
      else {
          error({ message: 'No dimension was provided. Please provide either a filterName or a panelName attribute.' });
          return acc;
      }
      //If the item wasn't found, stop the function.
      if (!item) {
          error({ message: `${filterName || panelName} was not found.` });
          return acc;
      }

      //Get the provided filter (jaql) and push it into the dim (item's dup)
      const filter = item.jaql.datatype == 'datetime' ? formatDateFilters(filterJaql) : filterJaql;
      const dimension = Object.assign({}, item, { disabled: false, jaql: Object.assign({}, item.jaql) });
      delete dimension.PanelName
      dimension.jaql.filter = Object.assign({}, filter);


      acc.push(dimension);

      return acc;
  }, [])

  try {
      //Update dashboard filters
      dashboardFilters.update(newFilters, filterOptions);

  } catch (e) {
      console.error(e);
  }

  function formatDateFilters(jaqlFilter) {
  const dateArrayAttributes = ['members']
  const dateStrAttributes = ['to', 'from']
  const newFilter = JSON.parse(JSON.stringify(jaqlFilter));

  dateArrayAttributes.forEach(a => {
      if (newFilter[a]) {
          newFilter[a].forEach((v, ix) => {
              let formattedDate = formatDate(v, 'YYYY-MM-DDThh:mm:ss')
              if (formattedDate === -1) {
                  return;
              }
              newFilter[a][ix] = formattedDate;
          })
      }
  })
  dateStrAttributes.forEach(a => {
      const v = newFilter[a];
      if (newFilter[a]) {
          let formattedDate = formatDate(v, 'YYYY-MM-DDThh:mm:ss');
          if (formattedDate === -1) {
              return;
          }
          newFilter[a] = formattedDate;
      }
  })

  return newFilter;

}