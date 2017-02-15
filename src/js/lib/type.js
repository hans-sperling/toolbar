;(function (app) {
    'use strict';

    // ------------------------------------------------------------------------------------------------------ Properties

    var toolName = 'type';

    // -------------------------------------------------------------------------------------------------- Tool interface

    /**
     * Returns the public tool api.
     * Used to append this tool to the app.
     *
     * @private
     *
     * @returns {object}
     */
    function getToolApi() {
        var toolApi = {};

        toolApi[toolName] = {
            isArray     : isArray,
            isBoolean   : isBoolean,
            isFunction  : isFunction,
            isNull      : isNull,
            isNumber    : isNumber,
            isObject    : isObject,
            isString    : isString,
            isUndefined : isUndefined
        };

        return toolApi;
    }

    // --------------------------------------------------------------------------------------------------------- Methods

    /**
     * Checks if the type of the given parameter is an array.
     *
     * @public
     * @param  {*} value
     * @return {boolean}
     */
    function isArray(value) {
        return Object.prototype.toString.call(value) == "[object Array]";
    }


    /**
     * Checks if the type of the given parameter is a boolean.
     *
     * @public
     * @param  {*} value
     * @return {boolean}
     */
    function isBoolean(value) {
        return Object.prototype.toString.call(value) == "[object Boolean]";
    }


    /**
     * Checks if the type of the given parameter is a function.
     *
     * @public
     * @param  {*} value
     * @return {boolean}
     */
    function isFunction(value) {
        return Object.prototype.toString.call(value) == "[object Function]";
    }


    /**
     * Checks if the type of the given parameter is null.
     *
     * @public
     * @param  {*} value
     * @return {boolean}
     */
    function isNull(value) {
        return Object.prototype.toString.call(value) == "[object Null]";
    }


    /**
     * Checks if the type of the given parameter is a number.
     *
     * @public
     * @param  {*} value
     * @return {boolean}
     */
    function isNumber(value) {
        return !isNaN(value);
    }


    /**
     * Checks if the type of the given parameter is an object.
     *
     * @public
     * @param  {*} value
     * @return {boolean}
     */
    function isObject(value) {
        return Object.prototype.toString.call(value) == "[object Object]";
    }


    /**
     * Checks if the type of the given parameter is a string.
     *
     * @public
     * @param  {*} value
     * @return {boolean}
     */
    function isString(value) {
        return Object.prototype.toString.call(value) == "[object String]";
    }


    /**
     * Checks if the type of the given parameter is undefined.
     *
     * @public
     * @param  {*} value
     * @return {boolean}
     */
    function isUndefined(value) {
        return Object.prototype.toString.call(value) == "[object Undefined]";
    }

    // --------------------------------------------------------------------------------------------------------- Returns

    // Append tool with public methods and properties
    app.appendTool(getToolApi());

})(window[APPKEY]);
