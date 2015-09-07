var RBProgress = rubix_bootstrap.core.reactified_progress;
var RBProgressGroup = rubix_bootstrap.core.reactified_progress_group;

var ____ClassB=React.Component;for(var ____ClassB____Key in ____ClassB){if(____ClassB.hasOwnProperty(____ClassB____Key)){Progress[____ClassB____Key]=____ClassB[____ClassB____Key];}}var ____SuperProtoOf____ClassB=____ClassB===null?null:____ClassB.prototype;Progress.prototype=Object.create(____SuperProtoOf____ClassB);Progress.prototype.constructor=Progress;Progress.__superConstructor__=____ClassB;function Progress(){"use strict";if(____ClassB!==null){____ClassB.apply(this,arguments);}}
  Object.defineProperty(Progress.prototype,"value",{configurable:true,get:function() {"use strict";
    return this.props.value;
  }});
  Object.defineProperty(Progress.prototype,"min",{configurable:true,get:function() {"use strict";
    return this.props.min;
  }});
  Object.defineProperty(Progress.prototype,"max",{configurable:true,get:function() {"use strict";
    return this.props.max;
  }});
  Object.defineProperty(Progress.prototype,"getValue",{writable:true,configurable:true,value:function() {"use strict";
    console.warn("Progress.getValue() is deprecated. Please refer to \"Progress \" documentation.");
    return this.value;
  }});
  Object.defineProperty(Progress.prototype,"getMin",{writable:true,configurable:true,value:function() {"use strict";
    console.warn("Progress.getMin() is deprecated. Please refer to \"Progress \" documentation.");
    return this.min;
  }});
  Object.defineProperty(Progress.prototype,"getMax",{writable:true,configurable:true,value:function() {"use strict";
    console.warn("Progress.getMax() is deprecated. Please refer to \"Progress \" documentation.");
    return this.max;
  }});
  Object.defineProperty(Progress.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return React.createElement(RBProgress, React.__spread({},  this.props));
  }});


module.exports = {
  Progress: Progress,
  ProgressGroup: RBProgressGroup
};
