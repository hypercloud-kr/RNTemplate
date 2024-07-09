//
//  RCTCalendarModule.m
//  ProjectName
//
//  Created by 김종욱 on 6/27/24.
//

//RCTCalendarModule.m

#import "CalendarManager.h"
#import "React/RCTLog.h"

@implementation CalendarManager

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
  return @[@"onEventReminder"];
}

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date) {
  // Your implementation to add an event to the calendar goes here
  
  // After adding an event, send event to JavaScript
  [self sendEventWithName:@"onEventReminder" body:@{@"name": name, @"location": location, @"date": date}];
}

// Method to trigger event manually for testing
RCT_EXPORT_METHOD(triggerEventReminder) {
  [self sendEventWithName:@"onEventReminder" body:@{@"name": @"Test Event", @"location": @"Test Location", @"date": @(NSDate.date.timeIntervalSince1970)}];
}

@end
