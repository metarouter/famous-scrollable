var Engine  = require('famous/core/Engine'),
    Surface = require('famous/core/Surface');

var GenericSync = require('famous/inputs/GenericSync'),
    ScrollSync  = require('famous/inputs/ScrollSync'),
    TouchSync   = require('famous/inputs/TouchSync');

var Utility = require('famous/utilities/Utility');

var Scrollable = require('../../Scrollable');

var mainContext = Engine.createContext();
var scrollable = new Scrollable({
  direction: Utility.Direction.Y
});

GenericSync.register({
  scroll: ScrollSync.bind(null, { direction: Utility.Direction.Y }),
  touch: TouchSync.bind(null, { direction: Utility.Direction.Y })
});

scrollable.inputSync.addSync(['scroll', 'touch']);

var items = createItems(20);

scrollable.sequenceFrom(items);

mainContext.add(scrollable);

function createItems (num) {
  var i, item;
  var result = [];

  for (i = 0; i < num; i++) {
    item = new Surface({
      content: (i + 1).toString(),
      properties: {
        textAlign: 'center',
        backgroundColor: 'hsl(' + i*360/10 + ', 100%, 50%)',
        color: '#fff'
      }
    });
    item.pipe(scrollable.inputSync);
    result.push(item);
  }

  return result;
}
