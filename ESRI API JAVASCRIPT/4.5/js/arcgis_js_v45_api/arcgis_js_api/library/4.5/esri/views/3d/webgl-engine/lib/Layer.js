// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports dojo/has ./IdGen ./Octree ./PerformanceTimer ./Util ./gl-matrix ./ModelContentType".split(" "),function(n,p,q,h,k,r,g,l,m){var f=l.vec3d;return function(){function a(b,d,c){this._parentStages=[];this._children=[];this.id=a._idGen.gen(c);this.name=b;d=d||{};this.group=d.group||"";this.state=d.state||"VISIBLE";this.interaction=d.interaction||"PICKABLE";this.translation=f.create(d.translation);this._extent=[f.createFrom(0,0,0),f.createFrom(1E3,1E3,1E3)];this._extentDirty=!0}a.prototype.getId=
function(){return this.id};a.prototype.getParentStages=function(){return this._parentStages};a.prototype.addParentStage=function(b){-1===this._parentStages.indexOf(b)&&this._parentStages.push(b)};a.prototype.removeParentStage=function(b){b=this._parentStages.indexOf(b);-1<b&&this._parentStages.splice(b,1)};a.prototype.getName=function(){return this.name};a.prototype.getGroup=function(){return this.group};a.prototype.getState=function(){return this.state};a.prototype.getInteraction=function(){return this.interaction};
a.prototype.getTranslation=function(){return this.translation};a.prototype.getObjectIds=function(){return this._children.map(function(b){return b.getId()})};a.prototype.getObjects=function(){return this._children};a.prototype.setState=function(b){this.state=b};a.prototype.getExtent=function(){this._updateExtent();return this._extent};a.prototype.addObject=function(b){this._children.push(b);b.addParentLayer(this);this.notifyDirty("layObjectAdded",b);this._invalidateExtent();this._spatialAccelerator&&
this._spatialAccelerator.add(b)};a.prototype.hasObject=function(b){return-1<this._children.indexOf(b)};a.prototype.removeObject=function(b){return null!=g.arrayRemove(this._children,b)?(b.removeParentLayer(this),this.notifyDirty("layObjectRemoved",b),this._invalidateExtent(),this._spatialAccelerator&&this._spatialAccelerator.remove(b),!0):!1};a.prototype.replaceObject=function(b,a){var d=this._children.indexOf(b);g.assert(-1<d,"Layer.replaceObject: layer doesn't contain specified object");this._children[d]=
a;b.removeParentLayer(this);a.addParentLayer(this);this.notifyDirty("layObjectReplaced",[b,a]);this._invalidateExtent();this._spatialAccelerator&&(this._spatialAccelerator.remove(b),this._spatialAccelerator.add(a))};a.prototype.notifyObjectBBChanged=function(b,a){this._spatialAccelerator&&this._spatialAccelerator.update(b,a)};a.prototype.getCenter=function(){this._updateExtent();var b=f.create();return f.lerp(this._extent[0],this._extent[1],.5,b)};a.prototype.getBSRadius=function(){this._updateExtent();
return.5*f.dist(this._extent[0],this._extent[1])};a.prototype.getSpatialQueryAccelerator=function(){if(this._spatialAccelerator)return this._spatialAccelerator;if(50<this._children.length)return this._createOctree(),this._spatialAccelerator};a.prototype.shaderTransformationChanged=function(){this.notifyDirty("shaderTransformationChanged",null)};a.prototype.invalidateSpatialQueryAccelerator=function(){this._spatialAccelerator=null};a.prototype.notifyDirty=function(b,a,c,e){c=c||m.LAYER;e=e||this;for(var d=
0;d<this._parentStages.length;d++)this._parentStages[d].notifyDirty(c,e,b,a)};a.prototype._createOctree=function(){for(var b=this.getExtent(),a=0,c=0;3>c;c++)a=Math.max(a,b[1][c]-b[0][c]);c=f.create();f.lerp(b[0],b[1],.5,c);this._spatialAccelerator=new k(c,1.2*a);this._spatialAccelerator.add(this._children)};a.prototype._invalidateExtent=function(){this._extentDirty=!0};a.prototype._updateExtent=function(){if(this._extentDirty)if(0===this._children.length)this._extent=[[0,0,0],[0,0,0]];else{var b=
this._children[0];this._extent=[f.create(b.getBBMin()),f.create(b.getBBMax())];for(b=0;b<this._children.length;++b)for(var a=this._children[b],c=a.getBBMin(),a=a.getBBMax(),e=0;3>e;++e)this._extent[0][e]=Math.min(this._extent[0][e],c[e]),this._extent[1][e]=Math.max(this._extent[1][e],a[e]);this._extentDirty=!1}};a._idGen=new h;return a}()});