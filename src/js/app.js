window[APPKEY] = (function () {
    'use strict';

    // ------------------------------------------------------------------------------------------------------ Properties

    var modules = {},
        tools   = {},
        config  = {};

    // -----------------------------------------------------------------------------------------------------------------

    function merge(objMaster, objSlave) {
        return {};
    }

    function isString(vlaue) {
        return true;
    }

    // ------------------------------------------------------------------------------------------------------------ Init

    /**
     * Initialize this app.
     *
     * @public
     */
    function init() {
        initModules(config);
    }


    /**
     * Starts running the application
     *
     * @public
     */
    function run() {
        runModules();
    }


    /**
     * Returns the application api.
     *
     * @private
     *
     * @returns {object}
     */
    function getApplicationApi() {
        return {
            tools : {
                merge    : merge,
                isString : isString
            },
            appendModule : appendModule

        };
    }

    // ----------------------------------------------------------------------------------------------------------- Tools

    /**
     * Appends a given tool object.
     *
     * @public
     *
     * @param   {Object} tool
     * @returns {void}
     */
    function appendTool(tool) {
        var id;

        if ((!tool) || (typeof tool !== 'object')) {
            console.error('Parameter <tool> is not a valid PerspectiveView tool :: ', '{' , typeof tool, '} :: ', tool);
        }

        for (id in tool) {
            if (tool.hasOwnProperty(id) && tools.hasOwnProperty(id)) {
                console.error('There already exists a tool named \'' + id + '\'');
            }
            else {
                tools[id] = tool[id];
            }
        }
    }


    /**
     * Returns a requested tool by the given id.
     *
     * @public
     *
     * @param   {String} id - ID of the requested tool
     * @returns {Object}
     */
    function getTool(id) {
        if (tool[id]) {
            return tools[id];
        }
        else {
            console.warn('The requested tool <' + id + '> does not exist!');
            return null;
        }
    }

    // --------------------------------------------------------------------------------------------------------- Modules

    /**
     * Appends a given module object.
     *
     * @public
     *
     * @param   {Object} module
     * @returns {void}
     */
    function appendModule(module) {
        var id;

        if ((!module) || (typeof module !== 'object')) {
            console.error('Parameter <module> is not a valid PerspectiveView module :: ', '{' , typeof module, '} :: ', module);
        }

        for (id in module) {
            if (module.hasOwnProperty(id) && modules.hasOwnProperty(id)) {
                console.error('There already exists a module named \'' + id + '\'');
            }
            else {
                modules[id] = module[id];
            }
        }
    }


    /**
     * Returns a requested module by the given id.
     *
     * @public
     *
     * @param   {String} id - ID of the requested module
     * @returns {Object}
     */
    function getModule(id) {
        if (modules[id]) {
            return modules[id];
        }
        else {
            console.warn('The requested module <' + id + '> does not exist!');
            return null;
        }
    }


    /**
     * Initializes all appended modules. Will call all init methods of the appended modules with the given
     * configuration.
     *
     * @param   {Object} config
     * @returns {void}
     */
    function initModules(config) {
        var moduleId;
        
        for (moduleId in modules) {
            if (modules.hasOwnProperty(moduleId)) {
                if (typeof modules[moduleId].init === 'function') {
                    if (config.hasOwnProperty(moduleId) && config[moduleId] === 'object') {
                        modules[moduleId].init(config[moduleId]);
                    }
                    else {
                        modules[moduleId].init({});
                    }
                }
            }
        }
    }


    /**
     * Calls all run methods of the appended modules.
     *
     * @returns {void}
     */
    function runModules() {
        var i;

        for (i in modules) {
            if (modules.hasOwnProperty(i)) {
                if (typeof modules[i].run === 'function') {
                    modules[i].run();
                }
            }
        }
    }


    /**
     * Updates all appended modules. Will call all update methods of the appended modules with the given configuration.
     *
     * @param   {Object} config
     * @returns {void}
     */
    function updateModules(config) {
        var i;

        for (i in modules) {
            if (modules.hasOwnProperty(i)) {
                if (typeof modules[i].update === 'function') {
                    modules[i].update(config);
                }
            }
        }
    }


    /**
     * Resets all appended modules. Will call all reset methods of the appended modules.
     *
     * @returns {void}
     */
    function resetModules() {
        var i;

        for (i in modules) {
            if (modules.hasOwnProperty(i)) {
                if (typeof modules[i].reset === 'function') {
                    modules[i].reset();
                }
            }
        }
    }

    // --------------------------------------------------------------------------------------------------------- Returns

    return getApplicationApi();
})();
