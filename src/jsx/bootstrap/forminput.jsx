var Label = require('./label.jsx');
var Input = require('./input.jsx');
var HelpBlock = require('./helpblock.jsx');
var FormGroup = require('./formgroup.jsx');

class FormInput extends React.Component {
  render() {
    var isError = (this.props.hintType === 'error' ? true : false);
    var isSuccess = (this.props.hintType === 'success' ? true : false);
    var isWarning = (this.props.hintType === 'warning' ? true : false);
    var labelProps = this.props.labelProps;
    var formGroupProps = this.props.formGroupProps;
    var helpBlockProps = this.props.helpBlockProps;
    var inputProps = {
      ...this.props,
      label: null,
      inline: null,
      control: null,
      hintType: null,
      hintText: null,
      labelProps: null,
      formGroupProps: null,
      helpBlockProps: null
    };

    return (
      <FormGroup error={isError}
                 warning={isWarning}
                 success={isSuccess}
                 {...formGroupProps}>
        <Label htmlFor={this.props.id}
               inline={this.props.inline}
               control={this.props.control}
               {...labelProps}>
          {this.props.label}
        </Label>
        <Input {...inputProps} />
        <HelpBlock {...helpBlockProps}>
          {this.props.hintText}
        </HelpBlock>
      </FormGroup>
    );
  }
}

module.exports = FormInput;
