powwow.controls.myInnerText = {
    set: function (scopedoc, input, value, events) {
        return new Promise(function (resolve) {
            var newValue = (value === undefined) ? '' : value;
            if (input.innerText !== newValue) {
                input.innerText = newValue;
                //if (!events) {
                    events = "keyupEvent";
                //}
                //powwow._fireEvents(input, scopedoc, events, resolve);
                powwow.keyupEvent(input, scopedoc);
            } else if (events) {
                //powwow._fireEvents(input, scopedoc, events, resolve);
                powwow.keyupEvent(input, scopedoc);
                
            } else {    
                resolve();
            }
        });
    },
    /*
     * Get a property of a node.  Node itself is returned if there is no property.
     */
    get: function (node) {
        return node['innerText'];
    }
}

