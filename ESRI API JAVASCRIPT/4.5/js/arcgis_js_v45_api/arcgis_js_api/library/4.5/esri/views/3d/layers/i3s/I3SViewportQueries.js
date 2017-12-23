// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../lib/glMatrix ./I3SUtil ../../webgl-engine/lib/Util ../../support/projectionUtils ../graphics/featureExpressionInfoUtils ../graphics/ElevationInfo ../graphics/Graphics3DSymbolCommonCode ../../../../geometry/Point".split(" "),function(w,x,m,q,r,n,p,t,u,v){var f=m.vec3d,k=m.vec4d;return function(){function g(a,b,c,e,d,f,g,l,h){void 0===h&&(h={});this._computedMbs=a;this.indexSR=b;this._renderCoordsHelper=c;this.extent=d;this.errorMetricPreference=f;this.elevationProvider=
g;this.options=h;this.fp=[];this._tmp1=[0,0,0];this._tmp2=[0,0,0];this._tmp3=[0,0,0];this._tmp0=[0,0,0];this.supportedMetrics=["screenSpaceRelative","maxScreenThreshold","removedFeatureDiameter","distanceRangeFromDefaultCamera"];this.maxDistance=h.maxDistance||Number.MAX_VALUE;this.screenspaceErrorBias=h.screenspaceErrorBias||1;this.enableLoD=!1!==h.disableLod;for(a=0;8>a;++a)this.fp[a]=k.create();r.matrix2frustumPlanes(e.viewMatrix,e.projectionMatrix,this.fp);this.engineSR=this._renderCoordsHelper.spatialReference;
this._screenSizeFactor=1/e.perPixelRatio;this._camPos=e.eye;this._camDir=e.viewForward;l?(this._elevationInfo=new t,this._elevationInfo.featureExpressionInfoContext=p.createContext(p.extractExpressionInfo(l,!1)),this._elevationInfo.mixinApi(l)):this._elevationInfo=null;this.tmpPoint=new v({x:0,y:0,z:0,spatialReference:b})}g.prototype.computedMbs=function(a){var b=this._computedMbs[a.id];null==b&&(b=k.createFrom(0,0,0,-1),this._computedMbs[a.id]=b);0>b[3]&&(k.set(a.mbs,b),this._elevationInfo&&1E5>
a.mbs[3]&&(this.tmpPoint.x=b[0],this.tmpPoint.y=b[1],this.tmpPoint.z=b[2],b[2]=u.computeElevation(this.elevationProvider,this.tmpPoint,this._elevationInfo,this._renderCoordsHelper,null)),n.mbsToMbs(b,this.indexSR,b,this.engineSR));return b};g.prototype.isNodeVisible=function(a){a=this.computedMbs(a);return this.isMBSinExtent(a)&&this.isMBSVisible(a)};g.prototype.isMBSinExtent=function(a){return this.extent?0!==q.intersectBoundingBoxWithMbs(this.extent,a):!0};g.prototype.isMBSVisible=function(a){var b=
a[0],c=a[1],e=a[2];a=a[3];var d=this.fp;return d[0][0]*b+d[0][1]*c+d[0][2]*e+d[0][3]<=a&&d[1][0]*b+d[1][1]*c+d[1][2]*e+d[1][3]<=a&&d[2][0]*b+d[2][1]*c+d[2][2]*e+d[2][3]<=a&&d[3][0]*b+d[3][1]*c+d[3][2]*e+d[3][3]<=a&&d[4][0]*b+d[4][1]*c+d[4][2]*e+d[4][3]<=a&&d[5][0]*b+d[5][1]*c+d[5][2]*e+d[5][3]<=a};g.prototype.calcScreenSpaceSize=function(a,b){a=this.computedMbs(a);var c=a[3];a=f.dist2(a,this._camPos)-c*c;return 0>a?.5*Number.MAX_VALUE:b/Math.sqrt(a)*this._screenSizeFactor};g.prototype.calcCameraDistance=
function(a){a=this.computedMbs(a);return Math.max(0,f.dist(a,this._camPos)-a[3])};g.prototype.calcAngleDependentLoD=function(a){a=this.computedMbs(a);var b=a[3];a=(Math.abs(a[0]*(a[0]-this._camPos[0])+a[1]*(a[1]-this._camPos[1])+a[2]*(a[2]-this._camPos[2]))/f.length(a)+b)/f.dist(a,this._camPos);return Math.min(1,a)};g.prototype.hasLOD=function(a){return this.enableLoD&&null!=a.lodSelection};g.prototype.hasFeatures=function(a){return null!=a.featureData};g.prototype.getDistancePlanarMode=function(a,
b,c){var e=a[0]-b[0],d=a[1]-b[1];a=a[2]-b[2];e=e+e+d*d;if(e<=c*c)return Math.abs(a);c=Math.sqrt(e)-c;return Math.sqrt(a*a+c*c)};g.prototype.getDistanceGlobeMode=function(a,b,c){var e=f.length(b),d=f.length(a)-e;f.scale(a,f.dot(a,b)/f.length2(a),this._tmp0);if(f.dist2(b,this._tmp0)<=c*c)return Math.abs(d);b=f.scale(b,1/e,this._tmp0);var e=f.scale(b,e-c*c/2/e,this._tmp1),g=f.subtract(a,e,this._tmp2),g=f.subtract(g,f.scale(b,f.dot(b,g),this._tmp3),this._tmp2),e=f.add(e,f.scale(g,c/f.length(g),this._tmp2),
this._tmp2);c=f.dist(a,e);2E5<=d&&(a=f.subtract(a,e,this._tmp1),a=f.dot(a,b)/f.length(a),.08>a&&(a=1E-4),c/=a);return c};g.prototype.getDistance=function(a,b,c){return this.engineSR===n.SphericalRenderSpatialReference?this.getDistanceGlobeMode(a,b,c):this.getDistancePlanarMode(a,b,c)};g.prototype._selectErrorMetric=function(a){if(this.errorMetricPreference)for(var b=0;b<this.errorMetricPreference.length;b++)for(var c=0;c<a.length;c++){if(a[c].metricType===this.errorMetricPreference[b])return a[c]}else for(b=
0;b<a.length;b++)if(0<=this.supportedMetrics.indexOf(a[b].metricType))return a[b];return null};g.prototype.isTooHighLOD=function(a){if(a.lodSelection&&0<a.lodSelection.length){if(!1===this.hasFeatures(a))return!1;var b=this._selectErrorMetric(a.lodSelection);if(null!=b)return this.evaluateLODmetric(a,b)}return!1};g.prototype.evaluateLODmetric=function(a,b){if("screenSpaceRelative"===b.metricType)return a=this.computedMbs(a),a=2*this.getDistance(this._camPos,a,a[3])/this._screenSizeFactor,b.maxError*
this.screenspaceErrorBias<=a;if("maxScreenThreshold"===b.metricType){var c=this.calcScreenSpaceSize(a,a.mbs[3]);this.options.angleDependentLoD&&(c*=this.calcAngleDependentLoD(a));return c*this.screenspaceErrorBias<b.maxError}return"removedFeatureDiameter"===b.metricType?10>this.calcScreenSpaceSize(a,b.maxError)*this.screenspaceErrorBias:"distanceRangeFromDefaultCamera"===b.metricType?this.calcCameraDistance(a)>b.maxError:!1};g.prototype.isChosenLOD=function(a,b,c,e){return a.lodSelection&&0<a.lodSelection.length?
(c||!a.children)&&!(b&&e):!0};g.prototype.distToPOI=function(a,b){a=this.computedMbs(a);return f.dist(a,b)-a[3]};return g}()});