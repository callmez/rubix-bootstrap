var Label = require('./label');
var Input = require('./input');
var HelpBlock = require('./helpblock');
var FormGroup = require('./formgroup');

var ____Classx=React.Component;for(var ____Classx____Key in ____Classx){if(____Classx.hasOwnProperty(____Classx____Key)){FormInput[____Classx____Key]=____Classx[____Classx____Key];}}var ____SuperProtoOf____Classx=____Classx===null?null:____Classx.prototype;FormInput.prototype=Object.create(____SuperProtoOf____Classx);FormInput.prototype.constructor=FormInput;FormInput.__superConstructor__=____Classx;function FormInput(){"use strict";if(____Classx!==null){____Classx.apply(this,arguments);}}
  Object.defineProperty(FormInput.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    var isError = (this.props.hintType === 'error' ? true : false);
    var isSuccess = (this.props.hintType === 'success' ? true : false);
    var isWarning = (this.props.hintType === 'warning' ? true : false);
    var labelProps = this.props.labelProps;
    var formGroupProps = this.props.formGroupProps;
    var helpBlockProps = this.props.helpBlockProps;
    var inputProps = Object.assign({},
      this.props,
      {label: null,
      inline: null,
      control: null,
      hintType: null,
      hintText: null,
      labelProps: null,
      formGroupProps: null,
      helpBlockProps: null
    });

    return (
      React.createElement(FormGroup, React.__spread({error: isError, 
                 warning: isWarning, 
                 success: isSuccess}, 
                 formGroupProps), 
        React.createElement(Label, React.__spread({htmlFor: this.props.id, 
               inline: this.props.inline, 
               control: this.props.control}, 
               labelProps), 
          this.props.label
        ), 
        React.createElement(Input, React.__spread({},  inputProps)), 
        React.createElement(HelpBlock, React.__spread({},  helpBlockProps), 
          this.props.hintText
        )
      )
    );
  }});


module.exports = FormInput;
