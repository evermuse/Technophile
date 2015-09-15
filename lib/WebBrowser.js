function WebBrowser() {

}

WebBrowser.prototype.open = function(url) {

  return 'Browsing to ' + this.url;

};

module.exports = WebBrowser;