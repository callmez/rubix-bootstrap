var RBButtonGroup = rubix_bootstrap.core.reactified_button_group;

class ButtonGroup extends React.Component {
  _onSetSelectItem(fn) {
    this._selectItem = fn;
  }
  selectItem(key, value) {
    this._selectItem(key, value);
  }
  render() {
    return <RBButtonGroup {...this.props}
                          onSetSelectItem={this._onSetSelectItem.bind(this)} />;
  }
}

module.exports = ButtonGroup;
