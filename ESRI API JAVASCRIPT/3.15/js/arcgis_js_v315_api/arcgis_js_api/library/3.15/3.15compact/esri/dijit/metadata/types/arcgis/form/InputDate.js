// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputDate",["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../../kernel","../../../form/InputDate"],function(c,e,f,g,h){c=c([h],{_serializationValue:null,postCreate:function(){this.inherited(arguments)},connectXNode:function(c,d){this.inherited(arguments);d||"/metadata/Esri/CreaDate"===c.gxePath&&this.setInputValue(this.formatDate(c.gxeDocument.datestamp))},getXmlValue:function(){return"/metadata/Esri/ModDate"===this.parentXNode.gxePath?(this.parentXNode.gxeDocument.datestamp=
new Date,this.formatDate(this.parentXNode.gxeDocument.datestamp)):this.inherited(arguments)},importValue:function(c,d){var a;a=null;var b=[];"string"!==typeof d||null===d?this.inherited(arguments):-1!==d.indexOf("T")?this.inherited(arguments):-1!==d.indexOf("Z")?this.inherited(arguments):-1!==d.indexOf("-")?this.inherited(arguments):(a=e.trim(d),8===a.length?(b[0]=a.substring(0,4),b[1]=a.substring(4,6),b[2]=a.substring(6,8),a=b[0]+"-"+b[1]+"-"+b[2],this.setInputValue(a)):6===a.length?(b[0]=a.substring(0,
4),b[1]=a.substring(4,6),a=b[0]+"-"+b[1],this.setInputValue(a)):this.inherited(arguments))}});f("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.form.InputDate",c,g);return c});