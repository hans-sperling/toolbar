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

(function (appAppend) {
    var toolId = 'typeCheck';

    appAppend[toolId] = {
        isString : function() { return true;}
    };

})(window[__APP_SCOPE__].tool);



window[__APP_SCOPE__].tool.type = (function () {
    return {
        isString : function() { return true;}
    };
})();


window[__APP_SCOPE__].tool.merge = (function () {
    function mergeObjects(masterObject, slaveObject) {
        return {};
    }

    return {
        objects : mergeObjects
    };
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

function Toolbar() {

    return window[__APP_SCOPE__];
}

// ---------------------------------------------------------------------------------------------------------------------

var toolbar  = new Toolbar();
console.log(toolbar);
