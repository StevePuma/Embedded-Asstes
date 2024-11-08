// title postWithCredentials 

{
    "type": "postWithCredentials",
    "title": "postWithCredentials"
  }

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
 
 
(function () {
    const { container, url, data, headers = {}, widget } = payload;
    if (!url) return;
    const div = document.createElement('submit');
    div.className = 'blox-submit-loading';
    $(div).html('<span class="app-icon app-icon--build-vi-apply-aprrove"><svg class="app-icon__svg"><use xlink:href="#build-vi-apply-aprrove"></use></svg> </span><h3 class="content-text">Successfully Sent</h3>');
    $(container).append(div)

    data.timestamp = moment(Date.now()).format('DD-MMM-YYYY');
    data.user = prism.user.email;
    data.dashboardid = widget.dashboardid
  

    $.ajax({
        type: 'POST',
        async: false,
        global: false,
        headers: headers,
        url: url,
        dataType: "json",
        data: data,
        withCredentials: true,
        success: (data) => { console.log(data) },
        error: ({ statusText }) => { console.log(statusText) },
        complete: (() => {
            setTimeout(() => {
                prism.$ngscope.appstate == 'widget' ? widget.refresh() : widget.dashboard.refresh();
            }, 3000);

        })
    });
})()
