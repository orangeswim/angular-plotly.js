/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotComponent } from '../shared/plot/plot.component';
import { PlotlyService } from '../shared/plotly.service';
import { SharedModule } from '../shared/shared.module';
var PlotlyViaWindowModule = /** @class */ (function () {
    function PlotlyViaWindowModule() {
        /** @type {?} */
        var plotly = ((/** @type {?} */ (window))).Plotly;
        if (typeof plotly === 'undefined') {
            throw new Error("Plotly object not found on window.");
        }
        PlotlyService.setPlotly(plotly);
    }
    /**
     * @return {?}
     */
    PlotlyViaWindowModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PlotlyViaWindowModule,
            providers: [PlotlyService]
        };
    };
    PlotlyViaWindowModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, SharedModule],
                    declarations: [],
                    exports: [PlotComponent]
                },] }
    ];
    /** @nocollapse */
    PlotlyViaWindowModule.ctorParameters = function () { return []; };
    return PlotlyViaWindowModule;
}());
export { PlotlyViaWindowModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvdGx5LXZpYS13aW5kb3cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wbG90bHkuanMvIiwic291cmNlcyI6WyJzcmMvYXBwL3Bsb3RseS12aWEtd2luZG93L3Bsb3RseS12aWEtd2luZG93Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBR3ZEO0lBTUk7O1lBQ1UsTUFBTSxHQUFHLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxNQUFNO1FBRXJDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztTQUN6RDtRQUVELGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVNLDZCQUFPOzs7SUFBZDtRQUNJLE9BQU87WUFDSCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUM3QixDQUFDO0lBQ04sQ0FBQzs7Z0JBckJKLFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO29CQUNyQyxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUMzQjs7OztJQWtCRCw0QkFBQztDQUFBLEFBdEJELElBc0JDO1NBakJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBQbG90Q29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL3Bsb3QvcGxvdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxvdGx5U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9wbG90bHkuc2VydmljZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgZXhwb3J0czogW1Bsb3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBsb3RseVZpYVdpbmRvd01vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHBsb3RseSA9ICh3aW5kb3cgYXMgYW55KS5QbG90bHk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwbG90bHkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFBsb3RseSBvYmplY3Qgbm90IGZvdW5kIG9uIHdpbmRvdy5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFBsb3RseVNlcnZpY2Uuc2V0UGxvdGx5KHBsb3RseSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogUGxvdGx5VmlhV2luZG93TW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbUGxvdGx5U2VydmljZV1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=