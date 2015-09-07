var RBButtonGroup = rubix_bootstrap.core.reactified_button_group;

var ____Classv=React.Component;for(var ____Classv____Key in ____Classv){if(____Classv.hasOwnProperty(____Classv____Key)){ButtonGroup[____Classv____Key]=____Classv[____Classv____Key];}}var ____SuperProtoOf____Classv=____Classv===null?null:____Classv.prototype;ButtonGroup.prototype=Object.create(____SuperProtoOf____Classv);ButtonGroup.prototype.constructor=ButtonGroup;ButtonGroup.__superConstructor__=____Classv;function ButtonGroup(){"use strict";if(____Classv!==null){____Classv.apply(this,arguments);}}
  Object.defineProperty(ButtonGroup.prototype,"$ButtonGroup_onSetSelectItem",{writable:true,configurable:true,value:function(fn) {"use strict";
    this.$ButtonGroup_selectItem = fn;
  }});
  Object.defineProperty(ButtonGroup.prototype,"selectItem",{writable:true,configurable:true,value:function(key, value) {"use strict";
    this.$ButtonGroup_selectItem(key, value);
  }});
  Object.defineProperty(ButtonGroup.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return React.createElement(RBButtonGroup, React.__spread({},  this.props, 
                          {onSetSelectItem: this.$ButtonGroup_onSetSelectItem.bind(this)}));
  }});


module.exports = ButtonGroup;
