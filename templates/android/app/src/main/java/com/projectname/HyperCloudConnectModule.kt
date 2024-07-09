package com.projectname

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.hypercloud.connect.HyperCloudConnect
import android.content.Intent
import android.util.Log


class HyperCloudConnectModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val reactContext: ReactApplicationContext = reactApplicationContext
    private val hyperCloudEventModule = HyperCloudEventModule(reactContext)  // Instance of HyperCloudEventModule

    override fun getName(): String {
        return "HyperCloudConnect"
    }

    @ReactMethod
    fun initializeHyperView() {
        HyperCloudConnect.initialize(reactContext) {
            val currentTime = hyperCloudEventModule.getCurrentFormattedTime()
            hyperCloudEventModule.sendEvent(reactContext, "onEventReminder", Arguments.createMap().apply {
                putString("result", it)
                putString("time", currentTime)
            })
        }
    }

    @ReactMethod
    fun openARView(id: Int) {
        HyperCloudConnect.openUnityActivity(reactContext, id)
    }

    companion object {
        var initCallbackResult = ""
    }
}

