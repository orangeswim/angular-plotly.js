/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var PlotlyService = /** @class */ (function () {
    function PlotlyService() {
    }
    /**
     * @param {?} plotly
     * @return {?}
     */
    PlotlyService.setPlotly = /**
     * @param {?} plotly
     * @return {?}
     */
    function (plotly) {
        PlotlyService._plotly = plotly;
    };
    /**
     * @param {?} instance
     * @return {?}
     */
    PlotlyService.insert = /**
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        /** @type {?} */
        var index = PlotlyService.instances.indexOf(instance);
        if (index === -1) {
            PlotlyService.instances.push(instance);
        }
        return instance;
    };
    /**
     * @param {?} div
     * @return {?}
     */
    PlotlyService.remove = /**
     * @param {?} div
     * @return {?}
     */
    function (div) {
        /** @type {?} */
        var index = PlotlyService.instances.indexOf(div);
        if (index >= 0) {
            PlotlyService.instances.splice(index, 1);
            PlotlyService._plotly.purge(div);
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    PlotlyService.prototype.getInstanceByDivId = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(PlotlyService.instances), _c = _b.next(); !_c.done; _c = _b.next()) {
                var instance = _c.value;
                if (instance && instance.id === id) {
                    return instance;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return undefined;
    };
    /**
     * @return {?}
     */
    PlotlyService.prototype.getPlotly = /**
     * @return {?}
     */
    function () {
        if (typeof PlotlyService._plotly === 'undefined') {
            throw new Error("Peer dependency plotly.js isn't installed");
        }
        return PlotlyService._plotly;
    };
    /**
     * @protected
     * @param {?} fn
     * @return {?}
     */
    PlotlyService.prototype.waitFor = /**
     * @protected
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        return new Promise(function (resolve) {
            /** @type {?} */
            var localFn = function () {
                fn() ? resolve() : setTimeout(localFn, 10);
            };
            localFn();
        });
    };
    // tslint:disable max-line-length
    // tslint:disable max-line-length
    /**
     * @param {?} div
     * @param {?} data
     * @param {?=} layout
     * @param {?=} config
     * @param {?=} frames
     * @return {?}
     */
    PlotlyService.prototype.newPlot = 
    // tslint:disable max-line-length
    /**
     * @param {?} div
     * @param {?} data
     * @param {?=} layout
     * @param {?=} config
     * @param {?=} frames
     * @return {?}
     */
    function (div, data, layout, config, frames) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var obj;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitFor(function () { return _this.getPlotly() !== 'waiting'; })];
                    case 1:
                        _a.sent();
                        if (frames) {
                            obj = { data: data, layout: layout, config: config, frames: frames };
                            return [2 /*return*/, (/** @type {?} */ (this.getPlotly().newPlot(div, obj).then(function () { return PlotlyService.insert((/** @type {?} */ (div))); })))];
                        }
                        return [2 /*return*/, (/** @type {?} */ (this.getPlotly().newPlot(div, data, layout, config).then(function () { return PlotlyService.insert((/** @type {?} */ (div))); })))];
                }
            });
        });
    };
    /**
     * @param {?} div
     * @param {?} data
     * @param {?=} layout
     * @param {?=} config
     * @param {?=} frames
     * @return {?}
     */
    PlotlyService.prototype.plot = /**
     * @param {?} div
     * @param {?} data
     * @param {?=} layout
     * @param {?=} config
     * @param {?=} frames
     * @return {?}
     */
    function (div, data, layout, config, frames) {
        if (frames) {
            /** @type {?} */
            var obj = { data: data, layout: layout, config: config, frames: frames };
            return (/** @type {?} */ (this.getPlotly().plot(div, obj)));
        }
        return (/** @type {?} */ (this.getPlotly().plot(div, data, layout, config)));
    };
    /**
     * @param {?} div
     * @param {?} data
     * @param {?=} layout
     * @param {?=} config
     * @param {?=} frames
     * @return {?}
     */
    PlotlyService.prototype.update = /**
     * @param {?} div
     * @param {?} data
     * @param {?=} layout
     * @param {?=} config
     * @param {?=} frames
     * @return {?}
     */
    function (div, data, layout, config, frames) {
        if (frames) {
            /** @type {?} */
            var obj = { data: data, layout: layout, config: config, frames: frames };
            return (/** @type {?} */ (this.getPlotly().react(div, obj)));
        }
        return (/** @type {?} */ (this.getPlotly().react(div, data, layout, config)));
    };
    // tslint:enable max-line-length
    // tslint:enable max-line-length
    /**
     * @param {?} div
     * @return {?}
     */
    PlotlyService.prototype.resize = 
    // tslint:enable max-line-length
    /**
     * @param {?} div
     * @return {?}
     */
    function (div) {
        return this.getPlotly().Plots.resize(div);
    };
    PlotlyService.instances = [];
    PlotlyService._plotly = undefined;
    PlotlyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ PlotlyService.ngInjectableDef = i0.defineInjectable({ factory: function PlotlyService_Factory() { return new PlotlyService(); }, token: PlotlyService, providedIn: "root" });
    return PlotlyService;
}());
export { PlotlyService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PlotlyService.instances;
    /**
     * @type {?}
     * @protected
     */
    PlotlyService._plotly;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvdGx5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBsb3RseS5qcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Bsb3RseS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJM0M7SUFBQTtLQXdGQzs7Ozs7SUFqRmlCLHVCQUFTOzs7O0lBQXZCLFVBQXdCLE1BQVc7UUFDL0IsYUFBYSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFYSxvQkFBTTs7OztJQUFwQixVQUFxQixRQUFrQzs7WUFDN0MsS0FBSyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUN2RCxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNkLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFYSxvQkFBTTs7OztJQUFwQixVQUFxQixHQUE2Qjs7WUFDeEMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNsRCxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDWixhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDOzs7OztJQUVNLDBDQUFrQjs7OztJQUF6QixVQUEwQixFQUFVOzs7WUFDaEMsS0FBdUIsSUFBQSxLQUFBLGlCQUFBLGFBQWEsQ0FBQyxTQUFTLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTNDLElBQU0sUUFBUSxXQUFBO2dCQUNmLElBQUksUUFBUSxJ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QSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBZ0IsQ0FBQztTQUMzRDtRQUVELE9BQU8sbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBZ0IsQ0FBQztJQUM3RSxDQUFDO0lBQ0QsZ0NBQWdDOzs7Ozs7SUFFekIsOEJBQU07Ozs7OztJQUFiLFVBQWMsR0FBNkI7UUFDdkMsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBbkZnQix1QkFBUyxHQUErQixFQUFFLENBQUM7SUFDM0MscUJBQU8sR0FBUyxTQUFTLENBQUM7O2dCQUw5QyxVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7d0JBTkQ7Q0E0RkMsQUF4RkQsSUF3RkM7U0FyRlksYUFBYTs7Ozs7O0lBQ3RCLHdCQUE0RDs7Ozs7SUFDNUQsc0JBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxvdGx5IH0gZnJvbSAnLi9wbG90bHkuaW50ZXJmYWNlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBsb3RseVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2VzOiBQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnRbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBzdGF0aWMgX3Bsb3RseT86IGFueSA9IHVuZGVmaW5lZDtcblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0UGxvdGx5KHBsb3RseTogYW55KSB7XG4gICAgICAgIFBsb3RseVNlcnZpY2UuX3Bsb3RseSA9IHBsb3RseTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc2VydChpbnN0YW5jZTogUGxvdGx5LlBsb3RseUhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gUGxvdGx5U2VydmljZS5pbnN0YW5jZXMuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIFBsb3RseVNlcnZpY2UuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZShkaXY6IFBsb3RseS5QbG90bHlIVE1MRWxlbWVudCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IFBsb3RseVNlcnZpY2UuaW5zdGFuY2VzLmluZGV4T2YoZGl2KTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIFBsb3RseVNlcnZpY2UuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBQbG90bHlTZXJ2aWNlLl9wbG90bHkucHVyZ2UoZGl2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbnN0YW5jZUJ5RGl2SWQoaWQ6IHN0cmluZyk6IFBsb3RseS5QbG90bHlIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgUGxvdGx5U2VydmljZS5pbnN0YW5jZXMpIHtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGxvdGx5KCkge1xuICAgICAgICBpZiAodHlwZW9mIFBsb3RseVNlcnZpY2UuX3Bsb3RseSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUGVlciBkZXBlbmRlbmN5IHBsb3RseS5qcyBpc24ndCBpbnN0YWxsZWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQbG90bHlTZXJ2aWNlLl9wbG90bHk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHdhaXRGb3IoZm46ICgpID0+IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbEZuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZuKCkgPyByZXNvbHZlKCkgOiBzZXRUaW1lb3V0KGxvY2FsRm4sIDEwKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxvY2FsRm4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoXG4gICAgcHVibGljIGFzeW5jIG5ld1Bsb3QoZGl2OiBIVE1MRGl2RWxlbWVudCwgZGF0YTogUGxvdGx5LkRhdGFbXSwgbGF5b3V0PzogUGFydGlhbDxQbG90bHkuTGF5b3V0PiwgY29uZmlnPzogUGFydGlhbDxQbG90bHkuQ29uZmlnPiwgZnJhbWVzPzogUGFydGlhbDxQbG90bHkuQ29uZmlnPltdKSB7XG4gICAgICAgIGF3YWl0IHRoaXMud2FpdEZvcigoKSA9PiB0aGlzLmdldFBsb3RseSgpICE9PSAnd2FpdGluZycpO1xuXG4gICAgICAgIGlmIChmcmFtZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtkYXRhLCBsYXlvdXQsIGNvbmZpZywgZnJhbWVzfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBsb3RseSgpLm5ld1Bsb3QoZGl2LCBvYmopLnRoZW4oKCkgPT4gUGxvdGx5U2VydmljZS5pbnNlcnQoZGl2IGFzIGFueSkpIGFzIFByb21pc2U8YW55PjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBsb3RseSgpLm5ld1Bsb3QoZGl2LCBkYXRhLCBsYXlvdXQsIGNvbmZpZykudGhlbigoKSA9PiBQbG90bHlTZXJ2aWNlLmluc2VydChkaXYgYXMgYW55KSkgYXMgUHJvbWlzZTxhbnk+O1xuICAgIH1cblxuICAgIHB1YmxpYyBwbG90KGRpdjogUGxvdGx5LlBsb3RseUhUTUxFbGVtZW50LCBkYXRhOiBQbG90bHkuRGF0YVtdLCBsYXlvdXQ/OiBQYXJ0aWFsPFBsb3RseS5MYXlvdXQ+LCBjb25maWc/OiBQYXJ0aWFsPFBsb3RseS5Db25maWc+LCBmcmFtZXM/OiBQYXJ0aWFsPFBsb3RseS5Db25maWc+W10pIHtcbiAgICAgICAgaWYgKGZyYW1lcykge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge2RhdGEsIGxheW91dCwgY29uZmlnLCBmcmFtZXN9O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGxvdGx5KCkucGxvdChkaXYsIG9iaikgYXMgUHJvbWlzZTxhbnk+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGxvdGx5KCkucGxvdChkaXYsIGRhdGEsIGxheW91dCwgY29uZmlnKSBhcyBQcm9taXNlPGFueT47XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShkaXY6IFBsb3RseS5QbG90bHlIVE1MRWxlbWVudCwgZGF0YTogUGxvdGx5LkRhdGFbXSwgbGF5b3V0PzogUGFydGlhbDxQbG90bHkuTGF5b3V0PiwgY29uZmlnPzogUGFydGlhbDxQbG90bHkuQ29uZmlnPiwgZnJhbWVzPzogUGFydGlhbDxQbG90bHkuQ29uZmlnPltdKSB7XG4gICAgICAgIGlmIChmcmFtZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtkYXRhLCBsYXlvdXQsIGNvbmZpZywgZnJhbWVzfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBsb3RseSgpLnJlYWN0KGRpdiwgb2JqKSBhcyBQcm9taXNlPGFueT47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQbG90bHkoKS5yZWFjdChkaXYsIGRhdGEsIGxheW91dCwgY29uZmlnKSBhcyBQcm9taXNlPGFueT47XG4gICAgfVxuICAgIC8vIHRzbGludDplbmFibGUgbWF4LWxpbmUtbGVuZ3RoXG5cbiAgICBwdWJsaWMgcmVzaXplKGRpdjogUGxvdGx5LlBsb3RseUhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBsb3RseSgpLlBsb3RzLnJlc2l6ZShkaXYpO1xuICAgIH1cbn1cbiJdfQ==