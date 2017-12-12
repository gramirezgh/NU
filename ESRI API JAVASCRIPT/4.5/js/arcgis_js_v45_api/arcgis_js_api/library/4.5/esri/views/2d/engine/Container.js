// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject"],function(k,l,g,h){var e;(function(d){d[d.BEFORE=0]="BEFORE";d[d.ATTACHING=1]="ATTACHING";d[d.DETACHING=2]="DETACHING";d[d.RENDERING=3]="RENDERING";d[d.AFTER=4]="AFTER";d[d.DONE=5]="DONE"})(e||(e={}));return function(d){function b(){var a=null!==d&&d.apply(this,arguments)||this;a._childrenSet=new Set;a._childrenToAttach=[];a._childrenToDetach=[];a._renderPhase=e.DONE;a.children=[];return a}g(b,d);Object.defineProperty(b.prototype,
"numChildren",{get:function(){return this.children.length},enumerable:!0,configurable:!0});b.prototype.detach=function(a){var c=this.children;a=this.prepareChildrenRenderParameters(a);for(var b=c.length,d=0;d<b;d++){var e=c[d];e.attached&&(this.detachChild(e,a),e.attached=!1,e.parent=null)}};b.prototype.doRender=function(a){var c=this.prepareChildrenRenderParameters(a);this._renderPhase=e.BEFORE;this.beforeRenderChildren(a,c);this._renderPhase=e.ATTACHING;this.attachChildren(c)||this.requestRender();
this._renderPhase=e.DETACHING;for(var b=this._childrenToDetach;0<b.length;){var d=b.shift();this.detachChild(d,c);d.attached=!1;d.parent=null}this._renderPhase=e.RENDERING;this.renderChildren(c);this._renderPhase=e.AFTER;this.afterRenderChildren(a,c);this._renderPhase=e.DONE};b.prototype.addChild=function(a){return this.addChildAt(a,this.children.length)};b.prototype.addChildAt=function(a,c){void 0===c&&(c=this.numChildren);if(!a||this.contains(a))return a;var b=a.parent;b&&b!==this&&b.removeChild(a);
c>=this.numChildren?this.children.push(a):this.children.splice(c,0,a);this._childrenSet.add(a);c=this._childrenToDetach.indexOf(a);-1<c&&this._childrenToDetach.splice(c,1);this._childrenToAttach.push(a);this._renderPhase>=e.RENDERING&&this.requestRender();return a};b.prototype.contains=function(a){return this._childrenSet.has(a)};b.prototype.getChildIndex=function(a){return this.children.indexOf(a)};b.prototype.getChildAt=function(a){return 0>a||a>this.children.length?null:this.children[a]};b.prototype.removeAllChildren=
function(){for(var a=this.numChildren;a--;)this.removeChildAt(0)};b.prototype.removeChild=function(a){return this.contains(a)?this.removeChildAt(this.getChildIndex(a)):a};b.prototype.removeChildAt=function(a){if(0>a||a>=this.children.length)return null;a=this.children.splice(a,1)[0];this._childrenSet["delete"](a);if(a.attached)this._childrenToDetach.push(a),this._renderPhase>=e.RENDERING&&this.requestRender();else{var c=this._childrenToAttach.indexOf(a);-1<c&&this._childrenToAttach.splice(c,1)}return a};
b.prototype.requestChildRender=function(a){a&&a.parent===this&&this._renderPhase>=e.RENDERING&&this.requestRender()};b.prototype.setChildIndex=function(a,c){var b=this.getChildIndex(a);-1<b&&(this.children.splice(b,1),this.children.splice(c,0,a),this._renderPhase>=e.RENDERING&&this.requestRender())};b.prototype.sortChildren=function(a){this._renderPhase>e.RENDERING&&this.requestRender();return this.children.sort(a)};b.prototype.attachChildren=function(a){var c=this._childrenToAttach;if(0===c.length)return!0;
for(var b=0===c.length;!b;)b=c.shift(),this.attachChild(b,a)&&(b.attached=!0,b.parent=this),b=0===c.length;return 0===c.length};b.prototype.renderChildren=function(a){for(var b=this.children,d=b.length,e=0;e<d;e++){var f=b[e];f.attached&&this.renderChild(f,a)}};b.prototype.beforeRenderChildren=function(a,b){};b.prototype.attachChild=function(a,b){return a.attach(b)};b.prototype.detachChild=function(a,b){a.detach(b)};b.prototype.renderChild=function(a,b){a.processRender(b)};b.prototype.afterRenderChildren=
function(a,b){};return b}(h)});