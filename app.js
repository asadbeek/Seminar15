const firebaseConfig = {
    apiKey: "AIzaSyDLsCoC2ucE4-g6oDQOa1HKlI6OG-BBJrg",
    authDomain: "seminar13-2f998.firebaseapp.com",
    databaseURL: "https://seminar13-2f998-default-rtdb.firebaseio.com",
    projectId: "seminar13-2f998",
    storageBucket: "seminar13-2f998.appspot.com",
    messagingSenderId: "454162361174",
    appId: "1:454162361174:web:2513f59c8f3bb5b15784f7",
    measurementId: "G-H0S5STEY5L"
  };
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var dataRef1 = database.ref('temp');
	  var dataRef2 = database.ref('hum');
	  var dataRef3 = database.ref('led');

  //fetch the data
	  dataRef1.on('value', function(getdata1){
	  	var hum = getdata1.val();
	  	document.getElementById('temperature').innerHTML = hum + "&#8451;";
	  })

	   dataRef2.on('value', function(getdata2){
	  	var temp = getdata2.val();
	  	document.getElementById('humidity').innerHTML = temp + "%";
	  })

	var index=0;
var btn=document.getElementById("led");

function press() {
index++;
if (index%2==1) {
	database.ref('LED').set("1");
	document.getElementById('led').innerHTML="turn off";
}
else {
database.ref('LED').set("0");
document.getElementById('led').innerHTML="turn on";
}
}
