(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/3d/layers/TileLayerView3D":1468,"esri/core/HandleOwner":1503,"esri/views/layers/LayerView":1504,"esri/views/3d/layers/LayerView3D":1507,"esri/views/layers/RefreshableLayerView":1508,"esri/views/3d/layers/support/layerViewUpdatingProperties":1514,"esri/renderers/support/clickToleranceUtils":1525,"esri/views/3d/layers/TiledLayerView3D":1592,"esri/views/3d/layers/support/popupUtils3D":1634,"esri/views/3d/layers/support/tiledLayerUtils":1680,"esri/views/layers/TileLayerView":1688})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1468:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(1),r(9),r(21),r(0),r(1592),r(1634),r(1680),r(160),r(1688)],void 0===(n=function(e,t,r,i,n,o,a,l,s,p,u,c){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"imageFormatIsOpaque",{get:function(){return"jpg"===this.get("layer.tileInfo.format")},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){var e=this,t=this._getTileInfoSupportError(this.tileInfo,this.layer.fullExtent);if(t)this.addResolvingPromise(n.reject(t));else{var r=o.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var t=e.view.basemapTerrain.tilingScheme;p.throwIfError(e._getTileInfoCompatibilityError(e.tileInfo,t))});this.addResolvingPromise(r)}"version"in this.layer&&this.addResolvingPromise(p.checkArcGISServiceVersionCompatibility(this.layer)),this._updateMinMaxDataLevel(),this.maxDataLevel=Math.min(this.maxDataLevel,u.getKnownTiledServiceLevelCap(this.layer.url))},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return s.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){this.suspended||this.emit("data-changed")},i([a.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],t.prototype,"imageFormatIsOpaque",null),i([a.property({aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),i([a.property()],t.prototype,"layer",void 0),i([a.property({aliasOf:"layer.tileInfo"})],t.prototype,"tileInfo",void 0),i([a.subclass("esri.views.3d.layers.TileLayerView3D")],t)}(a.declared(l,c))}.apply(null,i))||(e.exports=n)},1503:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(1),r(6),r(17),r(0)],void 0===(n=function(e,t,r,i,n,o,a){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.call(this)||this;return i.handles=new o,i}return r(t,e),t.prototype.destroy=function(){this.handles.destroy()},i([a.property({readOnly:!0})],t.prototype,"handles",void 0),i([a.subclass("esri.core.HandleOwner")],t)}(a.declared(n))}.apply(null,i))||(e.exports=n)},1504:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(1),r(48),r(1503),r(210),r(10),r(209),r(9),r(0)],void 0===(n=function(e,t,r,i,n,o,a,l,s,p,u){return function(e){function t(t){var r=e.call(this)||this;return r.layer=null,r.parent=null,r.view=null,r}return r(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";return l.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),p.reject(t)}})},t.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},i([u.property()],t.prototype,"layer",void 0),i([u.property()],t.prototype,"parent",void 0),i([u.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),i([u.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),i([u.property()],t.prototype,"view",void 0),i([u.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),i([u.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),i([u.subclass("esri.views.layers.LayerView")],t)}(u.declared(o,n,a.Identifiable,s))}.apply(null,i))||(e.exports=n)},1507:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(1),r(9),r(21),r(0),r(357),r(1504)],void 0===(n=function(e,t,r,i,n,o,a,l,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slicePlaneEnabled=!1,t.supportsHeightUnitConversion=!1,t}return r(t,e),t.prototype.postscript=function(e){this.inherited(arguments),l.mayHaveHeightModelInfo(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())},t.prototype._validateHeightModelInfo=function(){var e=this;return n.create(function(t,r){o.whenFalseOnce(e.view.defaultsFromMap,"isHeightModelInfoSearching",function(){var i=l.rejectLayerError(e.layer,e.view.heightModelInfo,e.supportsHeightUnitConversion);i?r(i):t()})})},i([a.property()],t.prototype,"view",void 0),i([a.property()],t.prototype,"slicePlaneEnabled",void 0),i([a.subclass("esri.views.3d.layers.LayerView3D")],t)}(a.declared(s))}.apply(null,i))||(e.exports=n)},1508:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(1),r(6),r(0)],void 0===(n=function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshTimestamp=null,t}return r(t,e),t.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},i([o.property()],t.prototype,"layer",void 0),i([o.aliasOf("layer.refreshInterval")],t.prototype,"refreshInterval",void 0),i([o.property({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),i([o.subclass("esri.layers.mixins.RefreshableLayerView")],t)}(o.declared(n))}.apply(null,i))||(e.exports=n)},1514:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.updatingPercentageValue={value:100,readOnly:!0},t.updatingPercentage={dependsOn:["updating","updatingPercentageValue"],readOnly:!0,value:0,get:function(){return this.updating?this.updatingPercentageValue:0}}}.apply(null,i))||(e.exports=n)},1525:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){function r(e,t){return t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):t&&t.yoffset?Math.max(e,Math.abs(t.yoffset)):e}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateTolerance=function(e){if(!e)return 6;if("simple"===e.type)return r(6,e.symbol);if("unique-value"===e.type){var t=6;return e.uniqueValueInfos.forEach(function(e){t=r(t,e.symbol)}),t}if("class-breaks"===e.type){var i=6;return e.classBreakInfos.forEach(function(e){i=r(i,e.symbol)}),i}return e.type,6}}.apply(null,i))||(e.exports=n)},1592:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(1),r(13),r(0),r(1507),r(1514),r(160)],void 0===(n=function(e,t,r,i,n,o,a,l,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.minDataLevel=0,t.maxDataLevel=1/0,t._isUpdating=!1,t}return r(t,e),Object.defineProperty(t.prototype,"imageFormatIsOpaque",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isOpaque",{get:function(){return this.fullOpacity>=1&&this.imageFormatIsOpaque},enumerable:!0,configurable:!0}),t.prototype.getTileUrl=function(e,t,r){return this.layer.getTileUrl(e,t,r)},t.prototype.updatingChanged=function(e){this._isUpdating=e,this.notifyChange("updating")},t.prototype.isUpdating=function(){return this._isUpdating},t.prototype._getTileInfoSupportError=function(e,t){var r=s.checkIfTileInfoSupportedForView(e,t,this.view.spatialReference,this.view.basemapTerrain.manifold);if(r){var i={layer:this.layer,error:r},o=void 0;switch(r.name){case"tilingscheme:local-gcs-not-supported":o=new n("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",i);break;case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":o=new n("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",i);break;default:o=new n("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",i)}return o}return null},t.prototype._getTileInfoCompatibilityError=function(e,t){return t.compatibleWith(e)?null:new n("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")},t.prototype._updateMinMaxDataLevel=function(){var e,t=1/0,r=0;this.tileInfo.lods.forEach(function(e){t=Math.min(e.level,t),r=Math.max(e.level,r)}),e=[t,r],this.minDataLevel=e[0],this.maxDataLevel=e[1]},i([o.property({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),i([o.property(l.updatingPercentage)],t.prototype,"updatingPercentage",void 0),i([o.property(l.updatingPercentageValue)],t.prototype,"updatingPercentageValue",void 0),i([o.property()],t.prototype,"fullExtent",void 0),i([o.property({readOnly:!0,dependsOn:["fullOpacity","imageFormatIsOpaque"]})],t.prototype,"isOpaque",null),i([o.property()],t.prototype,"layer",void 0),i([o.property()],t.prototype,"minDataLevel",void 0),i([o.property()],t.prototype,"maxDataLevel",void 0),i([o.property()],t.prototype,"tileInfo",void 0),i([o.subclass("esri.views.3d.layers.TiledLayerView3D")],t)}(o.declared(a))}.apply(null,i))||(e.exports=n)},1634:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(5),r(1),r(43),r(32),r(82),r(1525)],void 0===(n=function(e,t,r,i,n,o,a,l){function s(e,t,r){var i=r.get("basemapTerrain"),o=r.get("basemapTerrain.overlayManager"),l=o?o.overlayPixelSizeInMapUnits(e):1,s=i&&!i.spatialReference.equals(r.spatialReference)?a.getMetersPerUnitForSR(i.spatialReference)/a.getMetersPerUnitForSR(r.spatialReference):t*l,p=e.x-s,u=e.y-s,c=e.x+s,y=e.y+s,d=r.spatialReference;return new n.Extent({xmin:Math.min(p,c),ymin:Math.min(u,y),xmax:Math.max(p,c),ymax:Math.max(u,y),spatialReference:d})}Object.defineProperty(t,"__esModule",{value:!0}),t.createQueryGeometry=s,t.intersectsDrapedGeometry=function(e,t,r){var i=r.toMap(e);return o.isNone(i)?null:s(i,l.calculateTolerance(),r).intersects(t)?i:null}}.apply(null,i))||(e.exports=n)},1680:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(370),r(13),r(9),r(172)],void 0===(n=function(e,t,r,i,n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.checkArcGISServiceVersionCompatibility=function(e){if(!o.isHostedAgolService(e.url)){if(e.version<10.22){var t=new i("layerview:service-version-too-old","Tiled Map Layers on servers prior to 10.2.2 are not supported. Detected version: "+e.version,{minVersion:10.22,detectedVersion:e.version});return n.reject(t)}if(10.22===e.version&&!o.isHostedSecuredProxyService(e.url,e.get("portalItem.id"))){var a=function(e){var t=null,r=e.search(/\/rest\/services\//i);return r>0&&(t=e.substring(0,r+6)),t}(e.url),l=new i("tiledlayerview3d:service-missing-cors-patch","Tiled Map Layers from 10.2.2 servers are only supported if all server updates have been applied.");return r(a+"self?f=json",{headers:{"X-Requested-With":null},timeout:1e4,handleAs:"json"}).then(function(e){if(!e||e.error)throw l}).catch(function(){throw l})}return n.resolve()}},t.throwIfError=function(e){if(e)throw e}}.apply(null,i))||(e.exports=n)},1688:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(1),r(22),r(25),r(13),r(9),r(0),r(1525),r(1508)],void 0===(n=function(e,t,r,i,n,o,a,l,s,p,u){return function(e){function t(t){return e.call(this,t)||this}return r(t,e),t.prototype.fetchPopupFeatures=function(e){return o(this,void 0,void 0,function(){var t,r,i,s=this;return n(this,function(u){return t=this.layer,e?"tile"!==t.type?[2,l.reject(new a("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:t.type}))]:(r=this.get("view.scale"),i=t.allSublayers.toArray().filter(function(e){var t=0===e.minScale||r<=e.minScale,i=0===e.maxScale||r>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&i}),[2,l.eachAlways(i.map(function(t){return o(s,void 0,void 0,function(){var r,i,o;return n(this,function(n){switch(n.label){case 0:return r=t.createQuery(),i=p.calculateTolerance(t.renderer),r.geometry=this.createFetchPopupFeaturesQueryGeometry(e,i),o=r,[4,t.popupTemplate.getRequiredFields()];case 1:return o.outFields=n.sent(),[4,t.queryFeatures(r)];case 2:return[2,n.sent().features]}})})})).then(function(e){return[].concat.apply([],e.map(function(e){return e.value}).filter(Boolean))})]):[2,l.reject(new a("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))]})})},i([s.property()],t.prototype,"layer",void 0),i([s.subclass("esri.views.layers.TileLayerView")],t)}(s.declared(u))}.apply(null,i))||(e.exports=n)}}]);