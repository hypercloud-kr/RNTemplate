//
//  Counter.swift
//  ProjectName
//
//  Created by 김종욱 on 6/21/24.
//

import Foundation
import HyperXRConnect
import React

@objc(HyperCloudConnectIOS)
class HyperCloudConnectIOS: NSObject{
  override init() {
    super.init()
    HyperCloudConnect.shared.initialize()
    HyperCloudConnect.shared.recvMessage(onMessage: handleUnityMessage)
  }
  
  @objc(openARView:)
  func openARView(withNodeId nodeId:Int){
    HyperCloudConnect.shared.showUnityView(nodeId: nodeId)
  }
  
  @objc(closeARView)
  func closeARView(){
    HyperCloudConnect.shared.closeUnityView()
  }
  
  @objc(sendMessage:)
  func sendMessage(message: String){
    HyperCloudConnect.shared.sendMessage(message: message)
  }
  
  // Define the message handler function
  private func handleUnityMessage(_ message: String) {
      print("Received message from Unity: \(message)")
      sendEventToJavaScript(message: message)
  }

  // Function to send events to JavaScript
  private func sendEventToJavaScript(message: String) {
      if let eventEmitter = EventManagerIOS.eventEmitter {
          eventEmitter.sendEvent(withName: "onEventReminder", body: ["message": message])
      }
  }

}

@objc(EventManagerIOS)
class EventManagerIOS: RCTEventEmitter {
//  static let shared = EventManagerIOS()
  static var eventEmitter: EventManagerIOS?

  override init() {
      super.init()
      EventManagerIOS.eventEmitter = self
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

  override func supportedEvents() -> [String]! {
    return ["onEventReminder"]
  }
  
  @objc func triggerEventReminder() {
    sendEvent(withName: "onEventReminder", body: ["name": "Test Event", "location": "Test Location", "date": NSNumber(value: Date().timeIntervalSince1970)])
  }
}
