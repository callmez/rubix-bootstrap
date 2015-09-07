var RBAccordian = rubix_bootstrap.core.reactified_accordian;

var ____Classu=React.Component;for(var ____Classu____Key in ____Classu){if(____Classu.hasOwnProperty(____Classu____Key)){Accordian[____Classu____Key]=____Classu[____Classu____Key];}}var ____SuperProtoOf____Classu=____Classu===null?null:____Classu.prototype;Accordian.prototype=Object.create(____SuperProtoOf____Classu);Accordian.prototype.constructor=Accordian;Accordian.__superConstructor__=____Classu;function Accordian(){"use strict";if(____Classu!==null){____Classu.apply(this,arguments);}}
  Object.defineProperty(Accordian.prototype,"$Accordian_onSetSelectItem",{writable:true,configurable:true,value:function(fn) {"use strict";
    this.$Accordian_selectItem = fn;
  }});
  Object.defineProperty(Accordian.prototype,"selectItem",{writable:true,configurable:true,value:function(key, value) {"use strict";
    this.$Accordian_selectItem(key, value);
  }});
  Object.defineProperty(Accordian.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return React.createElement(RBAccordian, React.__spread({},  this.props, 
                        {onSetSelectItem: this.$Accordian_onSetSelectItem.bind(this)}));
  }});


Accordian.propTypes = {
  onItemSelect: React.PropTypes.func
};

Accordian.defaultProps = {
  onItemSelect: function() {}
};

module.exports = {
  Accordian: Accordian,
  AccordianPane: rubix_bootstrap.core.reactified_accordian_pane,
  AccordianTitle: rubix_bootstrap.core.reactified_accordian_title,
  AccordianContent: rubix_bootstrap.core.reactified_accordian_content
};
