var util = {};
module.exports = util;

util.getBaseUrl = function (browser) {
  var currentUrl = browser.getUrl().split('/');
  return currentUrl[0]+"//"+currentUrl[2];
}