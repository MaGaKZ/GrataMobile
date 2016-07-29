var createViewModel = require("./main-view-model").createViewModel;
var utilityModule = require("utils/utils");
require( "nativescript-master-technology" );
var webViewModule = require("ui/web-view");
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
    var web = page.getViewById("webView");
    web.url = "http://goo.gl/Gw2mLb";
}
exports.onNavigatingTo = onNavigatingTo;

exports.launch = function () {
   // utilityModule.openUrl("https://g-plus.j.layershift.co.uk/router/login/login.jsp");
     //process.exit();

}