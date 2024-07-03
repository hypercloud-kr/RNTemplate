//
//  RCTCalendarModule.m
//  ProjectName
//
//  Created by 김종욱 on 6/27/24.
//

//RCTCalendarModule.m

#import "RCTCalendarModule.h"
#import <React/RCTLog.h>

@implementation RCTCalendarModule

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents{
  return @[@"EventReminder"];
}

- (void)calendarEventReminderReceived:(NSNotification *)notification
{
  RCTLogInfo(@"calendarEventReminderReceived");
  NSString *eventName = notification.userInfo[@"name"];
  [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
}
@end
