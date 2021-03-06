(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-plotly.js', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['angular-plotly'] = global['angular-plotly'] || {}, global['angular-plotly'].js = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [0, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
                                    return [2 /*return*/, ( /** @type {?} */(this.getPlotly().newPlot(div, obj).then(function () { return PlotlyService.insert(( /** @type {?} */(div))); })))];
                                }
                                return [2 /*return*/, ( /** @type {?} */(this.getPlotly().newPlot(div, data, layout, config).then(function () { return PlotlyService.insert(( /** @type {?} */(div))); })))];
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
                    return ( /** @type {?} */(this.getPlotly().plot(div, obj)));
                }
                return ( /** @type {?} */(this.getPlotly().plot(div, data, layout, config)));
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
                    return ( /** @type {?} */(this.getPlotly().react(div, obj)));
                }
                return ( /** @type {?} */(this.getPlotly().react(div, data, layout, config)));
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ PlotlyService.ngInjectableDef = i0.defineInjectable({ factory: function PlotlyService_Factory() { return new PlotlyService(); }, token: PlotlyService, providedIn: "root" });
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
            this.initialized = new i0.EventEmitter();
            this.update = new i0.EventEmitter();
            this.purge = new i0.EventEmitter();
            this.error = new i0.EventEmitter();
            this.afterExport = new i0.EventEmitter();
            this.afterPlot = new i0.EventEmitter();
            this.animated = new i0.EventEmitter();
            this.animatingFrame = new i0.EventEmitter();
            this.animationInterrupted = new i0.EventEmitter();
            this.autoSize = new i0.EventEmitter();
            this.beforeExport = new i0.EventEmitter();
            this.buttonClicked = new i0.EventEmitter();
            this.click = new i0.EventEmitter();
            this.clickAnnotation = new i0.EventEmitter();
            this.deselect = new i0.EventEmitter();
            this.doubleClick = new i0.EventEmitter();
            this.framework = new i0.EventEmitter();
            this.hover = new i0.EventEmitter();
            this.legendClick = new i0.EventEmitter();
            this.legendDoubleClick = new i0.EventEmitter();
            this.relayout = new i0.EventEmitter();
            this.restyle = new i0.EventEmitter();
            this.redraw = new i0.EventEmitter();
            this.selected = new i0.EventEmitter();
            this.selecting = new i0.EventEmitter();
            this.sliderChange = new i0.EventEmitter();
            this.sliderEnd = new i0.EventEmitter();
            this.sliderStart = new i0.EventEmitter();
            this.transitioning = new i0.EventEmitter();
            this.transitionInterrupted = new i0.EventEmitter();
            this.unhover = new i0.EventEmitter();
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
                    this.getWindow().removeEventListener('resize', ( /** @type {?} */(this.resizeHandler)));
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
                        plotlyInstance.on(eventName, function (data) { return (( /** @type {?} */(_this[name]))).emit(data); });
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
                        this.getWindow().addEventListener('resize', ( /** @type {?} */(this.resizeHandler)));
                    }
                }
                else {
                    if (typeof this.resizeHandler === 'function') {
                        this.getWindow().removeEventListener('resize', ( /** @type {?} */(this.resizeHandler)));
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
            { type: i0.Component, args: [{
                        selector: 'plotly-plot',
                        template: "<div #plot [attr.id]=\"divId\" [className]=\"getClassName()\" [ngStyle]=\"style\"></div>",
                        providers: [PlotlyService]
                    }] }
        ];
        /** @nocollapse */
        PlotComponent.ctorParameters = function () {
            return [
                { type: PlotlyService },
                { type: i0.IterableDiffers },
                { type: i0.KeyValueDiffers }
            ];
        };
        PlotComponent.propDecorators = {
            plotEl: [{ type: i0.ViewChild, args: ['plot',] }],
            data: [{ type: i0.Input }],
            layout: [{ type: i0.Input }],
            config: [{ type: i0.Input }],
            frames: [{ type: i0.Input }],
            style: [{ type: i0.Input }],
            divId: [{ type: i0.Input }],
            revision: [{ type: i0.Input }],
            className: [{ type: i0.Input }],
            debug: [{ type: i0.Input }],
            useResizeHandler: [{ type: i0.Input }],
            initialized: [{ type: i0.Output }],
            update: [{ type: i0.Output }],
            purge: [{ type: i0.Output }],
            error: [{ type: i0.Output }],
            afterExport: [{ type: i0.Output }],
            afterPlot: [{ type: i0.Output }],
            animated: [{ type: i0.Output }],
            animatingFrame: [{ type: i0.Output }],
            animationInterrupted: [{ type: i0.Output }],
            autoSize: [{ type: i0.Output }],
            beforeExport: [{ type: i0.Output }],
            buttonClicked: [{ type: i0.Output }],
            click: [{ type: i0.Output }],
            clickAnnotation: [{ type: i0.Output }],
            deselect: [{ type: i0.Output }],
            doubleClick: [{ type: i0.Output }],
            framework: [{ type: i0.Output }],
            hover: [{ type: i0.Output }],
            legendClick: [{ type: i0.Output }],
            legendDoubleClick: [{ type: i0.Output }],
            relayout: [{ type: i0.Output }],
            restyle: [{ type: i0.Output }],
            redraw: [{ type: i0.Output }],
            selected: [{ type: i0.Output }],
            selecting: [{ type: i0.Output }],
            sliderChange: [{ type: i0.Output }],
            sliderEnd: [{ type: i0.Output }],
            sliderStart: [{ type: i0.Output }],
            transitioning: [{ type: i0.Output }],
            transitionInterrupted: [{ type: i0.Output }],
            unhover: [{ type: i0.Output }]
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
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
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
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, SharedModule],
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
                    var plotly = (( /** @type {?} */(window))).Plotly;
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
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, SharedModule],
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
            var plotly = (( /** @type {?} */(window))).Plotly;
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
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, SharedModule],
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

    exports.PlotlyModule = PlotlyModule;
    exports.PlotlyViaCDNModule = PlotlyViaCDNModule;
    exports.PlotlyViaWindowModule = PlotlyViaWindowModule;
    exports.PlotComponent = PlotComponent;
    exports.PlotlyService = PlotlyService;
    exports.ɵa = SharedModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angular-plotly.js.umd.js.map