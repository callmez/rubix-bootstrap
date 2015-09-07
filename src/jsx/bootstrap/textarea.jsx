var CLJTextarea = rubix_bootstrap.core.reactified_textarea;

class TextArea extends React.Component {
  get node() {
    return React.findDOMNode(this);
  }
  set value(value) {
    this.node.value = value;
  }
  get value() {
    return this.node.value;
  }
  getInputDOMNode() {
    console.warn('Textarea.getInputDOMNode() is deprecated. Please refer to "Textarea" documentation.');
    return this.node;
  }
  getValue() {
    console.warn('Textarea.getValue() is deprecated. Please refer to "Textarea" documentation.');
    return this.value;
  }
  setValue(value) {
    console.warn('Textarea.setValue(value) is deprecated. Please refer to "Textarea" documentation.');
    this.value = value;
  }
  render() {
    return (
      <CLJTextarea {...this.props} />
    );
  }
}

module.exports = TextArea;
