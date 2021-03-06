/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotComponent } from '../shared/plot/plot.component';
import { PlotlyService } from '../shared/plotly.service';
import { SharedModule } from '../shared/shared.module';
var PlotlyModule = /** @class */ (function () {
    function PlotlyModule() {
        if (!this.isValid()) {
            /** @type {?} */
            var msg = "Invalid PlotlyJS object. Please check https://github.com/plotly/angular-plotly.js#quick-start"
                + " to see how to add PlotlyJS to your project.";
            throw new Error(msg);
        }
        PlotlyService.setPlotly(PlotlyModule.plotlyjs);
    }
    /**
     * @private
     * @return {?}
     */
    PlotlyModule.prototype.isValid = /**
     * @private
     * @return {?}
     */
    function () {
        return PlotlyModule.plotlyjs !== undefined
            && typeof PlotlyModule.plotlyjs.plot === 'function';
    };
    PlotlyModule.plotlyjs = {};
    PlotlyModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, SharedModule],
                    declarations: [],
                    exports: [PlotComponent]
                },] }
    ];
    /** @nocollapse */
    PlotlyModule.ctorParameters = function () { return []; };
    return PlotlyModule;
}());
export { PlotlyModule };
if (false) {
    /** @type {?} */
    PlotlyModule.plotlyjs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvdGx5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcGxvdGx5LmpzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9wbG90bHkvcGxvdGx5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHdkQ7SUFRSTtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7O2dCQUNYLEdBQUcsR0FBRywrRkFBK0Y7a0JBQy9GLDhDQUE4QztZQUMxRCxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFTyw4QkFBTzs7OztJQUFmO1FBQ0ksT0FBTyxZQUFZLENBQUMsUUFBUSxLQUFLLFNBQVM7ZUFDbkMsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7SUFDNUQsQ0FBQztJQWZhLHFCQUFRLEdBQVEsRUFBRSxDQUFDOztnQkFOcEMsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7b0JBQ3JDLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7aUJBQzNCOzs7O0lBa0JELG1CQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksWUFBWTs7O0lBQ3JCLHNCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBQbG90Q29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL3Bsb3QvcGxvdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxvdGx5U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9wbG90bHkuc2VydmljZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgZXhwb3J0czogW1Bsb3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBsb3RseU1vZHVsZSB7XG4gICAgcHVibGljIHN0YXRpYyBwbG90bHlqczogYW55ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgY29uc3QgbXNnID0gXCJJbnZhbGlkIFBsb3RseUpTIG9iamVjdC4gUGxlYXNlIGNoZWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9wbG90bHkvYW5ndWxhci1wbG90bHkuanMjcXVpY2stc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICsgXCIgdG8gc2VlIGhvdyB0byBhZGQgUGxvdGx5SlMgdG8geW91ciBwcm9qZWN0LlwiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICAgIH1cblxuICAgICAgICBQbG90bHlTZXJ2aWNlLnNldFBsb3RseShQbG90bHlNb2R1bGUucGxvdGx5anMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNWYWxpZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFBsb3RseU1vZHVsZS5wbG90bHlqcyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAmJiB0eXBlb2YgUGxvdGx5TW9kdWxlLnBsb3RseWpzLnBsb3QgPT09ICdmdW5jdGlvbic7XG4gICAgfVxufVxuIl19