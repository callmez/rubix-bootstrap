var CLJInput = rubix_bootstrap.core.reactified_input;

var ____Classy=React.Component;for(var ____Classy____Key in ____Classy){if(____Classy.hasOwnProperty(____Classy____Key)){Input[____Classy____Key]=____Classy[____Classy____Key];}}var ____SuperProtoOf____Classy=____Classy===null?null:____Classy.prototype;Input.prototype=Object.create(____SuperProtoOf____Classy);Input.prototype.constructor=Input;Input.__superConstructor__=____Classy;function Input(){"use strict";if(____Classy!==null){____Classy.apply(this,arguments);}}
  Object.defineProperty(Input.prototype,"node",{configurable:true,get:function() {"use strict";
    return React.findDOMNode(this);
  }});
  Object.defineProperty(Input.prototype,"checked",{configurable:true,get:function() {"use strict";
    if(this.props.type === 'checkbox' || this.props.type === 'radio')
      return this.node.checked;
    else throw Error('Input type not checkbox or radio');
  }});
  Object.defineProperty(Input.prototype,"checked",{configurable:true,set:function(value) {"use strict";
    if(this.props.type === 'checkbox' || this.props.type === 'radio')
      this.node.checked = value;
    else throw Error('Input type not checkbox or radio');
  }});
  Object.defineProperty(Input.prototype,"value",{configurable:true,set:function(value) {"use strict";
    this.node.value = value;
  }});
  Object.defineProperty(Input.prototype,"value",{configurable:true,get:function() {"use strict";
    return this.node.value;
  }});
  Object.defineProperty(Input.prototype,"getChecked",{writable:true,configurable:true,value:function() {"use strict";
    console.warn('Input.getChecked() is deprecated. Please refer to "Inputs" documentation.');
    return this.checked;
  }});
  Object.defineProperty(Input.prototype,"setChecked",{writable:true,configurable:true,value:function(value) {"use strict";
    console.warn('Input.setChecked(value) is deprecated. Please refer to "Inputs" documentation.');
    this.checked = value;
  }});
  Object.defineProperty(Input.prototype,"getValue",{writable:true,configurable:true,value:function() {"use strict";
    console.warn('Input.getValue() is deprecated. Please refer to "Inputs" documentation.');
    return this.value;
  }});
  Object.defineProperty(Input.prototype,"setValue",{writable:true,configurable:true,value:function(value) {"use strict";
    console.warn('Input.setValue(value) is deprecated. Please refer to "Inputs" documentation.');
    this.value = value;
  }});
  Object.defineProperty(Input.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return (
      React.createElement(CLJInput, React.__spread({},  this.props))
    );
  }});


Input.propTypes = {
  type: React.PropTypes.string.isRequired,
  lg: React.PropTypes.bool,
  sm: React.PropTypes.bool
};

Input.defaultProps = {
  type: 'text'
};

module.exports = Input;
