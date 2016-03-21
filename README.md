# JSONarea
JSON Validated Textarea. Lightweight and without opinion.

If you are using a HTML `<textarea>` to allow your users to insert JSON, JSONarea was made just for you. JSONarea prides itself on what it does not do more than what it does&nbsp;do.

#### does:
 - Listens to input events on a textarea and dispatches an update event indiciating whether or not the input is valid&nbsp;JSON.
 - allows you to configure the events it listens&nbsp;to
 - allows you to extend JSONarea with any number of&nbsp;Objects

#### doesn't:
 - Hit the&nbsp;DOM
 - require any third party&nbsp;dependencies

## Configuration

| Name          | Description                                       | Default
| ------------- |:-------------------------------------------------:| -----
| events        | Array of events to listen&nbsp;to                      | `['change','keyup']`
| sourceObjects | Optional Array of objects to extend JSONArea&nbsp;with |   `[]`

## Usage

```js
// do the deal
var myJSONArea = JSONArea(document.getElementById('json'),{
  sourceObjects:[] // optional array of objects for JSONArea to inherit from
});

// then here's how you use JSONArea's update event
myJSONArea.getElement().addEventListener('update',function(e){
  if(e.detail.isJSON) {
    // do something
  } else {
    // do something else
  }
});
```
