var Icon = require('./icon');
var classNames = require('classnames');
var TimelineView = React.createClass({displayName: "TimelineView",
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
    });

    var props = Object.assign({
      centered: null,
      withHeader: null,
      className: classes.trim()},
      this.props
    );

    return (
      React.createElement("div", React.__spread({},  props), 
        this.props.children
      )
    );
  }
});

var TimelineItem = React.createClass({displayName: "TimelineItem",
  render: function() {
    var props = Object.assign({
      className: classNames('rubix-timeline-item', this.props.className)},
      this.props
    );

    return (
      React.createElement("div", React.__spread({},  props), 
        this.props.children
      )
    );
  }
});

var TimelineHeader = React.createClass({displayName: "TimelineHeader",
  render: function() {
    var props = Object.assign({
      className: classNames('rubix-timeline-header', this.props.className)},
      this.props
    );

    return (
      React.createElement("div", React.__spread({},  props), 
        this.props.children
      )
    );
  }
});

var TimelineIcon = React.createClass({displayName: "TimelineIcon",
  render: function() {
    var props = Object.assign({
      className: classNames('rubix-timeline-icon', this.props.className)},
      this.props
    );

    return (
      React.createElement(Icon, React.__spread({},  props))
    );
  }
});

var TimelineAvatar = React.createClass({displayName: "TimelineAvatar",
  render: function() {
    var props = Object.assign({
      width: 30,
      height: 30,
      className: classNames('rubix-timeline-avatar', this.props.className),
      style: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 100,
        padding: 2,
        position: 'absolute',
        top: 0
      }},
      this.props
    );

    return (
      React.createElement("img", React.__spread({},  props))
    );
  }
});

var TimelineTitle = React.createClass({displayName: "TimelineTitle",
  render: function() {
    var props = Object.assign({
      className: classNames('rubix-timeline-title', this.props.className)},
      this.props
    );

    return (
      React.createElement("div", React.__spread({},  props), 
        this.props.children
      )
    );
  }
});

var TimelineBody = React.createClass({displayName: "TimelineBody",
  render: function() {
    var props = Object.assign({
      className: classNames('rubix-timeline-body', this.props.className)},
      this.props
    );

    return (
      React.createElement("div", React.__spread({},  props), 
        this.props.children
      )
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
