// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["dojo/_base/array","../SpatialReference","../Point","../Polyline","../Polygon"],function(r,E,u,z,C){function v(a){var k=Math.PI/180,c=Math.sin(a.y*k);return new u(6378137*a.x*k,3167719.6636462314*(c/(1-.006694379990197414*c*c)-6.111035746609262*Math.log((1-.0818191908429643*c)/(1+.0818191908429643*c))))}function y(a,k,c,e){var m=1/298.257223563,p=Math.sin(c);c=Math.cos(c);var g=(1-m)*Math.tan(a);a=1/Math.sqrt(1+g*g);for(var h=g*a,d=Math.atan2(g,c),g=a*p*a*p,f=1-g,b=2.7233160610754688E11*f/
4.040829998466145E13,x=1+b/16384*(4096+b*(-768+b*(320-175*b))),w=b/1024*(256+b*(-128+b*(74-47*b))),b=e/(6356752.31424518*x),t=2*Math.PI,n,l,q,r;1E-12<Math.abs(b-t);)q=Math.cos(2*d+b),n=Math.sin(b),l=Math.cos(b),r=w*n*(q+w/4*(l*(-1+2*q*q)-w/6*q*(-3+4*n*n)*(-3+4*q*q))),t=b,b=e/(6356752.31424518*x)+r;e=h*n-a*l*c;f=m/16*f*(4+m*(4-3*f));return new u((k+(Math.atan2(n*p,a*l-h*n*c)-(1-f)*m*Math.sqrt(g)*(b+f*n*(q+f*l*(-1+2*q*q)))))/(Math.PI/180),Math.atan2(h*l+a*n*c,(1-m)*Math.sqrt(g+e*e))/(Math.PI/180),new E({wkid:4326}))}
function A(a,k,c,e){var m=1/298.257223563,p=e-k,g=Math.atan((1-m)*Math.tan(a)),h=Math.atan((1-m)*Math.tan(c)),d=Math.sin(g),g=Math.cos(g),f=Math.sin(h),h=Math.cos(h),b=p,x,w=1E3,t,n,l,q,r,u,v;do{l=Math.sin(b);q=Math.cos(b);n=Math.sqrt(h*l*h*l+(g*f-d*h*q)*(g*f-d*h*q));if(0===n)return 0;q=d*f+g*h*q;r=Math.atan2(n,q);u=g*h*l/n;t=1-u*u;l=q-2*d*f/t;isNaN(l)&&(l=0);v=m/16*t*(4+m*(4-3*t));x=b;b=p+(1-v)*m*u*(r+v*n*(l+v*q*(-1+2*l*l)))}while(1E-12<Math.abs(b-x)&&0<--w);if(0===w)return d=e-k,{azimuth:Math.atan2(Math.sin(d)*
Math.cos(c),Math.cos(a)*Math.sin(c)-Math.sin(a)*Math.cos(c)*Math.cos(d)),geodesicDistance:6371009*Math.acos(Math.sin(a)*Math.sin(c)+Math.cos(a)*Math.cos(c)*Math.cos(e-k))};a=2.7233160610754688E11*t/4.040829998466145E13;k=a/1024*(256+a*(-128+a*(74-47*a)));return{azimuth:Math.atan2(h*Math.sin(b),g*f-d*h*Math.cos(b)),geodesicDistance:6356752.31424518*(1+a/16384*(4096+a*(-768+a*(320-175*a))))*(r-k*n*(l+k/4*(q*(-1+2*l*l)-k/6*l*(-3+4*n*n)*(-3+4*l*l)))),reverseAzimuth:Math.atan2(g*Math.sin(b),g*f*Math.cos(b)-
d*h)}}function D(a,k){var c=Math.PI/180;637.100877151506>k&&(k=637.100877151506);if(!(a instanceof z||a instanceof C))throw console.error("_geodesicDensify: the input geometry is neither polyline nor polygon"),Error("_geodesicDensify: the input geometry is neither polyline nor polygon");var e=a instanceof z,m=[],p;r.forEach(e?a.paths:a.rings,function(a){m.push(p=[]);p.push([a[0][0],a[0][1]]);var h,d,f,b,g,e;h=a[0][0]*c;d=a[0][1]*c;for(g=0;g<a.length-1;g++)if(f=a[g+1][0]*c,b=a[g+1][1]*c,h!==f||d!==
b){b=A(d,h,b,f);f=b.azimuth;b=b.geodesicDistance;var t=b/k;if(1<t){for(e=1;e<=t-1;e++){var n=y(d,h,f,e*k);p.push([n.x,n.y])}e=y(d,h,f,(b+Math.floor(t-1)*k)/2);p.push([e.x,e.y])}d=y(d,h,f,b);p.push([d.x,d.y]);h=d.x*c;d=d.y*c}});return e?new z({paths:m,spatialReference:a.spatialReference}):new C({rings:m,spatialReference:a.spatialReference})}var B={esriMiles:1,esriKilometers:1.609344,esriFeet:5280,esriMeters:1609.34,esriYards:1760,esriNauticalMiles:.869,esriCentimeters:160934,esriDecimeters:16093.4,
esriInches:63360,esriMillimeters:1609340,esriAcres:1,esriAres:40.4685642,esriSquareKilometers:.00404685642,esriSquareMiles:.0015625,esriSquareFeet:43560,esriSquareMeters:4046.85642,esriHectares:.404685642,esriSquareYards:4840,esriSquareInches:6272640,esriSquareMillimeters:4046856420,esriSquareCentimeters:4.04685642E7,esriSquareDecimeters:404685.642};return{geodesicDensify:D,geodesicLengths:function(a,k){var c=Math.PI/180,e=[];r.forEach(a,function(a,p){var g=0;r.forEach(a.paths,function(a,d){d=0;var f,
b,e,h,k;for(f=1;f<a.length;f++)if(b=a[f-1][0]*c,e=a[f][0]*c,h=a[f-1][1]*c,k=a[f][1]*c,h!==k||b!==e)b=A(h,b,k,e),d+=b.geodesicDistance/1609.344;g+=d});g*=B[k];e.push(g)});return e},geodesicAreas:function(a,k){var c=[];r.forEach(a,function(a,e){a=D(a,1E4);c.push(a)});var e=[],m,p;r.forEach(c,function(a,c){var d=0;r.forEach(a.rings,function(a,b){m=v(new u(a[0][0],a[0][1]));p=v(new u(a[a.length-1][0],a[a.length-1][1]));b=p.x*m.y-m.x*p.y;var c;for(c=0;c<a.length-1;c++)m=v(new u(a[c+1][0],a[c+1][1])),p=
v(new u(a[c][0],a[c][1])),b+=p.x*m.y-m.x*p.y;d+=b/4046.87});d*=B[k];e.push(d/-2)});return e},_unitsDictionary:B,_toEqualAreaPoint:v,_directGeodeticSolver:y,_inverseGeodeticSolver:A}});