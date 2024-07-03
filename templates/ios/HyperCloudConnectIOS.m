//
//  Counter.m
//  ProjectName
//
//  Created by 김종욱 on 6/21/24.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Counter, NSObject)

RCT_EXTERN_METHOD(increment:(NSInteger)nodeId)

@end
