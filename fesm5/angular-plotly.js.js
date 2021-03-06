import { __values, __awaiter, __generator } from 'tslib';
import { Injectable, NgModule, Component, EventEmitter, Input, Output, ViewChild, IterableDiffers, KeyValueDiffers, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            for (var _b = __values(PlotlyService.instances), _c = _b.next(); !_c.done; _c = _b.next()) {
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
        return __awaiter(this, void 0, void 0, function () {
            var obj;
            var _this = this;
            return __generator(this, function (_a) {
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
    /** @nocollapse */ PlotlyService.ngInjectableDef = defineInjectable({ factory: function PlotlyService_Factory() { return new PlotlyService(); }, token: PlotlyService, providedIn: "root" });
    return PlotlyService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [PlotComponent],
                    providers: [PlotlyService],
                    exports: [PlotComponent]
                },] }
    ];
    return SharedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PlotlyViaCDNModule = /** @class */ (function () {
    function PlotlyViaCDNModule() {
    }
    /**
     * @param {?} version
     * @return {?}
     */
    PlotlyViaCDNModule.setPlotlyVersion = /**
     * @param {?} version
     * @return {?}
     */
    function (version) {
        /** @type {?} */
        var isOk = version === 'latest' || /^\d\.\d{1,2}\.\d{1,2}$/.test(version);
        if (!isOk) {
            throw new Error("Invalid plotly version. Please set 'latest' or version number (i.e.: 1.4.3)");
        }
        PlotlyViaCDNModule.plotlyVersion = version;
    };
    /**
     * @return {?}
     */
    PlotlyViaCDNModule.loadViaCDN = /**
     * @return {?}
     */
    function () {
        PlotlyService.setPlotly('waiting');
        /** @type {?} */
        var src = "https://cdn.plot.ly/plotly-" + PlotlyViaCDNModule.plotlyVersion + ".min.js";
        /** @type {?} */
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.onerror = function () { return console.error("Error loading plotly.js library from " + src); };
        /** @type {?} */
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
        /** @type {?} */
        var counter = 200;
        // equivalent of 10 seconds...
        /** @type {?} */
        var fn = function () {
            /** @type {?} */
            var plotly = ((/** @type {?} */ (window))).Plotly;
            if (plotly) {
                PlotlyService.setPlotly(plotly);
            }
            else if (counter > 0) {
                counter--;
                setTimeout(fn, 50);
            }
            else {
                throw new Error("Error loading plotly.js library from " + src + ". Timeout.");
            }
        };
        fn();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    PlotlyViaCDNModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config.version === undefined) {
            console.warn("It's strongly recommended that you set a plotly version when using via CDN.");
            config.version = 'latest';
        }
        PlotlyViaCDNModule.setPlotlyVersion(config.version);
        PlotlyViaCDNModule.loadViaCDN();
        return {
            ngModule: PlotlyViaCDNModule,
            providers: [PlotlyService]
        };
    };
    PlotlyViaCDNModule.plotlyVersion = 'latest';
    PlotlyViaCDNModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, SharedModule],
                    declarations: [],
                    exports: [PlotComponent]
                },] }
    ];
    return PlotlyViaCDNModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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