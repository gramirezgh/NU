// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../lib/glMatrix","./MomentumNavigationBase"],function(g,h,k,b,l){Object.defineProperty(h,"__esModule",{value:!0});g=function(g){function f(a,c){a=g.call(this,a,c)||this;a._scaleState={plane:{distance:0,normal:b.vec3d.create()},center:b.vec3d.create()};a._rotationState={center:b.vec3d.create(),axis:b.vec3d.create()};a._panState={direction:b.vec3d.create()};a.pan.enabled=!1;return a}k(f,g);f.prototype.addPanValue=function(a,
c,d,e){this.pan.estimator.add(c[0],c[1],d,.001*a);b.vec3d.set(e,this._panState.direction);b.vec3d.normalize(this._panState.direction)};f.prototype.addRotationValue=function(a,c,d,e){this.rotation.estimator.add(e,.001*a);b.vec3d.set(c,this._rotationState.center);b.vec3d.set(d,this._rotationState.axis)};f.prototype.addScaleValue=function(a,c,d,e){this.zoom.estimator.add(c,.001*a);this._scaleState.plane.distance=d.distance;b.vec3d.set(d.normal,this._scaleState.plane.normal);b.vec3d.set(e,this._scaleState.center)};
f.prototype.onUpdate=function(a,c,d){if(this.zoom.momentum){var e=this.zoom.momentum.valueDelta(a,c);this.helper.planar.applyZoom(this._scaleState.plane,this.view,d,this._scaleState.center,e)}this.pan.momentum&&(b.vec3d.normalize(this._panState.direction),e=b.vec3d.dist(this.pan.momentum.dataOldest,this.pan.momentum.dataNewest),e/=this.pan.momentum.dataTimeDelta,e*=this.pan.momentum.velocityFactor(a),b.vec3d.scale(this._panState.direction,e*c),b.vec3d.subtract(d.eye,this._panState.direction),b.vec3d.subtract(d.center,
this._panState.direction),d.markViewDirty());this.rotation.momentum&&(a=this.rotation.momentum.valueDelta(a,c),this.helper.applyRotation(d,this._rotationState.center,this._rotationState.axis,a))};return f}(l.MomentumNavigationBase);h.MomentumNavigationLocal=g});