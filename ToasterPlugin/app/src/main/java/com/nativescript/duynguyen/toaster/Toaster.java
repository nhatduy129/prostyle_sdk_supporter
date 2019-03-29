package com.nativescript.duynguyen.toaster;
import android.os.Bundle;
import android.content.Context;
import android.widget.Toast;
import com.intelligoo.sdk.LibDevModel;
import com.intelligoo.sdk.LibInterface.ManagerCallback;

public class Toaster {
    public int show(Context context, String devSn, String devMac, String eKey) {

        final ManagerCallback callback = new ManagerCallback()
        {
            @Override
            public void setResult(final int result, Bundle bundle)
            {
                //call back when the door has been unlocked
            }
        };
        LibDevModel aaa = new LibDevModel();
        aaa.devSn = devSn;
        aaa.devMac = devMac;
        aaa.eKey = eKey;
        int ret = LibDevModel.openDoor(context, aaa, callback);
        return ret;
    }
}