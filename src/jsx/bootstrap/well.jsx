var classNames = require('classnames');

class Well extends React.Component {
  render() {
    var classes = classNames({
      'well': true,
      'well-lg': this.props.lg,
      'well-sm': this.props.sm
    }, this.props.className);
    var style = {};
    if(this.props.noMargin) style.margin = 0;

    var props = {
      ...this.props,
      style: style,
      className: classes
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Well;
