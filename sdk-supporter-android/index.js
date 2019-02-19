var application = require("application");
var context = application.android.context;

function showToast() {
    console.log('showToast 1' + JSON.stringify(com.nativescript.duynguyen.doormasterprovider));
    var provider = new com.nativescript.duynguyen.toaster.Toaster();
    console.log('showToast 2');
    provider.show(context);
}

exports.showToast = showToast