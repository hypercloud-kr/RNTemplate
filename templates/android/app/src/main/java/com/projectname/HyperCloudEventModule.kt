package com.projectname

import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.LifecycleEventListener
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule
import java.time.format.DateTimeFormatter
import java.time.ZoneId
import java.time.ZonedDateTime


class HyperCloudEventModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val reactContext: ReactApplicationContext = reactApplicationContext
    override fun getName(): String {
        return "EventManager"
    }

    fun sendEvent(reactContext: ReactContext, eventName: String, params: WritableMap?) {
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
    fun triggerEventReminder() {
        val currentTime = getCurrentFormattedTime()
        val params = Arguments.createMap().apply {
            putString("name", "test event")
            putString("location", "Seoul")
            putString("date", currentTime)
        }
        sendEvent(reactContext, "onEventReminder", params)
    }

    fun getCurrentFormattedTime(): String {
        val koreanTimeZone = ZoneId.of("Asia/Seoul")
        val currentKoreanDateTime = ZonedDateTime.now(koreanTimeZone)
        val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
        return currentKoreanDateTime.format(formatter)
    }

    private val lifecycleEventListener = object : LifecycleEventListener {
        override fun onHostResume() {
            Log.d("LifecycleModule", "onHostResume")
        }

        override fun onHostPause() {
            Log.d("LifecycleModule", "onHostPause")
        }

        override fun onHostDestroy() {
            Log.d("LifecycleModule", "onHostDestroy")
        }
    }

    init {
        reactContext.addLifecycleEventListener(lifecycleEventListener)
    }
}

