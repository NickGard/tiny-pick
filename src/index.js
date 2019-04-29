Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pick = function (source) {
  var picked = {},
    args = arguments,
    properties = Array.isArray(args[1]) ? args[1] : Array.prototype.slice.call(args, 1);
  if (source && typeof source == 'object') {
    for (var i = 0; i < properties.length; i++) {
      if (properties[i] in source) {
        picked[properties[i]] = source[properties[i]];
      }
    }
  }
  return picked;
};

