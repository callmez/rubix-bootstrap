var CLJInput = rubix_bootstrap.core.reactified_input;

class Input extends React.Component {
  get node() {
    return React.findDOMNode(this);
  }
  get checked() {
    if(this.props.type === 'checkbox' || this.props.type === 'radio')
      return this.node.checked;
    else throw Error('Input type not checkbox or radio');
  }
  set checked(value) {
    if(this.props.type === 'checkbox' || this.props.type === 'radio')
      this.node.checked = value;
    else throw Error('Input type not checkbox or radio');
  }
  set value(value) {
    this.node.value = value;
  }
  get value() {
    return this.node.value;
  }
  getInputDOMNode() {
    console.warn('Input.getInputDOMNode() is deprecated. Please refer to "Inputs" documentation.');
    return this.node;
  }
  getChecked() {
    console.warn('Input.getChecked() is deprecated. Please refer to "Inputs" documentation.');
    return this.checked;
  }
  setChecked(value) {
    console.warn('Input.setChecked(value) is deprecated. Please refer to "Inputs" documentation.');
    this.checked = value;
  }
  getValue() {
    console.warn('Input.getValue() is deprecated. Please refer to "Inputs" documentation.');
    return this.value;
  }
  setValue(value) {
    console.warn('Input.setValue(value) is deprecated. Please refer to "Inputs" documentation.');
    this.value = value;
  }
  render() {
    return (
      <CLJInput {...this.props} />
    );
  }
}

Input.propTypes = {
  type: React.PropTypes.string.isRequired,
  lg: React.PropTypes.bool,
  sm: React.PropTypes.bool
};

Input.defaultProps = {
  type: 'text'
};

module.exports = Input;
