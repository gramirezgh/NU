// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ./Renderer ./Camera ./Util ./gl-matrix ../materials/internal/TexOnlyGLMaterial ./ModelDirtyTypesTs ./RenderPass ./HighlightUtils ./ComponentUtils ../../../webgl/FramebufferObject ../../../webgl/VertexArrayObject ../../../webgl/BufferObject ../../../webgl/Util ../../../webgl/Texture ../../support/debugFlags ../lighting/Lightsources ../../../webgl/enums ./DefaultVertexBufferLayouts ./DefaultVertexAttributeLocations".split(" "),function(t,M,y,z,A,q,B,N,r,C,u,D,E,F,G,H,v,I,O,J,
K){var w=q.vec3d,L=q.vec4d,l=q.mat4d;t=function(){function b(a,c,g,f,e,d){var k=this;this._acquiredTextures={};this._clearColor=L.createFrom(0,0,0,0);this._id2origin={};this._uniqueIdx=0;this._rctx=a;this._canvas=c;this._programRep=g;this._materialRep=f;this._textureRep=e;this._modelDirtySet=d;this._renderer=new y(g,f,e,this._rctx,!0);this._renderer.onHasHighlightsChanged=function(a){if(k.onHasHighlightsChanged)k.onHasHighlightsChanged(a)};this._renderer.setLighting({lights:[new I.AmbientLight(w.createFrom(1,
1,1))],groundLightingFactor:1,globalFactor:0})}b.prototype.dispose=function(){for(var a in this._acquiredTextures)this._acquiredTextures[a].fbo.dispose(),this._textureRep.release(a);this._acquiredTextures=null;this._renderer.dispose();this._renderer=null};b.prototype.addRenderGeometries=function(a){var c=this;a.forEach(function(a){null==a.origin&&(a.origin=c.getOrigin(a.center,a.bsRadius));a.idx=c._uniqueIdx++});this._renderer.modify(a,[])};b.prototype.removeRenderGeometries=function(a){this._renderer.modify([],
a)};b.prototype.updateRenderGeometries=function(a,c){a=a.map(function(a){return{renderGeometry:a,updateType:c}});this._renderer.modify([],[],a,{})};b.prototype.updateRenderOrder=function(a){0<Object.keys(a).length&&this._renderer.modifyRenderOrder(a)};b.prototype.setBackgroundColor=function(a){this._clearColor=a};b.prototype.addRenderGeometryHighlight=function(a,c){var g=a.instanceParameters,f=C.generateHighlightId();g.componentHighlights=u.addHighlight(g.componentHighlights,null,c,f);this.updateRenderGeometries([a],
32);return f};b.prototype.removeRenderGeometryHighlight=function(a,c){var g=a.instanceParameters;g.componentHighlights=u.removeHighlight(g.componentHighlights,c);this.updateRenderGeometries([a],32)};b.prototype.isEmpty=function(){return this._renderer.isEmpty()};b.prototype.processDirtyMaterials=function(){var a=this._modelDirtySet.getDirtyMaterials();a&&this._renderer.modify([],[],[],a);this._modelDirtySet.clearDirtyMaterials()};Object.defineProperty(b.prototype,"hasHighlights",{get:function(){return this._renderer.hasHighlights},
enumerable:!0,configurable:!0});b.prototype.draw=function(a,c){return this.drawPass(r.MATERIAL,a,c)};b.prototype.drawHighlights=function(a,c){return this.drawPass(r.MATERIAL_HIGHLIGHT,a,c)};b.prototype.drawPass=function(a,c,g){if(this.isEmpty()&&!v.OVERLAY_DRAW_TEST_TEXTURE)return!1;this.processDirtyMaterials();if(a===r.MATERIAL_HIGHLIGHT&&!this.hasHighlights)return!1;var f=c.getId(),e,d=this._rctx,k=d.gl;if(this._acquiredTextures[f])e=this._acquiredTextures[f].fbo;else{e=this._textureRep.aquire(f).getGLTexture();
e=D.createWithAttachments(this._rctx,e,{colorTarget:0,depthStencilTarget:0});var b=Object.keys(this._acquiredTextures).length;this._acquiredTextures[f]={texture:c,fbo:e,idx:b}}c=g.width;b=g.height;if(e.width!==c||e.height!==b)e.resize(c,b),e.colorTexture.setSamplingMode(9729);h.near=1;h.far=1E4;d.bindFramebuffer(e);d.setDepthTestEnabled(!1);d.setBlendFunctionSeparate(770,771,1,771);d.setClearColor.apply(d,this._clearColor);d.clear(k.COLOR_BUFFER_BIT);this._renderer.setPixelRatio(g.pixelRatio||1);
for(k=0;k<g.views.length;k++)e=g.views[k],h.viewport=e.viewport,l.ortho(0,e.extent[2]-e.extent[0],0,e.extent[3]-e.extent[1],h.near,h.far,h.projectionMatrix),l.identity(h.viewMatrix),l.translate(h.viewMatrix,[-e.extent[0],-e.extent[1],0]),h.setGLViewport(this._rctx),v.OVERLAY_DRAW_TEST_TEXTURE&&this._drawTestTexture(c,b,x[this._acquiredTextures[f].idx%x.length]),this._renderer.renderGeometryPass(a,h);d.setDepthTestEnabled(!0);d.setBlendFunctionSeparate(770,771,1,771);d.bindFramebuffer(null);d.setViewport(0,
0,this._canvas.width,this._canvas.height);return!0};b.prototype._drawTestTexture=function(a,c,g){var f=this._rctx,e=f.gl;if(!this._testPatternMat){for(var d=new Uint8Array(a*c*4),b=0,h=0;h<c;h++)for(var m=0;m<a;m++){var n=Math.floor(m/10),p=Math.floor(h/10);2>n||2>p||10*n>a-20||10*p>c-20?(d[b++]=255,d[b++]=255,d[b++]=255,d[b++]=255):(d[b++]=255,d[b++]=255,d[b++]=255,n&1&&p&1?d[b++]=m&1^h&1?0:255:d[b++]=n&1^p&1?0:128)}a=new H(f,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:a,
height:c},d);this._testPatternMat=new B(this._programRep,a,[1,1,1,1],!0,e.ALWAYS);this._testPatternBindParams={proj:l.identity(),view:l.identity(),nearFar:[-1,1],origin:[0,0,0]};e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,-1,1,0,0,1,1,1,0,1,1]);this._quadVAO=new E(f,K.Default3D,{geometry:J.Pos3Tex},{geometry:F.createVertex(f,35044,e)})}this._testPatternMat.setColor([g[0],g[1],g[2],1]);this._testPatternMat.bind(f,this._testPatternBindParams);this._testPatternMat.bindView(f,this._testPatternBindParams);
f.bindVAO(this._quadVAO);f.drawArrays(5,0,G.vertexCount(this._quadVAO,"geometry"));this._testPatternMat.release(f)};b.prototype.getOrigin=function(a,c){var b=0;c=10*c/1E4;1<c&&(b=Math.ceil(A.logWithBase(c,2)));c=1E4*Math.pow(2,b);var f=Math.round(a[0]/c),e=Math.round(a[1]/c);a=Math.round(a[2]/c);var b=b+"_"+f+"_"+e+"_"+a,d=this._id2origin[b];null==d&&(d={vec3:w.createFrom(f*c,e*c,a*c),id:b},this._id2origin[b]=d);return d};return b}();var x=[[1,.5,.5],[.5,.5,1],[.5,1,.5]],h=new z;return t});