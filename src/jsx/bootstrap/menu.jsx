var RBMenu = rubix_bootstrap.core.reactified_menu;
var RBMenuItem = rubix_bootstrap.core.reactified_menu_item;
var RBDropdown = rubix_bootstrap.core.reactified_dropdown;
var RBDropdownButton = rubix_bootstrap.core.reactified_dropdown_button;

class Dropdown extends React.Component {
  _onSetSelectItem(fn) {
    this._selectItem = fn;
  }
  selectItem(key, value) {
    this._selectItem(key, value);
  }
  render() {
    return <RBDropdown {...this.props}
                       onSetSelectItem={this._onSetSelectItem.bind(this)} />;
  }
}

class Menu extends React.Component {
  _onSetSelectItem(fn) {
    this._selectItem = fn;
  }
  selectItem(key, value) {
    this._selectItem(key, value);
  }
  render() {
    return <RBMenu {...this.props}
                   onSetSelectItem={this._onSetSelectItem.bind(this)} />;
  }
}

module.exports = {
  Menu: Menu,
  MenuItem: RBMenuItem,
  Dropdown: Dropdown,
  DropdownButton: RBDropdownButton
};
