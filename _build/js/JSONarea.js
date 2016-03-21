var JSONArea = function(entity,options) { // lightweight and unopionanted all JSONArea does is listen to update events on the text area and dispatch an update event indicating whether or not the content is valid JSON
  options = (typeof(options) == 'undefined') ? {} : options;
  let events = (typeof(options.events) == 'undefined') ? ['change','keyup'] : options.events;
  let sourceObjects = (typeof(options.sourceObjects) == 'undefined') ? [] : options.sourceObjects;

  let jsonArea = {
    getElement() {
      return entity;
    },
    init() {
      var that = this;
      for(let event of events) { // for each event
        entity.addEventListener(event,function(e){ // add the event
          entity.dispatchEvent(new CustomEvent("update", { // dispatch an update event
            detail: {
              isJSON: that.isJSON(this.value) // and let them know if the JSON is validated
            }
          }));
        });
      }
      return this;
    },
    isJSON(string) { // accepts a string returns true or false for if it is valid JSON
        try {
          var jsonObject = JSON.parse(string);
        } catch(e) { return false }
        return true;
    }
  };
  // our JSONArea Factory creates a delegate prototype (jsonArea), then uses prototyal inheritance to create, extend and return a new initialisized instance
  return Object.assign.apply( // gotta use apply to support passing in an unkown amount of sourceObjects
    null,
    [Object.create(jsonArea)].concat(sourceObjects)
  ).init();
};
