//>>built
define("dojox/analytics/plugins/gestureEvents","dojo/_base/lang ../_base dojo/_base/window dojo/on dojo/_base/config dojo/touch dojox/gesture/tap dojox/gesture/swipe".split(" "),function(b,f,h,k,g,n,l,m){return f.plugins.gestureEvents=new function(){this.watchSwipe=void 0!==g.watchSwipe&&!g.watchSwipe?!1:!0;this.swipeSampleDelay=g.swipeSampleDelay||1E3;this.targetProps=g.targetProps||"id className localName href spellcheck lang textContent value".split(" ");this.textContentMaxChars=g.textContentMaxChars||
50;this.addDataSwipe=b.hitch(f,"addData","gesture.swipe");this.sampleSwipe=function(a){this._rateLimited||(this.addDataSwipe(this.trimEvent(a)),this._rateLimited=!0,setTimeout(b.hitch(this,function(){this._rateLimited&&(this.trimEvent(this._lastSwipeEvent),delete this._lastSwipeEvent,delete this._rateLimited)}),this.swipeSampleDelay));return this._lastSwipeEvent=a};this.watchSwipe&&k(h.doc,m,b.hitch(this,"sampleSwipe"));this.addData=b.hitch(f,"addData","gesture.tap");this.onGestureTap=function(a){this.addData(this.trimEvent(a))};
k(h.doc,l,b.hitch(this,"onGestureTap"));this.addDataDoubleTap=b.hitch(f,"addData","gesture.tap.doubletap");this.onGestureDoubleTap=function(a){this.addDataDoubleTap(this.trimEvent(a))};k(h.doc,l.doubletap,b.hitch(this,"onGestureDoubleTap"));this.addDataTapHold=b.hitch(f,"addData","gesture.tap.taphold");this.onGestureTapHold=function(a){this.addDataTapHold(this.trimEvent(a))};k(h.doc,l.hold,b.hitch(this,"onGestureTapHold"));this.trimEvent=function(a){var b={},c;for(c in a)switch(c){case "target":var e=
this.targetProps;b[c]={};for(var d=0;d<e.length;d++)a[c][e[d]]&&("text"==e[d]||"textContent"==e[d]?"HTML"!=a[c].localName&&"BODY"!=a[c].localName&&(b[c][e[d]]=a[c][e[d]].substr(0,this.textContentMaxChars)):b[c][e[d]]=a[c][e[d]]);break;case "clientX":case "clientY":case "screenX":case "screenY":case "dx":case "dy":case "time":b[c]=a[c]}return b}}});