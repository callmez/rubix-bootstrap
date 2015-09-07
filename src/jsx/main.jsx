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

var RenderAccordian = React.createClass({
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
      <Accordian ref='accordian' onItemSelect={this.onItemSelect}>
        {this.state.panes.map(function(pane, i) {
          return (
            <AccordianPane key={i} somethingelse={i} active={pane.active}>
              <AccordianTitle>{pane.title}</AccordianTitle>
              <AccordianContent>
                {pane.content}
              </AccordianContent>
            </AccordianPane>
          )
        }.bind(this))}
      </Accordian>
    );
  }
});

var RenderTextArea = React.createClass({
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
      <TextArea ref='textarea' rows={4} cols={3} placeholder='This is awesome man!' onChange={this.onChange}>
        {this.state.value}
      </TextArea>
    );
  }
});

var HelloMessage = React.createClass({
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
      <Modal>
        <ModalHeader>
          <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
          <h4 className='modal-title'>Modal title</h4>
        </ModalHeader>
        <ModalBody>
          <p>One fine body&hellip;</p>
          <Form>
            <FormInput id='inputSuccess1' label='Input with success' hintType='success' hintText='Successful!' control/>
            <FormInput id='inputWarning1' label='Input with warning' hintType='warning' hintText='Warning!' control />
            <FormInput id='inputError1' label='Input with error' hintType='error' hintText='Error!' control />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
          <Button outlined bsStyle='primary' onClick={this.handleClick}>Save changes</Button>
        </ModalFooter>
      </Modal>
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
      <Container fixed style={{marginBottom: 25}}>
        <hr/>
        <h4>Buttons</h4>
        <div>
          <Button componentClass="a" href='#'>Link</Button>
          <Button>Button</Button>
        </div>
        <div>
          <Input ref='input' type='button' value='Input Button' />
        </div>
        <div>
          {(this.state.renderAccordian ?
            <RenderAccordian />
            : null)}
        </div>
        <div>
          <Input type='text' placeholder='User Name' ref='username' />
        </div>
        <div>
          <RenderTextArea />
        </div>
        <div>
          <Alert warning dismissible onDismiss={this.handleDismiss} className="whatsup">
            <span>Hello this is a general information: </span>
            <AlertLink href="http://www.google.com">
              <strong>Google</strong>
            </AlertLink>
          </Alert>
        </div>
        <div>
          <h4>Breadcrumbs</h4>
          <Breadcrumb>
            <BLink href='#'>Home </BLink>
          </Breadcrumb>
          <Breadcrumb>
            <BLink href='#'>Home </BLink>
            <BLink href='#' active>Library </BLink>
          </Breadcrumb>
          <Breadcrumb>
            <BLink href='#'>Home </BLink>
            <BLink href='#'>Library </BLink>
            <BLink href='#' active>Data</BLink>
          </Breadcrumb>
        </div>
        <div>
          <h4>Caret</h4>
          <Caret />
          <HelpBlock>some help text here.</HelpBlock>
        </div>
        <div>
          <Lead>Some lead text here</Lead>
        </div>
        <Jumbotron>
          Hello from Jumbotron
        </Jumbotron>
        <div>
          <Tag>Awesome Tag</Tag>
        </div>
        <div>
          <Form>
            <FormInput id='inputSuccess1' label='Input with success' hintType='success' hintText='Successful!' control/>
            <FormInput id='inputWarning1' label='Input with warning' hintType='warning' hintText='Warning!' control />
            <FormInput id='inputError1' label='Input with error' hintType='error' hintText='Error!' control />
          </Form>
        </div>
        <div>
          <Form horizontal>
            <FormGroup>
              <Label control sm={3} htmlFor='blockhelp'>Block help</Label>
              <Col sm={9}>
                <Input type='text' id='blockhelp' placeholder='Enter text' />
                <HelpBlock>A block of help text.</HelpBlock>
              </Col>
            </FormGroup>
            <FormGroup>
              <Label control sm={3} htmlFor='inlinehelp'>Inline help</Label>
              <Col sm={9}>
                <Input type='text' id='inlinehelp' placeholder='Enter text' className='inline' />
                <HelpBlock className='inline'>Inline help.</HelpBlock>
              </Col>
            </FormGroup>
          </Form>
        </div>
        <div>
          <Img width={300} height={200} circle />
          <Img width={300} height={200} rounded />
          <Img width={300} height={200} thumbnail />
        </div>
        <div>
          <h4>Badges</h4>
          <Badge>Awesome Badge</Badge>
        </div>
        <div>
          <h4>Labels</h4>
          <BLabel>Awesome Label</BLabel>
        </div>
        <div>
          <h4>Pagination</h4>
          <Pagination style={{margin: 0}}>
            <Page previous disabled>Previous</Page>
            <Page active href='#'>
              <span>1</span>
              <span className='sr-only'>(current)</span>
            </Page>
            <Page href='#'>2</Page>
            <Page href='#'>3</Page>
            <Page href='#'>4</Page>
            <Page href='#'>5</Page>
            <Page end />
          </Pagination>
          <Pager>
            <Page previous disabled href='#'>Previous</Page>{' '}
            <Page next href='#'>Next</Page>
          </Pager>
        </div>
        <div>
          <h4>Tables</h4>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <h4>Progress Bars</h4>
          <Progress ref='progress' success value={this.state.value0} min={0} max={100} />
          <Progress info value={this.state.value} min={0} max={100} />
          <Progress warning value={60} min={0} max={100} />
          <Progress danger collapseBottom value={80} min={0} max={100} />
          <Progress collapseBottom danger fgColor='white' withLabel="OK" value={40} min={0} max={100} className='progress-avatar' />
        </div>
        <div>
          <h4>Progress Groups</h4>
          <ProgressGroup collapseBottom>
            <Progress active striped info withLabel value={35} min={0} max={100} />
            <Progress active striped danger withLabel value={20} min={0} max={100} />
            <Progress active striped warning withLabel value={20} min={0} max={100} />
            <Progress active striped success withLabel value={10} min={0} max={100} />
          </ProgressGroup>
        </div>
        <div>
          <h4>Select</h4>
          <Select id='dropdownselect' defaultValue='1'>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
            <option value='4'>Option 4</option>
            <option value='5'>Option 5</option>
          </Select>
        </div>
        <div>
          <MediaBody>
            <MediaHeading>Media Heading</MediaHeading>
            <p>Hello how do you do?</p>
            <MediaDiv>
              <a className='pull-left' href='#'>
                <MediaObject data-src='holder.js/64x64/random' alt='64x64' />
              </a>
              <MediaBody>
                <MediaHeading>Nested Media Heading</MediaHeading>
                <p>Hello how do you do?</p>
                <MediaDiv>
                  <a className='pull-left' href='#'>
                    <MediaObject data-src='holder.js/64x64/random' alt='64x64' />
                  </a>
                  <MediaBody>
                    <MediaHeading>Nested Media Heading</MediaHeading>
                    <p>Hello how do you do?</p>
                  </MediaBody>
                </MediaDiv>
              </MediaBody>
              <MediaDiv>
                <a className='pull-left' href='#'>
                  <MediaObject data-src='holder.js/64x64/random' alt='64x64' />
                </a>
                <MediaBody>
                  <MediaHeading>Nested Media Heading</MediaHeading>
                  <p>Hello how do you do?</p>
                </MediaBody>
              </MediaDiv>
            </MediaDiv>
          </MediaBody>
        </div>
        <div>
          <h4>Navbars</h4>
          <NavBar>
            <Container fluid>
              <NavHeader>
                <NavToggle target='navcontainer1'>Toggle navigation</NavToggle>
                <NavBrand>Brand</NavBrand>
              </NavHeader>
              <NavContent id='navcontainer1' collapse>
                <Nav onItemSelect={this.onItemSelect}>
                  <NavItem active href='#'>Link 1</NavItem>
                  <NavItem href='#'>Link 2</NavItem>
                  <NavItem dropdown>
                    <DropdownButton nav>
                      <span>Dropdown </span><Caret/>
                    </DropdownButton>
                    <Menu>
                      <MenuItem href='#'>Action</MenuItem>
                      <MenuItem href='#'>Another Action</MenuItem>
                      <MenuItem href='#'>Something else here</MenuItem>
                      <MenuItem divider></MenuItem>
                      <MenuItem href='#'>Separated link</MenuItem>
                    </Menu>
                  </NavItem>
                </Nav>
                <Nav right>
                  <NavItem href='#'>Link 3</NavItem>
                  <NavItem dropdown toggleOnHover>
                    <DropdownButton nav>
                      <span>Dropdownz </span><Caret/>
                    </DropdownButton>
                    <Menu>
                      <MenuItem href='#'>Action</MenuItem>
                      <MenuItem href='#'>Another Action</MenuItem>
                      <MenuItem href='#'>Something else here</MenuItem>
                      <MenuItem divider></MenuItem>
                      <MenuItem href='#'>Separated link</MenuItem>
                    </Menu>
                  </NavItem>
                </Nav>
              </NavContent>
            </Container>
          </NavBar>
        </div>
        <div>
          <h4>Panels</h4>
          <PanelContainer>
            <Panel>
              <PanelBody style={{padding: 0}}>
                <Grid>
                  <Row className={this.state.gridClassName}>
                    <Col xs={12}>
                      <h3>Basic Panel</h3>
                      <p>
                        Panels are awesome!
                      </p>
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </div>
        <div>
          <h4>Modals</h4>
          <Button outlined bsStyle='primary' onClick={ModalManager.create.bind(this, modal)} onTouchEnd={ModalManager.create.bind(this, modal)}>Launch basic demo</Button>
        </div>
        <div>
          <PanelContainer controlStyles='bg-lightgreen fg-white'>
            <PanelHeader className='bg-lightgreen fg-white'>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <h3>Tabs: Basic</h3>
                  </Col>
                </Row>
              </Grid>
            </PanelHeader>
            <PanelBody>
              <TabList bsStyle='green' tabContainerID="tab1">
                <Tab active>Home</Tab>
                <Tab>Profile</Tab>
                <TabDropdown title='Dropdown' menu-props={{bsStyle: 'green'}}>
                  <Tab>@fat</Tab>
                  <Tab>@mdo</Tab>
                </TabDropdown>
              </TabList>
              <Grid>
                <Row>
                  <TabContent tabContainerID="tab1">
                    <TabPane>
                      <RenderAccordian accordianName='Home' />
                    </TabPane>
                    <TabPane>
                      <RenderAccordian accordianName='Profile' />
                    </TabPane>
                    <TabPane>
                      <RenderAccordian accordianName='@fat' />
                    </TabPane>
                    <TabPane>
                      <RenderAccordian accordianName='@mdo' />
                    </TabPane>
                  </TabContent>
                </Row>
              </Grid>
            </PanelBody>
          </PanelContainer>
        </div>
        <div>
          <h4>Menus</h4>
          <Dropdown ref='menu1' style={{display: 'inline-block'}} toggleOnHover>
            <DropdownButton bsStyle='blue'>
              <span>Basic </span><Caret/>
            </DropdownButton>
            <Menu bsStyle='blue'
                  alwaysInactive={true}
                  onItemSelect={this.handleSelection}
                  onShown={this.handleShown}>
              <MenuItem href='#' noHover>
                <Input type='text' placeholder='Some Text' />
              </MenuItem>
              <MenuItem href='#' noHover>
                <Select>
                  <option value="opt1">Value 1</option>
                  <option value="opt2">Value 2</option>
                </Select>
              </MenuItem>
              <MenuItem href='#'>Another action</MenuItem>
              <MenuItem href='#'>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem href='#' somethingelse='another-action'>Separated link</MenuItem>
            </Menu>
          </Dropdown>
          <Dropdown style={{display: 'inline-block'}}>
            <DropdownButton bsStyle='blue'>
              <span>Basic </span><Caret/>
            </DropdownButton>
            <Menu bsStyle='blue'
                  alwaysInactive={true}
                  onItemSelect={this.handleSelection}>
              <MenuItem href='#' noHover>
                <Input type='text' placeholder='Some Text' />
              </MenuItem>
              <MenuItem href='#' noHover>
                <Select>
                  <option value="opt1">Value 1</option>
                  <option value="opt2">Value 2</option>
                </Select>
              </MenuItem>
              <MenuItem href='#'>Another action</MenuItem>
              <MenuItem href='#'>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem href='#' somethingelse='another-action'>Separated link</MenuItem>
            </Menu>
          </Dropdown>
        </div>
        <div>
          <h4>List Groups</h4>
          <ListGroup>
            <ListGroupItem>List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.</ListGroupItem>
            <ListGroupItem>List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.</ListGroupItem>
            <ListGroupItem>List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.</ListGroupItem>
            <ListGroupItem>List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.</ListGroupItem>
            <ListGroupItem>List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.</ListGroupItem>
          </ListGroup>
        </div>
      </Container>
    );
  }
});

var Body = React.createClass({
  render: function() {
    return (
      <div className='app-container'>
        <div id='container'>
          <div id='body'>
            <HelloMessage />
          </div>
        </div>
      </div>
    );
  }
});

React.render(<Body />, document.body);
