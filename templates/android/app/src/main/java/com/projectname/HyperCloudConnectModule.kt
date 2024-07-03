package com.projectname

import android.content.Intent
import android.util.Log
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

class HyperCloudConnectModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val reactContext: ReactApplicationContext = reactApplicationContext
    override fun getName(): String {
        return "HyperCloudConnect"
    }

    private fun sendEvent(reactContext: ReactContext, eventName: String, params: WritableMap?) {
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, params)
    }

    private var listenerCount = 0

    @ReactMethod
    fun addListener(eventName: String) {
        if (listenerCount == 0) {
            // Set up any upstream listeners or background tasks as necessary
        }
        listenerCount += 1
    }

    @ReactMethod
    fun removeListeners(count: Int) {
        listenerCount -= count
        if (listenerCount == 0) {
            // Remove upstream listeners, stop unnecessary background tasks
        }
    }

    @ReactMethod
    fun triggerEvent() {
        val params = Arguments.createMap().apply {
            putString("eventProperty", "someValue")
        }
        sendEvent(reactContext, "EventReminder", params)
    }

    @ReactMethod
    fun goToUnityActivity(id: Int) {
        val context = reactApplicationContext
        HyperCloudConnect.openUnityView(context, id)
        //        val intent = Intent(context, ARViewActivity::class.java)
        //        intent.putExtra("id", id)
        //        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
        //        context.startActivity(intent)
    }

    @ReactMethod
    fun createCalendarEvent(name: String, location: String, promise: Promise) {
        try {
            val eventId = 19910815
            promise.resolve(eventId)
        } catch (e: Throwable) {
            promise.reject("Create Event Error", e)
        }
    }

    @ReactMethod
    fun createCalendarEvent(
        name: String,
        location: String,
        myFailureCallback: Callback,
        mySuccessCallback: Callback,
    ) {
        try {
            val eventId = 1991
            mySuccessCallback.invoke(eventId)
        } catch (e: Exception) {
            myFailureCallback.invoke(e.message)
        }
    }

    @ReactMethod
    fun createCalendarEvent(name: String, location: String, callback: Callback) {
        val eventId = 1991
        callback.invoke(eventId)
    }

    @ReactMethod
    fun createCalendarEvent(name: String, location: String) {
    }

    override fun getConstants(): MutableMap<String, Any> {
        return hashMapOf("DEFAULT_EVENT_NAME" to "New Event")
    }
    // ---------------------------------------------------------------------------
}

