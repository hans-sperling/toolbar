var __APP_SCOPE__ = 'TMP_TOOLBAR';

// ---------------------------------------------------------------------------------------------------------------------

/*
window[__APP_SCOPE__] = (function() {
    var tools = [];


    function appendTool(tool) {
        tools.push(tool);
    }

    return {
        tools      : tools,
        appendTool : appendTool
    }
})();

console.log(window[__APP_SCOPE__]);
/**/

// ---------------------------------------------------------------------------------------------------------------------

window[__APP_SCOPE__] = (function() {
    var tool = {};

    return {
        tool : tool
    }
})();


// ---------------------------------------------------------------------------------------------------------------------

window[__APP_SCOPE__].tool.type = (function () {

    function isString() {
        return true;
    }

    return {
        isString: isString
    };
})();


window[__APP_SCOPE__].tool.merge = (function () {
    function deepMerge() {
        return {};
    }

    return deepMerge;
})();


// ---------------------------------------------------------------------------------------------------------------------

/*
function Toolbar() {
    var tool = {
        merge : window[__APP_SCOPE__].tool.merge,
        type  : window[__APP_SCOPE__].tool.type
    };

    return {
        tool : tool
    };
}
/**/

// ---------------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------------------

var toolbar  = new Toolbar();
console.log(toolbar);
