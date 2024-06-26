package com.projectname

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;
import android.util.Log
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

class MyLifecycleModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "MyLifecycleModule"
    }

    private val lifecycleEventListener = object : LifecycleEventListener {
        override fun onHostResume() {
            Log.d("MyLifecycleModule", "onHostResume")
        }

        override fun onHostPause() {
            Log.d("MyLifecycleModule", "onHostPause")
        }

        override fun onHostDestroy() {
            Log.d("MyLifecycleModule", "onHostDestroy")
        }
    }

    

    init {
        reactContext.addLifecycleEventListener(lifecycleEventListener)
    }
}