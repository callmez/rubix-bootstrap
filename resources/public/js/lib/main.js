var Homepage = rubix_bootstrap.core.reactified_homepage;
var Row = require('./bootstrap/row');
var Col = require('./bootstrap/col');
var Tag = require('./bootstrap/tag');
var Grid = require('./bootstrap/grid');
var Container = require('./bootstrap/container');
var Static = require('./bootstrap/static');
var Lead = require('./bootstrap/lead');
var Img = require('./bootstrap/img');
var Label = require('./bootstrap/label');
var HelpBlock = require('./bootstrap/helpblock');
var Jumbotron = require('./bootstrap/jumbotron');
var Alert = require('./bootstrap/alert').Alert;
var AlertLink = require('./bootstrap/alert').AlertLink;
var Input = require('./bootstrap/input');
var InputGroup = require('./bootstrap/inputgroup').InputGroup;
var InputGroupAddon = require('./bootstrap/inputgroup').InputGroupAddon;
var InputGroupButton = require('./bootstrap/inputgroup').InputGroupButton;
var TextArea = require('./bootstrap/textarea');
var Caret = require('./bootstrap/caret');
var Button = require('./bootstrap/button');
var Form = require('./bootstrap/form');
var FormInput = require('./bootstrap/forminput');
var FormGroup = require('./bootstrap/formgroup');
var ButtonGroup = require('./bootstrap/buttongroup');
var Accordian = require('./bootstrap/accordian').Accordian;
var AccordianPane = require('./bootstrap/accordian').AccordianPane;
var AccordianTitle = require('./bootstrap/accordian').AccordianTitle;
var AccordianContent = require('./bootstrap/accordian').AccordianContent;
var BLink = require('./bootstrap/breadcrumb').BLink;
var Badge = require('./bootstrap/labelsandbadges').Badge;
var BLabel = require('./bootstrap/labelsandbadges').BLabel;
var Breadcrumb = require('./bootstrap/breadcrumb').Breadcrumb;
var Page = require('./bootstrap/pagination').Page;
var Pager = require('./bootstrap/pagination').Pager;
var Pagination = require('./bootstrap/pagination').Pagination;
var Table = require('./bootstrap/table');
var Progress = require('./bootstrap/progress').Progress;
var ProgressGroup = require('./bootstrap/progress').ProgressGroup;
var Select = require('./bootstrap/select');
var Media = require('./bootstrap/media').Media;
var MediaDiv = require('./bootstrap/media').MediaDiv;
var MediaBody = require('./bootstrap/media').MediaBody;
var MediaList = require('./bootstrap/media').MediaList;
var MediaObject = require('./bootstrap/media').MediaObject;
var MediaHeading = require('./bootstrap/media').MediaHeading;
var ListGroup = require('./bootstrap/listgroup').ListGroup;
var ListGroupItem = require('./bootstrap/listgroup').ListGroupItem;
var ListGroupItemText = require('./bootstrap/listgroup').ListGroupItemText;
var ListGroupItemHeading = require('./bootstrap/listgroup').ListGroupItemHeading;
var Panel = require('./bootstrap/panel').Panel;
var PanelBody = require('./bootstrap/panel').PanelBody;
var PanelLeft = require('./bootstrap/panel').PanelLeft;
var PanelRight = require('./bootstrap/panel').PanelRight;
var PanelHeader = require('./bootstrap/panel').PanelHeader;
var PanelFooter = require('./bootstrap/panel').PanelFooter;
var PanelContainer = require('./bootstrap/panel').PanelContainer;
var Radio = require('./bootstrap/checkboxradio').Radio;
var Checkbox = require('./bootstrap/checkboxradio').Checkbox;
var Menu = require('./bootstrap/menu').Menu;
var MenuItem = require('./bootstrap/menu').MenuItem;
var Dropdown = require('./bootstrap/menu').Dropdown;
var DropdownButton = require('./bootstrap/menu').DropdownButton;
var Modal = require('./bootstrap/modal').Modal;
var ModalBody = require('./bootstrap/modal').ModalBody;
var ModalHeader = require('./bootstrap/modal').ModalHeader;
var ModalFooter = require('./bootstrap/modal').ModalFooter;
var ModalManager = require('./bootstrap/modal').ModalManager;
var Nav = require('./bootstrap/nav').Nav;
var NavBar = require('./bootstrap/nav').NavBar;
var NavItem = require('./bootstrap/nav').NavItem;
var NavText = require('./bootstrap/nav').NavText;
var NavLink = require('./bootstrap/nav').NavLink;
var NavForm = require('./bootstrap/nav').NavForm;
var NavBrand = require('./bootstrap/nav').NavBrand;
var NavHeader = require('./bootstrap/nav').NavHeader;
var NavButton = require('./bootstrap/nav').NavButton;
var NavContent = require('./bootstrap/nav').NavContent;
var NavToggle = require('./bootstrap/nav').NavToggle;
var Tab = require('./bootstrap/tab').Tab;
var TabList = require('./bootstrap/tab').TabList;
var TabPane = require('./bootstrap/tab').TabPane;
var TabContent = require('./bootstrap/tab').TabContent;
var TabDropdown = require('./bootstrap/tab').TabDropdown;
var TabContainer = require('./bootstrap/tab').TabContainer;

// var Dispatcher = new EventEmitter2({
//   maxListeners: 999999999
// })

// var AccordianContent = React.createClass({
//   getInitialState: function() {
//     return {
//       height: 0,
//       opened: false
//     };
//   },
//   collapse: function() {
//     var node = this.refs.content.getDOMNode();
//     $(node).animate({height: 0}, 250);
//     this.setState({opened: false});
//   },
//   expand: function() {
//     var node = this.refs.content.getDOMNode();
//     $(node).animate({height: this.state.height}, 250);
//     this.setState({opened: true}, function() {
//       this.props.parent.setActiveItem(this.props, function() {
//         this.props.parent.props.onItemSelect(this.props);
//       }.bind(this));
//     }.bind(this));
//   },
//   handleStateChange: function(paneID) {
//     if(this.props.paneID === paneID) {
//       if(this.state.opened) {
//         this.collapse();
//       } else {
//         this.expand();
//       }
//     } else {
//       this.collapse();
//     }
//   },
//   handleKV: function(key, value) {
//     if(this.props.hasOwnProperty(key) && this.props[key] === value) {
//       this.expand();
//     } else {
//       this.collapse();
//     }
//   },
//   componentWillMount: function() {
//     Dispatcher.on('accordian:'+this.props.accordianID, this.handleStateChange);
//     Dispatcher.on('accordian:kv:'+this.props.accordianID, this.handleKV);
//   },
//   componentDidMount: function() {
//     var node = this.refs.content.getDOMNode();
//     var height = $(node).outerHeight();
//     $(node).css('height', 0);
//     this.setState({height: height}, function() {
//       if(this.props.active)
//         this.expand();
//     }.bind(this));
//   },
//   componentWillUnmount: function() {
//     Dispatcher.off('accordian:'+this.props.accordianID, this.handleStateChange);
//     Dispatcher.off('accordian:kv:'+this.props.accordianID, this.handleKV);
//   },
//   render: function() {
//     return (
//       <div {...this.props} ref='content' className='accordian-content' style={{overflow: 'hidden'}}>
//         <div className='accordian-body'>{this.props.children}</div>
//       </div>
//     );
//   }
// });

// var AccordianTitle = React.createClass({
//   handleClick: function(e) {
//     e.preventDefault();
//     e.stopPropagation();

//     Dispatcher.emit('accordian:'+this.props.accordianID, this.props.paneID);
//   },
//   render: function() {
//     return (
//       <a {...this.props} href='#' className='accordian-title' onClick={this.handleClick}>
//         {this.props.children}
//       </a>
//     );
//   }
// });

// var AccordianPane = React.createClass({
//   statics: {
//     ID: 0,
//     getID: function() {
//       return AccordianPane.ID++;
//     },
//     resetID: function() {
//       AccordianPane.ID = 0;
//     }
//   },
//   getInitialState: function() {
//     return {
//       id: AccordianPane.getID(),
//       children: []
//     };
//   },
//   componentWillReceiveProps: function(nextProps) {
//     var children = React.Children.map(nextProps.children, function(child, i) {
//       return React.cloneElement(child, {
//         key: i, paneID: this.state.id, accordianID: this.props.accordianID, active: this.props.active, parent: this.props.parent
//       });
//     }, this);
//     this.setState({
//       children: children
//     });
//   },
//   componentWillMount: function() {
//     var children = React.Children.map(this.props.children, function(child, i) {
//       return React.cloneElement(child, {
//         key: i, paneID: this.state.id, accordianID: this.props.accordianID, active: this.props.active, parent: this.props.parent
//       });
//     }, this);

//     this.setState({children: children});
//   },
//   render: function() {
//     return (
//       <li {...this.props} className='accordian-pane'>
//         {this.state.children}
//       </li>
//     );
//   }
// });

// var Accordian = React.createClass({
//   statics: {
//     ID: 0,
//     getID: function() {
//       return Accordian.ID++;
//     }
//   },
//   propTypes: {
//     onItemSelect: React.PropTypes.func
//   },
//   getDefaultProps: function() {
//     return {
//       onItemSelect: function() {}
//     };
//   },
//   getInitialState: function() {
//     return {
//       activeItem: null,
//       id: Accordian.getID(),
//       children: []
//     };
//   },
//   setActiveItem: function(props, cb) {
//     this.setState({activeItem: props}, cb);
//   },
//   getActiveItem: function() {
//     return this.state.props;
//   },
//   selectItem: function(key, value) {
//     Dispatcher.emit('accordian:kv:'+this.state.id, key, value);
//   },
//   componentWillReceiveProps: function(nextProps) {
//     var children = React.Children.map(nextProps.children, function(child, i) {
//       return React.cloneElement(child, {
//         parent: this, key: i, accordianID: this.state.id
//       });
//     }, this);
//     this.setState({
//       children: children
//     });
//   },
//   componentWillMount: function() {
//     var children = React.Children.map(this.props.children, function(child, i) {
//       return React.cloneElement(child, {
//         parent: this, key: i, accordianID: this.state.id
//       });
//     }, this);

//     this.setState({children: children});
//   },
//   render: function() {
//     AccordianPane.resetID();

//     return (
//       <ul {...this.props} className='accordian'>
//         {this.state.children}
//       </ul>
//     );
//   }
// });

var RenderAccordian = React.createClass({displayName: "RenderAccordian",
  getInitialState: function() {
    return {panes: [{active: true,
                     title: "Collapsible Item 1",
                     content: "Something interesting " + this.props.accordianName},
                    {active: false,
                     title: "Collapsible Item 2",
                     content: "Something interesting " + this.props.accordianName},
                    {active: false,
                     title: "Collapsible Item 3",
                     content: "Something interesting " + this.props.accordianName}]};
  },
  componentDidMount: function() {
    setTimeout(function() {
      var panes = this.state.panes;
      panes.push({active: true,
                  title: "Collapsible Item 4",
                  content: "Something interesting " + this.props.accordianName})
      this.setState({panes: panes});
    }.bind(this), 5000);

    setTimeout(function() {
      var panes = this.state.panes;
      for(var i=0; i < 100; i++) {
        panes[0].content = panes[0].content + " Something interesting " + this.props.accordianName;
      }
      this.setState({panes: panes}, function() {
        this.refs.accordian.selectItem("somethingelse", 2);
      }.bind(this));
    }.bind(this), 10000);
  },
  onItemSelect: function(data) {
    console.log(data);
  },
  render: function() {
    return (
      React.createElement(Accordian, {ref: "accordian", onItemSelect: this.onItemSelect}, 
        this.state.panes.map(function(pane, i) {
          return (
            React.createElement(AccordianPane, {key: i, somethingelse: i, active: pane.active}, 
              React.createElement(AccordianTitle, null, pane.title), 
              React.createElement(AccordianContent, null, 
                pane.content
              )
            )
          )
        }.bind(this))
      )
    );
  }
});

var RenderTextArea = React.createClass({displayName: "RenderTextArea",
  getInitialState: function() {
    return {
      value: ''
    };
  },
  onChange: function(e) {
    this.setState({value: e.target.value});
  },
  render: function() {
    return (
      React.createElement(TextArea, {ref: "textarea", rows: 4, cols: 3, placeholder: "This is awesome man!", onChange: this.onChange}, 
        this.state.value
      )
    );
  }
});

var HelloMessage = React.createClass({displayName: "HelloMessage",
  getInitialState: function() {
    return {
      renderAccordian: 1,
      value: 70,
      value0: 0,
      gridClassName: ''
    };
  },
  componentDidMount: function() {
    // setTimeout(function() {
    //   console.log("done!");
    //   this.setState({renderAccordian: 0});
    // }.bind(this), 2500);

    // console.log(this.refs.progress.value);
    // setTimeout(function() {
    //   this.refs.progress.value = 80;
    //   console.log(this.refs.progress.value);
    // }.bind(this), 2500);

    setTimeout(function() {
      console.log('ok', this.refs);
      this.refs.menu1.selectItem('somethingelse', 'another-action');
    }.bind(this), 5000);

    // var interval = setInterval(function() {
    //   if(this.state.value0 === 100) return clearInterval(interval);
    //   this.setState({value0: this.state.value0 + 1});
    // }.bind(this), 100);

    setTimeout(function() {
      // this.setState({value: 10});
    }.bind(this), 1000);
  },
  handleClick: function(e) {
    alert("Hello world!");
  },
  getModal: function() {
    return (
      React.createElement(Modal, null, 
        React.createElement(ModalHeader, null, 
          React.createElement(Button, {onClick: ModalManager.remove, onTouchEnd: ModalManager.remove, close: true}), 
          React.createElement("h4", {className: "modal-title"}, "Modal title")
        ), 
        React.createElement(ModalBody, null, 
          React.createElement("p", null, "One fine body…"), 
          React.createElement(Form, null, 
            React.createElement(FormInput, {id: "inputSuccess1", label: "Input with success", hintType: "success", hintText: "Successful!", control: true}), 
            React.createElement(FormInput, {id: "inputWarning1", label: "Input with warning", hintType: "warning", hintText: "Warning!", control: true}), 
            React.createElement(FormInput, {id: "inputError1", label: "Input with error", hintType: "error", hintText: "Error!", control: true})
          )
        ), 
        React.createElement(ModalFooter, null, 
          React.createElement(Button, {outlined: true, bsStyle: "danger", onClick: ModalManager.remove, onTouchEnd: ModalManager.remove}, "Close"), 
          React.createElement(Button, {outlined: true, bsStyle: "primary", onClick: this.handleClick}, "Save changes")
        )
      )
    );
  },
  handleDismiss: function() {
    alert(this.refs.textarea.value);
  },
  handleSelection: function(p) {
    alert(JSON.stringify(p, null, 2));
  },
  handleShown: function() {
    console.log('shown');
  },
  onItemSelect: function(props) {
    console.log('item selected:', props)
  },
  render: function() {
    var modal = this.getModal();
    return (
      React.createElement(Container, {fixed: true, style: {marginBottom: 25}}, 
        React.createElement("hr", null), 
        React.createElement("h4", null, "Buttons"), 
        React.createElement("div", null, 
          React.createElement(Button, {componentClass: "a", href: "#"}, "Link"), 
          React.createElement(Button, null, "Button")
        ), 
        React.createElement("div", null, 
          React.createElement(Input, {ref: "input", type: "button", value: "Input Button"})
        ), 
        React.createElement("div", null, 
          (this.state.renderAccordian ?
            React.createElement(RenderAccordian, null)
            : null)
        ), 
        React.createElement("div", null, 
          React.createElement(Input, {type: "text", placeholder: "User Name", ref: "username"})
        ), 
        React.createElement("div", null, 
          React.createElement(RenderTextArea, null)
        ), 
        React.createElement("div", null, 
          React.createElement(Alert, {warning: true, dismissible: true, onDismiss: this.handleDismiss, className: "whatsup"}, 
            React.createElement("span", null, "Hello this is a general information: "), 
            React.createElement(AlertLink, {href: "http://www.google.com"}, 
              React.createElement("strong", null, "Google")
            )
          )
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "Breadcrumbs"), 
          React.createElement(Breadcrumb, null, 
            React.createElement(BLink, {href: "#"}, "Home ")
          ), 
          React.createElement(Breadcrumb, null, 
            React.createElement(BLink, {href: "#"}, "Home "), 
            React.createElement(BLink, {href: "#", active: true}, "Library ")
          ), 
          React.createElement(Breadcrumb, null, 
            React.createElement(BLink, {href: "#"}, "Home "), 
            React.createElement(BLink, {href: "#"}, "Library "), 
            React.createElement(BLink, {href: "#", active: true}, "Data")
          )
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "Caret"), 
          React.createElement(Caret, null), 
          React.createElement(HelpBlock, null, "some help text here.")
        ), 
        React.createElement("div", null, 
          React.createElement(Lead, null, "Some lead text here")
        ), 
        React.createElement(Jumbotron, null, 
          "Hello from Jumbotron"
        ), 
        React.createElement("div", null, 
          React.createElement(Tag, null, "Awesome Tag")
        ), 
        React.createElement("div", null, 
          React.createElement(Form, null, 
            React.createElement(FormInput, {id: "inputSuccess1", label: "Input with success", hintType: "success", hintText: "Successful!", control: true}), 
            React.createElement(FormInput, {id: "inputWarning1", label: "Input with warning", hintType: "warning", hintText: "Warning!", control: true}), 
            React.createElement(FormInput, {id: "inputError1", label: "Input with error", hintType: "error", hintText: "Error!", control: true})
          )
        ), 
        React.createElement("div", null, 
          React.createElement(Form, {horizontal: true}, 
            React.createElement(FormGroup, null, 
              React.createElement(Label, {control: true, sm: 3, htmlFor: "blockhelp"}, "Block help"), 
              React.createElement(Col, {sm: 9}, 
                React.createElement(Input, {type: "text", id: "blockhelp", placeholder: "Enter text"}), 
                React.createElement(HelpBlock, null, "A block of help text.")
              )
            ), 
            React.createElement(FormGroup, null, 
              React.createElement(Label, {control: true, sm: 3, htmlFor: "inlinehelp"}, "Inline help"), 
              React.createElement(Col, {sm: 9}, 
                React.createElement(Input, {type: "text", id: "inlinehelp", placeholder: "Enter text", className: "inline"}), 
                React.createElement(HelpBlock, {className: "inline"}, "Inline help.")
              )
            )
          )
        ), 
        React.createElement("div", null, 
          React.createElement(Img, {width: 300, height: 200, circle: true}), 
          React.createElement(Img, {width: 300, height: 200, rounded: true}), 
          React.createElement(Img, {width: 300, height: 200, thumbnail: true})
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "Badges"), 
          React.createElement(Badge, null, "Awesome Badge")
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "Labels"), 
          React.createElement(BLabel, null, "Awesome Label")
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "Pagination"), 
          React.createElement(Pagination, {style: {margin: 0}}, 
            React.createElement(Page, {previous: true, disabled: true}, "Previous"), 
            React.createElement(Page, {active: true, href: "#"}, 
              React.createElement("span", null, "1"), 
              React.createElement("span", {className: "sr-only"}, "(current)")
            ), 
            React.createElement(Page, {href: "#"}, "2"), 
            React.createElement(Page, {href: "#"}, "3"), 
            React.createElement(Page, {href: "#"}, "4"), 
            React.createElement(Page, {href: "#"}, "5"), 
            React.createElement(Page, {end: true})
          ), 
          React.createElement(Pager, null, 
            React.createElement(Page, {previous: true, disabled: true, href: "#"}, "Previous"), ' ', 
            React.createElement(Page, {next: true, href: "#"}, "Next")
          )
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "Tables"), 
          React.createElement(Table, {bordered: true, responsive: true}, 
            React.createElement("thead", null, 
              React.createElement("tr", null, 
                React.createElement("th", null, "#"), 
                React.createElement("th", null, "Table heading"), 
                React.createElement("th", null, "Table heading"), 
                React.createElement("th", null, "Table heading"), 
                React.createElement("th", null, "Table heading"), 
                React.createElement("th", null, "Table heading"), 
                React.createElement("th", null, "Table heading")
              )
            ), 
            React.createElement("tbody", null, 
              React.createElement("tr", null, 
                React.createElement("td", null, "1"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell")
              ), 
              React.createElement("tr", null, 
                React.createElement("td", null, "2"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell")
              ), 
              React.createElement("tr", null, 
                React.createElement("td", null, "3"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell"), 
                React.createElement("td", null, "Table cell")
              )
            )
          )
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "Progress Bars"), 
          React.createElement(Progress, {ref: "progress", success: true, value: this.state.value0, min: 0, max: 100}), 
          React.createElement(Progress, {info: true, value: this.state.value, min: 0, max: 100}), 
          React.createElement(Progress, {warning: true, value: 60, min: 0, max: 100}), 
          React.createElement(Progress, {danger: true, collapseBottom: true, value: 80, min: 0, max: 100}), 
          React.createElement(Progress, {collapseBottom: true, danger: true, fgColor: "white", withLabel: "OK", value: 40, min: 0, max: 100, className: "progress-avatar"})
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "Progress Groups"), 
          React.createElement(ProgressGroup, {collapseBottom: true}, 
            React.createElement(Progress, {active: true, striped: true, info: true, withLabel: true, value: 35, min: 0, max: 100}), 
            React.createElement(Progress, {active: true, striped: true, danger: true, withLabel: true, value: 20, min: 0, max: 100}), 
            React.createElement(Progress, {active: true, striped: true, warning: true, withLabel: true, value: 20, min: 0, max: 100}), 
            React.createElement(Progress, {active: true, striped: true, success: true, withLabel: true, value: 10, min: 0, max: 100})
          )
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "Select"), 
          React.createElement(Select, {id: "dropdownselect", defaultValue: "1"}, 
            React.createElement("option", {value: "1"}, "Option 1"), 
            React.createElement("option", {value: "2"}, "Option 2"), 
            React.createElement("option", {value: "3"}, "Option 3"), 
            React.createElement("option", {value: "4"}, "Option 4"), 
            React.createElement("option", {value: "5"}, "Option 5")
          )
        ), 
        React.createElement("div", null, 
          React.createElement(MediaBody, null, 
            React.createElement(MediaHeading, null, "Media Heading"), 
            React.createElement("p", null, "Hello how do you do?"), 
            React.createElement(MediaDiv, null, 
              React.createElement("a", {className: "pull-left", href: "#"}, 
                React.createElement(MediaObject, {"data-src": "holder.js/64x64/random", alt: "64x64"})
              ), 
              React.createElement(MediaBody, null, 
                React.createElement(MediaHeading, null, "Nested Media Heading"), 
                React.createElement("p", null, "Hello how do you do?"), 
                React.createElement(MediaDiv, null, 
                  React.createElement("a", {className: "pull-left", href: "#"}, 
                    React.createElement(MediaObject, {"data-src": "holder.js/64x64/random", alt: "64x64"})
                  ), 
                  React.createElement(MediaBody, null, 
                    React.createElement(MediaHeading, null, "Nested Media Heading"), 
                    React.createElement("p", null, "Hello how do you do?")
                  )
                )
              ), 
              React.createElement(MediaDiv, null, 
                React.createElement("a", {className: "pull-left", href: "#"}, 
                  React.createElement(MediaObject, {"data-src": "holder.js/64x64/random", alt: "64x64"})
                ), 
                React.createElement(MediaBody, null, 
                  React.createElement(MediaHeading, null, "Nested Media Heading"), 
                  React.createElement("p", null, "Hello how do you do?")
                )
              )
            )
          )
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "Navbars"), 
          React.createElement(NavBar, null, 
            React.createElement(Container, {fluid: true}, 
              React.createElement(NavHeader, null, 
                React.createElement(NavToggle, {target: "navcontainer1"}, "Toggle navigation"), 
                React.createElement(NavBrand, null, "Brand")
              ), 
              React.createElement(NavContent, {id: "navcontainer1", collapse: true}, 
                React.createElement(Nav, {onItemSelect: this.onItemSelect}, 
                  React.createElement(NavItem, {active: true, href: "#"}, "Link 1"), 
                  React.createElement(NavItem, {href: "#"}, "Link 2"), 
                  React.createElement(NavItem, {dropdown: true}, 
                    React.createElement(DropdownButton, {nav: true}, 
                      React.createElement("span", null, "Dropdown "), React.createElement(Caret, null)
                    ), 
                    React.createElement(Menu, null, 
                      React.createElement(MenuItem, {href: "#"}, "Action"), 
                      React.createElement(MenuItem, {href: "#"}, "Another Action"), 
                      React.createElement(MenuItem, {href: "#"}, "Something else here"), 
                      React.createElement(MenuItem, {divider: true}), 
                      React.createElement(MenuItem, {href: "#"}, "Separated link")
                    )
                  )
                ), 
                React.createElement(Nav, {right: true}, 
                  React.createElement(NavItem, {href: "#"}, "Link 3"), 
                  React.createElement(NavItem, {dropdown: true, toggleOnHover: true}, 
                    React.createElement(DropdownButton, {nav: true}, 
                      React.createElement("span", null, "Dropdownz "), React.createElement(Caret, null)
                    ), 
                    React.createElement(Menu, null, 
                      React.createElement(MenuItem, {href: "#"}, "Action"), 
                      React.createElement(MenuItem, {href: "#"}, "Another Action"), 
                      React.createElement(MenuItem, {href: "#"}, "Something else here"), 
                      React.createElement(MenuItem, {divider: true}), 
                      React.createElement(MenuItem, {href: "#"}, "Separated link")
                    )
                  )
                )
              )
            )
          )
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "Panels"), 
          React.createElement(PanelContainer, null, 
            React.createElement(Panel, null, 
              React.createElement(PanelBody, {style: {padding: 0}}, 
                React.createElement(Grid, null, 
                  React.createElement(Row, {className: this.state.gridClassName}, 
                    React.createElement(Col, {xs: 12}, 
                      React.createElement("h3", null, "Basic Panel"), 
                      React.createElement("p", null, 
                        "Panels are awesome!"
                      )
                    )
                  )
                )
              )
            )
          )
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "Modals"), 
          React.createElement(Button, {outlined: true, bsStyle: "primary", onClick: ModalManager.create.bind(this, modal), onTouchEnd: ModalManager.create.bind(this, modal)}, "Launch basic demo")
        ), 
        React.createElement("div", null, 
          React.createElement(PanelContainer, {controlStyles: "bg-lightgreen fg-white"}, 
            React.createElement(PanelHeader, {className: "bg-lightgreen fg-white"}, 
              React.createElement(Grid, null, 
                React.createElement(Row, null, 
                  React.createElement(Col, {xs: 12}, 
                    React.createElement("h3", null, "Tabs: Basic")
                  )
                )
              )
            ), 
            React.createElement(PanelBody, null, 
              React.createElement(TabList, {bsStyle: "green", tabContainerID: "tab1"}, 
                React.createElement(Tab, {active: true}, "Home"), 
                React.createElement(Tab, null, "Profile"), 
                React.createElement(TabDropdown, {title: "Dropdown", "menu-props": {bsStyle: 'green'}}, 
                  React.createElement(Tab, null, "@fat"), 
                  React.createElement(Tab, null, "@mdo")
                )
              ), 
              React.createElement(Grid, null, 
                React.createElement(Row, null, 
                  React.createElement(TabContent, {tabContainerID: "tab1"}, 
                    React.createElement(TabPane, null, 
                      React.createElement(RenderAccordian, {accordianName: "Home"})
                    ), 
                    React.createElement(TabPane, null, 
                      React.createElement(RenderAccordian, {accordianName: "Profile"})
                    ), 
                    React.createElement(TabPane, null, 
                      React.createElement(RenderAccordian, {accordianName: "@fat"})
                    ), 
                    React.createElement(TabPane, null, 
                      React.createElement(RenderAccordian, {accordianName: "@mdo"})
                    )
                  )
                )
              )
            )
          )
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "Menus"), 
          React.createElement(Dropdown, {ref: "menu1", style: {display: 'inline-block'}, toggleOnHover: true}, 
            React.createElement(DropdownButton, {bsStyle: "blue"}, 
              React.createElement("span", null, "Basic "), React.createElement(Caret, null)
            ), 
            React.createElement(Menu, {bsStyle: "blue", 
                  alwaysInactive: true, 
                  onItemSelect: this.handleSelection, 
                  onShown: this.handleShown}, 
              React.createElement(MenuItem, {href: "#", noHover: true}, 
                React.createElement(Input, {type: "text", placeholder: "Some Text"})
              ), 
              React.createElement(MenuItem, {href: "#", noHover: true}, 
                React.createElement(Select, null, 
                  React.createElement("option", {value: "opt1"}, "Value 1"), 
                  React.createElement("option", {value: "opt2"}, "Value 2")
                )
              ), 
              React.createElement(MenuItem, {href: "#"}, "Another action"), 
              React.createElement(MenuItem, {href: "#"}, "Something else here"), 
              React.createElement(MenuItem, {divider: true}), 
              React.createElement(MenuItem, {href: "#", somethingelse: "another-action"}, "Separated link")
            )
          ), 
          React.createElement(Dropdown, {style: {display: 'inline-block'}}, 
            React.createElement(DropdownButton, {bsStyle: "blue"}, 
              React.createElement("span", null, "Basic "), React.createElement(Caret, null)
            ), 
            React.createElement(Menu, {bsStyle: "blue", 
                  alwaysInactive: true, 
                  onItemSelect: this.handleSelection}, 
              React.createElement(MenuItem, {href: "#", noHover: true}, 
                React.createElement(Input, {type: "text", placeholder: "Some Text"})
              ), 
              React.createElement(MenuItem, {href: "#", noHover: true}, 
                React.createElement(Select, null, 
                  React.createElement("option", {value: "opt1"}, "Value 1"), 
                  React.createElement("option", {value: "opt2"}, "Value 2")
                )
              ), 
              React.createElement(MenuItem, {href: "#"}, "Another action"), 
              React.createElement(MenuItem, {href: "#"}, "Something else here"), 
              React.createElement(MenuItem, {divider: true}), 
              React.createElement(MenuItem, {href: "#", somethingelse: "another-action"}, "Separated link")
            )
          )
        ), 
        React.createElement("div", null, 
          React.createElement("h4", null, "List Groups"), 
          React.createElement(ListGroup, null, 
            React.createElement(ListGroupItem, null, "List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content."), 
            React.createElement(ListGroupItem, null, "List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content."), 
            React.createElement(ListGroupItem, null, "List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content."), 
            React.createElement(ListGroupItem, null, "List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content."), 
            React.createElement(ListGroupItem, null, "List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.")
          )
        )
      )
    );
  }
});

var Body = React.createClass({displayName: "Body",
  render: function() {
    return (
      React.createElement("div", {className: "app-container"}, 
        React.createElement("div", {id: "container"}, 
          React.createElement("div", {id: "body"}, 
            React.createElement(HelloMessage, null)
          )
        )
      )
    );
  }
});

React.render(React.createElement(Body, null), document.body);
