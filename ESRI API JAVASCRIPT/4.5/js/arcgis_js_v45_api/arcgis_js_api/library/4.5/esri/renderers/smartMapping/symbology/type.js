// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang ../../../Color ./support/colors ./support/utils".split(" "),function(n,p,v,d,w,h){function t(b,a){return b.map(function(c){c=new d(c);null!=a&&(c.a=a);return c})}function u(b,a,c,k){var e;b=w[b];var f=t(b.stops);if(b)switch(k){case "point":case "multipoint":e="point-cloud-class"===c?{theme:c,colors:f}:{theme:c,colors:f,noDataColor:new d(a.noDataColor),opacity:1,outline:{color:new d(a.outline.color),width:a.outline.width},size:a.size};break;case "polyline":e=
{theme:c,colors:f,noDataColor:new d(a.noDataColor),opacity:1,width:a.width};break;case "polygon":e={theme:c,colors:f,noDataColor:new d(a.noDataColor),opacity:a.fillOpacity||1,outline:{color:new d(a.outline.color),width:a.outline.width}};break;case "mesh":e={theme:c,colors:f,noDataColor:new d(a.noDataColor),opacity:a.fillOpacity||1}}return e}function x(b,a,c){a=l[a];c=h.getStorageType(c);return(c=a&&a[c])&&c[b]}n={color:[153,153,153,1],width:"1px"};p={light:"streets gray topo terrain national-geographic oceans osm gray-vector streets-vector topo-vector streets-relief-vector streets-navigation-vector".split(" "),
dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]};var g="tropical-bliss desert-blooms under-the-sea vibrant-rainbow ocean-bay prairie-summer pastel-chalk".split(" "),m={"default":{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",basemapGroups:p,pointSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:n,size:"8px"},primary:"cat-dark",secondary:["cat-light"].concat(g)},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[26,
26,26,1],width:"1px"},size:"8px"},primary:"cat-light",secondary:["cat-dark"].concat(g)}},polylineSchemes:{light:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"cat-dark",secondary:["cat-light"].concat(g)},dark:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"cat-light",secondary:["cat-dark"].concat(g)}},polygonSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:n,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(g)},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[51,
51,51,1],width:"1px"},fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(g)}}},"point-cloud-class":{name:"point-cloud-class",label:"Point Cloud Class",description:"Default theme for visualizing point cloud data based on classification.",basemapGroups:p,pointSchemes:{light:{primary:"point-cloud-class-scheme",secondary:[]},dark:{primary:"point-cloud-class-scheme",secondary:[]}}}},l={};(function(){for(var b in m){var a=m[b],c=a.basemapGroups,k=l[b]={basemaps:[].concat(c.light).concat(c.dark),
point:{},polyline:{},polygon:{}},e;for(e in c)for(var f=c[e],d=0;d<f.length;d++){var q=f[d];a.pointSchemes&&(k.point[q]=a.pointSchemes[e]);a.polylineSchemes&&(k.polyline[q]=a.polylineSchemes[e]);a.polygonSchemes&&(k.polygon[q]=a.polygonSchemes[e])}}})();var r={getThemes:function(b){var a=[],c;for(c in m){var d=m[c],e=l[c],f=h.getBasemapId(b,e.basemaps);f&&-1===e.basemaps.indexOf(f)||a.push({name:d.name,label:d.label,description:d.description,basemaps:e.basemaps.slice(0)})}return a},getSchemes:function(b){var a=
b.geometryType,c="mesh"!==a&&b.worldScale,d=b.view,e=b.theme||"default";b=h.getBasemapId(b.basemap,l[e].basemaps);var f=x(b,e,a),g;f&&(g=u(f.primary,f.common,e,a),g={primaryScheme:c?r.toWorldScale({scheme:g,view:d}):g,secondarySchemes:f.secondary.map(function(b){b=u(b,f.common,e,a);return c?r.toWorldScale({scheme:b,view:d}):b}),basemapId:b});return g},cloneScheme:function(b){var a;b&&(a=v.mixin({},b),a.colors=t(a.colors),a.noDataColor&&(a.noDataColor=new d(a.noDataColor)),a.outline&&(a.outline={color:a.outline.color&&
new d(a.outline.color),width:a.outline.width}));return a},toWorldScale:function(b){if(b.scheme&&b.view){var a=b.scheme,c=b.scheme;return a.hasOwnProperty("size")?(a.size&&(a.size=h.toWorldScale(a.size,b.view)),a):c.hasOwnProperty("width")?(c.width&&(c.width=h.toWorldScale(c.width,b.view)),c):b.scheme}}};return r});