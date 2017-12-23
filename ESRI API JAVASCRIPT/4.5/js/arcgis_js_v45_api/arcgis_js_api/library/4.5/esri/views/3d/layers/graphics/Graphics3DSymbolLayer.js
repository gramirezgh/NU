// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../support/PromiseLightweight ./featureExpressionInfoUtils ./ElevationInfo ./graphicUtils ./Graphics3DSymbolCommonCode ./constants ../../../../core/Logger ../../../../Color ../../../../core/Scheduler".split(" "),function(A,B,p,q,h,k,l,r,t,u,v,w){function m(c,a){c=null!=c?a.attributes[c]:0;null!=c&&isFinite(c)||(c=0);return c}var c=new k,x=u.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayer"),y={mode:"on-the-ground",offset:0,
unit:"meters"},z={mode:"absolute-height",offset:0,unit:"meters"};return function(n){function a(b,f,e,d){var a=n.call(this)||this;a._elevationOptions={supportsOffsetAdjustment:!1,supportsOnTheGround:!0};a.symbolContainer=b;a.symbol=f;a._context=e;a._symbolLayerOrder=e.layerOrder;a._symbolLayerOrderDelta=e.layerOrderDelta;a._elevationInfo=new k;a._material=null;a._geometryCreationWarningHandle=null;a._updateDrivenProperties(d);a._updateElevationInfo();a._prepareResources();return a}p(a,n);a.prototype._logWarning=
function(b){x.warn(b)};a.prototype._logGeometryCreationWarnings=function(b,f,a,d){var e=this;if(null==this._geometryCreationWarningHandle){var c=b.geometryData&&b.geometryData.polygons;d+=" geometry failed to be created";var g=null;b.projectionSuccess?!f.length||1===f.length&&!f[0].length?g=d+" (no "+a+" were defined)":Array.isArray(f)&&Array.isArray(f[0])?c&&0===c.length&&"rings"===a&&(g=d+" (filled "+a+" should use clockwise winding - try reversing the order of vertices)"):g=d+" ("+a+" should be defined as a 2D array)":
g=d+" (failed to project geometry to view spatial reference)";g&&(this._geometryCreationWarningHandle=w.schedule(function(){return e._onNextTick()}),this._logWarning(g))}};a.prototype._onNextTick=function(){this._geometryCreationWarningHandle=null};a.prototype._validateGeometry=function(b){switch(b.type){case "point":if(null==b.x||null==b.y){this._logWarning("point coordinate is null - setting to default value");var a=b.clone();a.x=b.x||0;a.y=b.y||0;return a}}return b};a.prototype._prepareResources=
function(b){throw Error("This is an abstract base class");};a.prototype._defaultElevationInfoNoZ=function(){return y};a.prototype._defaultElevationInfoZ=function(){return z};a.prototype._updateElevationInfo=function(){this._elevationInfo.setDefaults();var b=this._context.layer.elevationInfo;b&&this._elevationInfo.mixinApi(b);(b=this.symbol&&this.symbol.elevationInfo)&&this._elevationInfo.mixinApi(b);this._elevationInfo.featureExpressionInfoContext=this._context.featureExpressionInfoContext};a.prototype.getGraphicElevationInfo=
function(b){var a=b.geometry.hasZ?this._defaultElevationInfoZ():this._defaultElevationInfoNoZ();c.setUnit(null!=this._elevationInfo.unit?this._elevationInfo.unit:a.unit);c.mode=this._elevationInfo.mode||a.mode;c.setOffsetMeters(null!=this._elevationInfo.meterUnitOffset?this._elevationInfo.meterUnitOffset:a.offset);c.featureExpressionInfoContext=this._elevationInfo.featureExpressionInfoContext;c.hasOffsetAdjustment=!1;this._elevationOptions.supportsOnTheGround||"on-the-ground"!==c.mode||(c.mode="relative-to-ground",
c.setOffsetMeters(0),c.featureExpressionInfoContext=h.zeroContext);a=h.createFeature(b);h.setContextFeature(c.featureExpressionInfoContext,a);r.needsOffsetAdjustment(c,this._elevationOptions,b.geometry,this.symbolContainer)&&(c.setOffsetRenderUnits(t.defaultIconElevationOffset),c.hasOffsetAdjustment=!0);return c};a.prototype._getDrapedZ=function(){return-2};a.prototype._updateDrivenProperties=function(b){var a={color:!1,opacity:!1,size:!1};!b&&(b=this._context.renderer)&&(a.color=!!b.colorInfo,a.size=
!!b.sizeInfo,b.visualVariables&&b.visualVariables.forEach(function(b){switch(b.type){case "color":a.color=!0;if(b.colors)for(var d=0;d<b.colors.length;d++){var c=b.colors[d];c&&(Array.isArray(c)&&3<c.length&&255!==c[3]||void 0!==c.a&&255!==c.a)&&(a.opacity=!0)}if(b.stops)for(d=0;d<b.stops.length;d++)(c=b.stops[d].color)&&(Array.isArray(c)&&3<c.length&&255!==c[3]||void 0!==c.a&&255!==c.a)&&(a.opacity=!0);break;case "opacity":a.opacity=!0;break;case "size":a.size=!0}}));this._drivenProperties=a};a.prototype._isPropertyDriven=
function(b){return this._drivenProperties[b]};a.prototype._getLayerOpacity=function(){if(this._context.layerView&&"fullOpacity"in this._context.layerView)return this._context.layerView.fullOpacity;var b=this._context.layer.opacity;return null==b?1:b};a.prototype._getMaterialOpacity=function(){var b;b=1*this._getLayerOpacity();var a=this.symbol&&this.symbol.material;a&&!this._isPropertyDriven("opacity")&&a.color&&(b*=a.color.a);return b};a.prototype._getMaterialOpacityAndColor=function(){var a=this.symbol&&
this.symbol.material,c=this._getMaterialOpacity(),a=!this._isPropertyDriven("color")&&a&&a.color?v.toUnitRGB(a.color):null;return l.mixinColorAndOpacity(a,c)};a.prototype._getVertexOpacityAndColor=function(a,c,e){var b=this._isPropertyDriven("color")?a.color:null;a=this._isPropertyDriven("opacity")?a.opacity:null;b=l.mixinColorAndOpacity(b,a);e&&(b[0]*=e,b[1]*=e,b[2]*=e,b[3]*=e);return c?new c(b):b};a.prototype._getStageIdHint=function(){return this._context.layer.id+"_symbol"};a.prototype.isFastUpdatesEnabled=
function(){return this._fastUpdates&&this._fastUpdates.enabled};a.prototype.setDrawOrder=function(a,c,e){this._material&&(this._material.setRenderPriority(a),e[this._material.getId()]=!0)};a.prototype.createGraphics3DGraphic=function(a,c){for(var b=2;b<arguments.length;b++);throw Error("This is an abstract base class");};a.prototype.destroy=function(){this._geometryCreationWarningHandle&&(this._geometryCreationWarningHandle.remove(),this._geometryCreationWarningHandle=null)};a.prototype.layerPropertyChanged=
function(a,c,e){return!1};a.prototype.applyRendererDiff=function(a,c,e,d){return!1};a.prototype._getFastUpdateAttrValues=function(a){if(!this._fastUpdates.enabled)return null;var b=this._fastUpdates.visualVariables,c=b.size?m(b.size.field,a):0;a=b.color?m(b.color.field,a):0;return[c,a,0,0]};return a}(q.Promise)});