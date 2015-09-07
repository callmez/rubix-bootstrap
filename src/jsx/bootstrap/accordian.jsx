var RBAccordian = rubix_bootstrap.core.reactified_accordian;

class Accordian extends React.Component {
  _onSetSelectItem(fn) {
    this._selectItem = fn;
  }
  selectItem(key, value) {
    this._selectItem(key, value);
  }
  render() {
    return <RBAccordian {...this.props}
                        onSetSelectItem={this._onSetSelectItem.bind(this)} />;
  }
}

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
