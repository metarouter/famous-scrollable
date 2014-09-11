var View = require('famous/core/View');
var Scroller = require('famous/views/Scroller');
var GenericSync = require('famous/inputs/GenericSync');
var Utility = require('famous/utilities/Utility');

function Scrollable () {
  View.apply(this, arguments);

  this.inputSync = new GenericSync();
  this._scroller = new Scroller({
    direction: this.options.direction
  });
  this.add(this._scroller);
}

Scrollable.prototype = Object.create(View.prototype);
Scrollable.prototype.constructor = Scrollable;

Scrollable.DEFAULT_OPTIONS = {
  direction: Utility.Direction.Y
};

module.exports = Scrollable;

Scrollable.prototype.sequenceFrom = function () {
  this._scroller.sequenceFrom.apply(this._scroller, arguments);
  this._eventInput.pipe(this.inputSync);
};
