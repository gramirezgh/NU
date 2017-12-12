// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("esri/tasks/datareviewer/ReviewerResultsTask","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/json dojo/has ./_DRSBaseTask ../../request ../FeatureSet ../../layers/FeatureEditResult ../../kernel".split(" "),function(q,l,t,m,r,u,v,n,s,w,x){q=q(v,{declaredClass:"esri.tasks.datareviewer.ReviewerResultsTask",constructor:function(b){this.onGetResultsComplete=l.hitch(this,this.onGetResultsComplete);this.onWriteResultComplete=l.hitch(this,this.onWriteResultComplete);this.onWriteFeatureAsResultComplete=
l.hitch(this,this.onWriteFeatureAsResultComplete);this.onGetLayerDefinitionComplete=l.hitch(this,this.onGetLayerDefinitionComplete);this.onGetBatchRunDetailsComplete=l.hitch(this,this.onGetBatchRunDetailsComplete)},getResults:function(b,k){var g=this._successHandler,e=this._errorHandler,h=this._appendQueryParams,d=this._url+"/ReviewerResults/getResults",d=h(d),a=new m,h={queryParameters:b.toJSON(),f:"json"};null!==k&&void 0!==k&&(h.filtersArray=k.toJSON());n({callbackParamName:"callback",url:d,content:h}).then(l.hitch(this,
function(c,d){if(void 0!==c.error){var f=Error();f.message=c.error.message;f.code=c.error.code;e(f,a)}else try{void 0===c.features||void 0===c.fieldAliases||void 0===c.fields?e(null,a):(f=new s(c),g({featureSet:f},"onGetResultsComplete",a))}catch(b){e(b,a)}}),function(c,d){e(c,a)});return a},writeResult:function(b,k){var g=this._successHandler,e=this._errorHandler,h=this._appendQueryParams,d=this._url+"/ReviewerResults/writeResult",d=h(d),a=new m;n({callbackParamName:"callback",url:d,content:{reviewerAttributes:b.toJSON(),
geometry:r.stringify(k.toJson()),f:"json"}}).then(l.hitch(this,function(c,d){var f=Error();if(void 0!==c.error)f.message=c.error.message,f.code=c.error.code,e(f,a);else try{void 0!==c.result&&"error"===c.result?(f.message=c.messages,f.code=c.result,e(f,a)):"success"===c.result?g({success:!0},"onWriteResultComplete",a):e(null,a)}catch(b){e(b,a)}}),function(c,d){e(c,a)});return a},writeFeatureAsResult:function(b,k){var g=this._successHandler,e=this._errorHandler,h=this._appendQueryParams,d=this._url+
"/ReviewerResults/writeFeatureAsResult",d=h(d),a=new m;n({callbackParamName:"callback",url:d,content:{reviewerAttributes:b.toJSON(),feature:r.stringify(k.toJson()),f:"json"}}).then(l.hitch(this,function(c,d){var f=Error();if(void 0!==c.error)f.message=c.error.message,f.code=c.error.code,e(f,a);else try{void 0!==c.result&&"error"===c.result?(f.message=c.messages,f.code=c.result,e(f,a)):"success"===c.result?g({success:!0},"onWriteFeatureAsResultComplete",a):e(null,a)}catch(b){e(b,a)}}),function(c,d){e(c,
a)});return a},getLayerDefinition:function(b){var k=this._successHandler,g=this._errorHandler,e=this._appendQueryParams,h=this._url+"/ReviewerResults/getLayerDefinition",h=e(h),d=new m,e={f:"json"};if(null!==b||void 0!==b)e.filtersArray=b.toJSON();n({callbackParamName:"callback",url:h,content:e}).then(l.hitch(this,function(a,c){if(void 0!==a.error){var b=Error();b.message=a.error.message;b.code=a.error.code;g(b,d)}else try{void 0===a.whereClause?g(null,d):k({whereClause:a.whereClause},"onGetLayerDefinitionComplete",
d)}catch(f){g(f,d)}}),function(a,c){g(a,d)});return d},getBatchRunDetails:function(b){var k=this._successHandler,g=this._errorHandler,e=this._appendQueryParams,h=this._url+"/ReviewerResults/getBatchRunDetails",h=e(h),d=new m;n({callbackParamName:"callback",url:h,content:{batchRunIds:r.stringify(b),f:"json"}}).then(l.hitch(this,function(a,c){if(void 0!==a.error){var b=Error();b.message=a.error.message;b.code=a.error.code;g(b,d)}else try{void 0===a.features||void 0===a.fieldAliases||void 0===a.fields?
g(null,d):(b=new s(a),k({featureSet:b},"onGetBatchRunDetailsComplete",d))}catch(f){g(f,d)}}),function(a,c){g(a,d)});return d},updateLifecycleStatus:function(b,k,g,e){var h=this._successHandler,d=this._errorHandler,a=this._appendQueryParams,c=this._url+"/ReviewerResults/updateLifecycleStatus",c=a(c),p=new m;n({callbackParamName:"callback",url:c,content:{sessionId:b,lifecycleStatus:k,technicianName:g,filtersArray:e.toJSON(),f:"json"}}).then(l.hitch(this,function(a,c){if(void 0!==a.error){var b=Error();
b.message=a.error.message;b.code=a.error.code;d(b,p)}else try{var e=[];t.forEach(a.updateResults,function(a){var b=new w;b.error=Error(a.description);b.success=a.success;b.objectId=a.objectId;e.push(b)});h({featureEditResults:e},"onUpdateLifecycleStatusComplete",p)}catch(g){d(g,p)}}),function(a,b){d(a,p)});return p},getResultsFieldNames:function(){return"recordId objectId subtype category sessionId checktitle resourceName checkName notes severity reviewStatus correctionStatus verificationStatus reviewTechnician correctionTechnician verificationTechnician reviewDateUtc correctionDateUtc verificationDateUtc lifecycleStatus".split(" ")},
onGetResultsComplete:function(b){},onWriteResultComplete:function(b){},onWriteFeatureAsResultComplete:function(b){},onGetLayerDefinitionComplete:function(b){},onGetBatchRunDetailsComplete:function(b){},onUpdateLifecycleStatusComplete:function(b){}});u("extend-esri")&&l.setObject("tasks.datareviewer.ReviewerResultsTask",q,x);return q});