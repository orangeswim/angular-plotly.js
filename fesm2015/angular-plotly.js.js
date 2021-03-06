import { __awaiter } from 'tslib';
import { Injectable, NgModule, Component, EventEmitter, Input, Output, ViewChild, IterableDiffers, KeyValueDiffers, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlotlyService {
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
        return __awaiter(this, void 0, void 0, function* () {
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
/** @nocollapse */ PlotlyService.ngInjectableDef = defineInjectable({ factory: function PlotlyService_Factory() { return new PlotlyService(); }, token: PlotlyService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class PlotComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedModule {
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PlotComponent],
                providers: [PlotlyService],
                exports: [PlotComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlotlyModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlotlyViaCDNModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlotlyViaWindowModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PlotlyModule, PlotlyViaCDNModule, PlotlyViaWindowModule, PlotComponent, PlotlyService, SharedModule as ɵa };

//# sourceMappingURL=angular-plotly.js.js.map