// Wraps Tizen module "Notification".

define(['Ti/_/lang', 'Tizen/_/Notification/StatusNotification', 'Ti/_/Evented'], function(lang, StatusNotification, Evented) {

	return lang.mixProps(require.mix({}, Evented), {

		postNotification: function(notification /*Notification*/) {
			tizen.notification.post(notification._obj);
		},

		update: function(notification /*Notification*/) {
			tizen.notification.update(notification._obj);
		},

		remove: function(id /*NotificationId*/) {
			tizen.notification.remove(id);
		},

		removeAll: function() {
			tizen.notification.removeAll();
		},

		getNotification: function(id /*NotificationId*/) {
			return this._wrap(tizen.notification.get(id));
		},

		getAll: function() {
			var objects = tizen.notification.getAll(),
				i = 0,
				objectsCount = objects.length,
				result = [];

			for (; i < objectsCount; i++) {
				result.push(this._wrap(objects[i]));
			}
			return result;
		},

		_wrap: function(object) {
			// Wrap the object (create a Titanium wrapped object out of a native Tizen object).

			var result;
			if (object.toString() === '[object StatusNotification]') {
				result = this.createStatusNotification(object);
			}
			else
			{
				console.error('Incorrect object type');
			}
			return result;
		},

		createStatusNotification: function(args) {
			return new StatusNotification(args);
		},

		constants: {
			NOTIFICATION_TYPE_STATUS: 'STATUS',
			STATUS_NOTIFICATION_TYPE_SIMPLE: 'SIMPLE',
			STATUS_NOTIFICATION_TYPE_ONGOING: 'ONGOING',
			STATUS_NOTIFICATION_TYPE_PROGRESS: 'PROGRESS'
		}

	}, true);
});
