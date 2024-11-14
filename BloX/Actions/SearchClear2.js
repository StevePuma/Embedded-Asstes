{
    "type": "SearchClear2",
    "title": "SearchClear2"
  }

  payload.widget.dashboard.filters.$$items.forEach(function(item){

    if(item.jaql){
        item.jaql.filter = {
            "all": true,
            "explicit": false,
            "filter": undefined,
            "multiSelection": true,
            "collapsed":true
        }
    }
    else{
        item.levels.forEach(function(level){
            level.filter = {
            "all": true,
            "explicit": false,
            "filter": undefined,
            "multiSelection": true,
            "collapsed":true
            }
        })
    }
})

payload.widget.dashboard.refresh();