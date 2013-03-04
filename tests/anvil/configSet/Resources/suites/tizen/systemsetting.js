/*
 * Appcelerator Titanium Mobile
 * Copyright (c) 2011-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

module.exports = new function() {
	var finish,
		valueOf,
		checkCallbackMethod,
		reportError,
        
        //helpers
        finishError = function (testRun,errorMsg) {
            Ti.API.info('The following error occurred: ' +  errorMsg);
            reportError(testRun,'The following error occurred: ' +  errorMsg);
            finish(testRun);
        },
        checkProperty = function (testRun, type, value) {
            Ti.Tizen.SystemSetting.setProperty(type, value, 
                //successCallback
                function() {
                    Ti.Tizen.SystemSetting.getProperty(type, 
                        function(propertyValue) {
                            Ti.API.info(type + '=' + propertyValue);
                            valueOf(value).shouldBe(propertyValue);
                            finish(testRun);
                        },
                        function(e){
                            finishError(testRun, e);
                        }
                    );    
                },
                //errorCallback
                function(e){
                    finishError(testRun, e);
                } 
            );
        };
	
    //Tests
	this.init = function(testUtils) {
		finish = testUtils.finish;
		valueOf = testUtils.valueOf;
		reportError = testUtils.reportError;		
	}

	this.name = 'systemsetting';
	this.tests = [
		{name: 'systemSettingApi'},
        {name: 'checkPropertyHomeScreen'},
        {name: 'checkPropertyLockScreen'},
        {name: 'checkPropertyIncomingCall'},
        {name: 'checkPropertyNotificationEmail'}
	];
    
    

	this.systemSettingApi  = function(testRun) {

		Ti.API.debug('Checking SystemInfo object availability.');
		valueOf(testRun, Ti.Tizen).shouldBeObject();
		valueOf(testRun, Ti.Tizen.SystemSetting).shouldBeObject();
        valueOf(testRun, Ti.Tizen.SystemSetting.SYSTEM_SETTING_TYPE_HOME_SCREEN).shouldBeString();
        valueOf(testRun, Ti.Tizen.SystemSetting.SYSTEM_SETTING_TYPE_LOCK_SCREEN).shouldBeString();
        valueOf(testRun, Ti.Tizen.SystemSetting.SYSTEM_SETTING_TYPE_INCOMING_CALL).shouldBeString();
        valueOf(testRun, Ti.Tizen.SystemSetting.SYSTEM_SETTING_TYPE_NOTIFICATION_EMAIL).shouldBeString();
        valueOf(testRun, Ti.Tizen.SystemSetting.setProperty).shouldBeFunction();
        valueOf(testRun, Ti.Tizen.SystemSetting.getProperty).shouldBeFunction();
        
		finish(testRun);
	};
    
    this.checkPropertyHomeScreen  = function(testRun) {
        checkProperty(testRun, Ti.Tizen.SystemSetting.SYSTEM_SETTING_TYPE_HOME_SCREEN, '/opt/media/Images/image10.jpg');
    };
    
    this.checkPropertyLockScreen  = function(testRun) {
        checkProperty(testRun, Ti.Tizen.SystemSetting.SYSTEM_SETTING_TYPE_LOCK_SCREEN, '/opt/media/Images/image1.jpg');
    };
    
    this.checkPropertyIncomingCall  = function(testRun) {
        checkProperty(testRun, Ti.Tizen.SystemSetting.SYSTEM_SETTING_TYPE_INCOMING_CALL, '/opt/media/Sounds/Kalimba.mp3');
    };
    
    this.checkPropertyNotificationEmail  = function(testRun) {
        checkProperty(testRun, Ti.Tizen.SystemSetting.SYSTEM_SETTING_TYPE_NOTIFICATION_EMAIL, '/opt/media/Sounds/Kalimba.mp3');
    };
}
