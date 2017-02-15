;(function (app) {
    'use strict';

    // ------------------------------------------------------------------------------------------------------ Properties

    var toolName = 'merge';

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
            deep : deep
        };

        return toolApi;
    }

    // --------------------------------------------------------------------------------------------------------- Methods

    function deep(target, src) {
        var array = Array.isArray(src);
        var dst = array && [] || {};

        if (array) {
            target = target || [];
            dst = dst.concat(target);
            src.forEach(function (e, i) {
                if (typeof dst[i] === 'undefined') {
                    dst[i] = e;
                }
                else if (typeof e === 'object') {
                    dst[i] = deep(target[i], e);
                }
                else {
                    if (target.indexOf(e) === -1) {
                        dst.push(e);
                    }
                }
            });
        }
        else {
            if (target && typeof target === 'object') {
                Object.keys(target).forEach(function (key) {
                    dst[key] = target[key];
                })
            }
            Object.keys(src).forEach(function (key) {
                if (typeof src[key] !== 'object' || !src[key]) {
                    dst[key] = src[key];
                }
                else {
                    if (!target[key]) {
                        dst[key] = src[key];
                    }
                    else {
                        dst[key] = deep(target[key], src[key]);
                    }
                }
            });
        }

        return dst;
    }

    // --------------------------------------------------------------------------------------------------------- Returns

    // Append tool with public methods and properties
    app.appendTool(getToolApi());

})(window[APPKEY]);
