var RBSelect = rubix_bootstrap.core.reactified_select;

class Select extends React.Component {
  get node() {
    return React.findDOMNode(this.refs.select);
  }
  get selected() {
    var selected = [];
    var selectedOptions = this.node.selectedOptions;
    for(var i=0; i < selectedOptions.length; i++) {
      selected.push(selectedOptions[i].value);
    }
    return selected;
  }
  getSelected() {
    console.warn('Select.getSelected() is deprecated. Please refer to "Select" documentation.');
    return this.selected;
  }
  render() {
    return <RBSelect ref='select' {...this.props} />
  }
}

module.exports = Select;
