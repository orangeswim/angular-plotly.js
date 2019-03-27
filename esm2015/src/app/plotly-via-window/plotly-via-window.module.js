/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotComponent } from '../shared/plot/plot.component';
import { PlotlyService } from '../shared/plotly.service';
import { SharedModule } from '../shared/shared.module';
export class PlotlyViaWindowModule {
    constructor() {
        /** @type {?} */
        const plotly = ((/** @type {?} */ (window))).Plotly;
        if (typeof plotly === 'undefined') {
            throw new Error(`Plotly object not found on window.`);
        }
        PlotlyService.setPlotly(plotly);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PlotlyViaWindowModule,
            providers: [PlotlyService]
        };
    }
}
PlotlyViaWindowModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SharedModule],
                declarations: [],
                exports: [PlotComponent]
            },] }
];
/** @nocollapse */
PlotlyViaWindowModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvdGx5LXZpYS13aW5kb3cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wbG90bHkuanMvIiwic291cmNlcyI6WyJzcmMvYXBwL3Bsb3RseS12aWEtd2luZG93L3Bsb3RseS12aWEtd2luZG93Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBUXZELE1BQU0sT0FBTyxxQkFBcUI7SUFDOUI7O2NBQ1UsTUFBTSxHQUFHLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxNQUFNO1FBRXJDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztTQUN6RDtRQUVELGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNILFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQzdCLENBQUM7SUFDTixDQUFDOzs7WUFyQkosUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7Z0JBQ3JDLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgUGxvdENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9wbG90L3Bsb3QuY29tcG9uZW50JztcbmltcG9ydCB7IFBsb3RseVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvcGxvdGx5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhcmVkTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGV4cG9ydHM6IFtQbG90Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQbG90bHlWaWFXaW5kb3dNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBwbG90bHkgPSAod2luZG93IGFzIGFueSkuUGxvdGx5O1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGxvdGx5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQbG90bHkgb2JqZWN0IG5vdCBmb3VuZCBvbiB3aW5kb3cuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBQbG90bHlTZXJ2aWNlLnNldFBsb3RseShwbG90bHkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFBsb3RseVZpYVdpbmRvd01vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1Bsb3RseVNlcnZpY2VdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19