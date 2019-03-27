/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, IterableDiffers, KeyValueDiffers, } from '@angular/core';
import { PlotlyService } from '../plotly.service';
// @dynamic
export class PlotComponent {
    /**
     * @param {?} plotly
     * @param {?} iterableDiffers
     * @param {?} keyValueDiffers
     */
    constructor(plotly, iterableDiffers, keyValueDiffers) {
        this.plotly = plotly;
        this.iterableDiffers = iterableDiffers;
        this.keyValueDiffers = keyValueDiffers;
        this.defaultClassName = 'js-plotly-plot';
        this.revision = 0;
        this.debug = false;
        this.useResizeHandler = false;
        this.initialized = new EventEmitter();
        this.update = new EventEmitter();
        this.purge = new EventEmitter();
        this.error = new EventEmitter();
        this.afterExport = new EventEmitter();
        this.afterPlot = new EventEmitter();
        this.animated = new EventEmitter();
        this.animatingFrame = new EventEmitter();
        this.animationInterrupted = new EventEmitter();
        this.autoSize = new EventEmitter();
        this.beforeExport = new EventEmitter();
        this.buttonClicked = new EventEmitter();
        this.click = new EventEmitter();
        this.clickAnnotation = new EventEmitter();
        this.deselect = new EventEmitter();
        this.doubleClick = new EventEmitter();
        this.framework = new EventEmitter();
        this.hover = new EventEmitter();
        this.legendClick = new EventEmitter();
        this.legendDoubleClick = new EventEmitter();
        this.relayout = new EventEmitter();
        this.restyle = new EventEmitter();
        this.redraw = new EventEmitter();
        this.selected = new EventEmitter();
        this.selecting = new EventEmitter();
        this.sliderChange = new EventEmitter();
        this.sliderEnd = new EventEmitter();
        this.sliderStart = new EventEmitter();
        this.transitioning = new EventEmitter();
        this.transitionInterrupted = new EventEmitter();
        this.unhover = new EventEmitter();
        this.eventNames = ['afterExport', 'afterPlot', 'animated', 'animatingFrame', 'animationInterrupted', 'autoSize',
            'beforeExport', 'buttonClicked', 'click', 'clickAnnotation', 'deselect', 'doubleClick', 'framework', 'hover',
            'legendClick', 'legendDoubleClick', 'relayout', 'restyle', 'redraw', 'selected', 'selecting', 'sliderChange',
            'sliderEnd', 'sliderStart', 'transitioning', 'transitionInterrupted', 'unhover'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.createPlot().then(() => {
            /** @type {?} */
            const figure = this.createFigure();
            this.initialized.emit(figure);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (typeof this.resizeHandler === 'function') {
            this.getWindow().removeEventListener('resize', (/** @type {?} */ (this.resizeHandler)));
            this.resizeHandler = undefined;
        }
        /** @type {?} */
        const figure = this.createFigure();
        this.purge.emit(figure);
        PlotlyService.remove(this.plotlyInstance);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        let shouldUpdate = false;
        /** @type {?} */
        const revision = changes.revision;
        if (revision && !revision.isFirstChange()) {
            shouldUpdate = true;
        }
        /** @type {?} */
        const debug = changes.debug;
        if (debug && !debug.isFirstChange()) {
            shouldUpdate = true;
        }
        if (shouldUpdate) {
            this.updatePlot();
        }
        this.updateWindowResizeHandler();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        /** @type {?} */
        let shouldUpdate = false;
        if (this.layoutDiffer) {
            /** @type {?} */
            const layoutHasDiff = this.layoutDiffer.diff(this.layout);
            if (layoutHasDiff) {
                shouldUpdate = true;
            }
        }
        else if (this.layout) {
            this.layoutDiffer = this.keyValueDiffers.find(this.layout).create();
        }
        else {
            this.layoutDiffer = undefined;
        }
        if (this.dataDiffer) {
            /** @type {?} */
            const dataHasDiff = this.dataDiffer.diff(this.data);
            if (dataHasDiff) {
                shouldUpdate = true;
            }
        }
        else if (Array.isArray(this.data)) {
            this.dataDiffer = this.iterableDiffers.find(this.data).create(this.dataDifferTrackBy);
        }
        else {
            this.dataDiffer = undefined;
        }
        if (shouldUpdate && this.plotlyInstance) {
            this.updatePlot();
        }
    }
    /**
     * @return {?}
     */
    getWindow() {
        return window;
    }
    /**
     * @return {?}
     */
    getClassName() {
        /** @type {?} */
        let classes = [this.defaultClassName];
        if (Array.isArray(this.className)) {
            classes = classes.concat(this.className);
        }
        else if (this.className) {
            classes.push(this.className);
        }
        return classes.join(' ');
    }
    /**
     * @return {?}
     */
    createPlot() {
        return this.plotly.newPlot(this.plotEl.nativeElement, this.data, this.layout, this.config, this.frames).then(plotlyInstance => {
            this.plotlyInstance = plotlyInstance;
            this.getWindow().gd = this.debug ? plotlyInstance : undefined;
            this.eventNames.forEach(name => {
                /** @type {?} */
                const eventName = `plotly_${name.toLowerCase()}`;
                plotlyInstance.on(eventName, (data) => ((/** @type {?} */ (this[name]))).emit(data));
            });
            this.updateWindowResizeHandler();
        }, err => {
            console.error('Error while plotting:', err);
            this.error.emit(err);
        });
    }
    /**
     * @return {?}
     */
    createFigure() {
        /** @type {?} */
        const p = this.plotlyInstance;
        /** @type {?} */
        const figure = {
            data: p.data,
            layout: p.layout,
            frames: p._transitionData ? p._transitionData._frames : null
        };
        return figure;
    }
    /**
     * @return {?}
     */
    updatePlot() {
        if (!this.plotlyInstance) {
            /** @type {?} */
            const error = new Error(`Plotly component wasn't initialized`);
            this.error.emit(error);
            throw error;
        }
        return this.plotly.update(this.plotlyInstance, this.data, this.layout, this.config, this.frames).then(() => {
            /** @type {?} */
            const figure = this.createFigure();
            this.update.emit(figure);
        }, err => {
            console.error('Error while updating plot:', err);
            this.error.emit(err);
        });
    }
    /**
     * @return {?}
     */
    updateWindowResizeHandler() {
        if (this.useResizeHandler) {
            if (this.resizeHandler === undefined) {
                this.resizeHandler = () => this.plotly.resize(this.plotlyInstance);
                this.getWindow().addEventListener('resize', (/** @type {?} */ (this.resizeHandler)));
            }
        }
        else {
            if (typeof this.resizeHandler === 'function') {
                this.getWindow().removeEventListener('resize', (/** @type {?} */ (this.resizeHandler)));
                this.resizeHandler = undefined;
            }
        }
    }
    /**
     * @param {?} _
     * @param {?} item
     * @return {?}
     */
    dataDifferTrackBy(_, item) {
        /** @type {?} */
        const obj = Object.assign({}, item, { uid: '' });
        return JSON.stringify(obj);
    }
}
PlotComponent.decorators = [
    { type: Component, args: [{
                selector: 'plotly-plot',
                template: `<div #plot [attr.id]="divId" [className]="getClassName()" [ngStyle]="style"></div>`,
                providers: [PlotlyService]
            }] }
];
/** @nocollapse */
PlotComponent.ctorParameters = () => [
    { type: PlotlyService },
    { type: IterableDiffers },
    { type: KeyValueDiffers }
];
PlotComponent.propDecorators = {
    plotEl: [{ type: ViewChild, args: ['plot',] }],
    data: [{ type: Input }],
    layout: [{ type: Input }],
    config: [{ type: Input }],
    frames: [{ type: Input }],
    style: [{ type: Input }],
    divId: [{ type: Input }],
    revision: [{ type: Input }],
    className: [{ type: Input }],
    debug: [{ type: Input }],
    useResizeHandler: [{ type: Input }],
    initialized: [{ type: Output }],
    update: [{ type: Output }],
    purge: [{ type: Output }],
    error: [{ type: Output }],
    afterExport: [{ type: Output }],
    afterPlot: [{ type: Output }],
    animated: [{ type: Output }],
    animatingFrame: [{ type: Output }],
    animationInterrupted: [{ type: Output }],
    autoSize: [{ type: Output }],
    beforeExport: [{ type: Output }],
    buttonClicked: [{ type: Output }],
    click: [{ type: Output }],
    clickAnnotation: [{ type: Output }],
    deselect: [{ type: Output }],
    doubleClick: [{ type: Output }],
    framework: [{ type: Output }],
    hover: [{ type: Output }],
    legendClick: [{ type: Output }],
    legendDoubleClick: [{ type: Output }],
    relayout: [{ type: Output }],
    restyle: [{ type: Output }],
    redraw: [{ type: Output }],
    selected: [{ type: Output }],
    selecting: [{ type: Output }],
    sliderChange: [{ type: Output }],
    sliderEnd: [{ type: Output }],
    sliderStart: [{ type: Output }],
    transitioning: [{ type: Output }],
    transitionInterrupted: [{ type: Output }],
    unhover: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PlotComponent.prototype.defaultClassName;
    /** @type {?} */
    PlotComponent.prototype.plotlyInstance;
    /** @type {?} */
    PlotComponent.prototype.resizeHandler;
    /** @type {?} */
    PlotComponent.prototype.layoutDiffer;
    /** @type {?} */
    PlotComponent.prototype.dataDiffer;
    /** @type {?} */
    PlotComponent.prototype.plotEl;
    /** @type {?} */
    PlotComponent.prototype.data;
    /** @type {?} */
    PlotComponent.prototype.layout;
    /** @type {?} */
    PlotComponent.prototype.config;
    /** @type {?} */
    PlotComponent.prototype.frames;
    /** @type {?} */
    PlotComponent.prototype.style;
    /** @type {?} */
    PlotComponent.prototype.divId;
    /** @type {?} */
    PlotComponent.prototype.revision;
    /** @type {?} */
    PlotComponent.prototype.className;
    /** @type {?} */
    PlotComponent.prototype.debug;
    /** @type {?} */
    PlotComponent.prototype.useResizeHandler;
    /** @type {?} */
    PlotComponent.prototype.initialized;
    /** @type {?} */
    PlotComponent.prototype.update;
    /** @type {?} */
    PlotComponent.prototype.purge;
    /** @type {?} */
    PlotComponent.prototype.error;
    /** @type {?} */
    PlotComponent.prototype.afterExport;
    /** @type {?} */
    PlotComponent.prototype.afterPlot;
    /** @type {?} */
    PlotComponent.prototype.animated;
    /** @type {?} */
    PlotComponent.prototype.animatingFrame;
    /** @type {?} */
    PlotComponent.prototype.animationInterrupted;
    /** @type {?} */
    PlotComponent.prototype.autoSize;
    /** @type {?} */
    PlotComponent.prototype.beforeExport;
    /** @type {?} */
    PlotComponent.prototype.buttonClicked;
    /** @type {?} */
    PlotComponent.prototype.click;
    /** @type {?} */
    PlotComponent.prototype.clickAnnotation;
    /** @type {?} */
    PlotComponent.prototype.deselect;
    /** @type {?} */
    PlotComponent.prototype.doubleClick;
    /** @type {?} */
    PlotComponent.prototype.framework;
    /** @type {?} */
    PlotComponent.prototype.hover;
    /** @type {?} */
    PlotComponent.prototype.legendClick;
    /** @type {?} */
    PlotComponent.prototype.legendDoubleClick;
    /** @type {?} */
    PlotComponent.prototype.relayout;
    /** @type {?} */
    PlotComponent.prototype.restyle;
    /** @type {?} */
    PlotComponent.prototype.redraw;
    /** @type {?} */
    PlotComponent.prototype.selected;
    /** @type {?} */
    PlotComponent.prototype.selecting;
    /** @type {?} */
    PlotComponent.prototype.sliderChange;
    /** @type {?} */
    PlotComponent.prototype.sliderEnd;
    /** @type {?} */
    PlotComponent.prototype.sliderStart;
    /** @type {?} */
    PlotComponent.prototype.transitioning;
    /** @type {?} */
    PlotComponent.prototype.transitionInterrupted;
    /** @type {?} */
    PlotComponent.prototype.unhover;
    /** @type {?} */
    PlotComponent.prototype.eventNames;
    /** @type {?} */
    PlotComponent.prototype.plotly;
    /** @type {?} */
    PlotComponent.prototype.iterableDiffers;
    /** @type {?} */
    PlotComponent.prototype.keyValueDiffers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBsb3RseS5qcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Bsb3QvcGxvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFNBQVMsRUFHVCxlQUFlLEVBRWYsZUFBZSxHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBU2xELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUE0RHRCLFlBQ1csTUFBcUIsRUFDckIsZUFBZ0MsRUFDaEMsZUFBZ0M7UUFGaEMsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBOURqQyxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQWdCckMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUVqQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQ2hELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUMzQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDMUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFFbEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFB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QkFBd0I7O0lBQ3hCLGlDQUE4Qjs7SUFDOUIsa0NBQXVDOztJQUN2Qyw4QkFBZ0M7O0lBQ2hDLHlDQUEyQzs7SUFFM0Msb0NBQTBEOztJQUMxRCwrQkFBcUQ7O0lBQ3JELDhCQUFvRDs7SUFDcEQsOEJBQTRDOztJQUU1QyxvQ0FBMkM7O0lBQzNDLGtDQUF5Qzs7SUFDekMsaUNBQXdDOztJQUN4Qyx1Q0FBOEM7O0lBQzlDLDZDQUFvRDs7SUFDcEQsaUNBQXdDOztJQUN4QyxxQ0FBNEM7O0lBQzVDLHNDQUE2Qzs7SUFDN0MsOEJBQXFDOztJQUNyQyx3Q0FBK0M7O0lBQy9DLGlDQUF3Qzs7SUFDeEMsb0NBQTJDOztJQUMzQyxrQ0FBeUM7O0lBQ3pDLDhCQUFxQzs7SUFDckMsb0NBQTJDOztJQUMzQywwQ0FBaUQ7O0lBQ2pELGlDQUF3Qzs7SUFDeEMsZ0NBQXVDOztJQUN2QywrQkFBc0M7O0lBQ3RDLGlDQUF3Qzs7SUFDeEMsa0NBQXlDOztJQUN6QyxxQ0FBNEM7O0lBQzVDLGtDQUF5Qzs7SUFDekMsb0NBQTJDOztJQUMzQyxzQ0FBNkM7O0lBQzdDLDhDQUFxRDs7SUFDckQsZ0NBQXVDOztJQUV2QyxtQ0FHcUY7O0lBR2pGLCtCQUE0Qjs7SUFDNUIsd0NBQXVDOztJQUN2Qyx3Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgU2ltcGxlQ2hhbmdlLFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgVmlld0NoaWxkLFxuICAgIERvQ2hlY2ssXG4gICAgSXRlcmFibGVEaWZmZXIsXG4gICAgSXRlcmFibGVEaWZmZXJzLFxuICAgIEtleVZhbHVlRGlmZmVyLFxuICAgIEtleVZhbHVlRGlmZmVycyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBsb3RseVNlcnZpY2UgfSBmcm9tICcuLi9wbG90bHkuc2VydmljZSc7XG5pbXBvcnQgeyBQbG90bHkgfSBmcm9tICcuLi9wbG90bHkuaW50ZXJmYWNlJztcblxuLy8gQGR5bmFtaWNcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGxvdGx5LXBsb3QnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiAjcGxvdCBbYXR0ci5pZF09XCJkaXZJZFwiIFtjbGFzc05hbWVdPVwiZ2V0Q2xhc3NOYW1lKClcIiBbbmdTdHlsZV09XCJzdHlsZVwiPjwvZGl2PmAsXG4gICAgcHJvdmlkZXJzOiBbUGxvdGx5U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFBsb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBEb0NoZWNrIHtcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdENsYXNzTmFtZSA9ICdqcy1wbG90bHktcGxvdCc7XG5cbiAgICBwdWJsaWMgcGxvdGx5SW5zdGFuY2U6IFBsb3RseS5QbG90bHlIVE1MRWxlbWVudDtcbiAgICBwdWJsaWMgcmVzaXplSGFuZGxlcj86IChpbnN0YW5jZTogUGxvdGx5LlBsb3RseUhUTUxFbGVtZW50KSA9PiB2b2lkO1xuICAgIHB1YmxpYyBsYXlvdXREaWZmZXI6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcbiAgICBwdWJsaWMgZGF0YURpZmZlcjogSXRlcmFibGVEaWZmZXI8UGxvdGx5LkRhdGE+O1xuXG4gICAgQFZpZXdDaGlsZCgncGxvdCcpIHBsb3RFbDogRWxlbWVudFJlZjtcblxuICAgIEBJbnB1dCgpIGRhdGE/OiBQbG90bHkuRGF0YVtdO1xuICAgIEBJbnB1dCgpIGxheW91dD86IFBhcnRpYWw8UGxvdGx5LkxheW91dD47XG4gICAgQElucHV0KCkgY29uZmlnPzogUGFydGlhbDxQbG90bHkuQ29uZmlnPjtcbiAgICBASW5wdXQoKSBmcmFtZXM/OiBQYXJ0aWFsPFBsb3RseS5Db25maWc+W107XG4gICAgQElucHV0KCkgc3R5bGU/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gICAgQElucHV0KCkgZGl2SWQ/OiBzdHJpbmc7XG4gICAgQElucHV0KCkgcmV2aXNpb246IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgY2xhc3NOYW1lPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgQElucHV0KCkgZGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSB1c2VSZXNpemVIYW5kbGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KCkgaW5pdGlhbGl6ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBsb3RseS5GaWd1cmU+KCk7XG4gICAgQE91dHB1dCgpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGxvdGx5LkZpZ3VyZT4oKTtcbiAgICBAT3V0cHV0KCkgcHVyZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBsb3RseS5GaWd1cmU+KCk7XG4gICAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcblxuICAgIEBPdXRwdXQoKSBhZnRlckV4cG9ydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJQbG90ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBhbmltYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYW5pbWF0aW5nRnJhbWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGFuaW1hdGlvbkludGVycnVwdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBhdXRvU2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYmVmb3JlRXhwb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBidXR0b25DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgY2xpY2tBbm5vdGF0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBkZXNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZG91YmxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGZyYW1ld29yayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgaG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGxlZ2VuZENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBsZWdlbmREb3VibGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgcmVsYXlvdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHJlc3R5bGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHJlZHJhdyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHNlbGVjdGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgc2xpZGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBzbGlkZXJFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHNsaWRlclN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSB0cmFuc2l0aW9uaW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSB0cmFuc2l0aW9uSW50ZXJydXB0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHVuaG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwdWJsaWMgZXZlbnROYW1lcyA9IFsnYWZ0ZXJFeHBvcnQnLCAnYWZ0ZXJQbG90JywgJ2FuaW1hdGVkJywgJ2FuaW1hdGluZ0ZyYW1lJywgJ2FuaW1hdGlvbkludGVycnVwdGVkJywgJ2F1dG9TaXplJyxcbiAgICAgICAgJ2JlZm9yZUV4cG9ydCcsICdidXR0b25DbGlja2VkJywgJ2NsaWNrJywgJ2NsaWNrQW5ub3RhdGlvbicsICdkZXNlbGVjdCcsICdkb3VibGVDbGljaycsICdmcmFtZXdvcmsnLCAnaG92ZXInLFxuICAgICAgICAnbGVnZW5kQ2xpY2snLCAnbGVnZW5kRG91YmxlQ2xpY2snLCAncmVsYXlvdXQnLCAncmVzdHlsZScsICdyZWRyYXcnLCAnc2VsZWN0ZWQnLCAnc2VsZWN0aW5nJywgJ3NsaWRlckNoYW5nZScsXG4gICAgICAgICdzbGlkZXJFbmQnLCAnc2xpZGVyU3RhcnQnLCAndHJhbnNpdGlvbmluZycsICd0cmFuc2l0aW9uSW50ZXJydXB0ZWQnLCAndW5ob3ZlciddO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBwbG90bHk6IFBsb3RseVNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBpdGVyYWJsZURpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICAgICAgcHVibGljIGtleVZhbHVlRGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVQbG90KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWd1cmUgPSB0aGlzLmNyZWF0ZUZpZ3VyZSgpO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZC5lbWl0KGZpZ3VyZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmVzaXplSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5nZXRXaW5kb3coKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIgYXMgYW55KTtcbiAgICAgICAgICAgIHRoaXMucmVzaXplSGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZ3VyZSA9IHRoaXMuY3JlYXRlRmlndXJlKCk7XG4gICAgICAgIHRoaXMucHVyZ2UuZW1pdChmaWd1cmUpO1xuICAgICAgICBQbG90bHlTZXJ2aWNlLnJlbW92ZSh0aGlzLnBsb3RseUluc3RhbmNlKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGxldCBzaG91bGRVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCByZXZpc2lvbjogU2ltcGxlQ2hhbmdlID0gY2hhbmdlcy5yZXZpc2lvbjtcbiAgICAgICAgaWYgKHJldmlzaW9uICYmICFyZXZpc2lvbi5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWJ1ZzogU2ltcGxlQ2hhbmdlID0gY2hhbmdlcy5kZWJ1ZztcbiAgICAgICAgaWYgKGRlYnVnICYmICFkZWJ1Zy5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBsb3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlV2luZG93UmVzaXplSGFuZGxlcigpO1xuICAgIH1cblxuICAgIG5nRG9DaGVjaygpIHtcbiAgICAgICAgbGV0IHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmxheW91dERpZmZlcikge1xuICAgICAgICAgICAgY29uc3QgbGF5b3V0SGFzRGlmZiA9IHRoaXMubGF5b3V0RGlmZmVyLmRpZmYodGhpcy5sYXlvdXQpO1xuICAgICAgICAgICAgaWYgKGxheW91dEhhc0RpZmYpIHtcbiAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGF5b3V0KSB7XG4gICAgICAgICAgICB0aGlzLmxheW91dERpZmZlciA9IHRoaXMua2V5VmFsdWVEaWZmZXJzLmZpbmQodGhpcy5sYXlvdXQpLmNyZWF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXlvdXREaWZmZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kYXRhRGlmZmVyKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhSGFzRGlmZiA9IHRoaXMuZGF0YURpZmZlci5kaWZmKHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YUhhc0RpZmYpIHtcbiAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5kYXRhKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhRGlmZmVyID0gdGhpcy5pdGVyYWJsZURpZmZlcnMuZmluZCh0aGlzLmRhdGEpLmNyZWF0ZSh0aGlzLmRhdGFEaWZmZXJUcmFja0J5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YURpZmZlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUgJiYgdGhpcy5wbG90bHlJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbG90KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRXaW5kb3coKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG5cbiAgICBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGNsYXNzZXMgPSBbdGhpcy5kZWZhdWx0Q2xhc3NOYW1lXTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdCh0aGlzLmNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlUGxvdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxvdGx5Lm5ld1Bsb3QodGhpcy5wbG90RWwubmF0aXZlRWxlbWVudCwgdGhpcy5kYXRhLCB0aGlzLmxheW91dCwgdGhpcy5jb25maWcsIHRoaXMuZnJhbWVzKS50aGVuKHBsb3RseUluc3RhbmNlID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxvdGx5SW5zdGFuY2UgPSBwbG90bHlJbnN0YW5jZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0V2luZG93KCkuZ2QgPSB0aGlzLmRlYnVnID8gcGxvdGx5SW5zdGFuY2UgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRoaXMuZXZlbnROYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGBwbG90bHlfJHtuYW1lLnRvTG93ZXJDYXNlKCl9YDtcbiAgICAgICAgICAgICAgICBwbG90bHlJbnN0YW5jZS5vbihldmVudE5hbWUsIChkYXRhOiBhbnkpID0+ICh0aGlzW25hbWVdIGFzIEV2ZW50RW1pdHRlcjx2b2lkPikuZW1pdChkYXRhKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVXaW5kb3dSZXNpemVIYW5kbGVyKCk7XG4gICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGlsZSBwbG90dGluZzonLCBlcnIpO1xuICAgICAgICAgICAgdGhpcy5lcnJvci5lbWl0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUZpZ3VyZSgpOiBQbG90bHkuRmlndXJlIHtcbiAgICAgICAgY29uc3QgcDogYW55ID0gdGhpcy5wbG90bHlJbnN0YW5jZTtcbiAgICAgICAgY29uc3QgZmlndXJlOiBQbG90bHkuRmlndXJlID0ge1xuICAgICAgICAgICAgZGF0YTogcC5kYXRhLFxuICAgICAgICAgICAgbGF5b3V0OiBwLmxheW91dCxcbiAgICAgICAgICAgIGZyYW1lczogcC5fdHJhbnNpdGlvbkRhdGEgPyBwLl90cmFuc2l0aW9uRGF0YS5fZnJhbWVzIDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmaWd1cmU7XG4gICAgfVxuXG4gICAgdXBkYXRlUGxvdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBsb3RseUluc3RhbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgUGxvdGx5IGNvbXBvbmVudCB3YXNuJ3QgaW5pdGlhbGl6ZWRgKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsb3RseS51cGRhdGUodGhpcy5wbG90bHlJbnN0YW5jZSwgdGhpcy5kYXRhLCB0aGlzLmxheW91dCwgdGhpcy5jb25maWcsIHRoaXMuZnJhbWVzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZ3VyZSA9IHRoaXMuY3JlYXRlRmlndXJlKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KGZpZ3VyZSk7XG4gICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGlsZSB1cGRhdGluZyBwbG90OicsIGVycik7XG4gICAgICAgICAgICB0aGlzLmVycm9yLmVtaXQoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlV2luZG93UmVzaXplSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlUmVzaXplSGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzaXplSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVIYW5kbGVyID0gKCkgPT4gdGhpcy5wbG90bHkucmVzaXplKHRoaXMucGxvdGx5SW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0V2luZG93KCkuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVIYW5kbGVyIGFzIGFueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucmVzaXplSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0V2luZG93KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVIYW5kbGVyIGFzIGFueSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVIYW5kbGVyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF0YURpZmZlclRyYWNrQnkoXzogbnVtYmVyLCBpdGVtOiBhbnkpOiBhbnkge1xuICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IHVpZDogJycgfSk7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIH1cblxufVxuIl19