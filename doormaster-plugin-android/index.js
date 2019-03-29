var application = require("application");

function unlockDoor(context, devSn, devMac, eKey) {
    var provider = new com.nativescript.duynguyen.toaster.Toaster();
    var result = provider.show(context, devSn, devMac, eKey);
    return result
}

exports.unlockDoor = unlockDoor