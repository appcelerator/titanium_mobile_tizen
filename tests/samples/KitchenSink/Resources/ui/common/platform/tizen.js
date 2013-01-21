function tizen(_args) {
	var self = Titanium.UI.createWindow(),
		data = [
			{title: 'Contacts', hasChild: true, test: 'ui/handheld/tizen/platform/tizen_contacts'},
			{title: 'Geocoder', hasChild: true, test: 'ui/handheld/tizen/platform/geocoder'},
		],
		tableview = Ti.UI.createTableView({
			data: data
		});
	
	tableview.addEventListener('click', function(e){
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow({title: e.rowData.title, containingTab: self.containingTab});
			_args.containingTab.open(win, {animated: true});
		}
	});
	
	self.add(tableview);
	
	return self;
};

module.exports = tizen;