/*
 * Appcelerator Titanium Mobile
 * Copyright (c) 2011-2012 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

// start customization here
var suites = [
	{name: "tizen/messaging"},
	{name: "tizen/media_content"},
	{name: "tizen/calendar"},
	{name: "tizen/alarm"},
	{name: "tizen/contacts"},
	{name: "tizen/notification"},
	{name: "tizen/lbs"},
	{name: "tizen/call"},
	{name: "tizen/bluetooth"},
	{name: "tizen/nfc"},
	{name: "tizen/sysinfo"},
	{name: "tizen/power"},
	{name: "tizen/download"},
	{name: "tizen/tizen_application"},
	{name: "tizen/filesystem"},
	{name: "tizen/filters"}
];


/*
these lines must be present and should not be modified.  "suites" argument to setSuites is 
expected to be an array (should be an empty array at the very least in cases where population of 
the suites argument is based on platform type and may result in no valid suites being added to the 
argument)
*/
var init = require("init");
init.setSuites(suites);
init.start();