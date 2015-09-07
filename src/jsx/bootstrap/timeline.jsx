var Icon = require('./icon.jsx');
var classNames = require('classnames');
var TimelineView = React.createClass({
  propTypes: {
    centered: React.PropTypes.bool,
    withHeader: React.PropTypes.bool
  },
  render: function() {
    var classes = classNames({
      'rubix-timeline-view': true,
      'rubix-timeline-centered': this.props.centered || false,
      'rubix-timeline-with-header': this.props.withHeader || false,
      'rubix-timeline-normal': !this.props.withHeader
    }, this.props.className);

    var props = {
      ...this.props,
      centered: null,
      withHeader: null,
      className: classes.trim()
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var TimelineItem = React.createClass({
  render: function() {
    var props = {
      ...this.props,
      className: classNames('rubix-timeline-item', this.props.className)
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var TimelineHeader = React.createClass({
  render: function() {
    var props = {
      ...this.props,
      className: classNames('rubix-timeline-header', this.props.className)
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var TimelineIcon = React.createClass({
  render: function() {
    var props = {
      ...this.props,
      className: classNames('rubix-timeline-icon', this.props.className)
    };

    return (
      <Icon {...props} />
    );
  }
});

var TimelineAvatar = React.createClass({
  render: function() {
    var props = {
      width: 30,
      height: 30,
      ...this.props,
      className: classNames('rubix-timeline-avatar', this.props.className),
      style: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 100,
        padding: 2,
        position: 'absolute',
        top: 0
      },
    };

    return (
      <img {...props} />
    );
  }
});

var TimelineTitle = React.createClass({
  render: function() {
    var props = {
      ...this.props,
      className: classNames('rubix-timeline-title', this.props.className)
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var TimelineBody = React.createClass({
  render: function() {
    var props = {
      ...this.props,
      className: classNames('rubix-timeline-body', this.props.className)
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports.TimelineView = TimelineView;
module.exports.TimelineItem = TimelineItem;
module.exports.TimelineHeader = TimelineHeader;
module.exports.TimelineIcon = TimelineIcon;
module.exports.TimelineAvatar = TimelineAvatar;
module.exports.TimelineTitle = TimelineTitle;
module.exports.TimelineBody = TimelineBody;
