'use strict'
var apn=require('apn');

let options={
	cert:'pem_files/cert.pem',
	key:'pem_files/key.pem',
	production:false
}

let deviceToken='dcd2139bc9ed96a9c85527b9968ad8201081b76b4363bb544f12f7467a050dce';

let apnConnection = new apn.Connection(options);

let myDevice = new apn.Device(deviceToken);

let notification = new apn.Notification();

// Expires 1 hour from now.
notification.expiry = Math.floor(Date.now() / 1000) + 3600; 
notification.badge = 3;
notification.alert = " You have a new message";
notification.payload = {'messageFrom': 'Sample'};

apnConnection.pushNotification(notification, myDevice);