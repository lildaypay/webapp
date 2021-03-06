console.log('Started', self);
 self.addEventListener('install', function(event) { self.skipWaiting(); console.log('Installed', event); }); 
 self.addEventListener('activate', function(event) { console.log('Activated', event); }); 
// Register event listener for the 'push' event.
 
 self.addEventListener('push', function(event) {	
event.waitUntil(  self.registration.pushManager.getSubscription().then(function(subscription) { var endp_min =subscription.endpoint.split("/").slice(-1);console.log("got subscription id: ", endp_min[0]);
 fetch('https://socialanime.it/endopoint.php?endpoint='+ endp_min[0]).then(function(response) {
        if (response.status !== 200) {
            console.log('Problem. Status Code: ' + response.status);  
            throw new Error();  
        }
        // Examine the text in the response  
        return response.json().then(function(data) { 
   
            var title = data.title;  
            var body = data.body;  
            var icon = data.icon;  
            //var notificationTag = data.notification[0].tag;
            return self.registration.showNotification(title, {body: body,icon:icon});
        });
    })
})
  
  );

}); 




self.addEventListener('notificationclick', function(event) {  
  console.log('On notification click: ', event.notification.tag);  
  // Android doesn't close the notification when you click on it  
  // See: http://crbug.com/463146  
  event.notification.close();

  // This looks to see if the current is already open and  
  // focuses if it is  
  event.waitUntil(
    clients.matchAll({  
      type: "window"  
    })
    .then(function(clientList) {  
      for (var i = 0; i < clientList.length; i++) {  
        var client = clientList[i];  
        if (client.url == '/' && 'focus' in client)  
          return client.focus();  
      }  
      if (clients.openWindow) {
        return clients.openWindow('https://socialanime.it/side_prova.php');  
      }
    })
  );
});

