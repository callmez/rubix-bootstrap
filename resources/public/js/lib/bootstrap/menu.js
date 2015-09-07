var RBMenu = rubix_bootstrap.core.reactified_menu;
var RBMenuItem = rubix_bootstrap.core.reactified_menu_item;
var RBDropdown = rubix_bootstrap.core.reactified_dropdown;
var RBDropdownButton = rubix_bootstrap.core.reactified_dropdown_button;

var ____Classz=React.Component;for(var ____Classz____Key in ____Classz){if(____Classz.hasOwnProperty(____Classz____Key)){Dropdown[____Classz____Key]=____Classz[____Classz____Key];}}var ____SuperProtoOf____Classz=____Classz===null?null:____Classz.prototype;Dropdown.prototype=Object.create(____SuperProtoOf____Classz);Dropdown.prototype.constructor=Dropdown;Dropdown.__superConstructor__=____Classz;function Dropdown(){"use strict";if(____Classz!==null){____Classz.apply(this,arguments);}}
  Object.defineProperty(Dropdown.prototype,"$Dropdown_onSetSelectItem",{writable:true,configurable:true,value:function(fn) {"use strict";
    this.$Dropdown_selectItem = fn;
  }});
  Object.defineProperty(Dropdown.prototype,"selectItem",{writable:true,configurable:true,value:function(key, value) {"use strict";
    this.$Dropdown_selectItem(key, value);
  }});
  Object.defineProperty(Dropdown.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return React.createElement(RBDropdown, React.__spread({},  this.props, 
                       {onSetSelectItem: this.$Dropdown_onSetSelectItem.bind(this)}));
  }});


var ____ClassA=React.Component;for(var ____ClassA____Key in ____ClassA){if(____ClassA.hasOwnProperty(____ClassA____Key)){Menu[____ClassA____Key]=____ClassA[____ClassA____Key];}}var ____SuperProtoOf____ClassA=____ClassA===null?null:____ClassA.prototype;Menu.prototype=Object.create(____SuperProtoOf____ClassA);Menu.prototype.constructor=Menu;Menu.__superConstructor__=____ClassA;function Menu(){"use strict";if(____ClassA!==null){____ClassA.apply(this,arguments);}}
  Object.defineProperty(Menu.prototype,"$Menu_onSetSelectItem",{writable:true,configurable:true,value:function(fn) {"use strict";
    this.$Menu_selectItem = fn;
  }});
  Object.defineProperty(Menu.prototype,"selectItem",{writable:true,configurable:true,value:function(key, value) {"use strict";
    this.$Menu_selectItem(key, value);
  }});
  Object.defineProperty(Menu.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return React.createElement(RBMenu, React.__spread({},  this.props, 
                   {onSetSelectItem: this.$Menu_onSetSelectItem.bind(this)}));
  }});


module.exports = {
  Menu: Menu,
  MenuItem: RBMenuItem,
  Dropdown: Dropdown,
  DropdownButton: RBDropdownButton
};
