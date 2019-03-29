function unlockDoor(devSn, devMac, eKey) {
    var aaa = LibDevModel.new()
    aaa.devSn = devSn;
    aaa.devMac = devMac;
    aaa.eKey = eKey;
    let ret = LibDevModel.openDoor(aaa);
    return ret
}

exports.unlockDoor = unlockDoor