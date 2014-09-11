var View = require('famous/core/View');

function Scrollable () {
  View.apply(this, arguments);
}

Scrollable.prototype = Object.create(View.prototype);
Scrollable.prototype.constructor = Scrollable;

Scrollable.DEFAULT_OPTIONS = {};

module.exports = Scrollable;
