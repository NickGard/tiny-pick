Object.defineProperty(exports,"__esModule",{value:!0}),exports.pick=function(r){var e={},t=arguments,o=Array.isArray(t[1])?t[1]:Array.prototype.slice.call(t,1);if(r&&"object"==typeof r)for(var a=0;a<o.length;a++)o[a]in r&&(e[o[a]]=r[o[a]]);return e};