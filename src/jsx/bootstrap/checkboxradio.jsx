var RBRadio = rubix_bootstrap.core.reactified_radio;
var RBCheckbox = rubix_bootstrap.core.reactified_checkbox;

class RCMixin extends React.Component {
  get node() {
    return React.findDOMNode(this);
  }
  get checkbox() {
    return this.node.querySelector('input[type=checkbox]');
  }
  get radio() {
    return this.node.querySelector('input[type=radio]');
  }
  get span() {
    return this.node.querySelector('span');
  }
  GetType() {
    if(this.checkbox) return "Checkbox";
    return "Radio";
  }
  get checked() {
    var input = this.checkbox || this.radio;
    if(input) return input.checked;
  }
  set checked(value) {
    var input = this.checkbox || this.radio;
    if(input) input.checked = value;
  }
  get value() {
    var span = this.span;
    if(span) return span.innerText;
  }
  isChecked() {
    return this.checked === true;
  }
  getChecked() {
    console.warn(this.GetType() + ".getChecked() is deprecated. Please refer to Checkbox & Radio documentation.");
    return this.checked;
  }
  setChecked(value) {
    console.warn(this.GetType() + ".setChecked(value) is deprecated. Please refer to Checkbox & Radio documentation.");
    this.checked = value;
  }
  getValue() {
    console.warn(this.GetType() + ".getValue() is deprecated. Please refer to Checkbox & Radio documentation.");
    return this.value;
  }
}

class Radio extends RCMixin {
  render() {
    return <RBRadio {...this.props} />
  }
}

class Checkbox extends RCMixin {
  render() {
    return <RBCheckbox {...this.props} />
  }
}

module.exports.Radio = Radio;
module.exports.Checkbox = Checkbox;
