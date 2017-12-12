// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ./Domain".split(" "),function(k,l,g,e,d,h){return function(f){function b(a){a=f.call(this,a)||this;a.maxValue=null;a.minValue=null;a.type="range";return a}g(b,f);e([d.property({json:{read:{source:"range",reader:function(a,c){return c.range&&c.range[1]}},write:{target:"range",writer:function(a,c,b){c[b]=[this.minValue,a]}}}})],b.prototype,"maxValue",void 0);e([d.property({json:{read:{source:"range",
reader:function(a,c){return c.range&&c.range[0]}},write:{target:"range",writer:function(a,c,b){c[b]=[a,this.maxValue]}}}})],b.prototype,"minValue",void 0);e([d.property()],b.prototype,"type",void 0);return b=e([d.subclass("esri.layers.support.RangeDomain")],b)}(d.declared(h))});