// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/array"],function(d,c){return d(null,{declaredClass:"esri.layers.support.WMSLayerInfo",name:null,title:null,description:null,extent:null,legendURL:null,subLayers:[],allExtents:[],spatialReferences:[],constructor:function(a){a&&(this.name=a.name,this.title=a.title,this.description=a.description,this.extent=a.extent,this.legendURL=a.legendURL,this.subLayers=a.subLayers?a.subLayers:[],this.allExtents=a.allExtents?a.allExtents:[],this.spatialReferences=a.spatialReferences?
a.spatialReferences:[])},clone:function(){var a={name:this.name,title:this.title,description:this.description,legendURL:this.legendURL},b;this.extent&&(a.extent=this.extent.getExtent());a.subLayers=[];c.forEach(this.subLayers,function(b){a.subLayers.push(b.clone())});a.allExtents=[];for(b in this.allExtents)b=parseInt(b,10),isNaN(b)||(a.allExtents[b]=this.allExtents[b].getExtent());a.spatialReferences=[];c.forEach(this.spatialReferences,function(b){a.spatialReferences.push(b)});return a}})});