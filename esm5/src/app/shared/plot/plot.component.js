/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, IterableDiffers, KeyValueDiffers, } from '@angular/core';
import { PlotlyService } from '../plotly.service';
// @dynamic
var PlotComponent = /** @class */ (function () {
    function PlotComponent(plotly, iterableDiffers, keyValueDiffers) {
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
    PlotComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.createPlot().then(function () {
            /** @type {?} */
            var figure = _this.createFigure();
            _this.initialized.emit(figure);
        });
    };
    /**
     * @return {?}
     */
    PlotComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (typeof this.resizeHandler === 'function') {
            this.getWindow().removeEventListener('resize', (/** @type {?} */ (this.resizeHandler)));
            this.resizeHandler = undefined;
        }
        /** @type {?} */
        var figure = this.createFigure();
        this.purge.emit(figure);
        PlotlyService.remove(this.plotlyInstance);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PlotComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var shouldUpdate = false;
        /** @type {?} */
        var revision = changes.revision;
        if (revision && !revision.isFirstChange()) {
            shouldUpdate = true;
        }
        /** @type {?} */
        var debug = changes.debug;
        if (debug && !debug.isFirstChange()) {
            shouldUpdate = true;
        }
        if (shouldUpdate) {
            this.updatePlot();
        }
        this.updateWindowResizeHandler();
    };
    /**
     * @return {?}
     */
    PlotComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shouldUpdate = false;
        if (this.layoutDiffer) {
            /** @type {?} */
            var layoutHasDiff = this.layoutDiffer.diff(this.layout);
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
            var dataHasDiff = this.dataDiffer.diff(this.data);
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
    };
    /**
     * @return {?}
     */
    PlotComponent.prototype.getWindow = /**
     * @return {?}
     */
    function () {
        return window;
    };
    /**
     * @return {?}
     */
    PlotComponent.prototype.getClassName = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classes = [this.defaultClassName];
        if (Array.isArray(this.className)) {
            classes = classes.concat(this.className);
        }
        else if (this.className) {
            classes.push(this.className);
        }
        return classes.join(' ');
    };
    /**
     * @return {?}
     */
    PlotComponent.prototype.createPlot = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.plotly.newPlot(this.plotEl.nativeElement, this.data, this.layout, this.config, this.frames).then(function (plotlyInstance) {
            _this.plotlyInstance = plotlyInstance;
            _this.getWindow().gd = _this.debug ? plotlyInstance : undefined;
            _this.eventNames.forEach(function (name) {
                /** @type {?} */
                var eventName = "plotly_" + name.toLowerCase();
                plotlyInstance.on(eventName, function (data) { return ((/** @type {?} */ (_this[name]))).emit(data); });
            });
            _this.updateWindowResizeHandler();
        }, function (err) {
            console.error('Error while plotting:', err);
            _this.error.emit(err);
        });
    };
    /**
     * @return {?}
     */
    PlotComponent.prototype.createFigure = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var p = this.plotlyInstance;
        /** @type {?} */
        var figure = {
            data: p.data,
            layout: p.layout,
            frames: p._transitionData ? p._transitionData._frames : null
        };
        return figure;
    };
    /**
     * @return {?}
     */
    PlotComponent.prototype.updatePlot = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.plotlyInstance) {
            /** @type {?} */
            var error = new Error("Plotly component wasn't initialized");
            this.error.emit(error);
            throw error;
        }
        return this.plotly.update(this.plotlyInstance, this.data, this.layout, this.config, this.frames).then(function () {
            /** @type {?} */
            var figure = _this.createFigure();
            _this.update.emit(figure);
        }, function (err) {
            console.error('Error while updating plot:', err);
            _this.error.emit(err);
        });
    };
    /**
     * @return {?}
     */
    PlotComponent.prototype.updateWindowResizeHandler = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.useResizeHandler) {
            if (this.resizeHandler === undefined) {
                this.resizeHandler = function () { return _this.plotly.resize(_this.plotlyInstance); };
                this.getWindow().addEventListener('resize', (/** @type {?} */ (this.resizeHandler)));
            }
        }
        else {
            if (typeof this.resizeHandler === 'function') {
                this.getWindow().removeEventListener('resize', (/** @type {?} */ (this.resizeHandler)));
                this.resizeHandler = undefined;
            }
        }
    };
    /**
     * @param {?} _
     * @param {?} item
     * @return {?}
     */
    PlotComponent.prototype.dataDifferTrackBy = /**
     * @param {?} _
     * @param {?} item
     * @return {?}
     */
    function (_, item) {
        /** @type {?} */
        var obj = Object.assign({}, item, { uid: '' });
        return JSON.stringify(obj);
    };
    PlotComponent.decorators = [
        { type: Component, args: [{
                    selector: 'plotly-plot',
                    template: "<div #plot [attr.id]=\"divId\" [className]=\"getClassName()\" [ngStyle]=\"style\"></div>",
                    providers: [PlotlyService]
                }] }
    ];
    /** @nocollapse */
    PlotComponent.ctorParameters = function () { return [
        { type: PlotlyService },
        { type: IterableDiffers },
        { type: KeyValueDiffers }
    ]; };
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
    return PlotComponent;
}());
export { PlotComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBsb3RseS5qcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Bsb3QvcGxvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFNBQVMsRUFHVCxlQUFlLEVBRWYsZUFBZSxHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBSWxEO0lBaUVJLHVCQUNXLE1BQXFCLEVBQ3JCLGVBQWdDLEVBQ2hDLGVBQWdDO1FBRmhDLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQTlEakMscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFnQnJDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFakMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUNoRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDM0MsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzFDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBRWxDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyxhQUFRLEdB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c0NBQW9FOztJQUNwRSxxQ0FBaUQ7O0lBQ2pELG1DQUErQzs7SUFFL0MsK0JBQXNDOztJQUV0Qyw2QkFBOEI7O0lBQzlCLCtCQUF5Qzs7SUFDekMsK0JBQXlDOztJQUN6QywrQkFBMkM7O0lBQzNDLDhCQUEyQzs7SUFFM0MsOEJBQXdCOztJQUN4QixpQ0FBOEI7O0lBQzlCLGtDQUF1Qzs7SUFDdkMsOEJBQWdDOztJQUNoQyx5Q0FBMkM7O0lBRTNDLG9DQUEwRDs7SUFDMUQsK0JBQXFEOztJQUNyRCw4QkFBb0Q7O0lBQ3BELDhCQUE0Qzs7SUFFNUMsb0NBQTJDOztJQUMzQyxrQ0FBeUM7O0lBQ3pDLGlDQUF3Qzs7SUFDeEMsdUNBQThDOztJQUM5Qyw2Q0FBb0Q7O0lBQ3BELGlDQUF3Qzs7SUFDeEMscUNBQTRDOztJQUM1QyxzQ0FBNkM7O0lBQzdDLDhCQUFxQzs7SUFDckMsd0NBQStDOztJQUMvQyxpQ0FBd0M7O0lBQ3hDLG9DQUEyQzs7SUFDM0Msa0NBQXlDOztJQUN6Qyw4QkFBcUM7O0lBQ3JDLG9DQUEyQzs7SUFDM0MsMENBQWlEOztJQUNqRCxpQ0FBd0M7O0lBQ3hDLGdDQUF1Qzs7SUFDdkMsK0JBQXNDOztJQUN0QyxpQ0FBd0M7O0lBQ3hDLGtDQUF5Qzs7SUFDekMscUNBQTRDOztJQUM1QyxrQ0FBeUM7O0lBQ3pDLG9DQUEyQzs7SUFDM0Msc0NBQTZDOztJQUM3Qyw4Q0FBcUQ7O0lBQ3JELGdDQUF1Qzs7SUFFdkMsbUNBR3FGOztJQUdqRiwrQkFBNEI7O0lBQzVCLHdDQUF1Qzs7SUFDdkMsd0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25EZXN0cm95LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZSxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFZpZXdDaGlsZCxcbiAgICBEb0NoZWNrLFxuICAgIEl0ZXJhYmxlRGlmZmVyLFxuICAgIEl0ZXJhYmxlRGlmZmVycyxcbiAgICBLZXlWYWx1ZURpZmZlcixcbiAgICBLZXlWYWx1ZURpZmZlcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQbG90bHlTZXJ2aWNlIH0gZnJvbSAnLi4vcGxvdGx5LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxvdGx5IH0gZnJvbSAnLi4vcGxvdGx5LmludGVyZmFjZSc7XG5cbi8vIEBkeW5hbWljXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Bsb3RseS1wbG90JyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgI3Bsb3QgW2F0dHIuaWRdPVwiZGl2SWRcIiBbY2xhc3NOYW1lXT1cImdldENsYXNzTmFtZSgpXCIgW25nU3R5bGVdPVwic3R5bGVcIj48L2Rpdj5gLFxuICAgIHByb3ZpZGVyczogW1Bsb3RseVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQbG90Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgRG9DaGVjayB7XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRDbGFzc05hbWUgPSAnanMtcGxvdGx5LXBsb3QnO1xuXG4gICAgcHVibGljIHBsb3RseUluc3RhbmNlOiBQbG90bHkuUGxvdGx5SFRNTEVsZW1lbnQ7XG4gICAgcHVibGljIHJlc2l6ZUhhbmRsZXI/OiAoaW5zdGFuY2U6IFBsb3RseS5QbG90bHlIVE1MRWxlbWVudCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgbGF5b3V0RGlmZmVyOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIGFueT47XG4gICAgcHVibGljIGRhdGFEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPFBsb3RseS5EYXRhPjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Bsb3QnKSBwbG90RWw6IEVsZW1lbnRSZWY7XG5cbiAgICBASW5wdXQoKSBkYXRhPzogUGxvdGx5LkRhdGFbXTtcbiAgICBASW5wdXQoKSBsYXlvdXQ/OiBQYXJ0aWFsPFBsb3RseS5MYXlvdXQ+O1xuICAgIEBJbnB1dCgpIGNvbmZpZz86IFBhcnRpYWw8UGxvdGx5LkNvbmZpZz47XG4gICAgQElucHV0KCkgZnJhbWVzPzogUGFydGlhbDxQbG90bHkuQ29uZmlnPltdO1xuICAgIEBJbnB1dCgpIHN0eWxlPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICAgIEBJbnB1dCgpIGRpdklkPzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHJldmlzaW9uOiBudW1iZXIgPSAwO1xuICAgIEBJbnB1dCgpIGNsYXNzTmFtZT86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIEBJbnB1dCgpIGRlYnVnOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgdXNlUmVzaXplSGFuZGxlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQE91dHB1dCgpIGluaXRpYWxpemVkID0gbmV3IEV2ZW50RW1pdHRlcjxQbG90bHkuRmlndXJlPigpO1xuICAgIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPFBsb3RseS5GaWd1cmU+KCk7XG4gICAgQE91dHB1dCgpIHB1cmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQbG90bHkuRmlndXJlPigpO1xuICAgIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XG5cbiAgICBAT3V0cHV0KCkgYWZ0ZXJFeHBvcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGFmdGVyUGxvdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYW5pbWF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGFuaW1hdGluZ0ZyYW1lID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBhbmltYXRpb25JbnRlcnJ1cHRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYXV0b1NpemUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGJlZm9yZUV4cG9ydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGNsaWNrQW5ub3RhdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgZGVzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGRvdWJsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBmcmFtZXdvcmsgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBsZWdlbmRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgbGVnZW5kRG91YmxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHJlbGF5b3V0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSByZXN0eWxlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSByZWRyYXcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBzZWxlY3RpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHNsaWRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgc2xpZGVyRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBzbGlkZXJTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgdHJhbnNpdGlvbmluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgdHJhbnNpdGlvbkludGVycnVwdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSB1bmhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHVibGljIGV2ZW50TmFtZXMgPSBbJ2FmdGVyRXhwb3J0JywgJ2FmdGVyUGxvdCcsICdhbmltYXRlZCcsICdhbmltYXRpbmdGcmFtZScsICdhbmltYXRpb25JbnRlcnJ1cHRlZCcsICdhdXRvU2l6ZScsXG4gICAgICAgICdiZWZvcmVFeHBvcnQnLCAnYnV0dG9uQ2xpY2tlZCcsICdjbGljaycsICdjbGlja0Fubm90YXRpb24nLCAnZGVzZWxlY3QnLCAnZG91YmxlQ2xpY2snLCAnZnJhbWV3b3JrJywgJ2hvdmVyJyxcbiAgICAgICAgJ2xlZ2VuZENsaWNrJywgJ2xlZ2VuZERvdWJsZUNsaWNrJywgJ3JlbGF5b3V0JywgJ3Jlc3R5bGUnLCAncmVkcmF3JywgJ3NlbGVjdGVkJywgJ3NlbGVjdGluZycsICdzbGlkZXJDaGFuZ2UnLFxuICAgICAgICAnc2xpZGVyRW5kJywgJ3NsaWRlclN0YXJ0JywgJ3RyYW5zaXRpb25pbmcnLCAndHJhbnNpdGlvbkludGVycnVwdGVkJywgJ3VuaG92ZXInXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcGxvdGx5OiBQbG90bHlTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgaXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXG4gICAgICAgIHB1YmxpYyBrZXlWYWx1ZURpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlUGxvdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlndXJlID0gdGhpcy5jcmVhdGVGaWd1cmUoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQuZW1pdChmaWd1cmUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlc2l6ZUhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0V2luZG93KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVIYW5kbGVyIGFzIGFueSk7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWd1cmUgPSB0aGlzLmNyZWF0ZUZpZ3VyZSgpO1xuICAgICAgICB0aGlzLnB1cmdlLmVtaXQoZmlndXJlKTtcbiAgICAgICAgUGxvdGx5U2VydmljZS5yZW1vdmUodGhpcy5wbG90bHlJbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcmV2aXNpb246IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXMucmV2aXNpb247XG4gICAgICAgIGlmIChyZXZpc2lvbiAmJiAhcmV2aXNpb24uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVidWc6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXMuZGVidWc7XG4gICAgICAgIGlmIChkZWJ1ZyAmJiAhZGVidWcuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbG90KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBuZ0RvQ2hlY2soKSB7XG4gICAgICAgIGxldCBzaG91bGRVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5sYXlvdXREaWZmZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxheW91dEhhc0RpZmYgPSB0aGlzLmxheW91dERpZmZlci5kaWZmKHRoaXMubGF5b3V0KTtcbiAgICAgICAgICAgIGlmIChsYXlvdXRIYXNEaWZmKSB7XG4gICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxheW91dCkge1xuICAgICAgICAgICAgdGhpcy5sYXlvdXREaWZmZXIgPSB0aGlzLmtleVZhbHVlRGlmZmVycy5maW5kKHRoaXMubGF5b3V0KS5jcmVhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0RGlmZmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YURpZmZlcikge1xuICAgICAgICAgICAgY29uc3QgZGF0YUhhc0RpZmYgPSB0aGlzLmRhdGFEaWZmZXIuZGlmZih0aGlzLmRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGFIYXNEaWZmKSB7XG4gICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZGF0YSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YURpZmZlciA9IHRoaXMuaXRlcmFibGVEaWZmZXJzLmZpbmQodGhpcy5kYXRhKS5jcmVhdGUodGhpcy5kYXRhRGlmZmVyVHJhY2tCeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFEaWZmZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlICYmIHRoaXMucGxvdGx5SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGxvdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0V2luZG93KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuXG4gICAgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBjbGFzc2VzID0gW3RoaXMuZGVmYXVsdENsYXNzTmFtZV07XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5jbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQodGhpcy5jbGFzc05hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuICAgIH1cblxuICAgIGNyZWF0ZVBsb3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsb3RseS5uZXdQbG90KHRoaXMucGxvdEVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZGF0YSwgdGhpcy5sYXlvdXQsIHRoaXMuY29uZmlnLCB0aGlzLmZyYW1lcykudGhlbihwbG90bHlJbnN0YW5jZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsb3RseUluc3RhbmNlID0gcGxvdGx5SW5zdGFuY2U7XG4gICAgICAgICAgICB0aGlzLmdldFdpbmRvdygpLmdkID0gdGhpcy5kZWJ1ZyA/IHBsb3RseUluc3RhbmNlIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB0aGlzLmV2ZW50TmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudE5hbWUgPSBgcGxvdGx5XyR7bmFtZS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICAgICAgICAgICAgcGxvdGx5SW5zdGFuY2Uub24oZXZlbnROYW1lLCAoZGF0YTogYW55KSA9PiAodGhpc1tuYW1lXSBhcyBFdmVudEVtaXR0ZXI8dm9pZD4pLmVtaXQoZGF0YSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlV2luZG93UmVzaXplSGFuZGxlcigpO1xuICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgcGxvdHRpbmc6JywgZXJyKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVGaWd1cmUoKTogUGxvdGx5LkZpZ3VyZSB7XG4gICAgICAgIGNvbnN0IHA6IGFueSA9IHRoaXMucGxvdGx5SW5zdGFuY2U7XG4gICAgICAgIGNvbnN0IGZpZ3VyZTogUGxvdGx5LkZpZ3VyZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IHAuZGF0YSxcbiAgICAgICAgICAgIGxheW91dDogcC5sYXlvdXQsXG4gICAgICAgICAgICBmcmFtZXM6IHAuX3RyYW5zaXRpb25EYXRhID8gcC5fdHJhbnNpdGlvbkRhdGEuX2ZyYW1lcyA6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmlndXJlO1xuICAgIH1cblxuICAgIHVwZGF0ZVBsb3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5wbG90bHlJbnN0YW5jZSkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYFBsb3RseSBjb21wb25lbnQgd2Fzbid0IGluaXRpYWxpemVkYCk7XG4gICAgICAgICAgICB0aGlzLmVycm9yLmVtaXQoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wbG90bHkudXBkYXRlKHRoaXMucGxvdGx5SW5zdGFuY2UsIHRoaXMuZGF0YSwgdGhpcy5sYXlvdXQsIHRoaXMuY29uZmlnLCB0aGlzLmZyYW1lcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWd1cmUgPSB0aGlzLmNyZWF0ZUZpZ3VyZSgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdChmaWd1cmUpO1xuICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgdXBkYXRpbmcgcGxvdDonLCBlcnIpO1xuICAgICAgICAgICAgdGhpcy5lcnJvci5lbWl0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZVJlc2l6ZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2l6ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplSGFuZGxlciA9ICgpID0+IHRoaXMucGxvdGx5LnJlc2l6ZSh0aGlzLnBsb3RseUluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFdpbmRvdygpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlciBhcyBhbnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlc2l6ZUhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFdpbmRvdygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlciBhcyBhbnkpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplSGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRhdGFEaWZmZXJUcmFja0J5KF86IG51bWJlciwgaXRlbTogYW55KTogYW55IHtcbiAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgeyB1aWQ6ICcnIH0pO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICB9XG5cbn1cbiJdfQ==