package com.projectname

import android.os.Bundle
import android.util.Log
import android.view.ViewGroup
import android.widget.FrameLayout
import android.widget.Toast
import com.facebook.react.ReactApplication
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.bridge.WritableMap
import com.unity3d.player.UnityPlayer
import com.unity3d.player.UnityPlayerActivity
//import com.hyper.mockup.OverrideUnityActivity
import org.json.JSONObject

class ARViewActivity : UnityPlayerActivity() {
    private var userInfo = ""
    private var updateData = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_arviewmain)

        val mARViewContainer = findViewById<FrameLayout>(R.id.arViewContainer)
        mUnityPlayer.view.let { player ->
            (player?.parent as? ViewGroup)?.removeView(player)
            mARViewContainer.addView(player)
        }

        val id = intent.getIntExtra("id", 0)
        setDataToUnity(id.toString())
        createUnityMessage(id).let { sendMessageToUnity(it) }

        val userInfoString: String = intent.getStringExtra("userInfo") ?: "test123"
        createUnityMessage(id).let { sendMessageToUnity(it) }
        // setDataToUnity(userInfoString
        //        sendMessageToReactNative("Hello from Android")
    }

    //    private fun sendMessageToReactNative(message: String) {
    //        val reactContext = getReactContext()
    //        if (reactContext != null) {
    //            val unityBridgeModule = reactContext.getNativeModule(UnityBridgeModule::class.java)
    //            if (unityBridgeModule != null) {
    //                unityBridgeModule.callReactNativeFunction(message)
    //            } else {
    //                Toast.makeText(this, "UnityBridgeModule not found", Toast.LENGTH_SHORT).show()
    //            }
    //        } else {
    //            Toast.makeText(this, "ReactContext is null", Toast.LENGTH_SHORT).show()
    //        }
    //    }

    //    private fun getReactContext(): ReactContext? {
    //        return (application as? ReactApplication)?.reactNativeHost?.reactInstanceManager?.currentReactContext
    //    }

    //    override fun onNewIntent(intent: Intent) {
    //        super.onNewIntent(intent)
    //        Log.d("Unity onNewIntent", userInfo)
    //        val userInfoString: String = intent.getStringExtra("userInfo") ?: ""
    //        val id = intent.getIntExtra("id", 0)
    //        userInfo = userInfoString
    //        createUnityMessage(id).let { sendMessageToUnity(it) }
    //    }

    // RN 에서 호출 하여 data 를 userInfo 에 저장!!
    private fun setDataToUnity(data: String) {
        userInfo = data
    }

    //  Unity 에서 호출하여 userInfo 를 가져감
    //    override fun getDataFromMobile(): String {
    //        Toast.makeText(this, "getDataFromMobile", Toast.LENGTH_SHORT).show()
    //        return userInfo
    //    }

    // ------------------------------------------------------------------------------------------------------------------------------

    //    override fun setDataToMobile(data: String) {
    //        Log.d("Unity", "setDataToMobile: $data")
    //        //        updateData = data
    //        //        Toast.makeText(this, updateData, Toast.LENGTH_SHORT).show()
    //    }

    fun getDataFromUnity(): String {
        return updateData
    }

    private fun createUnityMessage(id: Int): String {
        return JSONObject().apply {
            put("name", "SetDestination")
            put("data", id)
        }.toString()
    }

    private fun sendMessageToUnity(message: String) {
        UnityPlayer.UnitySendMessage("UnityMessageManager", "onRNMessage", message)
    }

    override fun onUnityPlayerUnloaded() {
        finish()
    }

    override fun onUnityPlayerQuitted() {
        finish()
    }

    override fun onResume() {
        mUnityPlayer.resume()
        super.onResume()
    }

    override fun onPause() {
        mUnityPlayer.pause()
        super.onPause()
    }
}
