(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/@ionic-native/http/ngx/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@ionic-native/http/ngx/index.js ***!
  \******************************************************/
/*! exports provided: HTTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP", function() { return HTTP; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HTTP = /** @class */ (function (_super) {
    __extends(HTTP, _super);
    function HTTP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTTP.prototype.getBasicAuthHeader = function (username, password) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getBasicAuthHeader", { "sync": true }, arguments); };
    HTTP.prototype.useBasicAuth = function (username, password) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "useBasicAuth", { "sync": true }, arguments); };
    HTTP.prototype.getHeaders = function (host) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getHeaders", { "sync": true }, arguments); };
    HTTP.prototype.setHeader = function (host, header, value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setHeader", { "sync": true }, arguments); };
    HTTP.prototype.getDataSerializer = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setDataSerializer = function (serializer) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setCookie = function (url, cookie) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setCookie", { "sync": true }, arguments); };
    HTTP.prototype.clearCookies = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "clearCookies", { "sync": true }, arguments); };
    HTTP.prototype.removeCookies = function (url, cb) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "removeCookies", { "sync": true }, arguments); };
    HTTP.prototype.getCookieString = function (url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getCookieString", { "sync": true }, arguments); };
    HTTP.prototype.getRequestTimeout = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.setRequestTimeout = function (timeout) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.setSSLCertMode = function (mode) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setSSLCertMode", {}, arguments); };
    HTTP.prototype.disableRedirect = function (disable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "disableRedirect", {}, arguments); };
    HTTP.prototype.post = function (url, body, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "post", {}, arguments); };
    HTTP.prototype.get = function (url, parameters, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "get", {}, arguments); };
    HTTP.prototype.put = function (url, body, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "put", {}, arguments); };
    HTTP.prototype.patch = function (url, body, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "patch", {}, arguments); };
    HTTP.prototype.delete = function (url, parameters, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "delete", {}, arguments); };
    HTTP.prototype.head = function (url, parameters, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "head", {}, arguments); };
    HTTP.prototype.uploadFile = function (url, body, headers, filePath, name) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "uploadFile", {}, arguments); };
    HTTP.prototype.downloadFile = function (url, body, headers, filePath) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "downloadFile", {}, arguments); };
    HTTP.prototype.sendRequest = function (url, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "sendRequest", {}, arguments); };
    HTTP.pluginName = "HTTP";
    HTTP.plugin = "cordova-plugin-advanced-http";
    HTTP.pluginRef = "cordova.plugin.http";
    HTTP.repo = "https://github.com/silkimen/cordova-plugin-advanced-http";
    HTTP.platforms = ["Android", "iOS"];
    HTTP = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], HTTP);
    return HTTP;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2h0dHAvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBd0U5Qyx3QkFBaUI7Ozs7SUFRekMsaUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxRQUFnQjtJQVVyRCwyQkFBWSxhQUFDLFFBQWdCLEVBQUUsUUFBZ0I7SUFRL0MseUJBQVUsYUFBQyxJQUFZO0lBV3ZCLHdCQUFTLGFBQUMsSUFBWSxFQUFFLE1BQWMsRUFBRSxLQUFhO0lBT3JELGdDQUFpQjtJQVNqQixnQ0FBaUIsYUFBQyxVQUFrQjtJQVFwQyx3QkFBUyxhQUFDLEdBQVcsRUFBRSxNQUFjO0lBTXJDLDJCQUFZO0lBUVosNEJBQWEsYUFBQyxHQUFXLEVBQUUsRUFBYztJQU96Qyw4QkFBZSxhQUFDLEdBQVc7SUFTM0IsZ0NBQWlCO0lBU2pCLGdDQUFpQixhQUFDLE9BQWU7SUFZakMsNkJBQWMsYUFBQyxJQUFpRDtJQVVoRSw4QkFBZSxhQUFDLE9BQWdCO0lBWWhDLG1CQUFJLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZO0lBWXpDLGtCQUFHLGFBQUMsR0FBVyxFQUFFLFVBQWUsRUFBRSxPQUFZO0lBWTlDLGtCQUFHLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZO0lBWXhDLG9CQUFLLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZO0lBWTFDLHFCQUFNLGFBQUMsR0FBVyxFQUFFLFVBQWUsRUFBRSxPQUFZO0lBWWpELG1CQUFJLGFBQUMsR0FBVyxFQUFFLFVBQWUsRUFBRSxPQUFZO0lBYy9DLHlCQUFVLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZLEVBQUUsUUFBZ0IsRUFBRSxJQUFZO0lBYS9FLDJCQUFZLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZLEVBQUUsUUFBZ0I7SUFvQm5FLDBCQUFXLGFBQ1QsR0FBVyxFQUNYLE9BU0M7Ozs7OztJQTVQUSxJQUFJO1FBSGhCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxJQUFJO2VBekVqQjtFQXlFMEIsaUJBQWlCO1NBQTlCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBIVFRQUmVzcG9uc2Uge1xuICAvKipcbiAgICogVGhlIHN0YXR1cyBudW1iZXIgb2YgdGhlIHJlc3BvbnNlXG4gICAqL1xuICBzdGF0dXM6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBoZWFkZXJzIG9mIHRoZSByZXNwb25zZVxuICAgKi9cbiAgaGVhZGVyczogYW55O1xuICAvKipcbiAgICogVGhlIFVSTCBvZiB0aGUgcmVzcG9uc2UuIFRoaXMgcHJvcGVydHkgd2lsbCBiZSB0aGUgZmluYWwgVVJMIG9idGFpbmVkIGFmdGVyIGFueSByZWRpcmVjdHMuXG4gICAqL1xuICB1cmw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIHRoYXQgaXMgaW4gdGhlIHJlc3BvbnNlLiBUaGlzIHByb3BlcnR5IHVzdWFsbHkgZXhpc3RzIHdoZW4gYSBwcm9taXNlIHJldHVybmVkIGJ5IGEgcmVxdWVzdCBtZXRob2QgcmVzb2x2ZXMuXG4gICAqL1xuICBkYXRhPzogYW55O1xuICAvKipcbiAgICogRXJyb3IgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyLiBUaGlzIHByb3BlcnR5IHVzdWFsbHkgZXhpc3RzIHdoZW4gYSBwcm9taXNlIHJldHVybmVkIGJ5IGEgcmVxdWVzdCBtZXRob2QgcmVqZWN0cy5cbiAgICovXG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEhUVFBcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSAvIFBob25lZ2FwIHBsdWdpbiBmb3IgY29tbXVuaWNhdGluZyB3aXRoIEhUVFAgc2VydmVycy4gU3VwcG9ydHMgaU9TIGFuZCBBbmRyb2lkLlxuICpcbiAqIEFkdmFudGFnZXMgb3ZlciBKYXZhc2NyaXB0IHJlcXVlc3RzOlxuICogLSBCYWNrZ3JvdW5kIHRocmVhZGluZyAtIGFsbCByZXF1ZXN0cyBhcmUgZG9uZSBpbiBhIGJhY2tncm91bmQgdGhyZWFkXG4gKiAtIFNTTCBQaW5uaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9odHRwL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIVFRQKSB7fVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9pb25pYy5pbycsIHt9LCB7fSlcbiAqICAgLnRoZW4oZGF0YSA9PiB7XG4gKlxuICogICAgIGNvbnNvbGUubG9nKGRhdGEuc3RhdHVzKTtcbiAqICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpOyAvLyBkYXRhIHJlY2VpdmVkIGJ5IHNlcnZlclxuICogICAgIGNvbnNvbGUubG9nKGRhdGEuaGVhZGVycyk7XG4gKlxuICogICB9KVxuICogICAuY2F0Y2goZXJyb3IgPT4ge1xuICpcbiAqICAgICBjb25zb2xlLmxvZyhlcnJvci5zdGF0dXMpO1xuICogICAgIGNvbnNvbGUubG9nKGVycm9yLmVycm9yKTsgLy8gZXJyb3IgbWVzc2FnZSBhcyBzdHJpbmdcbiAqICAgICBjb25zb2xlLmxvZyhlcnJvci5oZWFkZXJzKTtcbiAqXG4gKiAgIH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEhUVFBSZXNwb25zZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hUVFAnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW4uaHR0cCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2lsa2ltZW4vY29yZG92YS1wbHVnaW4tYWR2YW5jZWQtaHR0cCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSFRUUCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgcmV0dXJucyBhbiBvYmplY3QgcmVwcmVzZW50aW5nIGEgYmFzaWMgSFRUUCBBdXRob3JpemF0aW9uIGhlYWRlciBvZiB0aGUgZm9ybS5cbiAgICogQHBhcmFtIHVzZXJuYW1lIHtzdHJpbmd9IFVzZXJuYW1lXG4gICAqIEBwYXJhbSBwYXNzd29yZCB7c3RyaW5nfSBQYXNzd29yZFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhbiBvYmplY3QgcmVwcmVzZW50aW5nIGEgYmFzaWMgSFRUUCBBdXRob3JpemF0aW9uIGhlYWRlciBvZiB0aGUgZm9ybSB7J0F1dGhvcml6YXRpb24nOiAnQmFzaWMgYmFzZTY0RW5jb2RlZFVzZXJuYW1lQW5kUGFzc3dvcmQnfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEJhc2ljQXV0aEhlYWRlcih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogeyBBdXRob3JpemF0aW9uOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgc2V0cyB1cCBhbGwgZnV0dXJlIHJlcXVlc3RzIHRvIHVzZSBCYXNpYyBIVFRQIGF1dGhlbnRpY2F0aW9uIHdpdGggdGhlIGdpdmVuIHVzZXJuYW1lIGFuZCBwYXNzd29yZC5cbiAgICogQHBhcmFtIHVzZXJuYW1lIHtzdHJpbmd9IFVzZXJuYW1lXG4gICAqIEBwYXJhbSBwYXNzd29yZCB7c3RyaW5nfSBQYXNzd29yZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHVzZUJhc2ljQXV0aCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGhlYWRlcnMgZGVmaW5lZCBmb3IgYSBnaXZlbiBob3N0bmFtZS5cbiAgICogQHBhcmFtIGhvc3Qge3N0cmluZ30gVGhlIGhvc3RuYW1lXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybiBhbGwgaGVhZGVycyBkZWZpbmVkIGZvciB0aGUgaG9zdG5hbWVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRIZWFkZXJzKGhvc3Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIGhlYWRlciBmb3IgYWxsIGZ1dHVyZSByZXF1ZXN0cy4gVGFrZXMgYSBob3N0bmFtZSwgYSBoZWFkZXIgYW5kIGEgdmFsdWUuXG4gICAqIEBwYXJhbSBob3N0IHtzdHJpbmd9IFRoZSBob3N0bmFtZSB0byBiZSB1c2VkIGZvciBzY29waW5nIHRoaXMgaGVhZGVyXG4gICAqIEBwYXJhbSBoZWFkZXIge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGhlYWRlclxuICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ30gVGhlIHZhbHVlIG9mIHRoZSBoZWFkZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRIZWFkZXIoaG9zdDogc3RyaW5nLCBoZWFkZXI6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSBkYXRhIHNlcmlhbGl6ZXIgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciBhbGwgZnV0dXJlIFBPU1QgYW5kIFBVVCByZXF1ZXN0cy5cbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY29uZmlndXJlZCBkYXRhIHNlcmlhbGl6ZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXREYXRhU2VyaWFsaXplcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRhdGEgc2VyaWFsaXplciB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIGFsbCBmdXR1cmUgUE9TVCBhbmQgUFVUIHJlcXVlc3RzLiBUYWtlcyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG5hbWUgb2YgdGhlIHNlcmlhbGl6ZXIuXG4gICAqIEBwYXJhbSBzZXJpYWxpemVyIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBzZXJpYWxpemVyLiBDYW4gYmUgdXJsZW5jb2RlZCwgdXRmOCBvciBqc29uXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RGF0YVNlcmlhbGl6ZXIoc2VyaWFsaXplcjogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBZGQgYSBjdXN0b20gY29va2llLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFNjb3BlIG9mIHRoZSBjb29raWVcbiAgICogQHBhcmFtIGNvb2tpZSB7c3RyaW5nfSBSRkMgY29tcGxpYW50IGNvb2tpZSBzdHJpbmdcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDb29raWUodXJsOiBzdHJpbmcsIGNvb2tpZTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgY29va2llcy5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjbGVhckNvb2tpZXMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY29va2llcyBmb3IgZ2l2ZW4gVVJMLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBjYlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbW92ZUNvb2tpZXModXJsOiBzdHJpbmcsIGNiOiAoKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGNvb2tpZSBzdHJpbmcgZm9yIGdpdmVuIFVSTC5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENvb2tpZVN0cmluZyh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBnbG9iYWwgcmVxdWVzdCB0aW1lb3V0IHZhbHVlIGluIHNlY29uZHMuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHJldHVybnMgdGhlIGdsb2JhbCByZXF1ZXN0IHRpbWVvdXQgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRSZXF1ZXN0VGltZW91dCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZ2xvYmFsIHJlcXVlc3QgdGltZW91dCB2YWx1ZSBpbiBzZWNvbmRzLlxuICAgKiBAcGFyYW0gdGltZW91dCB7bnVtYmVyfSBUaGUgdGltZW91dCBpbiBzZWNvbmRzLiBEZWZhdWx0IDYwXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UmVxdWVzdFRpbWVvdXQodGltZW91dDogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXQgU1NMIENlcnQgaGFuZGxpbmcgbW9kZSwgYmVpbmcgb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzXG4gICAqIGRlZmF1bHQ6IGRlZmF1bHQgU1NMIGNlcnQgaGFuZGxpbmcgdXNpbmcgc3lzdGVtJ3MgQ0EgY2VydHNcbiAgICogbGVnYWN5OiB1c2UgbGVnYWN5IGRlZmF1bHQgYmVoYXZpb3IgKDwgMi4wLjMpLCBleGNsdWRpbmcgdXNlciBpbnN0YWxsZWQgQ0EgY2VydHMgKG9ubHkgZm9yIEFuZHJvaWQpXG4gICAqIG5vY2hlY2s6IGRpc2FibGUgU1NMIGNlcnQgY2hlY2tpbmcsIHRydXN0aW5nIGFsbCBjZXJ0cyAobWVhbnQgdG8gYmUgdXNlZCBvbmx5IGZvciB0ZXN0aW5nIHB1cnBvc2VzKVxuICAgKiBwaW5uZWQ6IHRydXN0IG9ubHkgcHJvdmlkZWQgY2VydHNcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2lsa2ltZW4vY29yZG92YS1wbHVnaW4tYWR2YW5jZWQtaHR0cCNzZXRzc2xjZXJ0bW9kZVxuICAgKiBAcGFyYW0geydkZWZhdWx0JyB8ICdsZWdhY3knIHwgJ25vY2hlY2snIHwgJ3Bpbm5lZCd9IG1vZGUgU1NMIENlcnQgaGFuZGxpbmcgbW9kZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRTU0xDZXJ0TW9kZShtb2RlOiAnZGVmYXVsdCcgfCAnbGVnYWN5JyB8ICdub2NoZWNrJyB8ICdwaW5uZWQnKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgZm9sbG93aW5nIHJlZGlyZWN0cyBhdXRvbWF0aWNhbGx5LlxuICAgKiBAcGFyYW0gZGlzYWJsZSB7Ym9vbGVhbn0gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBmb2xsb3dpbmcgcmVkaXJlY3RzIGF1dG9tYXRpY2FsbHlcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkaXNhYmxlUmVkaXJlY3QoZGlzYWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgUE9TVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgR0VUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXQodXJsOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBVVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHV0KHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBQQVRDSCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF0Y2godXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIERFTEVURSByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlKHVybDogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBIRUFEIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoZWFkKHVybDogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBUaGUgbG9jYWwgcGF0aCBvZiB0aGUgZmlsZSB0byB1cGxvYWRcbiAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlciB0byBwYXNzIHRoZSBmaWxlIGFsb25nIGFzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBGaWxlRW50cnkgcHJvbWlzZSB0aGF0IHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVwbG9hZEZpbGUodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVyczogYW55LCBmaWxlUGF0aDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gZmlsZVBhdGgge3N0cmluZ30gVGhlIHBhdGggdG8gZG93bmxvYWQgdGhlIGZpbGUgdG8sIGluY2x1ZGluZyB0aGUgZmlsZSBuYW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgRmlsZUVudHJ5IHByb21pc2UgdGhhdCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkb3dubG9hZEZpbGUodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVyczogYW55LCBmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gb3B0aW9ucyBmb3IgaW5kaXZpZHVhbCByZXF1ZXN0XG4gICAqIEBwYXJhbSBvcHRpb25zLm1ldGhvZCB7c3RyaW5nfSByZXF1ZXN0IG1ldGhvZFxuICAgKiBAcGFyYW0gb3B0aW9ucy5kYXRhIHtPYmplY3R9IHBheWxvYWQgdG8gYmUgc2VuZCB0byB0aGUgc2VydmVyIChvbmx5IGFwcGxpY2FibGUgb24gcG9zdCwgcHV0IG9yIHBhdGNoIG1ldGhvZHMpXG4gICAqIEBwYXJhbSBvcHRpb25zLnBhcmFtcyB7T2JqZWN0fSBxdWVyeSBwYXJhbXMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIFVSTCAob25seSBhcHBsaWNhYmxlIG9uIGdldCwgaGVhZCwgZGVsZXRlLCB1cGxvYWQgb3IgZG93bmxvYWQgbWV0aG9kcylcbiAgICogQHBhcmFtIG9wdGlvbnMuc2VyaWFsaXplciB7c3RyaW5nfSBkYXRhIHNlcmlhbGl6ZXIgdG8gYmUgdXNlZCAob25seSBhcHBsaWNhYmxlIG9uIHBvc3QsIHB1dCBvciBwYXRjaCBtZXRob2RzKSwgZGVmYXVsdHMgdG8gZ2xvYmFsIHNlcmlhbGl6ZXIgdmFsdWUsIHNlZSBzZXREYXRhU2VyaWFsaXplciBmb3Igc3VwcG9ydGVkIHZhbHVlc1xuICAgKiBAcGFyYW0gb3B0aW9ucy50aW1lb3V0IHtudW1iZXJ9IHRpbWVvdXQgdmFsdWUgZm9yIHRoZSByZXF1ZXN0IGluIHNlY29uZHMsIGRlZmF1bHRzIHRvIGdsb2JhbCB0aW1lb3V0IHZhbHVlXG4gICAqIEBwYXJhbSBvcHRpb25zLmhlYWRlcnMge09iamVjdH0gaGVhZGVycyBvYmplY3QgKGtleSB2YWx1ZSBwYWlyKSwgd2lsbCBiZSBtZXJnZWQgd2l0aCBnbG9iYWwgdmFsdWVzXG4gICAqIEBwYXJhbSBvcHRpb25zLmZpbGVQYXRoIHtzdHJpbmd9IGZpbGVQYXRoIHRvIGJlIHVzZWQgZHVyaW5nIHVwbG9hZCBhbmQgZG93bmxvYWQgc2VlIHVwbG9hZEZpbGUgYW5kIGRvd25sb2FkRmlsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMubmFtZSB7c3RyaW5nfSBuYW1lIHRvIGJlIHVzZWQgZHVyaW5nIHVwbG9hZCBzZWUgdXBsb2FkRmlsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kUmVxdWVzdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtZXRob2Q6ICdnZXQnIHwgJ3Bvc3QnIHwgJ3B1dCcgfCAncGF0Y2gnIHwgJ2hlYWQnIHwgJ2RlbGV0ZScgfCAndXBsb2FkJyB8ICdkb3dubG9hZCc7XG4gICAgICBkYXRhPzogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuICAgICAgcGFyYW1zPzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB9O1xuICAgICAgc2VyaWFsaXplcj86ICdqc29uJyB8ICd1cmxlbmNvZGVkJyB8ICd1dGY4JztcbiAgICAgIHRpbWVvdXQ/OiBudW1iZXI7XG4gICAgICBoZWFkZXJzPzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgZmlsZVBhdGg/OiBzdHJpbmc7XG4gICAgICBuYW1lPzogc3RyaW5nO1xuICAgIH1cbiAgKTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Dashboard\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <div class=\"dashboard-main-container animated bounceInDown\">\n          <h3>{{data.name}}</h3>\n          <div class=\"avatar-conatainer\">\n            <span class=\"badge\">10Xp</span>\n            <i class=\"badge-notify\"></i>\n            <img class=\"animated zoomIn\" src=\"https://www.hashnative.com/{{data.photo}}\" alt=\"img\">\n          </div>\n\n        </div>\n\n        <div class=\"list social-list\">\n            <a class=\"item item-thumbnail-left item-text-wrap\">\n              <img class=\"animated zoomIn\" src=\"/src/assets/img/icons/youtube.svg\" alt=\"img\">\n              <h2  ng-style=\"{'color': item.color}\">{{data.designation}}\n                <span class=\"notify pull-right animated rubberBand\" ng-style=\"{'background': item.color}\">5</span>\n              </h2>\n              <p class=\"animated fadeIn\"></p>\n            </a>\n          </div>\n          \n        <div class=\"card chart-card\">\n            <div class=\"item item-text-wrap\">\n              <canvas id=\"line\" class=\"chart chart-line\" data=\"lineData\" labels=\"lineLabels\" legend=\"true\" series=\"lineSeries\" options=\"{showTooltips: false}\"></canvas>\n            </div>\n            <div class=\"item item-text-wrap\">\n              <canvas id=\"doughnut\" data=\"pieData\" labels=\"pieLabels\" class=\"chart chart-doughnut\" legend=\"true\" series=\"series\" options=\"{showTooltips: false}\">\n              </canvas>\n            </div>\n          </div>\n        \n     \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lsaGFtL0Rlc2t0b3AvaW9uaWMvU3RhcnRlci9Jb25pYy1TdGFydGVyL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");



var Tab1Page = /** @class */ (function () {
    function Tab1Page(http) {
        this.http = http;
    }
    Tab1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://www.hashnative.com/index.php?/example/user/Zufry Ahmed', {}, {})
            .then(function (data) {
            console.log(data.status);
            console.log(data.data); // data received by server
            console.log(data.headers);
            // return data.data;
            _this.data = JSON.parse(data.data);
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            // return error.error;
        });
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map