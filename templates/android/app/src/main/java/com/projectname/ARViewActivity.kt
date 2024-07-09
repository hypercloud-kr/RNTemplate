package com.projectname

import android.os.Bundle
import android.util.Log
import android.view.ViewGroup
import android.widget.Button
import android.widget.FrameLayout
import android.widget.Toast
import com.facebook.react.ReactApplication
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.bridge.WritableMap
//import com.unity3d.player.UnityPlayer
//import com.unity3d.player.UnityPlayerActivity
//import com.hyper.mockup.OverrideUnityActivity
import org.json.JSONObject
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity


class ARViewActivity : AppCompatActivity() {
    private var userInfo = ""
    private var updateData = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_arviewmain)

        val mARViewContainer = findViewById<FrameLayout>(R.id.arViewContainer)
        //        mUnityPlayer.view.let { player ->
        //            (player?.parent as? ViewGroup)?.removeView(player)
        //            mARViewContainer.addView(player)
        //        }

        val id = intent.getIntExtra("id", 0)
        setDataToUnity(id.toString())
        createUnityMessage(id).let { sendMessageToUnity(it) }

        val userInfoString: String = intent.getStringExtra("userInfo") ?: "test123"
        createUnityMessage(id).let { sendMessageToUnity(it) }

        // Initialize Button
        val buttonExample = findViewById<Button>(R.id.buttonExample)
        buttonExample.setOnClickListener {
            showMainActivity()
            // Handle button click here
            // Example: Toast.makeText(this, "Button Clicked", Toast.LENGTH_SHORT).show()
            // You can add your logic here
        }
        // setDataToUnity(userInfoString
        //        sendMessageToReactNative("Hello from Android")
        Log.d("----->Activity", "onCreate")
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
        //        UnityPlayer.UnitySendMessage("UnityMessageManager", "onRNMessage", message)
    }

    private fun showMainActivity() {
        //        mUnityPlayer.pause()
        val intent = Intent(this, MainActivity::class.java)
        intent.flags = Intent.FLAG_ACTIVITY_REORDER_TO_FRONT or Intent.FLAG_ACTIVITY_SINGLE_TOP
        startActivity(intent)
    }

    //    override fun onUnityPlayerUnloaded() {
    //        //        finish()
    //    }
    //
    //    override fun onUnityPlayerQuitted() {
    //        //        finish()
    //    }

    override fun onResume() {
        super.onResume()
        Log.d("----->Activity", "onResume")
        //        mUnityPlayer.resume()
    }

    override fun onPause() {
        super.onPause()
        //        mUnityPlayer.pause()
        Log.d("----->Activity", "onPause")
    }

    override fun onStop() {
        super.onStop()
        Log.d("----->Activity", "onStop")
    }

    override fun onRestart() {
        super.onRestart()
        Log.d("----->Activity", "onRestart")
    }

    override fun onStart() {
        super.onStart()
        Log.d("----->Activity", "onStart")
    }
}
