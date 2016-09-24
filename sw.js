console.log('Started', self);
 self.addEventListener('install', function(event) { self.skipWaiting(); console.log('Installed', event); }); 
 self.addEventListener('activate', function(event) { console.log('Activated', event); }); 
// Register event listener for the 'push' event.

/*

 self.addEventListener('push', function(event) {
	    var payload = event.data ? event.data.text() : 'no payload';
event.waitUntil(
 
    self.registration.showNotification('Una Nuova NOtifica', {
      body: payload,
    })
  );

});  */

 self.addEventListener('push', function(event) {

event.waitUntil(
 fetch('http://socialanime.it/endopoint.php').then(function(response) {
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
  
  );

}); 





