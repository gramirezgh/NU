// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("esri/layers/ImageServiceLayerMixin","dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/_base/array dojo/_base/json dojo/_base/config dojo/_base/connect dojo/has dojo/io-query ../kernel ../config ../lang ../request ../deferredUtils ../urlUtils ../geometry/Extent ../geometry/Point ../geometry/Polygon ./MosaicRule ./RasterFunction ./DimensionalDefinition ./Raster ./PixelBlock ./pixelFilters/VectorFieldPixelFilter ./rasterFormats/ImageCanvasDecoder ./TimeInfo ./Field ../graphic ../tasks/ImageServiceIdentifyTask ../tasks/ImageServiceIdentifyParameters".split(" "),
function(H,e,A,r,C,J,M,Q,R,S,T,B,D,y,K,I,U,V,n,N,O,W,L,X,Y,Z,$,aa,ba,ca){H=H(null,{declaredClass:"esri.layers.ImageServiceLayerMixin",_rasterFieldPrefix:"Raster.",_renderingRuleFieldSubPrefix:"ServicePixelValue.",_eventMap:{"rendering-change":!0,"mosaic-rule-change":!0},constructor:function(a,b){this.useMapTime=b&&b.hasOwnProperty("useMapTime")?!!b.useMapTime:!0},_initialize:function(a,b){this._url=K.urlToObject(a);this.raster=new W(a);this.infoTemplate=b&&b.infoTemplate;var c=b&&b.imageServiceParameters;
this.format=c&&c.format;this.compressionTolerance=c&&c.compressionTolerance?c.compressionTolerance:0.01;this.interpolation=c?c.interpolation:null;this.compressionQuality=c?c.compressionQuality:null;this.bandIds=c?c.bandIds:null;this.mosaicRule=c?c.mosaicRule:null;this.renderingRule=c?c.renderingRule:null;this.useMapDimensionValue=b&&b.hasOwnProperty("useMapDimensionValue")?!!b.useMapDimensionValue:!0;this.activeMapDimensions=b&&b.activeMapDimensions;this._params=e.mixin({},this._url.query,{f:"image",
interpolation:this.interpolation,format:this.format,compressionQuality:this.compressionQuality,bandIds:this.bandIds?this.bandIds.join(","):null},c?c.toJson():{});this.pixelFilter=b&&b.pixelFilter;this.originalPixelData=this.pixelData=null;this.hasDataChanged=!0;this._requestDataHandler=e.hitch(this,this._requestDataHandler);this._requestDataErrorHandler=e.hitch(this,this._requestDataErrorHandler);this._rasterReadPromise=null;this._initLayer=e.hitch(this,this._initLayer);this._queryVisibleRastersHandler=
e.hitch(this,this._queryVisibleRastersHandler);this._visibleRasters=[];this._rasterAttributeTableFields=[];this._rasterAttributeTableFeatures=[];this._loadCallback=b&&b.loadCallback;(c=b&&b.resourceInfo)?this._initLayer(c):D({url:this._url.path,content:e.mixin({f:"json"},this._url.query),callbackParamName:"callback",load:this._initLayer,error:this._errorHandler});this.registerConnectEvents()},disableClientCaching:!1,_initLayer:function(a,b){if(!(null===a||void 0===a)){this._findCredential();(this.credential&&
this.credential.ssl||a&&a._ssl)&&this._useSSL();var c=this.minScale,d=this.maxScale;e.mixin(this,a);this.minScale=c;this.maxScale=d;this.initialExtent=this.fullExtent=this.extent=new I(a.extent);this.spatialReference=this.initialExtent.spatialReference;this.pixelSizeX=parseFloat(this.pixelSizeX);this.pixelSizeY=parseFloat(this.pixelSizeY);for(var f=this.minValues,h=this.maxValues,z=this.meanValues,t=this.stdvValues,u=this.bands=[],c=0,d=this.bandCount;c<d;c++)u[c]={min:f[c],max:h[c],mean:z[c],stddev:t[c]};
this.timeInfo=(c=this.timeInfo)&&c.timeExtent?new Z(c):null;d=this.fields=[];if(f=a.fields)for(c=0;c<f.length;c++)d.push(new $(f[c]));this.version=a.currentVersion;this.version||(this.version="fields"in a||"objectIdField"in a||"timeInfo"in a?10:9.3);B.isDefined(a.minScale)&&!this._hasMin&&this.setMinScale(a.minScale);B.isDefined(a.maxScale)&&!this._hasMax&&this.setMaxScale(a.maxScale);c={};a.defaultMosaicMethod?(c.method=a.defaultMosaicMethod,c.operation=a.mosaicOperator,c.sortField=a.sortField,c.sortValue=
a.sortValue):c.method=n.METHOD_NONE;this.defaultMosaicRule=new n(c);this.defaultMosaicRule.ascending=!0;this._setDefaultRenderingRule(!0);this._isScientificData()&&(!this.mosaicRule||this.mosaicRule&&!this.mosaicRule.multidimensionalDefinition)&&this._setDefaultMultidimensionalDefinition(!0);10<this.version&&this.hasRasterAttributeTable&&this.getRasterAttributeTable().then(e.hitch(this,function(a){a&&(a.features&&0<a.features.length)&&(this._rasterAttributeTableFeatures=e.clone(a.features));a&&(a.fields&&
0<a.fields.length)&&(this._rasterAttributeTableFields=e.clone(a.fields))}));this._isVectorData()&&!B.isDefined(this.pixelFilter)&&(this.vectorFieldPixelFilter=new X,this.vectorFieldPixelFilter.isDataUV="esriImageServiceDataTypeVector-UV"===this.serviceDataType,this.pixelFilter=this.vectorFieldPixelFilter.computeMagnitudeAndDirection,this.getKeyProperties().then(e.hitch(this,this._setFlowRepresentation)));this.loaded=!0;this.onLoad(this);if(c=this._loadCallback)delete this._loadCallback,c(this)}},
getKeyProperties:function(){var a=this._url.path+"/keyProperties",b=new A(y._dfdCanceller);10<this.version?(b._pendingDfd=D({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}),b._pendingDfd.then(function(a){b.callback(a)},function(a){b.errback(a)})):(a=Error("Layer does not have key properties"),a.log=J.isDebug,b.errback(a));return b},getRasterAttributeTable:function(){var a=this._url.path+"/rasterAttributeTable",b=new A(y._dfdCanceller);10<this.version&&this.hasRasterAttributeTable?
(b._pendingDfd=D({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}),b._pendingDfd.then(function(a){b.callback(a)},function(a){b.errback(a)})):(a=Error("Layer does not support raster attribute table"),a.log=J.isDebug,b.errback(a));return b},_getRasterAttributeTableFeatures:function(){var a=new A;if(this._rasterAttributeTableFeatures&&0<this._rasterAttributeTableFeatures.length)return a.resolve(this._rasterAttributeTableFeatures),a;if(10<this.version&&this.hasRasterAttributeTable)return a=
this.getRasterAttributeTable(),a.then(e.hitch(this,function(a){a&&(a.features&&0<a.features.length)&&(this._rasterAttributeTableFeatures=e.clone(a.features))})),a;a.resolve(this._rasterAttributeTableFeatures);return a},getCustomRasterFields:function(a){var b=a?a.rasterAttributeTableFieldPrefix:this._rasterFieldPrefix;a=10.3<=this.version?"esriFieldTypeDouble":"esriFieldTypeString";var c={name:this._rasterFieldPrefix+"ItemPixelValue",alias:"Item Pixel Value",domain:null,editable:!1,length:50,type:a},
d={name:this._rasterFieldPrefix+"ServicePixelValue",alias:"Service Pixel Value",domain:null,editable:!1,length:50,type:a},f={name:this._rasterFieldPrefix+"ServicePixelValue.Raw",alias:"Raw Service Pixel Value",domain:null,editable:!1,length:50,type:"esriFieldTypeDouble"},h=this.fields?e.clone(this.fields):[];a=h.length;h[a]=d;if(10.4<=this.version&&"esri.layers.ArcGISImageServiceLayer"===this.declaredClass&&(!this.rasterFunctionInfos||!this.rasterFunctionInfos.length||this._isRasterFunctionInfoAvailable("none")))a++,
h[a]=f;if(this.capabilities&&-1<this.capabilities.toLowerCase().indexOf("catalog")||this.fields&&0<this.fields.length)a++,h[a]=c;if(B.isDefined(this.pixelFilter)&&("esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType))c={name:this._rasterFieldPrefix+"Magnitude",alias:"Magnitude",domain:null,editable:!1,type:"esriFieldTypeDouble"},d={name:this._rasterFieldPrefix+"Direction",alias:"Direction",domain:null,editable:!1,type:"esriFieldTypeDouble"},
a++,h[a]=c,a++,h[a]=d;this._rasterAttributeTableFields&&0<this._rasterAttributeTableFields.length&&(a=r.filter(this._rasterAttributeTableFields,function(a){return"esriFieldTypeOID"!==a.type&&"value"!==a.name.toLowerCase()}),a=r.map(a,function(a){var c=e.clone(a);c.name=b+a.name;return c}),h=h.concat(a));var z=this._rasterFieldPrefix+this._renderingRuleFieldSubPrefix;10.4<=this.version&&this.rasterFunctionInfos&&r.forEach(this.rasterFunctionInfos,function(a){a&&(a.name&&"none"!==a.name.toLowerCase())&&
(a={name:z+a.name.replace(/ /gi,"_"),alias:a.name,domain:null,editable:!1,type:"esriFieldTypeDouble"},h.push(a))});return h},_prepareGetImageParameters:function(a,b,c,d){d=B.isDefined(d)?d:this._params;var f=a.spatialReference.wkid||C.toJson(a.spatialReference.toJson(!1));delete d._ts;e.mixin(d,{bbox:a.xmin+","+a.ymin+","+a.xmax+","+a.ymax,imageSR:f,bboxSR:f,size:b+","+c},this.disableClientCaching?{_ts:(new Date).getTime()}:{});delete d.compressionTolerance;d.format&&"LERC"===d.format.toUpperCase()&&
(d.compressionTolerance=this.compressionTolerance);d.token=this._getToken()},getImageUrl:function(a,b,c,d,f){f=B.isDefined(f)?f:this._params;this._prepareGetImageParameters(a,b,c,f);a=e.clone(f);this._cleanupRequestParams(a);b=this._url.path+"/exportImage?";c=K.addProxy(b+R.objectToQuery(e.mixin(a,{f:"image"})));var h=a.token;c.length>T.defaults.io.postLength||this.useMapImage?this._jsonRequest=D({url:b,content:e.mixin(a,{f:"json"}),callbackParamName:"callback",load:function(a,b){var c=a.href;h&&
(c+=-1===c.indexOf("?")?"?token\x3d"+h:"\x26token\x3d"+h);d(K.addProxy(c))},error:this._errorHandler}):d(c)},onRenderingChange:function(){},onMosaicRuleChange:function(){},setInterpolation:function(a,b){this.interpolation=this._params.interpolation=a;b||this.refresh(!0)},setCompressionQuality:function(a,b){this.compressionQuality=this._params.compressionQuality=a;b||this.refresh(!0)},setCompressionTolerance:function(a,b){this.compressionTolerance=a;b||this.refresh(!0)},setBandIds:function(a,b){var c=
!1;this.bandIds!==a&&(c=!0);this.bandIds=a;this._params.bandIds=a.join(",");if(c&&!b)this.onRenderingChange();b||this.refresh(!0)},setDefaultBandIds:function(a){this.bandIds=this._params.bandIds=null;a||this.refresh(!0)},setDisableClientCaching:function(a){this.disableClientCaching=a},setMosaicRule:function(a,b){var c=!1;this.mosaicRule!==a&&(c=!0);this.mosaicRule=a;this._params.mosaicRule=C.toJson(a.toJson());if(c&&!b)this.onMosaicRuleChange();b||this.refresh(!0)},setRenderingRule:function(a,b){var c=
!1;this.renderingRule!==a&&(c=!0);this.renderingRule=a;this._params.renderingRule=a?C.toJson(a.toJson()):null;if(c&&!b)this.onRenderingChange();b||this.refresh(!0)},setImageFormat:function(a,b){this.format=this._params.format=a;b||this.refresh(!0)},setInfoTemplate:function(a){this.infoTemplate=a},setDefinitionExpression:function(a,b){var c=this.mosaicRule?this.mosaicRule.toJson():{};this.mosaicRule||(this.defaultMosaicRule?c=this.defaultMosaicRule.toJson():c.method=n.METHOD_NONE);c.where=a;c=new n(c);
this.setMosaicRule(c,b);return this},getDefinitionExpression:function(){return this.mosaicRule?this.mosaicRule.where:null},setPixelFilter:function(a){this.pixelFilter=a},getPixelData:function(a){return a?(this._useBrowserDecoding()&&(this.originalPixelData={pixelBlock:this._getPixelBlockFromCanvas(this._context,this._map.width,this._map.height),extent:this._map.extent}),this.originalPixelData):this.pixelData},redraw:function(){this.hasDataChanged=!1;this._setPixelData(this.originalPixelData)},queryVisibleRasters:function(a,
b,c,d){var f=this._map,h=y._fixDfd(new A(y._dfdCanceller));this._visibleRasters=[];var e,t,u=!0,k=this.infoTemplate?this.infoTemplate.info:null,g=k?this.infoTemplate.info.fieldInfos:null;if(g&&0<g.length){u=!1;for(e=0;e<g.length;e++)if((t=g[e])&&t.fieldName.toLowerCase()!==this._rasterFieldPrefix.toLowerCase()+"servicepixelvalue"&&(t.visible||k.title&&-1<k.title.toLowerCase().indexOf(t.fieldName.toLowerCase()))){u=!0;break}}var l=(t=this._removeVisualizationStretchFunction(this.renderingRule))&&t.functionName,
p=[];if(10.4<=this.version){var q=!1;if(this.rasterFunctionInfos&&g){var s=this._rasterFieldPrefix+this._renderingRuleFieldSubPrefix;r.forEach(this.rasterFunctionInfos,function(a){var b=s+a.name.replace(/ /gi,"_");r.some(g,function(a){return a.visible&&a.fieldName===b})&&(q=q||l&&l===a.name,p.push(new N({rasterFunction:a.name})))})}t&&!q&&p.push(t)}e=new ca;e.geometry=a.geometry;e.returnGeometry=this._map.spatialReference.equals(this.spatialReference);e.returnCatalogItems=u;e.timeExtent=a.timeExtent;
e.mosaicRule=this.mosaicRule||null;e.renderingRule=10.4>this.version&&t||null;e.renderingRules=p||null;f&&(a=new U((f.extent.xmax-f.extent.xmin)/(2*f.width),(f.extent.ymax-f.extent.ymin)/(2*f.height),f.extent.spatialReference),e.pixelSize=a);b.requestParams=e;var m=this;a=new ba(this.url);(h._pendingDfd=a.execute(e)).addCallbacks(function(a){m._queryVisibleRastersHandler(a,b,c,d,h)},function(a){m._resolve([a],null,d,h,!0)});return h},_queryVisibleRastersHandler:function(a,b,c,d,f){function h(){var a=
this.getCustomRasterFields(b),d=this._getDomainFields(a),h=b?b.returnDomainValues:!1,g=b&&b.rasterAttributeTableFieldPrefix,l,p,q,s,m,w,y,n,x;this._getRasterAttributeTableFeatures().then(e.hitch(this,function(a){for(l=0;l<k.length;l++){v=k[l];v.setInfoTemplate(this.infoTemplate);v._layer=this;if(z){x=z.replace(/ /gi,"").split(",");p=z;q=x;u&&u.length>=l&&(p=u[l].replace(/ /gi,", "),q=u[l].split(" "));v.attributes[this._rasterFieldPrefix+"ItemPixelValue"]=q;v.attributes[this._rasterFieldPrefix+"ServicePixelValue"]=
x;t&&(v.attributes[this._rasterFieldPrefix+"ServicePixelValue.Raw"]=t.replace(/ /gi,"").split(","));if(this.pixelFilter){var b=new L({height:1,width:1,pixelType:"F32",pixels:[],statistics:[]});r.forEach(q,function(a){b.addData({pixels:[a],statistics:{minValue:a,maxValue:a,noDataValue:null}})});this.pixelFilter({pixelBlock:b,extent:new I(0,0,0,0,this._map.spatialReference)});if("esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType)v.attributes[this._rasterFieldPrefix+
"Magnitude"]=b.pixels[0][0],v.attributes[this._rasterFieldPrefix+"Direction"]=b.pixels[1][0]}r.forEach(P,function(a){v.attributes[a.name]=a.value});if(a&&0<a.length&&(s=r.filter(a,function(a){if(a&&a.attributes)return a.attributes.hasOwnProperty("Value")?a.attributes.Value==p:a.attributes.VALUE==p}),0<s.length&&(m=e.clone(s[0]),g&&m))){n={};for(w in m.attributes)m.attributes.hasOwnProperty(w)&&(y=g+w,n[y]=m.attributes[w]);m.attributes=n;v.attributes=e.mixin(v.attributes,m.attributes)}}h&&(d&&0<d.length)&&
r.forEach(d,function(a){if(a){var b=v.attributes[a.name];B.isDefined(b)&&(b=this._getDomainValue(a.domain,b),B.isDefined(b)&&(v.attributes[a.name]=b))}},this);G.push(v);this._visibleRasters.push(v)}this._resolve([G,null,!0],null,c,f)}))}var z=a.value,t=a.value,u,k,g=0,l=0,p=this,q=this.objectIdField,s,m,P=[];d=b.requestParams.renderingRules;var w=a.processedValues,x=this.renderingRule&&dojo.toJson(this._removeVisualizationStretchFunction(this.renderingRule).toJson());if(d&&w&&d.length===w.length){var y=
this._rasterFieldPrefix+this._renderingRuleFieldSubPrefix;r.forEach(d,function(a,b){if(a.functionName){var c={name:y+a.functionName.replace(/ /gi,"_"),value:w[b].replace(/ /gi,"").split(",")};P.push(c);x&&x===dojo.toJson(a.toJson())&&(z=w[b])}})}d=this.infoTemplate&&this.infoTemplate.info&&this.infoTemplate.info.layerOptions&&this.infoTemplate.info.layerOptions.hasOwnProperty("showNoDataRecords")?this.infoTemplate.info.layerOptions.showNoDataRecords:!0;if(a.catalogItems){var A=0,n,E,F=a.catalogItems.features.length;
m=0;k=Array(F);u=Array(F);s=Array(F);for(g=0;g<F;g++)-1<a.properties.Values[g].toLowerCase().indexOf("nodata")&&m++;n=F-m;for(g=0;g<F;g++)m=!0,-1<a.properties.Values[g].toLowerCase().indexOf("nodata")?(E=n++,d||(m=!1,k.length--,u.length--,s.length--)):E=A++,m&&(k[E]=a.catalogItems.features[g],u[E]=a.properties.Values[g],s[E]=k[E].attributes[q])}this._visibleRasters=[];var v;if((a=-1<z.toLowerCase().indexOf("nodata"))&&!d)k=[],u=[],s=[];z&&(!k&&!a)&&(q="ObjectId",k=[],v=new aa(new I(this.fullExtent),
null,{ObjectId:0}),k.push(v));var G=[];k?!this._map.spatialReference.equals(this.spatialReference)&&s&&0<s.length?D({url:this._url.path+"/query",content:{f:"json",objectIds:s.join(","),returnGeometry:!0,outSR:C.toJson(p._map.spatialReference.toJson()),outFields:q},handleAs:"json",callbackParamName:"callback",load:function(a){if(0===a.features.length)p._resolve([G,null,null],null,c,f);else{for(g=0;g<a.features.length;g++)for(l=0;l<k.length;l++)k[l].attributes[q]==a.features[g].attributes[q]&&(k[l].geometry=
new V(a.features[g].geometry),k[l].geometry.setSpatialReference(p._map.spatialReference));h.call(p)}},error:function(a){p._resolve([G,null,null],null,c,f)}}):h.call(this):this._resolve([G,null,null],null,c,f)},getVisibleRasters:function(){var a=this._visibleRasters,b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(a[c]);return b},_getDomainFields:function(a){if(a){var b=[];r.forEach(a,function(a){if(a.domain){var d={};d.name=a.name;d.domain=a.domain;b.push(d)}});return b}},_getDomainValue:function(a,
b){if(a&&a.codedValues){var c;r.some(a.codedValues,function(a){return a.code===b?(c=a.name,!0):!1});return c}},_requestData:function(a,b,c){this._rasterReadPromise&&this._rasterReadPromise.cancel();a=e.clone(a);var d=a._normalize(!0);this._prepareGetImageParameters(d,b,c);b=e.clone(this._params);this._cleanupRequestParams(b);b.extent=a;c=null;this._useBrowserDecoding()&&(c=new Y({ctx:this._context}));b={imageServiceParameters:b,nBands:Math.min(this.bandCount,3),pixelType:this.pixelType,decodeFunc:c?
e.hitch(c,"decode"):null};this._rasterReadPromise=this.raster.read(b,this._requestDataHandler,this._requestDataErrorHandler)},_requestDataHandler:function(a){if(!this._rasterReadPromise||!this._rasterReadPromise.isCanceled())this.originalPixelData=a,this.hasDataChanged=!0,this._setPixelData(a)},_setPixelData:function(a){a=this._clonePixelData(a);this.pixelFilter&&this.pixelFilter(a);this.pixelData=a;if(!this._rasterReadPromise||!this._rasterReadPromise.isCanceled())this._drawPixelData(),this._rasterReadPromise=
null},_drawPixelData:function(){},_requestDataErrorHandler:function(a){},_clonePixelData:function(a){if(null===a||void 0===a)return a;var b={};a.extent&&(b.extent=e.clone(a.extent));a=a.pixelBlock;if(null===a||void 0===a)return b;b.pixelBlock=a.clone();return b},_getPixelBlockFromCanvas:function(a,b,c){a=a.getImageData(0,0,b,c).data;for(var d=b*c,f=0,e=0,r=new Uint8Array(d),t=new Uint8Array(d),u=new Uint8Array(d),k=new Uint8Array(d),g=Infinity,l=Infinity,p=Infinity,q=-Infinity,s=-Infinity,m=-Infinity,
n,w,x,f=0;f<d;f++)n=a[e++],w=a[e++],x=a[e++],g=g<n?g:n,q=q>n?q:n,l=l<w?l:w,s=s>w?s:w,p=p<x?p:x,m=m>x?m:x,r[f]=n,t[f]=w,u[f]=x,k[f]=a[e++]&1;return new L({width:b,height:c,pixels:[r,t,u],pixelType:"U8",mask:k,statistics:[{minValue:g,maxValue:q},{minValue:l,maxValue:s},{minValue:p,maxValue:m}]})},_useBrowserDecoding:function(){return(void 0===this.pixelFilter||null===this.pixelFilter)&&("jpeg"==this.format.toLowerCase()||-1<this.format.toLowerCase().indexOf("png"))},getMultidimensionalInfo:function(){var a=
this._url.path+"/multiDimensionalInfo",b=new A(y._dfdCanceller);if(this._multidimensionalInfo)return b.resolve(this._multidimensionalInfo),b;10.3<=this.version&&this.hasMultidimensions?(b._pendingDfd=D({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}),b._pendingDfd.then(e.hitch(this,function(a){this._multidimensionalInfo=a.multidimensionalInfo;b.callback(a.multidimensionalInfo)}),function(a){b.errback(a)})):(a=Error("Layer does not support multidimensional info"),a.log=J.isDebug,
b.errback(a));return b},getDefaultMultidimensionalDefinition:function(){var a,b,c,d=[],f=new A(y._dfdCanceller);if(this._defaultMultidimensionalDefinition)return f.resolve(this._defaultMultidimensionalDefinition),f;f._pendingDfd=this.getMultidimensionalInfo();f._pendingDfd.then(e.hitch(this,function(e){a=e;b=a.variables[0].dimensions;for(c in b)b.hasOwnProperty(c)&&(b[c].hasRanges&&!0==b[c].hasRanges?d.push(new O({variableName:"",dimensionName:b[c].name,isSlice:!1,values:[b[c].values[0]]})):d.push(new O({variableName:"",
dimensionName:b[c].name,isSlice:!0,values:[b[c].extent[0]]})));this._defaultMultidimensionalDefinition=d;f.callback(d)}),function(a){f.errback(a)});return f},_setDefaultMultidimensionalDefinition:function(a){var b,c={};this.getDefaultMultidimensionalDefinition().then(e.hitch(this,function(d){b=d;0<b.length&&(this.mosaicRule?(c=e.clone(this.mosaicRule),c.multidimensionalDefinition=b):this.defaultMosaicRule?(c=e.clone(this.defaultMosaicRule),c.multidimensionalDefinition=b):c=new n({multidimensionalDefinition:b}),
this.setMosaicRule(c,a))}))},_setDefaultRenderingRule:function(a){var b={};if(!this.renderingRule&&"esri.layers.ArcGISImageServiceVectorLayer"!==this.declaredClass&&this.rasterFunctionInfos&&this.rasterFunctionInfos.length&&"none"!==this.rasterFunctionInfos[0].name.toLowerCase())b.rasterFunction=this.rasterFunctionInfos[0].name;else if(!this.renderingRule&&"esri.layers.ArcGISImageServiceVectorLayer"==this.declaredClass&&10.3<this.version){var c="esriImageServiceDataTypeVector-UV"===this.serviceDataType?
7:10;b.rasterFunction="Resample";b.rasterFunctionArguments={ResamplingType:c,InputCellSize:{x:this.pixelSizeX,y:this.pixelSizeY}}}b.hasOwnProperty("rasterFunction")&&(this.defaultRenderingRule=new N(b),this.setRenderingRule(this.defaultRenderingRule,a))},_cleanupRequestParams:function(a){if(!a)return a;if(a.time&&a.mosaicRule){var b=new n(C.fromJson(a.mosaicRule));if(b&&b.multidimensionalDefinition&&0<b.multidimensionalDefinition.length){var c=r.filter(b.multidimensionalDefinition,function(a){return"StdTime"!==
a.dimensionName});b.multidimensionalDefinition=c;a.mosaicRule=C.toJson(b.toJson())}}var b="displayOnPan drawMode styling id opacity visible resourceInfo useMapDimensionValue extent".split(" "),d;for(d in b)a.hasOwnProperty(b[d])&&delete a[b[d]];return a},_removeVisualizationStretchFunction:function(a){var b=a&&a.functionName;if(!b||"stretch"!==b.toLowerCase())return a;var c=a.functionArguments.Raster;return c&&c.functionName&&r.some(this.rasterFunctionInfos,function(a){return c.functionName===a.name})?
c:a},_isScientificData:function(){return"esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType||"esriImageServiceDataTypeScientific"===this.serviceDataType},_isVectorData:function(){return"esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType},_isRasterFunctionInfoAvailable:function(a){return r.some(a&&(this.rasterFunctionInfos||[]),function(b){return b&&b.name&&
b.name.toLowerCase()===a.toLowerCase()})},_createPixelData:function(a){a=new L({width:2,height:2,pixels:a,pixelType:this.pixelType,statistics:a});var b=this.fullExtent.getCenter(),b=new I(b.x,b.y,b.x+this.pixelSizeX,b.y+this.pixelSizeY,this.spatialReference);return{pixelBlock:a,extent:b}},_resolve:function(a,b,c,d,e){b&&this[b].apply(this,a);c&&c.apply(null,a);d&&y._resDfd(d,a,e)},_toggleTime:function(){var a=this._map;this.timeInfo&&this.useMapTime&&a&&!this.suspended?(this._timeConnect||(this._timeConnect=
M.connect(a,"onTimeExtentChange",this,this._onTimeExtentChangeHandler)),this._setTime(a.timeExtent)):(M.disconnect(this._timeConnect),this._timeConnect=null,this._setTime(null))},setUseMapTime:function(a,b){this.useMapTime=a;this._toggleTime();!b&&this._map&&this.refresh(!0)},_setTime:function(a){this._params&&(this._params.time=a?a.toJson().join(","):null)},_onTimeExtentChangeHandler:function(a){this.suspended||(this._setTime(a),this.refresh(!0))}});Q("extend-esri")&&e.setObject("layers.ImageServiceLayerMixin",
H,S);return H});