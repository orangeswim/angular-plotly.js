/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotComponent } from '../shared/plot/plot.component';
import { PlotlyService } from '../shared/plotly.service';
import { SharedModule } from '../shared/shared.module';
export class PlotlyViaCDNModule {
    /**
     * @param {?} version
     * @return {?}
     */
    static setPlotlyVersion(version) {
        /** @type {?} */
        const isOk = version === 'latest' || /^\d\.\d{1,2}\.\d{1,2}$/.test(version);
        if (!isOk) {
            throw new Error(`Invalid plotly version. Please set 'latest' or version number (i.e.: 1.4.3)`);
        }
        PlotlyViaCDNModule.plotlyVersion = version;
    }
    /**
     * @return {?}
     */
    static loadViaCDN() {
        PlotlyService.setPlotly('waiting');
        /** @type {?} */
        const src = `https://cdn.plot.ly/plotly-${PlotlyViaCDNModule.plotlyVersion}.min.js`;
        /** @type {?} */
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.onerror = () => console.error(`Error loading plotly.js library from ${src}`);
        /** @type {?} */
        const head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
        /** @type {?} */
        let counter = 200;
        // equivalent of 10 seconds...
        /** @type {?} */
        const fn = () => {
            /** @type {?} */
            const plotly = ((/** @type {?} */ (window))).Plotly;
            if (plotly) {
                PlotlyService.setPlotly(plotly);
            }
            else if (counter > 0) {
                counter--;
                setTimeout(fn, 50);
            }
            else {
                throw new Error(`Error loading plotly.js library from ${src}. Timeout.`);
            }
        };
        fn();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        if (config.version === undefined) {
            console.warn(`It's strongly recommended that you set a plotly version when using via CDN.`);
            config.version = 'latest';
        }
        PlotlyViaCDNModule.setPlotlyVersion(config.version);
        PlotlyViaCDNModule.loadViaCDN();
        return {
            ngModule: PlotlyViaCDNModule,
            providers: [PlotlyService]
        };
    }
}
PlotlyViaCDNModule.plotlyVersion = 'latest';
PlotlyViaCDNModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SharedModule],
                declarations: [],
                exports: [PlotComponent]
            },] }
];
if (false) {
    /** @type {?} */
    PlotlyViaCDNModule.plotlyVersion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvdGx5LXZpYS1jZG4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wbG90bHkuanMvIiwic291cmNlcyI6WyJzcmMvYXBwL3Bsb3RseS12aWEtY2RuL3Bsb3RseS12aWEtY2RuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBT3ZELE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBRzNCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFlOztjQUM3QixJQUFJLEdBQUcsT0FBTyxLQUFLLFFBQVEsSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxNQUFNLElBQUksS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUM7U0FDbEc7UUFFRCxrQkFBa0IsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxNQUFNLENBQUMsVUFBVTtRQUNiLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7O2NBQzdCLEdBQUcsR0FBRyw4QkFBOEIsa0JBQWtCLENBQUMsYUFBYSxTQUFTOztjQUU3RSxNQUFNLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDakIsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxHQUFHLEVBQUUsQ0FBQyxDQUFDOztjQUU5RSxJQUFJLEdBQW9CLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFFckIsT0FBTyxHQUFHLEdBQUc7OztjQUVYLEVBQUUsR0FBRyxHQUFHLEVBQUU7O2tCQUNOLE1BQU0sR0FBRyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsTUFBTTtZQUNyQyxJQUFJLE1BQU0sRUFBRTtnQkFDUixhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25DO2lCQUFNLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDcEIsT0FBTyxFQUFHLENBQUM7Z0JBQ1gsVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUN0QjtpQkFBTTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxHQUFHLFlBQVksQ0FBQyxDQUFDO2FBQzVFO1FBQ0wsQ0FBQztRQUVELEVBQUUsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWtDO1FBQzdDLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyw2RUFBNkUsQ0FBQyxDQUFDO1lBQzVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1NBQzdCO1FBRUQsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWhDLE9BQU87WUFDSCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUM3QixDQUFDO0lBQ04sQ0FBQzs7QUFyRE0sZ0NBQWEsR0FBWSxRQUFRLENBQUM7O1lBTjVDLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2dCQUNyQyxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQzNCOzs7O0lBRUcsaUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFBsb3RDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvcGxvdC9wbG90LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbG90bHlTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Bsb3RseS5zZXJ2aWNlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgZXhwb3J0czogW1Bsb3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBsb3RseVZpYUNETk1vZHVsZSB7XG4gICAgc3RhdGljIHBsb3RseVZlcnNpb24/OiBzdHJpbmcgPSAnbGF0ZXN0JztcblxuICAgIHN0YXRpYyBzZXRQbG90bHlWZXJzaW9uKHZlcnNpb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBpc09rID0gdmVyc2lvbiA9PT0gJ2xhdGVzdCcgfHwgL15cXGRcXC5cXGR7MSwyfVxcLlxcZHsxLDJ9JC8udGVzdCh2ZXJzaW9uKTtcbiAgICAgICAgaWYgKCFpc09rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcGxvdGx5IHZlcnNpb24uIFBsZWFzZSBzZXQgJ2xhdGVzdCcgb3IgdmVyc2lvbiBudW1iZXIgKGkuZS46IDEuNC4zKWApO1xuICAgICAgICB9XG5cbiAgICAgICAgUGxvdGx5VmlhQ0ROTW9kdWxlLnBsb3RseVZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkVmlhQ0ROKCkge1xuICAgICAgICBQbG90bHlTZXJ2aWNlLnNldFBsb3RseSgnd2FpdGluZycpO1xuICAgICAgICBjb25zdCBzcmMgPSBgaHR0cHM6Ly9jZG4ucGxvdC5seS9wbG90bHktJHtQbG90bHlWaWFDRE5Nb2R1bGUucGxvdGx5VmVyc2lvbn0ubWluLmpzYDtcblxuICAgICAgICBjb25zdCBzY3JpcHQ6IEhUTUxTY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT4gY29uc29sZS5lcnJvcihgRXJyb3IgbG9hZGluZyBwbG90bHkuanMgbGlicmFyeSBmcm9tICR7c3JjfWApO1xuXG4gICAgICAgIGNvbnN0IGhlYWQ6IEhUTUxIZWFkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICAgICAgICBsZXQgY291bnRlciA9IDIwMDsgLy8gZXF1aXZhbGVudCBvZiAxMCBzZWNvbmRzLi4uXG5cbiAgICAgICAgY29uc3QgZm4gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbG90bHkgPSAod2luZG93IGFzIGFueSkuUGxvdGx5O1xuICAgICAgICAgICAgaWYgKHBsb3RseSkge1xuICAgICAgICAgICAgICAgIFBsb3RseVNlcnZpY2Uuc2V0UGxvdGx5KHBsb3RseSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgY291bnRlciAtLTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZuLCA1MCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgbG9hZGluZyBwbG90bHkuanMgbGlicmFyeSBmcm9tICR7c3JjfS4gVGltZW91dC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmbigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZzogUGFydGlhbDx7dmVyc2lvbjogc3RyaW5nfT4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFBsb3RseVZpYUNETk1vZHVsZT4ge1xuICAgICAgICBpZiAoY29uZmlnLnZlcnNpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJdCdzIHN0cm9uZ2x5IHJlY29tbWVuZGVkIHRoYXQgeW91IHNldCBhIHBsb3RseSB2ZXJzaW9uIHdoZW4gdXNpbmcgdmlhIENETi5gKTtcbiAgICAgICAgICAgIGNvbmZpZy52ZXJzaW9uID0gJ2xhdGVzdCc7XG4gICAgICAgIH1cblxuICAgICAgICBQbG90bHlWaWFDRE5Nb2R1bGUuc2V0UGxvdGx5VmVyc2lvbihjb25maWcudmVyc2lvbik7XG4gICAgICAgIFBsb3RseVZpYUNETk1vZHVsZS5sb2FkVmlhQ0ROKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBQbG90bHlWaWFDRE5Nb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtQbG90bHlTZXJ2aWNlXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==