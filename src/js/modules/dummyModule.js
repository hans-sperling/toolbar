;(function (app) {
    'use strict';

    // ------------------------------------------------------------------------------------------------------ Properties

    var moduleName = 'dummyModule',
        type       = {},
        cfg        = {};

    // ------------------------------------------------------------------------------------------------ Module interface

    /**
     * Initializes this module - will be called at the beginning from the app. Updates the module with the given config.
     *
     * @public
     * @param  {Object} config
     * @return {void}
     */
    function init(config) {
        update(config);
    }


    /**
     * Will be called from app if all other modules has been loaded.
     *
     * @public
     * @return {void}
     */
    function run() {

    }


    /**
     * Updates this module, will be called on init and on general updating the app.
     *
     * @public
     * @param  {Object} config
     * @return {void}
     */
    function update(config) {
        cfg = app.getModule('merge').deep(cfg, config[moduleName]);
    }


    /**
     * Returns the public module api.
     * Used to append this module to the app.
     *
     * @private
     * @returns {object}
     */
    function getModuleApi() {
        var moduleApi = {};

        moduleApi[moduleName] = {
            init   : init,
            run    : run,
            update : update
        };

        return moduleApi;
    }

    // --------------------------------------------------------------------------------------------------------- Methods

    // content here ...

    // --------------------------------------------------------------------------------------------------------- Returns

    // Append module with public methods and properties
    app.appendModule(getModuleApi());

})(window[APPKEY]);
