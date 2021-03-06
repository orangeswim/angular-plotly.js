/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotComponent } from '../shared/plot/plot.component';
import { PlotlyService } from '../shared/plotly.service';
import { SharedModule } from '../shared/shared.module';
export class PlotlyModule {
    constructor() {
        if (!this.isValid()) {
            /** @type {?} */
            const msg = "Invalid PlotlyJS object. Please check https://github.com/plotly/angular-plotly.js#quick-start"
                + " to see how to add PlotlyJS to your project.";
            throw new Error(msg);
        }
        PlotlyService.setPlotly(PlotlyModule.plotlyjs);
    }
    /**
     * @private
     * @return {?}
     */
    isValid() {
        return PlotlyModule.plotlyjs !== undefined
            && typeof PlotlyModule.plotlyjs.plot === 'function';
    }
}
PlotlyModule.plotlyjs = {};
PlotlyModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SharedModule],
                declarations: [],
                exports: [PlotComponent]
            },] }
];
/** @nocollapse */
PlotlyModule.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    PlotlyModule.plotlyjs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvdGx5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcGxvdGx5LmpzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9wbG90bHkvcGxvdGx5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFRdkQsTUFBTSxPQUFPLFlBQVk7SUFHckI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFOztrQkFDWCxHQUFHLEdBQUcsK0ZBQStGO2tCQUMvRiw4Q0FBOEM7WUFDMUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUVELGFBQWEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRU8sT0FBTztRQUNYLE9BQU8sWUFBWSxDQUFDLFFBQVEsS0FBSyxTQUFTO2VBQ25DLE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO0lBQzVELENBQUM7O0FBZmEscUJBQVEsR0FBUSxFQUFFLENBQUM7O1lBTnBDLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2dCQUNyQyxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQzNCOzs7Ozs7SUFFRyxzQkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgUGxvdENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9wbG90L3Bsb3QuY29tcG9uZW50JztcbmltcG9ydCB7IFBsb3RseVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvcGxvdGx5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhcmVkTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGV4cG9ydHM6IFtQbG90Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQbG90bHlNb2R1bGUge1xuICAgIHB1YmxpYyBzdGF0aWMgcGxvdGx5anM6IGFueSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IFwiSW52YWxpZCBQbG90bHlKUyBvYmplY3QuIFBsZWFzZSBjaGVjayBodHRwczovL2dpdGh1Yi5jb20vcGxvdGx5L2FuZ3VsYXItcGxvdGx5LmpzI3F1aWNrLXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICArIFwiIHRvIHNlZSBob3cgdG8gYWRkIFBsb3RseUpTIHRvIHlvdXIgcHJvamVjdC5cIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgICB9XG5cbiAgICAgICAgUGxvdGx5U2VydmljZS5zZXRQbG90bHkoUGxvdGx5TW9kdWxlLnBsb3RseWpzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBQbG90bHlNb2R1bGUucGxvdGx5anMgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgJiYgdHlwZW9mIFBsb3RseU1vZHVsZS5wbG90bHlqcy5wbG90ID09PSAnZnVuY3Rpb24nO1xuICAgIH1cbn1cbiJdfQ==