// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang ../core/lang ./SpatialReference ./Geometry ./Point ./Extent ./support/coordsUtils ./support/mathUtils ./support/webMercatorUtils ./support/zmUtils".split(" "),function(L,M,N,O,m,K,t,u,v,w){var x=function(a){return function(b,c){return null==b?c:null==c?b:a(b,c)}},p=x(Math.min),r=x(Math.max),q=O.createSubclass({declaredClass:"esri.geometry.Polygon",type:"polygon",getDefaults:function(a){return{rings:[]}},normalizeCtorArgs:function(a,b){var c=null,d,f,l=null;a&&!Array.isArray(a)?
(c=a.rings?a.rings:null,b||(a.spatialReference?b=a.spatialReference:a.rings||(b=a)),d=a.hasZ,f=a.hasM):c=a;c=c||[];b=b||N.WGS84;c.length&&c[0]&&null!=c[0][0]&&"number"==typeof c[0][0]&&(c=[c]);if(l=c[0]&&c[0][0])void 0===d&&void 0===f?(d=2<l.length,f=!1):void 0===d?d=!f&&3<l.length:void 0===f&&(f=!d&&3<l.length);return{rings:c,spatialReference:b,hasZ:d,hasM:f}},_ring:0,properties:{cache:{dependsOn:["hasM","hasZ","rings"]},centroid:{readOnly:!0,dependsOn:["cache"],get:function(a){var b=t.centroid([],
this.rings,this.hasZ);if(isNaN(b[0])||isNaN(b[1])||this.hasZ&&isNaN(b[2]))return null;a=a||new m;a.x=b[0];a.y=b[1];a.spatialReference=this.spatialReference;this.hasZ&&(a.z=b[2]);return a}},extent:{dependsOn:["cache"],readOnly:!0,get:function(){var a=this.rings,b=a.length;if(!b||!a[0].length)return null;var c,d,f,l,g,e,h,k,n,A,q,m=g=a[0][0][0],t=e=a[0][0][1],B,u,v=this.spatialReference,G=[],C,D,E,F,y,z,H,I,J=this.hasZ,w=this.hasM,x=J?3:2;for(n=0;n<b;n++){c=a[n];C=D=c[0]&&c[0][0];E=F=c[0]&&c[0][1];
q=c.length;H=I=y=z=void 0;for(A=0;A<q;A++)d=c[A],f=d[0],l=d[1],m=p(m,f),t=p(t,l),g=r(g,f),e=r(e,l),C=p(C,f),E=p(E,l),D=r(D,f),F=r(F,l),J&&2<d.length&&(f=d[2],B=p(B,f),h=r(h,f),y=p(y,f),z=r(z,f)),w&&d.length>x&&(d=d[x],u=p(B,d),k=r(h,d),H=p(y,d),I=r(z,d));G.push(new K({xmin:C,ymin:E,zmin:y,mmin:H,xmax:D,ymax:F,zmax:z,mmax:I,spatialReference:v}))}a=new K;a.xmin=m;a.ymin=t;a.xmax=g;a.ymax=e;a.spatialReference=v;J&&(a.zmin=B,a.zmax=h);w&&(a.mmin=u,a.mmax=k);a.cache._partwise=1<G.length?G:null;return a}},
isSelfIntersecting:{dependsOn:["cache"],readOnly:!0,get:function(){var a=this.rings,b=a.length,c,d,f,l,g,e,h,k,n;for(l=0;l<b;l++){c=a[l];for(d=0;d<c.length-1;d++)for(e=[[c[d][0],c[d][1]],[c[d+1][0],c[d+1][1]]],f=l+1;f<b;f++)for(g=0;g<a[f].length-1;g++)if(h=[[a[f][g][0],a[f][g][1]],[a[f][g+1][0],a[f][g+1][1]]],(k=u._getLineIntersection2(e,h))&&!(k[0]===e[0][0]&&k[1]===e[0][1]||k[0]===h[0][0]&&k[1]===h[0][1]||k[0]===e[1][0]&&k[1]===e[1][1]||k[0]===h[1][0]&&k[1]===h[1][1]))return!0;g=c.length;if(!(4>=
g))for(d=0;d<g-3;d++)for(n=g-1,0===d&&(n=g-2),e=[[c[d][0],c[d][1]],[c[d+1][0],c[d+1][1]]],f=d+2;f<n;f++)if(h=[[c[f][0],c[f][1]],[c[f+1][0],c[f+1][1]]],(k=u._getLineIntersection2(e,h))&&!(k[0]===e[0][0]&&k[1]===e[0][1]||k[0]===h[0][0]&&k[1]===h[0][1]||k[0]===e[1][0]&&k[1]===e[1][1]||k[0]===h[1][0]&&k[1]===h[1][1]))return!0}return!1}},rings:null},addRing:function(a){if(a){this.clearCache();var b=this.rings,c=b.length;if(Array.isArray(a[0]))b[c]=a.concat();else{var d=[];b[c]=d;b=0;for(c=a.length;b<c;b++)d[b]=
a[b].toArray()}return this}},clone:function(){var a=new q;a.spatialReference=this.spatialReference;a.rings=L.clone(this.rings);a.hasZ=this.hasZ;a.hasM=this.hasM;return a},contains:function(a){if(!a)return!1;v.canProject(a,this.spatialReference)&&(a=v.project(a,this.spatialReference));return t.contains(this.rings,t.fromGeom(a))},isClockwise:function(a){var b=0,c=0,d=0,f,l=a.length,g,e,h,k=this.hasZ,n=this.hasM;for(f=0;f<l;f++)g=a[f],e=a[(f+1)%l],Array.isArray(g)?(b+=g[0]*e[1]-e[0]*g[1],h=2,2<g.length&&
2<e.length&&k&&(c+=g[0]*e[2]-e[0]*g[2],h=3),g.length>h&&e.length>h&&n&&(d+=g[0]*e[h]-e[0]*g[h])):(b+=g.x*e.y-e.x*g.y,g.hasZ&&e.hasZ&&(c+=g.x*e.z-e.x*g.z),g.hasM&&e.hasM&&(d+=g.x*e.m-e.x*g.m));return 0>=b&&0>=c&&0>=d},getPoint:function(a,b){if(this._validateInputs(a,b)){a=this.rings[a][b];b=this.hasZ;var c=this.hasM;return b&&!c?new m(a[0],a[1],a[2],void 0,this.spatialReference):c&&!b?new m(a[0],a[1],void 0,a[2],this.spatialReference):b&&c?new m(a[0],a[1],a[2],a[3],this.spatialReference):new m(a[0],
a[1],this.spatialReference)}},insertPoint:function(a,b,c){if(this._validateInputs(a)&&M.isDefined(b)&&0<=b&&b<=this.rings[a].length)return this.clearCache(),w.updateSupportFromPoint(this,c),Array.isArray(c)||(c=c.toArray()),this.rings[a].splice(b,0,c),this},removePoint:function(a,b){if(this._validateInputs(a,b))return this.clearCache(),new m(this.rings[a].splice(b,1)[0],this.spatialReference)},removeRing:function(a){if(this._validateInputs(a,null)){this.clearCache();a=this.rings.splice(a,1)[0];var b,
c=a.length,d=this.spatialReference;for(b=0;b<c;b++)a[b]=new m(a[b],d);return a}},setPoint:function(a,b,c){if(this._validateInputs(a,b))return this.clearCache(),w.updateSupportFromPoint(this,c),Array.isArray(c)||(c=c.toArray()),this.rings[a][b]=c,this},toJSON:function(){var a=this.spatialReference,a={rings:this.rings,spatialReference:a&&a.toJSON()};this.hasZ&&(a.hasZ=!0);this.hasM&&(a.hasM=!0);return a},_insertPoints:function(a,b){this.clearCache();this._ring=b;this.rings[this._ring]||(this.rings[this._ring]=
[]);a.forEach(this._addPoint,this)},_validateInputs:function(a,b){return null!==a&&void 0!==a&&(0>a||a>=this.rings.length)||null!==b&&void 0!==a&&(0>b||b>=this.rings[a].length)?!1:!0}});q.createEllipse=function(a){var b=a.center.x,c=a.center.y,d=a.center.z,f=a.center.m,l=a.longAxis,g=a.shortAxis,e=a.numberOfPoints;a=a.map;var h,k,n,m=[],p=2*Math.PI/e;for(k=0;k<e;k++)h=Math.cos(k*p),n=Math.sin(k*p),h=a.toMap({x:l*h+b,y:g*n+c}),null==d||h.hasZ||(h.z=d),null==f||h.hasM||(h.m=f),m.push(h);m.push(m[0]);
return new q({rings:[m],spatialReference:a.spatialReference})};q.createCircle=function(a){return q.createEllipse({center:a.center,longAxis:a.r,shortAxis:a.r,numberOfPoints:a.numberOfPoints,map:a.map})};q.fromExtent=function(a){var b=a.clone().normalize();a=a.spatialReference;var c=!1,d=!1;b.map(function(a){a.hasZ&&(c=!0);a.hasM&&(d=!0)});b={rings:b.map(function(a){var b=[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]];if(c&&a.hasZ)for(var f=(a.zmax-a.zmin)/2,e=0;e<
b.length;e++)b[e].push(f);if(d&&a.hasM)for(a=(a.mmax-a.mmin)/2,e=0;e<b.length;e++)b[e].push(a);return b}),spatialReference:a?a.toJSON():null};c&&(b.hasZ=!0);d&&(b.hasM=!0);return new q(b)};return q});