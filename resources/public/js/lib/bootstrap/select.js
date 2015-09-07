var RBSelect = rubix_bootstrap.core.reactified_select;

var ____ClassC=React.Component;for(var ____ClassC____Key in ____ClassC){if(____ClassC.hasOwnProperty(____ClassC____Key)){Select[____ClassC____Key]=____ClassC[____ClassC____Key];}}var ____SuperProtoOf____ClassC=____ClassC===null?null:____ClassC.prototype;Select.prototype=Object.create(____SuperProtoOf____ClassC);Select.prototype.constructor=Select;Select.__superConstructor__=____ClassC;function Select(){"use strict";if(____ClassC!==null){____ClassC.apply(this,arguments);}}
  Object.defineProperty(Select.prototype,"node",{configurable:true,get:function() {"use strict";
    return React.findDOMNode(this.refs.select);
  }});
  Object.defineProperty(Select.prototype,"selected",{configurable:true,get:function() {"use strict";
    var selected = [];
    var selectedOptions = this.node.selectedOptions;
    for(var i=0; i < selectedOptions.length; i++) {
      selected.push(selectedOptions[i].value);
    }
    return selected;
  }});
  Object.defineProperty(Select.prototype,"getSelected",{writable:true,configurable:true,value:function() {"use strict";
    console.warn('Select.getSelected() is deprecated. Please refer to "Select" documentation.');
    return this.selected;
  }});
  Object.defineProperty(Select.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return React.createElement(RBSelect, React.__spread({ref: "select"},  this.props))
  }});


module.exports = Select;
