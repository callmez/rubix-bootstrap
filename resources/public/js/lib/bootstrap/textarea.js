var CLJTextarea = rubix_bootstrap.core.reactified_textarea;

var ____ClassD=React.Component;for(var ____ClassD____Key in ____ClassD){if(____ClassD.hasOwnProperty(____ClassD____Key)){TextArea[____ClassD____Key]=____ClassD[____ClassD____Key];}}var ____SuperProtoOf____ClassD=____ClassD===null?null:____ClassD.prototype;TextArea.prototype=Object.create(____SuperProtoOf____ClassD);TextArea.prototype.constructor=TextArea;TextArea.__superConstructor__=____ClassD;function TextArea(){"use strict";if(____ClassD!==null){____ClassD.apply(this,arguments);}}
  Object.defineProperty(TextArea.prototype,"node",{configurable:true,get:function() {"use strict";
    return React.findDOMNode(this);
  }});
  Object.defineProperty(TextArea.prototype,"value",{configurable:true,set:function(value) {"use strict";
    this.node.value = value;
  }});
  Object.defineProperty(TextArea.prototype,"value",{configurable:true,get:function() {"use strict";
    return this.node.value;
  }});
  Object.defineProperty(TextArea.prototype,"getValue",{writable:true,configurable:true,value:function() {"use strict";
    console.warn('Textarea.getValue() is deprecated. Please refer to "Textarea" documentation.');
    return this.value;
  }});
  Object.defineProperty(TextArea.prototype,"setValue",{writable:true,configurable:true,value:function(value) {"use strict";
    console.warn('Textarea.setValue(value) is deprecated. Please refer to "Textarea" documentation.');
    this.value = value;
  }});
  Object.defineProperty(TextArea.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return (
      React.createElement(CLJTextarea, React.__spread({},  this.props))
    );
  }});


module.exports = TextArea;
