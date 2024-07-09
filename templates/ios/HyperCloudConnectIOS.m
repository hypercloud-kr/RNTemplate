//
//  Counter.m
//  ProjectName
//
//  Created by 김종욱 on 6/21/24.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(HyperCloudConnectIOS, NSObject)
RCT_EXTERN_METHOD(openARView:(NSInteger)nodeId)
RCT_EXTERN_METHOD(closeARView)
@end

@interface RCT_EXTERN_MODULE(EventManagerIOS, RCTEventEmitter)
RCT_EXTERN_METHOD(triggerEventReminder)
@end
