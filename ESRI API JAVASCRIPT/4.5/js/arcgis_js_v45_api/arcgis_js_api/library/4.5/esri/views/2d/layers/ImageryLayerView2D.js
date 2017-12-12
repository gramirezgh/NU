// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/HandleRegistry ../../../core/promiseUtils ../../../core/watchUtils ../../../Graphic ./LayerView2D ./support/ExportStrategy ../engine/BitmapSource ../engine/Canvas2DContainer ../engine/BitmapContainer ../../layers/RefreshableLayerView".split(" "),function(w,x,g,h,f,k,l,m,n,p,q,r,t,u,v){return function(e){function b(){var a=null!==e&&e.apply(this,
arguments)||this;a._handles=new k;a.container=new t;return a}g(b,e);b.prototype.hitTest=function(a,c){a=this.view.toMap(a,c);return l.resolve(new n({attributes:{},geometry:a}))};b.prototype.update=function(a){this.strategy.update(a);this.notifyChange("updating")};b.prototype.attach=function(){var a=this;this._tileContainer=new u;this.container.addChild(this._tileContainer);this.strategy=new q({container:this._tileContainer,fetchImage:this.fetchImage.bind(this),requestUpdate:function(){return a.requestUpdate()}});
this._handles.add([m.watch(this,"layer.exportImageServiceParameters.version",function(c){a._exportImageVersion!==c&&(a._exportImageVersion=c,a.requestUpdate())}),this.layer.on("redraw",function(){a.strategy.updateExports(function(c){c=c.source.data.getContext("2d");a.pixelData=a.layer.applyFilter(a._rawPixelData);a._drawPixelData(c,a.pixelData,0,0);return null})})])};b.prototype.detach=function(){this.container.removeChild(this._tileContainer);this.strategy.destroy();this._handles.removeAll()};b.prototype.moveStart=
function(){};b.prototype.viewChange=function(){};b.prototype.moveEnd=function(){this.requestUpdate()};b.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)};b.prototype.fetchImage=function(a,c,b,e){var d=this;this._exportImageVersion=this.get("layer.exportImageServiceParameters.version");return this.layer.fetchImage(a,c,b,e).then(function(a){d._rawPixelData=a.pixelData;d.pixelData=d.layer.applyFilter(d._rawPixelData);a=document.createElement("canvas");
a.width=c;a.height=b;var e=a.getContext("2d");d._drawPixelData(e,d.pixelData,0,0);d.notifyChange("updating");return new r(a)})};b.prototype._drawPixelData=function(a,c,b,e){if(c.pixelBlock){var d=c.pixelBlock;c=a.createImageData(d.width,d.height);d=d.getAsRGBA();c.data.set(d);a.putImageData(c,b,e)}};return b=h([f.subclass("esri.views.2d.layers.ImageryLayerView2D")],b)}(f.declared(p,v))});