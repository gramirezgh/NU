// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(a,c,e,f){Object.defineProperty(c,"__esModule",{value:!0});a=function(a){function b(g,b,c){var d=a.call(this,g,!0)||this;d.key=b;d.registerIncoming("key-down",c,function(a){return d._handleKeyDown(a)});return d}e(b,a);b.prototype._handleKeyDown=function(a){a.data.key===this.key&&(this.activate(),a.stopPropagation())};return b}(f.InputHandler);c.SingleKey=a});