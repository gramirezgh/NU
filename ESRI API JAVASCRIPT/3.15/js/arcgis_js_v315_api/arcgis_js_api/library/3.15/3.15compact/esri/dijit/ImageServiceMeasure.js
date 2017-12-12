// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/templates/ImageServiceMeasure.html":'\x3cdiv data-dojo-attach-point\x3d"esriImageServiceMeasure" class\x3d"esriImageServiceMeasure"\x3e\r\n  \x3cdiv class\x3d"esriImageServiceMeasureToggleButton" data-dojo-attach-point\x3d"toggleButtonDiv"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriImageServiceMeasureDropdownContainer" data-dojo-attach-point\x3d"measureDropDownContainer"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"measureButtonContainer"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/ImageServiceMeasure","dojo/_base/declare dojo/_base/lang dojo/i18n!../nls/jsapi dojo/text!./templates/ImageServiceMeasure.html dojo/has ../kernel dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ../toolbars/ImageServiceMeasureTool dijit/form/DropDownButton dijit/DropDownMenu dijit/MenuItem dijit/MenuSeparator dijit/PopupMenuItem dijit/RadioMenuItem dijit/CheckedMenuItem ../symbols/SimpleMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ../graphic ../geometry/Point dojo/_base/Color dojo/dom-class dojo/_base/array ../tasks/ImageServiceMeasureParameters ../units dojo/dom-construct dijit/form/ToggleButton dojo/html".split(" "),
function(y,f,B,q,C,D,E,F,G,H,u,n,I,v,w,x,z,J,r,A,K,L,s,d,m,l,g,p,M,t){q=y([E,F,G],{declaredClass:"esri.dijit.ImageServiceMeasure",templateString:q,widgetsInTemplate:!0,layer:null,map:null,layout:"dropDown",displayOperations:null,markerSymbol:null,lineSymbol:null,fillSymbol:null,displayMeasureResultInPopup:null,angularUnit:null,linearUnit:null,areaUnit:null,_supportedMeasureOperations:[],_supportedUnits:{},_currentGraphic:null,_defaultUnits:{angularUnit:"DECIMAL_DEGREES",linearUnit:"KILOMETERS",areaUnit:"SQUARE_KILOMETERS"},
_desiredDropDownOrder:"OPERATION_POINT OPERATION_DISTANCE_ANGLE OPERATION_AREA_PERIMETER OPERATION_CENTROID OPERATION_BASE_TOP OPERATION_TOP_TOP_SHADOW OPERATION_BASE_TOP_SHADOW".split(" "),_map3DOperations:{OPERATION_POINT:"OPERATION_POINT_3D",OPERATION_DISTANCE_ANGLE:"OPERATION_DISTANCE_ANGLE_3D",OPERATION_AREA_PERIMETER:"OPERATION_AREA_PERIMETER_3D",OPERATION_CENTROID:"OPERATION_CENTROID_3D",OPERATION_BASE_TOP:"OPERATION_BASE_TOP",OPERATION_TOP_TOP_SHADOW:"OPERATION_TOP_TOP_SHADOW",OPERATION_BASE_TOP_SHADOW:"OPERATION_BASE_TOP_SHADOW"},
_menu:null,_dropDownButton:null,_currentOperation:null,_activeMeasureOpMenuItem:null,_has3DOperations:!1,_enabled3DCheckbox:!1,_dropDownMenuItemMap:{},_toggleButtonMenuItemMap:{},_decimalDegreesConstantValue:"esriDUDecimalDegrees",_decimalDegreesConstantKeyword:"DECIMAL_DEGREES",constructor:function(a){y.safeMixin(this,a);this._setDefaultSymbols();this._i18n=B},startup:function(){this.inherited(arguments)},postCreate:function(){this.map&&this.layer&&(this.measureToolbar=new H({map:this.map,layer:this.layer}),
this.measureToolbar.on("draw-end",f.hitch(this,this._addGraphic)),this.measureToolbar.on("draw-start",f.hitch(this,this._onDrawStart)),this.measureToolbar.on("measure-end",f.hitch(this,this._addInfoWindow)),this.measureToolbar.on("unit-change",f.hitch(this,this._onUnitChange)),this._supportedMeasureOperations=this._getSupportedMeasureOperations(),this._has3DOperations=this._check3DSupported(),this._reorderMeasureOperations(),this._supportedUnits=this._getSupportedUnits(),this._setDefaultUnits());
this._checkValidLayoutValue();0<this._supportedMeasureOperations.length?"dropDown"===this.layout?this._populateMeasureDropdown():"toolbar"===this.layout&&this._populateMeasureButtons():t.set(this.esriImageServiceMeasure,this._i18n.widgets.imageServiceMeasure.mensurationCapabilitiesAbsentText)},_checkValidLayoutValue:function(){"dropdown"===this.layout.toLowerCase()?this.layout="dropDown":"toolbar"===this.layout.toLowerCase()?this.layout="toolbar":(this.layout="dropDown",console.log("Invalid value for layout"))},
_getUnitKeyword:function(a){var b=null,c;if(a===this._decimalDegreesConstantValue)b=this._decimalDegreesConstantKeyword;else for(c in g)g.hasOwnProperty(c)&&g[c]===a&&(b=c);return b||null},_setUnitKeyword:function(a,b){var c;this[a]?(c=this._getUnitKeyword(this[a]),c||(c=this._defaultUnits[a],console.log("Incorrect "+b+" supplied. "+b+" set to default."))):c=this._defaultUnits[a];return c},_setDefaultUnits:function(){this.linearUnit=this._setUnitKeyword("linearUnit","Linear Unit");this.areaUnit=this._setUnitKeyword("areaUnit",
"Area Unit");this.angularUnit=this._setUnitKeyword("angularUnit","Angular Unit");this.measureToolbar.setLinearUnit(g[this.linearUnit]);this.measureToolbar.setAreaUnit(g[this.areaUnit]);this.measureToolbar.setAngularUnit(g[this.angularUnit])},_getSupportedMeasureOperations:function(){var a=[],b=this.displayOperations||this.measureToolbar.getSupportedMeasureOperations(),c=this.measureToolbar.getSupportedMeasureOperations(),k;m.forEach(b,function(b){for(k in l)l.hasOwnProperty(k)&&l[k]===b&&(-1<m.indexOf(c,
b)?a.push(k):console.log(b+" is not supported by the service."))},this);return a},_getSupportedUnits:function(){var a={},b=[],c=[],k=this.measureToolbar.getSupportedUnits(),e;for(e in k)k.hasOwnProperty(e)&&(c=k[e],b=[],m.forEach(c,function(a){b.push(this._getUnitString(a))},this),a[e]=b);return a},_check3DSupported:function(){return this._isSupportedMeasureOperation("OPERATION_POINT_3D")||this._isSupportedMeasureOperation("OPERATION_DISTANCE_ANGLE_3D")||this._isSupportedMeasureOperation("OPERATION_AREA_PERIMETER_3D")||
this._isSupportedMeasureOperation("OPERATION_CENTROID_3D")},_isSupportedMeasureOperation:function(a){return-1<this._supportedMeasureOperations.indexOf(a)},_reorderMeasureOperations:function(){var a=[];m.forEach(this._desiredDropDownOrder,function(b){-1<this._supportedMeasureOperations.indexOf(b)&&a.push(b)},this);this._supportedMeasureOperations=a},_setDefaultSymbols:function(){this.markerSymbol||(this.markerSymbol=new J,this.markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z"),
this.markerSymbol.setColor(new s("#00FFFF")));this.lineSymbol||(this.lineSymbol=new r(r.STYLE_SOLID,new s([255,0,0]),1.5));this.fillSymbol||(this.fillSymbol=new A(A.STYLE_SOLID,new r(r.STYLE_DASHDOT,new s([255,0,0]),2),new s([255,255,0,0.25])))},_populateMeasureDropdown:function(){var a,b;this._menu=new n;m.forEach(this._supportedMeasureOperations,function(b){a=new I({label:this._i18n.widgets.imageServiceMeasure.operationLabel[b],iconClass:l[b]});a.on("click",f.hitch(this,this._onDropDownMenuItemClick,
b,a));this._menu.addChild(a);this._dropDownMenuItemMap[b]=a},this);b=new v;this._menu.addChild(b);this._has3DOperations&&(b=new z({label:this._i18n.widgets.imageServiceMeasure.measure3DLabel,checked:!1}),b.on("change",f.hitch(this,this._on3DCheckBoxChange)),this._menu.addChild(b),b=new v,this._menu.addChild(b));this._addUnitsMenu();this._dropDownButton=new u({dropDown:this._menu,"class":"esriImageServiceMeasureDropdownContainer"},this.measureDropDownContainer);this._dropDownButton.startup();this._currentOperation=
this._defaultOperation=this._supportedMeasureOperations[0];this._toggleButton=new u({label:this._i18n.widgets.imageServiceMeasure.operationLabel[this._defaultOperation],iconClass:l[this._defaultOperation],"class":"esriImageServiceMeasureToggleButton",dropDown:new n({"class":"esriHiddenDropDownMenu"})},this.toggleButtonDiv);this._toggleButton.startup();this._toggleButton.on("click",f.hitch(this,this._toggle))},_populateMeasureButtons:function(){var a,b,c;d.add(this.esriImageServiceMeasure,"esriImageServiceMeasureToolbarLayout");
d.add(this.measureButtonContainer,"esriImageServiceMeasureButtonContainer");this._menu=new n;m.forEach(this._supportedMeasureOperations,function(b){c=p.create("div",{innerHTML:this._i18n.widgets.imageServiceMeasure.operationLabel[b]},this.measureButtonContainer);a=new M({showLabel:!1,checked:!1,label:this._i18n.widgets.imageServiceMeasure.operationLabel[b],iconClass:l[b],baseClass:"esriMeasureButton"},c);a.on("click",f.hitch(this,this._onButtonMenuItemClick,b));this._toggleButtonMenuItemMap[b]=a},
this);this._has3DOperations&&(b=new z({label:this._i18n.widgets.imageServiceMeasure.measure3DLabel,checked:!1}),b.on("change",f.hitch(this,this._on3DCheckBoxToolbarLayoutChange)),this._menu.addChild(b),b=new v,this._menu.addChild(b));this._addUnitsMenu();b=p.create("span",{innerHTML:"|"},this.measureButtonContainer);c=p.create("div",null,this.measureButtonContainer);this._dropDownButton=new u({dropDown:this._menu,label:this._i18n.widgets.imageServiceMeasure.settings,showLabel:!1,iconClass:"esriMensurationSettingsIcon",
"class":"esriMeasureSettingsButton"},c);this._dropDownButton.startup();if("false"===this.displayMeasureResultInPopup||!1===this.displayMeasureResultInPopup||!this.displayMeasureResultInPopup)this.measureResultContainer=p.create("div",{"class":"measureResultContainer"},this.esriImageServiceMeasure),this.esriMeasurementResultLabel=p.create("div",{innerHTML:"Measure Result","class":"esriMeasurementResultLabel"},this.measureResultContainer),this.measureResultStringDiv=p.create("div",{"class":"esriMeasurementResultString"},
this.measureResultContainer)},_addUnitsMenu:function(){var a,b,c,k,e,d;b=new n;m.forEach(this._supportedUnits.angularUnits,function(a){d=this._isCurrentAngularUnit(a);e=new x({group:"angularUnit",checked:d,label:this._i18n.widgets.imageServiceMeasure.unitLabel[a],"class":d?"esriSelectedOption":""});d&&(this._currentAngularUnitMenuItem=e);e.on("click",f.hitch(this,this._onAngularUnitClick,a,e));b.addChild(e)},this);a=new w({label:this._i18n.widgets.imageServiceMeasure.angularUnits,popup:b});this._menu.addChild(a);
c=new n;m.forEach(this._supportedUnits.linearUnits,function(a){d=this._isCurrentLinearUnit(a);e=new x({group:"linearUnit",checked:d,label:this._i18n.widgets.imageServiceMeasure.unitLabel[a],"class":d?"esriSelectedOption":""});d&&(this._currentLinearUnitMenuItem=e);e.on("click",f.hitch(this,this._onLinearUnitClick,a,e));c.addChild(e)},this);a=new w({label:this._i18n.widgets.imageServiceMeasure.linearUnits,popup:c});this._menu.addChild(a);k=new n;m.forEach(this._supportedUnits.areaUnits,function(a){d=
this._isCurrentAreaUnit(a);e=new x({group:"areaUnit",checked:d,label:this._i18n.widgets.imageServiceMeasure.unitLabel[a],"class":d?"esriSelectedOption":""});d&&(this._currentAreaUnitMenuItem=e);e.on("click",f.hitch(this,this._onAreaUnitClick,a,e));k.addChild(e)},this);a=new w({label:this._i18n.widgets.imageServiceMeasure.areaUnits,popup:k});this._menu.addChild(a)},_on3DCheckBoxChange:function(a){var b=this._currentOperation.replace("_3D","");this._enabled3DCheckbox=a;this._dropDownButton.openDropDown();
this._activeMeasureOpMenuItem&&(this._activeMeasureOpMenuItem=null,this._onDropDownMenuItemClick(b,this._dropDownMenuItemMap[b]))},_on3DCheckBoxToolbarLayoutChange:function(a){this._enabled3DCheckbox=a;this._dropDownButton.openDropDown();this._enabled3DCheckbox||(this._currentOperation=this._currentOperation.replace("_3D",""));this._currentOperation&&this._onButtonMenuItemClick(this._currentOperation)},_onDropDownMenuItemClick:function(a,b){var c=b.domNode;this._enabled3DCheckbox&&(a=this._map3DOperations[a]);
this._disableMapNavigation();this._removeDraws();this._activeMeasureOpMenuItem?(d.remove(this._activeMeasureOpMenuItem.domNode,"esriSelectedOption"),d.add(c,"esriSelectedOption"),this._activeMeasureOpMenuItem=b,this._currentOperation=a,this._toggleButton.set({label:this._i18n.widgets.imageServiceMeasure.operationLabel[a],iconClass:l[a.replace("_3D","")]})):(this._activeMeasureOpMenuItem=b,d.add(c,"esriSelectedOption"),this._currentOperation=a,this._toggleButton.set({label:this._i18n.widgets.imageServiceMeasure.operationLabel[a],
iconClass:l[a.replace("_3D","")]}),d.add(this._toggleButton._buttonNode,"esriCheckedMeasureButton"));this.measureToolbar.activate(l[a]);this.measureToolbar.showDrawTooltip()},_uncheckOtherButtons:function(a){for(var b in this._toggleButtonMenuItemMap)this._toggleButtonMenuItemMap.hasOwnProperty(b)&&b!==a&&this._toggleButtonMenuItemMap[b].set("checked",!1)},_onButtonMenuItemClick:function(a){this._removeDraws();this._enabled3DCheckbox&&(a=this._map3DOperations[a]);this._uncheckOtherButtons(a.replace("_3D",
""));this._currentOperation=a;this._toggleButtonMenuItemMap[a.replace("_3D","")].checked?(this._disableMapNavigation(),this.measureToolbar.activate(l[a]),this.measureToolbar.showDrawTooltip()):(this.measureToolbar.deactivate(),this._enableMapNavigation());this.measureResultStringDiv&&t.set(this.measureResultStringDiv,"")},_isCurrentAngularUnit:function(a){return a===this.angularUnit?!0:!1},_isCurrentLinearUnit:function(a){return a===this.linearUnit?!0:!1},_isCurrentAreaUnit:function(a){return a===
this.areaUnit?!0:!1},_onLinearUnitClick:function(a,b){d.remove(this._currentLinearUnitMenuItem.domNode,"esriSelectedOption");d.add(b.domNode,"esriSelectedOption");this._currentLinearUnitMenuItem=b;this.linearUnit=a;this.measureToolbar.setLinearUnit(g[a]);this._dropDownButton.openDropDown()},_onAngularUnitClick:function(a,b){d.remove(this._currentAngularUnitMenuItem.domNode,"esriSelectedOption");d.add(b.domNode,"esriSelectedOption");this._currentAngularUnitMenuItem=b;this.angularUnit=a;this.measureToolbar.setAngularUnit(g[a]);
this._dropDownButton.openDropDown()},_onAreaUnitClick:function(a,b){d.remove(this._currentAreaUnitMenuItem.domNode,"esriSelectedOption");d.add(b.domNode,"esriSelectedOption");this._currentAreaUnitMenuItem=b;this.areaUnit=a;this.measureToolbar.setAreaUnit(g[a]);this._dropDownButton.openDropDown()},_onDrawStart:function(){this._removeDraws()},_addGraphic:function(a){var b=a.geometry;this.measureToolbar.hideDrawTooltip();a="point"===b.type?this.markerSymbol:"line"===b.type||"polyline"===b.type?this.lineSymbol:
this.fillSymbol;this._removeDraws();this._currentGraphic=a=new K(b,a);this.map.graphics.add(a)},_addInfoWindow:function(a){a=this._measureResultString(a.measureResult,a.error);"dropDown"===this.layout||"toolbar"===this.layout&&("true"===this.displayMeasureResultInPopup||!0===this.displayMeasureResultInPopup)?this._displayInfoWindowMeasureResult(a):"toolbar"===this.layout&&this._displayToolbarMeasureResult(a)},_measureResultString:function(a,b){var c="",d,e,f,g,h;if(a)for(h in a)a.hasOwnProperty(h)&&
(a[h]&&"name"!==h&&"sensorName"!==h)&&(g=this._i18n.widgets.imageServiceMeasure.measureDialog[h.charAt(0).toUpperCase()+h.slice(1)],"point"!=h?(d=this._i18n.widgets.imageServiceMeasure.unitLabel[this._getUnitString(a[h].unit)],f=Math.abs(a[h].uncertainty).toFixed(2),e=this._getDisplayValue(a[h]),c+="\x3cstrong\x3e"+g+"\x3c/strong\x3e: "+e+" (\x26plusmn"+f+") "+d+"\x3cbr/\x3e"):(d=a[h].value.x.toFixed(2),e=a[h].value.y.toFixed(2),c+="\x3cstrong\x3e"+g+"\x3c/strong\x3e\x3cbr/\x3e"+this._i18n.widgets.imageServiceMeasure.measureDialog.X+
" : "+d+"\x3cbr/\x3e"+this._i18n.widgets.imageServiceMeasure.measureDialog.Y+" : "+e+"\x3cbr/\x3e"));else c=b.message+" "+b.details;return c},_getDisplayValue:function(a){return this.layer.currentVersion&&10.3<=this.layer.currentVersion?0>a.uncertainty?a.value.toFixed(2):Number(a.displayValue).toString():a.value.toFixed(2)},_getUnitString:function(a){var b,c;for(b in g)g.hasOwnProperty(b)&&(g[b]===a?c=b:a===this._decimalDegreesConstantValue&&(c=this._decimalDegreesConstantKeyword));return c},_displayInfoWindowMeasureResult:function(a){var b=
this._currentGraphic.geometry,c;this._currentGraphic&&("point"===b.type?this._currentInfowindow=b:"polyline"===b.type?(c=(b.paths[0][0][0]+b.paths[0][1][0])/2,b=(b.paths[0][0][1]+b.paths[0][1][1])/2,this._currentInfowindow=new L(c,b,this.map.spatialReference)):"polygon"===b.type&&(this._currentInfowindow=b.getCentroid()),this.map.infoWindow.setTitle(this._i18n.widgets.imageServiceMeasure.infoWindowTitle),this.map.infoWindow.setContent(a),this.map.infoWindow.on("hide",f.hitch(this,this._removeAssociatedGeometry)),
this.map.infoWindow.show(this._currentInfowindow))},_displayToolbarMeasureResult:function(a){t.set(this.measureResultStringDiv,a)},_removeAssociatedGeometry:function(){this._currentGraphic&&(this.map.graphics.remove(this._currentGraphic),this._currentGraphic=null)},_removeDraws:function(){this._removeAssociatedGeometry();this._currentInfowindow&&(this.map.infoWindow.hide(this._currentInfowindow),this._currentInfowindow=null)},_onUnitChange:function(a){this._addInfoWindow(a)},_toggle:function(){this._activeMeasureOpMenuItem?
(this._removeDraws(),d.remove(this._activeMeasureOpMenuItem.domNode,"esriSelectedOption"),this._activeMeasureOpMenuItem=null,this.measureToolbar.deactivate(),d.remove(this._toggleButton._buttonNode,"esriCheckedMeasureButton"),this._enableMapNavigation()):(this._menuItem=this._dropDownMenuItemMap[this._currentOperation.replace("_3D","")],this._onDropDownMenuItemClick(this._currentOperation.replace("_3D",""),this._menuItem))},deactivate:function(){this._removeDraws();this._activeMeasureOpMenuItem&&
(d.remove(this._activeMeasureOpMenuItem.domNode,"esriSelectedOption"),this._activeMeasureOpMenuItem=null);this._toggleButton&&d.remove(this._toggleButton._buttonNode,"esriCheckedMeasureButton");this.measureResultStringDiv&&t.set(this.measureResultStringDiv,"");"toolbar"===this.layout&&this._currentOperation&&this._toggleButtonMenuItemMap[this._currentOperation.replace("_3D","")].set("checked",!1);this.measureToolbar.deactivate();this._enableMapNavigation()},_disableMapNavigation:function(){this.map.disableMapNavigation();
this.map.setInfoWindowOnClick(!1)},_enableMapNavigation:function(){this.map.enableMapNavigation();this.map.setInfoWindowOnClick(!0)},destroy:function(){this.inherited(arguments)}});C("extend-esri")&&f.setObject("dijit.ImageServiceMeasure",q,D);return q});