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
import android.os.Handler
import android.os.Looper
import androidx.fragment.app.FragmentActivity


class HyperCloudConnectModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val reactContext: ReactApplicationContext = reactApplicationContext
    private val hyperCloudEventModule = HyperCloudEventModule(reactContext)  // Instance of HyperCloudEventModule

    init {
        Handler(Looper.getMainLooper()).post {
            initializeHyperView()
        }
    }

    override fun getName(): String {
        return "HyperCloudConnect"
    }

    // @ReactMethod
    fun initializeHyperView() {
        if (Looper.myLooper() != Looper.getMainLooper()) {
            Handler(Looper.getMainLooper()).post {
                HyperCloudConnect.initialize(reactContext)
            }
        } else {
            HyperCloudConnect.initialize(reactContext)
        }
        //        HyperCloudConnect.initialize(reactContext)
        //        HyperCloudConnect.recvMessage { message ->
        //            Log.d("HyperCloudConnectModule", "recvMessage: $message")
        //            val currentTime = hyperCloudEventModule.getCurrentFormattedTime()
        //            hyperCloudEventModule.sendEvent(reactContext, "onEventReminder", Arguments.createMap().apply {
        //                putString("result", message)
        //                putString("time", currentTime)
        //            })
        //        }
        //        HyperCloudConnect.initialize(reactContext) {
        //            val currentTime = hyperCloudEventModule.getCurrentFormattedTime()
        //            hyperCloudEventModule.sendEvent(reactContext, "onEventReminder", Arguments.createMap().apply {
        //                putString("result", it)
        //                putString("time", currentTime)
        //            })
        //        }
    }


    @ReactMethod
    fun openARView(id: Int) {
        reactApplicationContext.
        HyperCloudConnect.requestRequiredPermissions(reactContext as FragmentActivity, callback = { result ->
            Log.d("HyperCloudConnectModule", "openARView: $result")
            //                callback.invoke(result)
        })
        //        HyperCloudConnect.requestRequiredPermissions(reactContext, callback = { result ->
        //            initCallbackResult = result

        //            val intent = Intent(reactContext, HyperCloudConnect::class.java)
        //            intent.putExtra("NodeId", id)
        //            intent.putExtra("UserInfo", "User Info")
        //            intent.toString()
        //            HyperCloudConnect.startNavigation(intent.toString())
        //        })
    }

    //    val intent = Intent(reactContext, HyperCloudConnect::class.java)
    //    intent.putExtra("NodeId", id)
    //    intent.putExtra("UserInfo", "User Info")
    //    intent.toString()
    //
    //    HyperCloudConnect.startNavigation(intent.toString())
}

@ReactMethod
fun sendMessage(message: String) {
    Log.d("HyperCloudConnectModule", "sendMessage: $message")
}

