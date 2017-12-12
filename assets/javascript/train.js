var config = {
    apiKey: "AIzaSyD2nplDYOGDF6QuIIDYzKnHFEflikaHRtA",
    authDomain: "traintime-c7e14.firebaseapp.com",
    databaseURL: "https://traintime-c7e14.firebaseio.com",
    projectId: "traintime-c7e14",
    storageBucket: "",
    messagingSenderId: "232117343515"
  };
  firebase.initializeApp(config);

  var name="";
  var destination="";
  var frequency="";
  var nextarrival="";


  $("add-user").on("click",function(){
      event.preventDefault();

var name= $("#trainname-input").val().trim();
var destination= $("#traindes-input").val().trim();
var frequency= $("traintime-input").val().trim();
var nextarrival= $("trainfreq-input").val().trim();

var newTrain = {
    name: name,
    destination: destination,
    frequency: frequency,
    nextarrival: nextarrival,
};

database.ref().push(newTrain);

$("#trainname-input").val("");
$("#traindes-input").val("");
$("#traintime-input").val("");
$("#trainfreq-input").val("");

});

database.ref().on("child_added", function (childSnapshot,prevChildKey){
    console.log(childSnapshot.val());

    var currentTrain= childSnapshot.val();

    var tName= currentTrain.name;
    var tDestination= currentTrain.destination;
    var tFrequency= currentTrain.frequency;
    var tNextArrival= currentTrain.nextarrival;

    console.log(tName);
    console.log(tDestination);
    console.log(tFrequency);
    console.log(tNextArrival);

    $("table-body").append("<tr><td>" + tName + "</td>" + "<td>" +tDestination + "</td>" + "<td>" + tFrequency + "</td>" + "<td>" + tNextArrival + "</td></tr>");
});


  
