(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/StreamLayer":622})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{622:function(e,t,i){var r,n;r=[i.dj.c(e.i),i(19),i(7),i(10),i(9),i(34),i(35),i(363),i(172),i(556)],void 0===(n=function(e,t,r,n,s,o,a,l,u,c){var h=n.getLogger("esri.layers.StreamLayer");return l.createSubclass({declaredClass:"esri.layers.StreamLayer",constructor:function(e){this._set("type","stream"),this._set("operationalLayerType","ArcGISStreamLayer"),this.outFields=["*"],"WebSocket"in window||(this.loadError=new Error("WebSocket is not supported in this browser"),console.log("WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))},normalizeCtorArgs:function(e,t){return"string"==typeof e?r.mixin({},{url:e},t):e&&e.layerDefinition?r.mixin({},{collectionLayer:e},t):(e&&e.filter&&(e.filter=this._makeFilter({where:e.filter.where||null,geometry:e.filter.geometry||null}),delete e.geometryDefinition,delete e.definitionExpression),e)},properties:{definitionExpression:{value:null,get:function(){return this.filter.where},set:function(e){var t=this._makeFilter({where:e});this._set("filter",t),this.notifyChange("definitionExpression")}},listMode:{type:["show","hide"]},geometryDefinition:{value:null,get:function(){return this.filter.geometry},set:function(e){var t=this._makeFilter({geometry:e});this._set("filter",t),this.notifyChange("geometryDefinition")}},filter:{value:null,type:c,constructOnly:!1},maxReconnectAttempts:10,maximumTrackPoints:1,operationalLayerType:{type:["ArcGISStreamLayer"],value:"ArcGISStreamLayer"},purgeOptions:{value:{},set:function(e){var t=this._get("purgeOptions"),i={},r=!1;if(e&&"object"==typeof e&&t!==e)return e.hasOwnProperty("displayCount")&&e.displayCount>0&&(i.displayCount=e.displayCount,r=!0),e.hasOwnProperty("age")&&e.age>=0&&(i.age=e.age,r=!0),r?this._set("purgeOptions",i):void 0}},socketDirection:"subscribe",spatialReference:{value:o.WGS84,type:o,json:{origins:{service:{read:{source:"spatialReference"}}}}},type:{value:"stream",json:{read:!1}},url:{set:function(e){var t=u.sanitizeUrlWithLayerId(this,e,h);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}}},createGraphicsSource:function(){return s.create(function(e){Promise.all([i.e(3),i.e(83)]).then(function(){var t=[i(2252)];e.apply(null,t)}.bind(this)).catch(i.oe)}).then(function(e){var t=new e({layer:this});return t.when(function(){return this.emit("graphics-source-create",{graphicsSource:t}),t}.bind(this))}.bind(this))},loadFromPortal:function(e){return e=r.mixin(e,{supportedTypes:["Stream Service"]}),this.inherited(arguments,[e])},updateFilter:function(e){return s.create(function(t,i){try{var r=this._makeFilter(e);this._set("filter",r),t({filter:this.filter})}catch(e){i(e)}}.bind(this))},importLayerViewModule:function(e){switch(e.type){case"2d":return s.create(function(e){Promise.all([i.e(22),i.e(96)]).then(function(){var t=[i(2254)];e.apply(null,t)}.bind(this)).catch(i.oe)});case"3d":return s.create(function(e){Promise.all([i.e(0),i.e(1),i.e(4),i.e(5),i.e(46)]).then(function(){var t=[i(2255)];e.apply(null,t)}.bind(this)).catch(i.oe)})}},_initLayerProperties:function(e){this.source=e;var i=this.source.relatedFeaturesInfo,n=r.mixin({},e.layerDefinition,i?{objectIdField:i.joinField}:{});i&&(this.source.relatedFeaturesInfo.outFields=this.outFields?this.outFields.splice(0):null),this.read(n,{origin:"service",url:this.parsedUrl}),i&&i.outFields&&"*"!==i.outFields[0]&&(i.outFields=i.outFields.map(function(e){return e.toLowerCase()})),n._ssl&&(this.url=this.url.replace(this.reHttp,"https:")),this._verifyFields(),this.useQueryTimestamp=t("ie")||t("safari")},_makeFilter:function(e){var t;if(e){var i,r=e.hasOwnProperty("where")?e.where:this.filter.where;if(e.hasOwnProperty("geometry")){if((i=e.geometry)&&!i.hasOwnProperty("xmin"))throw console.log("geometry is not an extent: ",i),new Error("Cannot set filter. Only Extent is supported for the geometry filter");i&&!i.declaredClass&&(i=new a(i))}else i=this.filter&&this.filter.geometry||null;t={where:r,geometry:i}}else t={geometry:null,where:null};return t},_readObjectIdField:function(e){if(e.objectIdField)return e.objectIdField;if(e.fields){for(var t,i=e.fields,r=0,n=i.length;r<n;r++){var s=i[r];if("esriFieldTypeOID"===s.type){t=s.name;break}}if(!t){var o=1,a=[];if(i.forEach(function(e){"objectid"===e.name.split("_")[0]&&a.push(e.name)}),a.length)for(;-1!==a.indexOf("objectid_"+o);)o+=1;t="objectid_"+o}return t}},_verifyFields:function(){}})}.apply(null,r))||(e.exports=n)}}]);