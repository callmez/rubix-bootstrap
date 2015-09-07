var RBRadio = rubix_bootstrap.core.reactified_radio;
var RBCheckbox = rubix_bootstrap.core.reactified_checkbox;

var ____Classw=React.Component;for(var ____Classw____Key in ____Classw){if(____Classw.hasOwnProperty(____Classw____Key)){RCMixin[____Classw____Key]=____Classw[____Classw____Key];}}var ____SuperProtoOf____Classw=____Classw===null?null:____Classw.prototype;RCMixin.prototype=Object.create(____SuperProtoOf____Classw);RCMixin.prototype.constructor=RCMixin;RCMixin.__superConstructor__=____Classw;function RCMixin(){"use strict";if(____Classw!==null){____Classw.apply(this,arguments);}}
  Object.defineProperty(RCMixin.prototype,"node",{configurable:true,get:function() {"use strict";
    return React.findDOMNode(this);
  }});
  Object.defineProperty(RCMixin.prototype,"checkbox",{configurable:true,get:function() {"use strict";
    return this.node.querySelector('input[type=checkbox]');
  }});
  Object.defineProperty(RCMixin.prototype,"radio",{configurable:true,get:function() {"use strict";
    return this.node.querySelector('input[type=radio]');
  }});
  Object.defineProperty(RCMixin.prototype,"span",{configurable:true,get:function() {"use strict";
    return this.node.querySelector('span');
  }});
  Object.defineProperty(RCMixin.prototype,"GetType",{writable:true,configurable:true,value:function() {"use strict";
    if(this.checkbox) return "Checkbox";
    return "Radio";
  }});
  Object.defineProperty(RCMixin.prototype,"checked",{configurable:true,get:function() {"use strict";
    var input = this.checkbox || this.radio;
    if(input) return input.checked;
  }});
  Object.defineProperty(RCMixin.prototype,"checked",{configurable:true,set:function(value) {"use strict";
    var input = this.checkbox || this.radio;
    if(input) input.checked = value;
  }});
  Object.defineProperty(RCMixin.prototype,"value",{configurable:true,get:function() {"use strict";
    var span = this.span;
    if(span) return span.innerText;
  }});
  Object.defineProperty(RCMixin.prototype,"isChecked",{writable:true,configurable:true,value:function() {"use strict";
    return this.checked === true;
  }});
  Object.defineProperty(RCMixin.prototype,"getChecked",{writable:true,configurable:true,value:function() {"use strict";
    console.warn(this.GetType() + ".getChecked() is deprecated. Please refer to Checkbox & Radio documentation.");
    return this.checked;
  }});
  Object.defineProperty(RCMixin.prototype,"setChecked",{writable:true,configurable:true,value:function(value) {"use strict";
    console.warn(this.GetType() + ".setChecked(value) is deprecated. Please refer to Checkbox & Radio documentation.");
    this.checked = value;
  }});
  Object.defineProperty(RCMixin.prototype,"getValue",{writable:true,configurable:true,value:function() {"use strict";
    console.warn(this.GetType() + ".getValue() is deprecated. Please refer to Checkbox & Radio documentation.");
    return this.value;
  }});


for(var RCMixin____Key in RCMixin){if(RCMixin.hasOwnProperty(RCMixin____Key)){Radio[RCMixin____Key]=RCMixin[RCMixin____Key];}}var ____SuperProtoOfRCMixin=RCMixin===null?null:RCMixin.prototype;Radio.prototype=Object.create(____SuperProtoOfRCMixin);Radio.prototype.constructor=Radio;Radio.__superConstructor__=RCMixin;function Radio(){"use strict";if(RCMixin!==null){RCMixin.apply(this,arguments);}}
  Object.defineProperty(Radio.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return React.createElement(RBRadio, React.__spread({},  this.props))
  }});


for(RCMixin____Key in RCMixin){if(RCMixin.hasOwnProperty(RCMixin____Key)){Checkbox[RCMixin____Key]=RCMixin[RCMixin____Key];}}Checkbox.prototype=Object.create(____SuperProtoOfRCMixin);Checkbox.prototype.constructor=Checkbox;Checkbox.__superConstructor__=RCMixin;function Checkbox(){"use strict";if(RCMixin!==null){RCMixin.apply(this,arguments);}}
  Object.defineProperty(Checkbox.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return React.createElement(RBCheckbox, React.__spread({},  this.props))
  }});


module.exports.Radio = Radio;
module.exports.Checkbox = Checkbox;
