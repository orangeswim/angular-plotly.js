/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var Plotly;
(function (Plotly) {
    /**
     * @record
     */
    function Figure() { }
    Plotly.Figure = Figure;
    if (false) {
        /** @type {?} */
        Figure.prototype.data;
        /** @type {?} */
        Figure.prototype.layout;
        /** @type {?} */
        Figure.prototype.frames;
    }
    /**
     * @record
     */
    function PlotlyHTMLElement() { }
    Plotly.PlotlyHTMLElement = PlotlyHTMLElement;
    if (false) {
        /**
         * @param {?} event
         * @param {?} callback
         * @return {?}
         */
        PlotlyHTMLElement.prototype.on = function (event, callback) { };
        /**
         * @param {?} event
         * @param {?} callback
         * @return {?}
         */
        PlotlyHTMLElement.prototype.removeListener = function (event, callback) { };
    }
    /**
     * @record
     */
    function PlotlyInstance() { }
    Plotly.PlotlyInstance = PlotlyInstance;
    if (false) {
        /** @type {?} */
        PlotlyInstance.prototype.Plots;
        /**
         * @param {?} div
         * @param {?} data
         * @param {?=} layout
         * @param {?=} config
         * @return {?}
         */
        PlotlyInstance.prototype.newPlot = function (div, data, layout, config) { };
        /**
         * @param {?} div
         * @param {?} data
         * @param {?=} layout
         * @param {?=} config
         * @return {?}
         */
        PlotlyInstance.prototype.plot = function (div, data, layout, config) { };
        /**
         * @param {?} div
         * @param {?} data
         * @param {?=} layout
         * @param {?=} config
         * @return {?}
         */
        PlotlyInstance.prototype.react = function (div, data, layout, config) { };
    }
})(Plotly || (Plotly = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxvdGx5LmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcGxvdGx5LmpzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9zaGFyZWQvcGxvdGx5LmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTSxLQUFXLE1BQU0sQ0F3QnRCO0FBeEJELFdBQWlCLE1BQU07Ozs7SUFLbkIscUJBSUM7Ozs7UUFIRyxzQkFBYTs7UUFDYix3QkFBd0I7O1FBQ3hCLHdCQUF3Qjs7Ozs7SUFHNUIsZ0NBR0M7Ozs7Ozs7O1FBRkcsZ0VBQTRDOzs7Ozs7UUFDNUMsNEVBQXdEOzs7OztJQUc1RCw2QkFPQzs7OztRQUxHLCtCQUF1RDs7Ozs7Ozs7UUFDdkQsNEVBQWdKOzs7Ozs7OztRQUNoSix5RUFBdUo7Ozs7Ozs7O1FBQ3ZKLDBFQUF3Sjs7QUFHaEssQ0FBQyxFQXhCZ0IsTUFBTSxLQUFOLE1BQU0sUUF3QnRCIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgbmFtZXNwYWNlIFBsb3RseSB7XG4gICAgZXhwb3J0IHR5cGUgRGF0YSA9IGFueTtcbiAgICBleHBvcnQgdHlwZSBMYXlvdXQgPSBhbnk7XG4gICAgZXhwb3J0IHR5cGUgQ29uZmlnID0gYW55O1xuXG4gICAgZXhwb3J0IGludGVyZmFjZSBGaWd1cmUge1xuICAgICAgICBkYXRhOiBEYXRhW107XG4gICAgICAgIGxheW91dDogUGFydGlhbDxMYXlvdXQ+O1xuICAgICAgICBmcmFtZXM6IFBhcnRpYWw8Q29uZmlnPjtcbiAgICB9XG5cbiAgICBleHBvcnQgaW50ZXJmYWNlIFBsb3RseUhUTUxFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xuICAgICAgICByZW1vdmVMaXN0ZW5lcihldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xuICAgIH1cblxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGxvdGx5SW5zdGFuY2Uge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZSBtYXgtbGluZS1sZW5ndGhcbiAgICAgICAgUGxvdHM6IHsgcmVzaXplKGRpdjogUGxvdGx5LlBsb3RseUhUTUxFbGVtZW50KTogdm9pZCB9O1xuICAgICAgICBuZXdQbG90KGRpdjogSFRNTERpdkVsZW1lbnQsIGRhdGE6IFBsb3RseS5EYXRhW10sIGxheW91dD86IFBhcnRpYWw8UGxvdGx5LkxheW91dD4sIGNvbmZpZz86IFBhcnRpYWw8UGxvdGx5LkNvbmZpZz4pOiBQcm9taXNlPFBsb3RseUhUTUxFbGVtZW50PjtcbiAgICAgICAgcGxvdChkaXY6IFBsb3RseS5QbG90bHlIVE1MRWxlbWVudCwgZGF0YTogUGxvdGx5LkRhdGFbXSwgbGF5b3V0PzogUGFydGlhbDxQbG90bHkuTGF5b3V0PiwgY29uZmlnPzogUGFydGlhbDxQbG90bHkuQ29uZmlnPik6IFByb21pc2U8UGxvdGx5SFRNTEVsZW1lbnQ+O1xuICAgICAgICByZWFjdChkaXY6IFBsb3RseS5QbG90bHlIVE1MRWxlbWVudCwgZGF0YTogUGxvdGx5LkRhdGFbXSwgbGF5b3V0PzogUGFydGlhbDxQbG90bHkuTGF5b3V0PiwgY29uZmlnPzogUGFydGlhbDxQbG90bHkuQ29uZmlnPik6IFByb21pc2U8UGxvdGx5SFRNTEVsZW1lbnQ+O1xuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlXG4gICAgfVxufVxuIl19