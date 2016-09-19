<?php



    $url = 'https://gcm-http.googleapis.com/gcm/send';
    
   $regid='eHlAfPxEmZo:APA91bFRJMj7OkjIkLokhWDWkbvfcSIwWYqO-khArmVwYna6ZNLi3jmKi9EdqBFoMXBYRqUpBh9xVZgzqpCbhPbTdeG2CyDhi6_JnkXqQ_RwfUir0KlC6rPsJmF5X2Sb7Mg46cIOrbrK'; 
  //$regid=$_POST['regid'];
  //mysql_query("INSERT INTO regid (red_id) VALUES ('$regid')") or die (mysql_error());
 
    define("GOOGLE_API_KEY","AIzaSyBDv1gmVuIsBo2gbvtNH6uLtv9ANhzpYWc");
 
    $registration_ids = array($regid);
 
    $message=array('message' 	=> 'ANNUNCI VVVVID: Palinsesto anime PRIMAVERA 2016Riassunto degli...',
	'title'		=> 'News in Evidenza',
	"image" => "http://41.media.tumblr.com/aada559506e936961dc7e482d851b71b/tumblr_o4yhzyFg6L1ulzh2jo1_r1_500.jpg",
	);
 
    $fields = array('registration_ids' => $registration_ids,'data' =>$message);
 
 
 
    $headers = array('Authorization: key=' . GOOGLE_API_KEY,'Content-Type: application/json');
 
     
 
    $ccurl = curl_init();
 
    curl_setopt($ccurl, CURLOPT_URL, $url);
 
    curl_setopt($ccurl, CURLOPT_POST, true);
 
    curl_setopt($ccurl, CURLOPT_HTTPHEADER, $headers);
 
    curl_setopt($ccurl, CURLOPT_RETURNTRANSFER, true);
 
 
 
    curl_setopt($ccurl, CURLOPT_SSL_VERIFYPEER, false);
 
    curl_setopt($ccurl, CURLOPT_POSTFIELDS, json_encode($fields));
 
 
 
    echo $result = curl_exec($ccurl);
    
     if ( curl_error( $ccurl) )
    {
        echo 'GCM error: ' . curl_error( $ccurl );
    }

 
    curl_close($ccurl);
    
 

 
?>
