// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/INSPIRE_AccessLimitation","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/has ../../../../../../kernel dojo/i18n!../../../../nls/i18nArcGIS ../../../../base/Conditional ../../../../base/etc/docUtil".split(" "),function(d,h,g,e,k,l,m,n,p){d=d(n,{key:"INSPIRE_AccessLimitation",postCreate:function(){this.inherited(arguments);var b=this;this.own(e.subscribe("gxe/interaction-occurred",function(a){try{if(b.parentXNode&&a&&a.inputWidget&&
a.inputWidget.parentXNode){var c=a.inputWidget.parentXNode.gxePath;"/metadata/dataIdInfo/resConst/LegConsts/accessConsts/RestrictCd/@value"===c?b.emitInteractionOccurred():"/metadata/dataIdInfo/resConst/SecConsts/class/ClasscationCd/@value"===c&&b.emitInteractionOccurred()}}catch(f){console.error(f)}}));this.own(e.subscribe("gxe/tab-activated",function(a){try{b.parentXNode&&a&&a.tabs&&a.tabs.isResConstElementChoice&&b.emitInteractionOccurred()}catch(c){console.error(c)}}));this.own(e.subscribe("gxe/after-xnode-destroyed",
function(a){try{if(b.parentXNode&&a&&a.xnode){var c=a.xnode.target;("resConst"===c||"accessConsts"===c)&&b.emitInteractionOccurred()}}catch(f){console.error(f)}}))},ensureFocus:function(){p.ensureVisibility(this.parentXNode);g.some(this.parentXNode.getChildren(),function(b){if(b._isGxeTabs)return g.some(b.getChildren(),function(a){if(a.isConstraintsSection)return b.ensureActiveTab(a),!0}),!0})},validateConditionals:function(b){var a=this.newStatus({message:m.conditionals[this.key]}),c=!1;this.forActiveXNodes("/metadata/dataIdInfo/resConst/LegConsts/accessConsts/RestrictCd/@value,/metadata/dataIdInfo/resConst/SecConsts/class/ClasscationCd/@value",
this.parentXNode.domNode,function(a){if(!this.isXNodeInputEmpty(a))return c=!0},this);a.isValid=c;this.track(a,b);return a}});k("extend-esri")&&h.setObject("dijit.metadata.types.arcgis.base.conditionals.INSPIRE_AccessLimitation",d,l);return d});