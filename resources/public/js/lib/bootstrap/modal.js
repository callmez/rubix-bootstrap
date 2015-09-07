var ModalManager = {
  container: function() {
    return document.getElementById('modal-container');
  },
  create_container: function() {
    var fragment = goog.dom.htmlToDocumentFragment("<div id='modal-container'></div>");
    goog.dom.append(document.body, fragment);
  },
  destroy_container: function() {
    goog.dom.removeNode(ModalManager.container());
  },
  create: function(modal) {
    ModalManager.create_container();
    React.render(modal, ModalManager.container(), function() {
      rubix_bootstrap.core.open_modal();
      var html = document.getElementsByTagName('html')[0];
      var body = document.body;
      goog.style.setStyle(html, 'overflow', 'hidden');
      goog.style.setStyle(body, 'overflow', 'hidden');
    });
  },
  remove: function() {
    try {
      if(React.unmountComponentAtNode(ModalManager.container())) {
        rubix_bootstrap.core.close_modal();
        ModalManager.destroy_container();
        var html = document.getElementsByTagName('html')[0];
        var body = document.body;
        goog.style.setStyle(html, 'overflow', '');
        goog.style.setStyle(body, 'overflow', '');
      }
    } catch(e) {
      // do nothing
    }
  }
};

rubix_bootstrap.core.set_modal_manager(ModalManager);

module.exports = {
  Modal: rubix_bootstrap.core.reactified_modal,
  ModalBody: rubix_bootstrap.core.reactified_modal_body,
  ModalHeader: rubix_bootstrap.core.reactified_modal_header,
  ModalFooter: rubix_bootstrap.core.reactified_modal_footer,
  ModalManager: ModalManager
};
