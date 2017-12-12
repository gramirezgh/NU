// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("esri/OAuthSignInHandler","./Credential ./domUtils ./lang ./urlUtils dijit/Dialog dijit/registry dojo/_base/config dojo/_base/Deferred dojo/_base/kernel dojo/dom-attr dojo/i18n!esri/nls/jsapi dojo/io-query dojo/sniff dojo/json dijit/form/Button dojo/query".split(" "),function(p,h,q,r,l,m,k,s,f,t,u,n,v,w){return{_oAuthDfd:null,_oAuthIntervalId:0,_oAuthDialogContent:"\x3cdiv class\x3d'dijitDialogPaneContentArea'\x3e\x3cdiv style\x3d'padding-bottom: 5px; word-wrap: break-word;'\x3e${oAuthInfo}\x3c/div\x3e\x3cdiv style\x3d'margin: 0px; padding: 0px; height: 10px;'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriErrorMsg' style\x3d'display: none; color: white; background-color: #D46464; text-align: center; padding-top: 3px; padding-bottom: 3px;'\x3e${invalidUser}\x3c/div\x3e\x3cdiv style\x3d'margin: 0px; padding: 0px; height: 10px;'\x3e\x3c/div\x3e\x3cdiv class\x3d'dijitDialogPaneActionBar'\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' data-dojo-props\x3d'type:\"button\", \"class\":\"esriIdSubmit\"'\x3e${lblOk}\x3c/button\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' data-dojo-props\x3d'type:\"button\", \"class\":\"esriIdCancel\"'\x3e${lblCancel}\x3c/button\x3e\x3c/div\x3e",
setOAuthRedirectionHandler:function(a){this._oAuthRedirectFunc=a},oAuthSignIn:function(a,c,b,d){var e=this._oAuthDfd=new s;e.resUrl_=a;e.sinfo_=c;e.oinfo_=b;var k=!d||!1!==d.oAuthPopupConfirmation;if(!b.popup||!k)return this._doOAuthSignIn(a,c,b),e;this._nls||(this._nls=u.identity);this.oAuthDialog||(this.oAuthDialog=this._createOAuthDialog());a=this.oAuthDialog;c=d&&d.error;d=d&&d.token;h.hide(a.errMsg_);c&&(403==c.code&&d)&&(t.set(a.errMsg_,"innerHTML",this._nls.forbidden),h.show(a.errMsg_));a.show();
return e},setOAuthResponseHash:function(a){var c=this._oAuthDfd;this._oAuthDfd=null;if(c&&a)if(clearInterval(this._oAuthIntervalId),"#"===a.charAt(0)&&(a=a.substring(1)),a=n.queryToObject(a),a.error)a=Error("access_denied"===a.error?"ABORTED":"OAuth: "+a.error+" - "+a.error_description),a.code="IdentityManagerBase.2",a.log=k.isDebug,c.errback(a);else{var b=c.oinfo_._oAuthCred,d=new p({userId:a.username,server:c.sinfo_.server,token:a.access_token,expires:(new Date).getTime()+1E3*Number(a.expires_in),
ssl:"true"===a.ssl,_oAuthCred:b});b.storage=a.persist?window.localStorage:window.sessionStorage;b.token=d.token;b.expires=d.expires;b.userId=d.userId;b.ssl=d.ssl;b.save();c.callback(d)}},_createOAuthDialog:function(){var a=this._nls,c=q.substitute(a,this._oAuthDialogContent),b=new l({title:a.title,content:c,"class":"esriOAuthSignInDialog",style:"min-width: 18em;",esriIdMgr_:this,execute_:function(){var a=b.esriIdMgr_._oAuthDfd;b.hide_();b.esriIdMgr_._doOAuthSignIn(a.resUrl_,a.sinfo_,a.oinfo_)},cancel_:function(){var a=
b.esriIdMgr_._oAuthDfd;b.esriIdMgr_._oAuthDfd=null;b.hide_();var c=Error("ABORTED");c.code="IdentityManager.2";c.log=k.isDebug;a.errback(c)},hide_:function(){h.hide(b.errMsg_);b.hide();l._DialogLevelManager.hide(b)}}),a=b.domNode;b.btnSubmit_=m.byNode(f.query(".esriIdSubmit",a)[0]);b.btnCancel_=m.byNode(f.query(".esriIdCancel",a)[0]);b.errMsg_=f.query(".esriErrorMsg",a)[0];b.connect(b.btnSubmit_,"onClick",b.execute_);b.connect(b.btnCancel_,"onClick",b.onCancel);b.connect(b,"onCancel",b.cancel_);return b},
_doOAuthSignIn:function(a,c,b){var d=this,e={client_id:b.appId,response_type:"token",state:w.stringify({portalUrl:b.portalUrl}),expiration:b.expiration,locale:b.locale,force_login:b.forceLogin,redirect_uri:b.popup?r.getAbsoluteUrl(b.popupCallbackUrl):window.location.href.replace(/#.*$/,"")},h=b.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",f=h+"?"+n.objectToQuery(e);if(b.popup){var g;7===v("ie")?(g=window.open(b.popupCallbackUrl,"esriJSAPIOAuth",b.popupWindowFeatures),g.location=
f):g=window.open(f,"esriJSAPIOAuth",b.popupWindowFeatures);g?(g.focus(),this._oAuthDfd.oAuthWin_=g,this._oAuthIntervalId=setInterval(function(){if(g.closed){clearInterval(d._oAuthIntervalId);var b=d._oAuthDfd;if(b){var a=Error("ABORTED");a.code="IdentityManager.2";a.log=k.isDebug;b.errback(a)}}},500)):(a=Error("ABORTED"),a.code="IdentityManager.2",a.log=k.isDebug,this._oAuthDfd.errback(a))}else this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:e,authorizeUrl:h,resourceUrl:a,serverInfo:c,
oAuthInfo:b}):window.location=f}}});