var Homepage = rubix_bootstrap.core.reactified_homepage;
var Row = require('../bootstrap/row');
var Col = require('../bootstrap/col');
var Tag = require('../bootstrap/tag');
var Grid = require('../bootstrap/grid');
var Container = require('../bootstrap/container');
var Static = require('../bootstrap/static');
var Lead = require('../bootstrap/lead');
var Img = require('../bootstrap/img');
var Label = require('../bootstrap/label');
var HelpBlock = require('../bootstrap/helpblock');
var Jumbotron = require('../bootstrap/jumbotron');
var Alert = require('../bootstrap/alert').Alert;
var AlertLink = require('../bootstrap/alert').AlertLink;
var Input = require('../bootstrap/input');
var InputGroup = require('../bootstrap/inputgroup').InputGroup;
var InputGroupAddon = require('../bootstrap/inputgroup').InputGroupAddon;
var InputGroupButton = require('../bootstrap/inputgroup').InputGroupButton;
var TextArea = require('../bootstrap/textarea');
var Caret = require('../bootstrap/caret');
var Button = require('../bootstrap/button');
var Form = require('../bootstrap/form');
var FormInput = require('../bootstrap/forminput');
var FormGroup = require('../bootstrap/formgroup');
var ButtonGroup = require('../bootstrap/buttongroup');
var Accordian = require('../bootstrap/accordian').Accordian;
var AccordianPane = require('../bootstrap/accordian').AccordianPane;
var AccordianTitle = require('../bootstrap/accordian').AccordianTitle;
var AccordianContent = require('../bootstrap/accordian').AccordianContent;
var BLink = require('../bootstrap/breadcrumb').BLink;
var Badge = require('../bootstrap/labelsandbadges').Badge;
var BLabel = require('../bootstrap/labelsandbadges').BLabel;
var Breadcrumb = require('../bootstrap/breadcrumb').Breadcrumb;
var Page = require('../bootstrap/pagination').Page;
var Pager = require('../bootstrap/pagination').Pager;
var Pagination = require('../bootstrap/pagination').Pagination;
var Table = require('../bootstrap/table');
var Progress = require('../bootstrap/progress').Progress;
var ProgressGroup = require('../bootstrap/progress').ProgressGroup;
var Select = require('../bootstrap/select');
var Media = require('../bootstrap/media').Media;
var MediaDiv = require('../bootstrap/media').MediaDiv;
var MediaBody = require('../bootstrap/media').MediaBody;
var MediaList = require('../bootstrap/media').MediaList;
var MediaObject = require('../bootstrap/media').MediaObject;
var MediaHeading = require('../bootstrap/media').MediaHeading;
var ListGroup = require('../bootstrap/listgroup').ListGroup;
var ListGroupItem = require('../bootstrap/listgroup').ListGroupItem;
var ListGroupItemText = require('../bootstrap/listgroup').ListGroupItemText;
var ListGroupItemHeading = require('../bootstrap/listgroup').ListGroupItemHeading;
var Panel = require('../bootstrap/panel').Panel;
var PanelBody = require('../bootstrap/panel').PanelBody;
var PanelLeft = require('../bootstrap/panel').PanelLeft;
var PanelRight = require('../bootstrap/panel').PanelRight;
var PanelHeader = require('../bootstrap/panel').PanelHeader;
var PanelFooter = require('../bootstrap/panel').PanelFooter;
var PanelContainer = require('../bootstrap/panel').PanelContainer;
var Radio = require('../bootstrap/checkboxradio').Radio;
var Checkbox = require('../bootstrap/checkboxradio').Checkbox;
var Menu = require('../bootstrap/menu').Menu;
var MenuItem = require('../bootstrap/menu').MenuItem;
var Dropdown = require('../bootstrap/menu').Dropdown;
var DropdownButton = require('../bootstrap/menu').DropdownButton;
var Modal = require('../bootstrap/modal').Modal;
var ModalBody = require('../bootstrap/modal').ModalBody;
var ModalHeader = require('../bootstrap/modal').ModalHeader;
var ModalFooter = require('../bootstrap/modal').ModalFooter;
var ModalManager = require('../bootstrap/modal').ModalManager;
var Nav = require('../bootstrap/nav').Nav;
var NavBar = require('../bootstrap/nav').NavBar;
var NavItem = require('../bootstrap/nav').NavItem;
var NavText = require('../bootstrap/nav').NavText;
var NavLink = require('../bootstrap/nav').NavLink;
var NavForm = require('../bootstrap/nav').NavForm;
var NavBrand = require('../bootstrap/nav').NavBrand;
var NavHeader = require('../bootstrap/nav').NavHeader;
var NavButton = require('../bootstrap/nav').NavButton;
var NavContent = require('../bootstrap/nav').NavContent;
var NavToggle = require('../bootstrap/nav').NavToggle;
var Tab = require('../bootstrap/tab').Tab;
var TabList = require('../bootstrap/tab').TabList;
var TabPane = require('../bootstrap/tab').TabPane;
var TabContent = require('../bootstrap/tab').TabContent;
var TabDropdown = require('../bootstrap/tab').TabDropdown;
var TabContainer = require('../bootstrap/tab').TabContainer;

var TestRow = React.createClass({
  getInitialState: function() {
    return {
      value: 'Row'
    };
  },
  componentDidMount: function() {
    console.timeEnd('render');

    setInterval(function() {
      this.setState({value: ('Row-' + Math.random())}, function() {
        console.timeEnd('render');
      });
    }.bind(this), 100);
  },
  render: function() {
    console.time('render');

    var rows = <Row className='test-class'>{this.state.value}</Row>;

    for(var i=0; i < 10; i++) {
      rows = <Row className='test-class'>{rows}</Row>;
    }

    return (
      <div>
        {rows}
      </div>
    );
  }
});

var PerfTestContainer = React.createClass({
  render: function() {
    return (
      <div>
        <TestRow/>
        <TestRow/>
        <TestRow/>
        <TestRow/>
        <TestRow/>
        <TestRow/>
        <TestRow/>
        <TestRow/>
        <TestRow/>
      </div>
    );
  }
});

var Body = React.createClass({
  render: function() {
    return (
      <div className='app-container'>
        <div id='container'>
          <div id='body'>
            <PerfTestContainer />
          </div>
        </div>
      </div>
    );
  }
});

React.render(<Body />, document.body);
