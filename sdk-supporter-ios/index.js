
function showToast() {
    //console.log('showToast called 2: ' + JSON.stringify(LibDevModel.new()));
    var aaa = LibDevModel.new()
    aaa.devSn = "4112659607";
    aaa.devMac = "3F:49:F5:22:34:97";
    aaa.eKey = "12b83d023d0fce30fdb8d9e69ba7051d934664737829486451453200000001232000";
    console.log('showToast called 2');
    let ret = LibDevModel.openDoor(aaa);
    console.log('ret: ' + ret);
}

exports.showToast = showToast