// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ./Symbol3D ../core/accessorSupport/decorators".split(" "),function(k,l,g,c,d,h,b){return function(f){function a(a){a=f.call(this)||this;a.type="mesh-3d";return a}g(a,f);e=a;a.prototype.clone=function(){return new e({styleOrigin:d.clone(this.styleOrigin),symbolLayers:d.clone(this.symbolLayers),thumbnail:d.clone(this.thumbnail)})};c([b.property()],a.prototype,"type",void 0);c([b.shared(["fill"])],
a.prototype,"_allowedLayerTypes",void 0);return a=e=c([b.subclass("esri.symbols.MeshSymbol3D")],a);var e}(b.declared(h))});