


$(document).ready(function (){

    var firebaseConfig = {
        apiKey: "AIzaSyAZq_7kp84tSXSx4-TgSEFDsuacHnXmA1Q",
        authDomain: "train-time-fd13b.firebaseapp.com",
        databaseURL: "https://train-time-fd13b.firebaseio.com",
        projectId: "train-time-fd13b",
        storageBucket: "",
        messagingSenderId: "999427253221",
        appId: "1:999427253221:web:9c292c07c2f1c16906050c"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    //   get a reference to the database
    var database = firebase.database();

    // global variabls

    var trainName;
    var trainDestination;
    var trainFrequency;
    var firstTrain;
    var nextArrival;
    var trainMinutesAway;

    // populate Firebase database with data
    // make an on click to capture and add values

    $("#add-train").on("click", function(event){
        event.preventDefault();


        trainName = $("#train-input").val().trim();
        trainDestination = $("#destination-input").val().trim();
        trainFrequency = $("#frequency-input").val().trim();
        firstTrain = $("#time-input").val().trim();

        console.log(trainName);
        console.log(trainDestination);
        console.log(trainFrequency);
        console.log(firstTrain);
        
        database.ref().push({

            dbtrainName: trainName,
            dbtrainDestination: trainDestination,
            dbtrainFrequency: trainFrequency,
            dbfirstTrain: firstTrain,
        })

        alert("train added....!");

        $("#train-input").val("");
        $("#destination-input").val("");
        $("#frequency-input").val("");
        $("#time-input").val("");




    })

    database.ref().on("child_added", function (snap){
        console.log(snap.val());

        var tName = snap.val().dbtrainName;
        var tDestination = snap.val().dbtrainDestination;
        var tFrequency = snap.val().dbtrainFrequency;
        var tFirstTrain = snap.val().dbfirstTrain;
        
// Next Arrival and Minutes Away Calcutaltions



        var tr = $("<tr>")


        tr.append(
            "<td>"+ tName+ "</td>",
            "<td>"+ tDestination+ "</td>",
            "<td>"+ tFrequency+ "</td>",
            "<td>+ to be calculated+ </td>",
            "<td>+ to be calculated+ </td>",
            
        )

        $("tbody").append(tr)



    });

    
});
    
    
    
    
    
    
    



