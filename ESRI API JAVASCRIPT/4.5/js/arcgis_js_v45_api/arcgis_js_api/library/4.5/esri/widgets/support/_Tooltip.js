// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dijit/Tooltip","dojo/_base/lang","dojo/dom"],function(e,g,h,k){return e(null,{declaredClass:"esri.widgets.support._Tooltip",constructor:function(){this._tooltips=[]},startup:function(){this.inherited(arguments);this._started||this._tooltips.forEach(function(a){a.startup()})},destroy:function(){this._tooltips.forEach(function(a){a.destroy()});this._tooltips=null},_tooltips:null,createTooltips:function(a){a.forEach(function(a){this.createTooltip(a.node,a.label)},this)},
createTooltip:function(a,b){if(a=this._getConnectId(a))b="object"===typeof b?h.mixin({},b,{connectId:a}):{connectId:a,label:b},b=new g(b),this._started&&b.startup(),this._tooltips.push(b)},findTooltip:function(a){var b=this._getNode(a),c,d,e;if(a){a=this._tooltips;c=a.length;for(var f=0;f<c;f++)if(d=a[f],e=Array.isArray(d.connectId)?-1<d.connectId.indexOf(b):d.connectId===b)return d}},_getConnectId:function(a){var b,c;if(a){if(Array.isArray(a)){if(b=[],a.forEach(function(a){(c=this._getNode(a))&&
b.push(c)},this),0===b.length)return}else if(b=this._getNode(a),!b)return;return b}},_getNode:function(a){return k.byId(a.domNode||a)}})});