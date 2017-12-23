// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/MergeLayers.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_mergeLayersToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd\x3e\x3cdiv class\x3d"mergeLayersIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e${i18n.mergeLayers}\x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e                \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_mergeLayersTable" style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n         \x3ctbody\x3e\r\n           \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n             \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_mergeLayersDescription" \x3e${i18n.mergeLayersDefine}\x3c/td\x3e\r\n           \x3c/tr\x3e\r\n           \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n           \x3c/tr\x3e\r\n           \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e            \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseMergeLayer}\x3c/label\x3e\r\n            \x3c/td\x3e  \r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"MergeLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e    \r\n            \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n                \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_mergeLayersSelect" data-dojo-attach-event\x3d"onChange:_handleLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e     \r\n          \x3ctr\x3e\r\n            \x3ctd width\x3d"99%" colspan\x3d"2" style\x3d"white-space:nowrap;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"longTextInput esriAnalysisStepsLabel"\x3e${i18n.mergeFieldsLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"MergingAttributes"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e          \r\n          \x3c/tr\x3e  \r\n          \x3ctr data-dojo-attach-point\x3d"_afterMergeFieldsRow"\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e          \r\n \t      \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"longTextInput esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputName"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"esriOutputText esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n            \x3c/td\x3e                \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n                \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n              \x3c/div\x3e              \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e         \r\n      \x3c/tbody\x3e         \r\n     \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_mergesToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv \x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv"class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n    \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n      \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n      \x3c/a\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/MergeLayers","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/RadioButton dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ./CreditEstimator ./utils dojo/i18n!../../nls/jsapi dojo/text!./templates/MergeLayers.html".split(" "),
function(w,p,e,l,n,h,s,x,L,q,g,t,k,y,z,u,A,B,C,D,E,v,M,N,O,P,r,Q,F,R,S,G,T,H,I,U,m,J,K){p=p([A,B,C,D,E,I,H],{declaredClass:"esri.dijit.analysis.MergeLayers",templateString:K,widgetsInTemplate:!0,inputLayer:null,mergeLayers:null,mergingAttributes:null,outputLayerName:null,i18n:null,toolName:"MergeLayers",helpFileName:"MergeLayers",resultParameter:"MergedLayer",constructor:function(a){this._pbConnects=[];this._mergeFieldsRows=[];this._includedMergeFields=[];a.containerNode&&(this.container=a.containerNode)},
destroy:function(){this.inherited(arguments);l.forEach(this._pbConnects,n.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);e.mixin(this.i18n,J.mergeLayers)},postCreate:function(){this.inherited(arguments);z.add(this._form.domNode,"esriSimpleForm");this.set("showReadyToUseLayers",!1);this._outputLayerInput.set("validator",e.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",
{save:!0}));this.emit("close",{save:a})},_handleShowCreditsClick:function(a){a.preventDefault();if(this._form.validate()){a={};var b;b=this.mergeLayers[this._mergeLayersSelect.get("value")];a.InputLayer=h.toJson(m.constructAnalysisInputLyrObj(this.inputLayer));a.MergeLayer=h.toJson(m.constructAnalysisInputLyrObj(b));a.MergingAttributes=h.toJson(this.get("mergingAttributes"));this.returnFeatureCollection||(a.OutputName=h.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&
this._useExtentCheck.get("checked")&&(a.context=h.toJson({extent:this.map.extent._normalize(!0)}));this.getCreditsEstimate(this.toolName,a).then(e.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))}},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a={},b={},c;c=this.mergeLayers[this._mergeLayersSelect.get("value")];a.InputLayer=h.toJson(m.constructAnalysisInputLyrObj(this.inputLayer));a.MergeLayer=h.toJson(m.constructAnalysisInputLyrObj(c));
a.MergingAttributes=h.toJson(this.get("mergingAttributes"));this.returnFeatureCollection||(a.OutputName=h.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=h.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(c={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(c.extent=this.map.extent._normalize(!0)),a.context=h.toJson(c));b.jobParams=
a;b.itemParams={description:this.i18n.itemDescription,tags:q.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this.get("folderId"));this.execute(b)}},_handleLayerChange:function(a){var b="";"browse"===a?(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this.inputLayer&&("Point"===this.inputLayer.geometryType?b=' AND tags:"point"':"Polyline"===this.inputLayer.geometryType?b=
' AND tags:"line"':"Polygon"===this.inputLayer.geometryType&&(b=' AND tags:"polygon"')),this._browsedlg.browseItems.set("query",this._analysisquery+b),this._isAnalysisSelect=!1,this._browsedlg.show()):(this.outputLayerName=q.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name,mergelayername:this.mergeLayers[a].name}),this._outputLayerInput.set("value",this.outputLayerName),this._removeMergeFieldsRows(),this._createMergeFieldsRow())},_handleAttrSelectChange:function(a,b){var c,d;"0"!==
b&&(c=a.get("statisticSelect"),"0"!==c.get("value")&&(!c.get("isnewRowAdded")&&null!==this._includedMergeFields&&"0"!==a.get("value"))&&(this._includedMergeFields.push(a.get("value")),d=this.mergeLayers[this._mergeLayersSelect.get("value")].fields.length,this._includedMergeFields.length!==d-1&&(d=c.get("removeTd"),g.set(d,"display","block"),d=c.get("referenceWidget"),e.hitch(d,d._createMergeFieldsRow()),c.set("isnewRowAdded",!0))))},_handleAttrMatchSelectChange:function(a,b){if("0"!==b&&"0"!==a.get("value")){var c=
this.mergeLayers[this._mergeLayersSelect.get("value")].fields,d=this.inputLayer.fields,f="";l.forEach(c,function(b){b.name===a.get("value")&&(f=b.type)});var e="";l.forEach(d,function(a){a.name===b&&(e=a.type)});f!==e?-1!==l.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],f)&&-1!==l.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],e)?(this._handleCloseMsg(),this.set("disableRunAnalysis",
!1)):(this._showMessages(this.i18n.fieldTypeMatchValidationMsg),this.set("disableRunAnalysis",!0)):(this._handleCloseMsg(),this.set("disableRunAnalysis",!1))}},_handleStatsValueUpdate:function(a,b,c,d){var f;a&&(b=a.get("statisticSelect"),c=a.get("attributeMatchSelect"),f=a.get("attributeRenameBox"),"Rename"===d?(g.set(f.domNode.parentNode,{display:"","padding-left":0,"padding-right":0}),f.domNode.style.display="block",f.set("required",!0),c.domNode.style.display="none",g.set(b.domNode.parentNode,
"width","34%"),g.set(a.domNode.parentNode,"width","35%")):"Remove"===d||"0"===d?(f.domNode.style.display="none",f.set("required",!1),c.domNode.style.display="none",g.set(b.domNode.parentNode,"width","44%"),g.set(a.domNode.parentNode,"width","55%"),g.set(f.domNode.parentNode,"display","none")):(g.set(c.domNode.parentNode,{display:"","padding-left":0,"padding-right":0}),f.domNode.style.display="none",f.set("required",!1),c.domNode.style.display="table",g.set(b.domNode.parentNode,"width","34%"),g.set(a.domNode.parentNode,
"width","35%")),"0"!==a.get("value")&&"0"!==d&&(!b.get("isnewRowAdded")&&null!==this._includedMergeFields&&"0"!==a.get("value"))&&(this._includedMergeFields.push(a.get("value")),a=this.mergeLayers[this._mergeLayersSelect.get("value")].fields.length,this._includedMergeFields.length!==a-1&&(a=b.get("removeTd"),g.set(a,"display","block"),a=b.get("referenceWidget"),e.hitch(a,a._createMergeFieldsRow()),b.set("isnewRowAdded",!0))))},_save:function(){},_buildUI:function(){var a=!0;this._loadConnections();
m.initHelpLinks(this.domNode,this.showHelp);g.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this.get("showSelectAnalysisLayer")&&(!this.get("inputLayer")&&this.get("inputLayers")&&this.set("inputLayer",this.inputLayers[0]),m.populateAnalysisLayers(this,"inputLayer","inputLayers"));this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this.inputLayer&&this._updateAnalysisLayerUI(a);m.addReadyToUseLayerOption(this,[this._analysisSelect,this._mergeLayersSelect]);
g.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(e.hitch(this,function(a){this.folderStore=a;m.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));g.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none")},_updateAnalysisLayerUI:function(a){var b=[],
c=[],d=this._mergeLayersSelect.getOptions();this.inputLayer&&t.set(this._mergeLayersDescription,"innerHTML",q.substitute(this.i18n.mergeLayersDefine,{layername:this.inputLayer.name}));this.mergeLayers&&(this._mergeLayersSelect.removeOption(d),l.forEach(this.mergeLayers,function(a,b){a!==this.inputLayer&&a.geometryType===this.inputLayer.geometryType&&c.push({value:b,label:a.name})},this),this._mergeLayersSelect.addOption(c));0===c.length?(this._showMessages(this.i18n.mergeValidationMsg),this.set("disableRunAnalysis",
!0)):(this.set("disableRunAnalysis",!1),a&&(this.outputLayerName=q.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name,mergelayername:this.mergeLayers[this._mergeLayersSelect.get("value")].name})),this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName),this._removeMergeFieldsRows(),this._createMergeFieldsRow(),l.forEach(this.mergingAttributes,function(a){a=a.split(" ");-1===b.indexOf(a[0])&&(this._currentAttrSelect.set("value",a[0]),e.hitch(this._currentAttrSelect,
this._handleAttrSelectChange,a[0])(),this._currentStatsSelect.set("value",a[1]),e.hitch(this._currentStatsSelect,this._handleStatsValueUpdate,"value","",a[1])(),"Rename"===a[1]?this._currentAttrMatchSelect.set("value",a[2]):"Match"===a[1]&&this._currentAttrRenameBox.set("value",a[2]),b.push(a[0]))},this),0<b.length&&(this._includedMergeFields=b))},_handleAnalysisLayerChange:function(a){"browse"===a?(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",
this._analysisquery),this._isAnalysisSelect=!0,this._browsedlg.show()):(this.inputLayer=this.inputLayers[a],this.mergingAttributes=[],this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(a){a&&a.selection&&m.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.inputLayers:this.mergeLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._mergeLayersSelect,browseDialog:this._browsedlg,widget:this}).always(e.hitch(this,this._updateAnalysisLayerUI,!0))},
_loadConnections:function(){this.on("start",e.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",e.hitch(this,"_onClose",!1))},_createMergeFieldsRow:function(){var a,b,c,d,f,g,h;a=k.create("tr",null,this._afterMergeFieldsRow,"before");b=k.create("table",{"class":"esriFormTable"},a);b=k.create("tbody",null,b);c=k.create("tr",null,b);b=k.create("td",{style:{width:"35%"}},c);d=k.create("td",{style:{width:"34%"}},c);f=k.create("td",{style:{width:"30%"}},c);b=new r({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",
style:{overflowX:"hidden",tableLayout:"fixed",width:"100%"}},k.create("select",null,b));this.set("attributes",{selectWidget:b,layer:this.mergeLayers[this._mergeLayersSelect.get("value")]});d=new r({"class":"mediumInput statsSelect",style:{overflowX:"hidden",tableLayout:"fixed",width:"100%"}},k.create("select",null,d));this.set("statistics",{selectWidget:d});g=new F({maxHeight:200,"class":"longTextInput",style:{overflowX:"hidden",display:"none",tableLayout:"fixed",width:"100%"}},k.create("validationtextbox",
null,f));f=new r({maxHeight:200,"class":"mediumInput attrSelect",style:{overflowX:"hidden",display:"none",tableLayout:"fixed",width:"100%"}},k.create("select",null,f));this.set("attributes",{selectWidget:f,layer:this.inputLayer});n.connect(f,"onChange",e.hitch(this,this._handleAttrMatchSelectChange,b));b.set("statisticSelect",d);b.set("attributeRenameBox",g);b.set("attributeMatchSelect",f);n.connect(b,"onChange",e.hitch(this,this._handleAttrSelectChange,b));h=k.create("td",{"class":"esriFloatTrailing removeTd",
style:{display:"none",width:"1%",maxWidth:"12px"}},c);c=k.create("a",{title:this.i18n.removeAttrStats,"class":"closeIcon statsRemove",innerHTML:"\x3cimg src\x3d'"+w.toUrl("./images/close.gif")+"' border\x3d'0''/\x3e"},h);n.connect(c,"onclick",e.hitch(this,this._removeMergeFieldsRow,a));this._mergeFieldsRows.push(a);d.set("attributeSelect",b);d.set("removeTd",h);d.set("isnewRowAdded",!1);d.set("referenceWidget",this);d.watch("value",e.hitch(this,this._handleStatsValueUpdate,b));this._currentStatsSelect=
d;this._currentAttrSelect=b;this._currentAttrMatchSelect=f;this._currentAttrRenameBox=g;return!0},_removeMergeFieldsRows:function(){l.forEach(this._mergeFieldsRows,this._removeMergeFieldsRow,this);this._mergeFieldsRows=[];this._includedMergeFields=[]},_removeMergeFieldsRow:function(a){l.forEach(v.findWidgets(a),function(a,c){if(0===c){var d=this._includedMergeFields.indexOf(a.get("value"));-1!==d&&this._includedMergeFields.splice(d,1)}a.destroyRecursive()},this);k.destroy(a)},_setAnalysisGpServerAttr:function(a){a&&
(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){this.inputLayer=a},_setInputLayersAttr:function(a){this.inputLayers=a},_setMergeLayersAttr:function(a){this.mergeLayers=a},_setAttributesAttr:function(a){if(a.layer){var b,c;b=a.layer;c=a.selectWidget;a=b.fields;c.addOption({value:"0",label:this.i18n.attribute});l.forEach(a,function(a){a.name!==b.objectIdField&&-1===this._includedMergeFields.indexOf(a.name)&&c.addOption({value:a.name,
label:a.name})},this)}},_setStatisticsAttr:function(a){a=a.selectWidget;a.addOption({value:"0",label:this.i18n.operation});a.addOption({value:"Rename",label:this.i18n.rename});a.addOption({value:"Remove",label:this.i18n.remove});a.addOption({value:"Match",label:this.i18n.match})},_setMergingAttributesAttr:function(a){this.mergingAttributes=a},_getMergingAttributesAttr:function(){var a="",b=[],c,d,f,e;y(".statsSelect",this.domNode).forEach(function(g){c=v.byNode(g);d=c.get("attributeSelect");f=d.get("attributeMatchSelect");
e=d.get("attributeRenameBox");"0"!==d.get("value")&&"0"!==c.get("value")&&("Remove"===c.get("value")?(a+=d.get("value")+" "+c.get("value")+";",b.push(d.get("value")+" "+c.get("value"))):"Rename"===c.get("value")?(a+=d.get("value")+" "+c.get("value")+" "+e.get("value")+";",b.push(d.get("value")+" "+c.get("value")+" "+e.get("value"))):(a+=d.get("value")+" "+c.get("value")+" "+f.get("value")+";",b.push(d.get("value")+" "+c.get("value")+" "+f.get("value"))))});return b},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",
a)},validateServiceName:function(a){return m.validateServiceName(a,{textInput:this._outputLayerInput})},_connect:function(a,b,c){this._pbConnects.push(n.connect(a,b,c))},_showMessages:function(a){t.set(this._bodyNode,"innerHTML",a);s.fadeIn({node:this._errorMessagePane,easing:u.quadIn,onEnd:e.hitch(this,function(){g.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();s.fadeOut({node:this._errorMessagePane,easing:u.quadOut,onEnd:e.hitch(this,function(){g.set(this._errorMessagePane,
{display:"none"})})}).play()}});x("extend-esri")&&e.setObject("dijit.analysis.MergeLayers",p,G);return p});