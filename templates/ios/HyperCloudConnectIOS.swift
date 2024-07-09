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
  }
  
  @objc(openARView:)
  func openARView(withNodeId nodeId:Int){
    DispatchQueue.main.async {
      HyperCloudConnect.shared.showUnityView(nodeId: nodeId)
    }
  }
  
  @objc(closeARView)
  func closeARView(){
    DispatchQueue.main.async {
      HyperCloudConnect.shared.closeUnityView()
    }
  }
}

@objc(EventManagerIOS)
class EventManagerIOS: RCTEventEmitter {

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
