/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PlotlyService {
    /**
     * @param {?} plotly
     * @return {?}
     */
    static setPlotly(plotly) {
        PlotlyService._plotly = plotly;
    }
    /**
     * @param {?} instance
     * @return {?}
     */
    static insert(instance) {
        /** @type {?} */
        const index = PlotlyService.instances.indexOf(instance);
        if (index === -1) {
            PlotlyService.instances.push(instance);
        }
        return instance;
    }
    /**
     * @param {?} div
     * @return {?}
     */
    static remove(div) {
        /** @type {?} */
        const index = PlotlyService.instances.indexOf(div);
        if (index >= 0) {
            PlotlyService.instances.splice(index, 1);
            PlotlyService._plotly.purge(div);
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getInstanceByDivId(id) {
        for (const instance of PlotlyService.instances) {
            if (instance && instance.id === id) {
                return instance;
            }
        }
        return undefined;
    }
    /**
     * @return {?}
     */
    getPlotly() {
        if (typeof PlotlyService._plotly === 'undefined') {
            throw new Error(`Peer dependency plotly.js isn't installed`);
        }
        return PlotlyService._plotly;
    }
    /**
     * @protected
     * @param {?} fn
     * @return {?}
     */
    waitFor(fn) {
        return new Promise((resolve) => {
            /** @type {?} */
            const localFn = () => {
                fn() ? resolve() : setTimeout(localFn, 10);
            };
            localFn();
        });
    }
    // tslint:disable max-line-length
    /**
     * @param {?} div
     * @param {?} data
     * @param {?=} layout
     * @param {?=} config
     * @param {?=} frames
     * @return {?}
     */
    newPlot(div, data, layout, config, frames) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.waitFor(() => this.getPlotly() !== 'waiting');
            if (frames) {
                /** @type {?} */
                const obj = { data, layout, config, frames };
                return (/** @type {?} */ (this.getPlotly().newPlot(div, obj).then(() => PlotlyService.insert((/** @type {?} */ (div))))));
            }
            return (/** @type {?} */ (this.getPlotly().newPlot(div, data, layout, config).then(() => PlotlyService.insert((/** @type {?} */ (div))))));
        });
    }
    /**
     * @param {?} div
     * @param {?} data
     * @param {?=} layout
     * @param {?=} config
     * @param {?=} frames
     * @return {?}
     */
    plot(div, data, layout, config, frames) {
        if (frames) {
            /** @type {?} */
            const obj = { data, layout, config, frames };
            return (/** @type {?} */ (this.getPlotly().plot(div, obj)));
        }
        return (/** @type {?} */ (this.getPlotly().plot(div, data, layout, config)));
    }
    /**
     * @param {?} div
     * @param {?} data
     * @param {?=} layout
     * @param {?=} config
     * @param {?=} frames
     * @return {?}
     */
    update(div, data, layout, config, frames) {
        if (frames) {
            /** @type {?} */
            const obj = { data, layout, config, frames };
            return (/** @type {?} */ (this.getPlotly().react(div, obj)));
        }
        return (/** @type {?} */ (this.getPlotly().react(div, data, layout, config)));
    }
    // tslint:enable max-line-length
    /**
     * @param {?} div
     * @return {?}
     */
    resize(div) {
        return this.getPlotly().Plots.resize(div);
    }
}
PlotlyService.instances = [];
PlotlyService._plotly = undefined;
PlotlyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ PlotlyService.ngInjectableDef = i0.defineInjectable({ factory: function PlotlyService_Factory() { return new PlotlyService(); }, token: PlotlyService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvdGx5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBsb3RseS5qcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Bsb3RseS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPM0MsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBSWYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFXO1FBQy9CLGFBQWEsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFrQzs7Y0FDN0MsS0FBSyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUN2RCxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNkLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQTZCOztjQUN4QyxLQUFLLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ2xELElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7Ozs7O0lBRU0sa0JBQWtCLENBQUMsRUFBVTtRQUNoQyxLQUFLLE1BQU0sUUFBUSxJQUFJLGFBQWEsQ0FBQyxTQUFTLEVBQUU7WUFDNUMsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ2hDLE9BQU8sUUFBUSxDQUFDO2FBQ25CO1NBQ0o7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDOzs7O0lBRU0sU0FBUztRQUNaLElBQUksT0FBTyxhQUFhLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUM5QyxNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7U0FDaEU7UUFFRCxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRVMsT0FBTyxDQUFDLEVBQWlCO1FBQy9CLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTs7a0JBQ3JCLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQ2pCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQyxDQUFDO1lBRUQsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7Ozs7Ozs7SUFHWSxPQUFPLENBQUMsR0FBbUIsRUFBRSxJQUFtQixFQUFFLE1BQStCLEVBQUUsTUFBK0IsRUFBRSxNQUFpQzs7WUFDOUosTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxTQUFTLENBQUMsQ0FBQztZQUV6RCxJQUFJLE1BQU0sRUFBRTs7c0JBQ0YsR0FBRyxHQUFHLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDO2dCQUMxQyxPQUFPLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLG1CQUFBLEdBQUcsRUFBTyxDQUFDLENBQUMsRUFBZ0IsQ0FBQzthQUMxRztZQUVELE9BQU8sbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxHQUFHLEVBQU8sQ0FBQyxDQUFDLEVBQWdCLENBQUM7UUFDNUgsQ0FBQztLQUFBOzs7Ozs7Ozs7SUFFTSxJQUFJLENBQUMsR0FBNkIsRUFBRSxJQUFtQixFQUFFLE1BQStCLEVBQUUsTUFBK0IsRUFBRSxNQUFpQztRQUMvSixJQUFJLE1BQU0sRUFBRTs7a0JBQ0YsR0FBRyxHQUFHLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDO1lBQzFDLE9BQU8sbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQWdCLENBQUM7U0FDMUQ7UUFFRCxPQUFPLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQWdCLENBQUM7SUFDNUUsQ0FBQzs7Ozs7Ozs7O0lBRU0sTUFBTSxDQUFDLEdBQTZCLEVBQUUsSUFBbUIsRUFBRSxNQUErQixFQUFFLE1BQStCLEVBQUUsTUFBaUM7UUFDakssSUFBSSxNQUFNLEVBQUU7O2tCQUNGLEdBQUcsR0FBRyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQztZQUMxQyxPQUFPLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFnQixDQUFDO1NBQzNEO1FBRUQsT0FBTyxtQkFBQSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFnQixDQUFDO0lBQzdFLENBQUM7Ozs7OztJQUdNLE1BQU0sQ0FBQyxHQUE2QjtRQUN2QyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O0FBbkZnQix1QkFBUyxHQUErQixFQUFFLENBQUM7QUFDM0MscUJBQU8sR0FBUyxTQUFTLENBQUM7O1lBTDlDLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7Ozs7Ozs7SUFFRyx3QkFBNEQ7Ozs7O0lBQzVELHNCQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsb3RseSB9IGZyb20gJy4vcGxvdGx5LmludGVyZmFjZSc7XG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQbG90bHlTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGluc3RhbmNlczogUGxvdGx5LlBsb3RseUhUTUxFbGVtZW50W10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9wbG90bHk/OiBhbnkgPSB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldFBsb3RseShwbG90bHk6IGFueSkge1xuICAgICAgICBQbG90bHlTZXJ2aWNlLl9wbG90bHkgPSBwbG90bHk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpbnNlcnQoaW5zdGFuY2U6IFBsb3RseS5QbG90bHlIVE1MRWxlbWVudCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IFBsb3RseVNlcnZpY2UuaW5zdGFuY2VzLmluZGV4T2YoaW5zdGFuY2UpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBQbG90bHlTZXJ2aWNlLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmUoZGl2OiBQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBQbG90bHlTZXJ2aWNlLmluc3RhbmNlcy5pbmRleE9mKGRpdik7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBQbG90bHlTZXJ2aWNlLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgUGxvdGx5U2VydmljZS5fcGxvdGx5LnB1cmdlKGRpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW5zdGFuY2VCeURpdklkKGlkOiBzdHJpbmcpOiBQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQgfCB1bmRlZmluZWQge1xuICAgICAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIFBsb3RseVNlcnZpY2UuaW5zdGFuY2VzKSB7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBsb3RseSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBQbG90bHlTZXJ2aWNlLl9wbG90bHkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFBlZXIgZGVwZW5kZW5jeSBwbG90bHkuanMgaXNuJ3QgaW5zdGFsbGVkYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUGxvdGx5U2VydmljZS5fcGxvdGx5O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB3YWl0Rm9yKGZuOiAoKSA9PiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxGbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBmbigpID8gcmVzb2x2ZSgpIDogc2V0VGltZW91dChsb2NhbEZuLCAxMCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsb2NhbEZuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aFxuICAgIHB1YmxpYyBhc3luYyBuZXdQbG90KGRpdjogSFRNTERpdkVsZW1lbnQsIGRhdGE6IFBsb3RseS5EYXRhW10sIGxheW91dD86IFBhcnRpYWw8UGxvdGx5LkxheW91dD4sIGNvbmZpZz86IFBhcnRpYWw8UGxvdGx5LkNvbmZpZz4sIGZyYW1lcz86IFBhcnRpYWw8UGxvdGx5LkNvbmZpZz5bXSkge1xuICAgICAgICBhd2FpdCB0aGlzLndhaXRGb3IoKCkgPT4gdGhpcy5nZXRQbG90bHkoKSAhPT0gJ3dhaXRpbmcnKTtcblxuICAgICAgICBpZiAoZnJhbWVzKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7ZGF0YSwgbGF5b3V0LCBjb25maWcsIGZyYW1lc307XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRQbG90bHkoKS5uZXdQbG90KGRpdiwgb2JqKS50aGVuKCgpID0+IFBsb3RseVNlcnZpY2UuaW5zZXJ0KGRpdiBhcyBhbnkpKSBhcyBQcm9taXNlPGFueT47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQbG90bHkoKS5uZXdQbG90KGRpdiwgZGF0YSwgbGF5b3V0LCBjb25maWcpLnRoZW4oKCkgPT4gUGxvdGx5U2VydmljZS5pbnNlcnQoZGl2IGFzIGFueSkpIGFzIFByb21pc2U8YW55PjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxvdChkaXY6IFBsb3RseS5QbG90bHlIVE1MRWxlbWVudCwgZGF0YTogUGxvdGx5LkRhdGFbXSwgbGF5b3V0PzogUGFydGlhbDxQbG90bHkuTGF5b3V0PiwgY29uZmlnPzogUGFydGlhbDxQbG90bHkuQ29uZmlnPiwgZnJhbWVzPzogUGFydGlhbDxQbG90bHkuQ29uZmlnPltdKSB7XG4gICAgICAgIGlmIChmcmFtZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtkYXRhLCBsYXlvdXQsIGNvbmZpZywgZnJhbWVzfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBsb3RseSgpLnBsb3QoZGl2LCBvYmopIGFzIFByb21pc2U8YW55PjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBsb3RseSgpLnBsb3QoZGl2LCBkYXRhLCBsYXlvdXQsIGNvbmZpZykgYXMgUHJvbWlzZTxhbnk+O1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZGl2OiBQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQsIGRhdGE6IFBsb3RseS5EYXRhW10sIGxheW91dD86IFBhcnRpYWw8UGxvdGx5LkxheW91dD4sIGNvbmZpZz86IFBhcnRpYWw8UGxvdGx5LkNvbmZpZz4sIGZyYW1lcz86IFBhcnRpYWw8UGxvdGx5LkNvbmZpZz5bXSkge1xuICAgICAgICBpZiAoZnJhbWVzKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7ZGF0YSwgbGF5b3V0LCBjb25maWcsIGZyYW1lc307XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRQbG90bHkoKS5yZWFjdChkaXYsIG9iaikgYXMgUHJvbWlzZTxhbnk+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGxvdGx5KCkucmVhY3QoZGl2LCBkYXRhLCBsYXlvdXQsIGNvbmZpZykgYXMgUHJvbWlzZTxhbnk+O1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZW5hYmxlIG1heC1saW5lLWxlbmd0aFxuXG4gICAgcHVibGljIHJlc2l6ZShkaXY6IFBsb3RseS5QbG90bHlIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQbG90bHkoKS5QbG90cy5yZXNpemUoZGl2KTtcbiAgICB9XG59XG4iXX0=