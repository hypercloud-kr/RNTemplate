//
//  Counter.swift
//  ProjectName
//
//  Created by 김종욱 on 6/21/24.
//

import Foundation
import HyperCloudConnect

@objc(Counter)
class Counter: NSObject{
  override init() {
    super.init()
    HyperCloudConnect.initialize()
  }
  
  private var count = 0;
  
  @objc(increment:)
  func increment(withNodeId nodeId:Int){
    HyperCloudConnect.showUnityView(nodeId: nodeId)
  }
}
