// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBasJ1cxIOK0kpN83gBVDuLvA8xIipmCxk",
    authDomain: "train-time-39e6c.firebaseapp.com",
    databaseURL: "https://train-time-39e6c.firebaseio.com",
    projectId: "train-time-39e6c",
    storageBucket: "train-time-39e6c.appspot.com",
    messagingSenderId: "733280734707"
  };
  firebase.initializeApp(config);

 
 // Create a variable to reference the database.
 var database = firebase.database();
 var dataRef = database.ref();
 
 $("#submit").on("click", function (event) {
 
    event.preventDefault();
 
    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrainTime = $("#firstTrainTime").val().trim();
    var frequency = $("#frequency").val().trim();
 
    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);
 
    var newTrain = {
        name: trainName,
        role: destination,
        start: firstTrainTime,
        rate: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    };
 
    database.ref().push(newTrain);
 
    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().role);
        console.log(childSnapshot.val().start);
        console.log(childSnapshot.val().rate);
        console.log(childSnapshot.val().dateAdded);
    })
 
 });
 
 // dataRef.ref().orderByChild("dateAdded").limitToFirst(1).on("child_added", function (snapshot)
 
 
 
 // );
 
 // * Add input to table
 $("#trainName").focus();
 $(document).on("click", "#submit", function (event) {
 
    event.preventDefault();
 
    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrainTime = $("#firstTrainTime").val().trim();
    var frequency = $("#frequency").val().trim();
 
    var newRow = $("<div>").addClass("row");
    var newName = $("<div>").addClass("col-md-2").text(trainName);
    var newRole = $("<div>").addClass("col-md-2").text(destination);
    var newStartDate = $("<div>").addClass("col-md-2").text(firstTrainTime);
    var newMonthsworked = $("<div>").addClass("col-md-2").text(frequency);
 
 
    var newMonthlyRate = $("<div>").addClass("col-md-2").text(monthlyRate);
    var newTotalBilled = $("<div>").addClass("col-md-2").text(newMonthsworked * newMonthlyRate);
    var pageBreak = $("<hr>").addClass("my-2");
 
    newRow.append(newName).append(newRole).append(newStartDate).append(newMonthsworked).append(newMonthlyRate).append(newTotalBilled);
    $("#new-user").append(newRow).append(pageBreak);
 
 
 
    // var newTrain = {
    //     name: trainName,
    //     role: destination,
    //     start: firstTrainTime,
    //     rate: frequency,
    //     dateAdded: firebase.database.ServerValue.TIMESTAMP
    // };
 
 
    database.ref().push(newTrain);
 
    trainName = $("#trainName").val("");
    destination = $("#destination").val("");
    firstTrainTime = $("#firstTrainTime").val("");
    frequency = $("#frequency").val("");
 
    $("#trainName").focus();
 });
