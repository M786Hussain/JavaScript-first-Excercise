
        //chapter#  1

        //Question1
        document.write("Hello! This is a message displayed on the web page using JavaScript.");

        //Question2
       
        alert("Welcome to our website! We hope you have a great experience.");

        //Question3

        document.write("Welcome to our website!<br>");
        document.write("We hope you find everything you need.<br>");
        document.write("Have a great day!");


        //Question4
            // Display the first message
            alert("Welcome to JS Land!");
            // Display the second message
            alert("Happy Coding!");


    //Question5

    console.log("Hello... I can run JS through my web browser's console");




    //Chapter# 2 

    // Question:1

    var username;

    //QUestion:2

    var myName = "Muhammad Hussain"; 

    //Question:3

    
var message;

// value store in message
message = "Hello World";

// c) value show in which our var as message
alert(message);


//Question4:

// Save student's bio data in variables
var studentName = "Muhammad Hussain";      
var studentAge = "23 years old";   
var studentCourse = "Modern Web Development";

// Display the data in alert boxes
alert("Name: " + studentName);
alert("Age: " + studentAge);
alert("Course: " + studentCourse);


//Question:5

var pizzaMessage = "p\npi\npiz\npizz\npizza";
        
// Display the message in an alert
alert(pizzaMessage);


// Question:6

var email = "Mhussainfullstack@gmail.com"; 
        
       
        var message = "My email address is " + email;
        
        
        alert(message);

//Question:7

var book = "A smarter way to learn JavaScript";
        
        
        alert("I am trying to learn from the book " + book);


//Question:8

var book = "A smarter way to learn JavaScript";
        
// Use document.write to display the message on the web page
        document.write("I am learning from the book " + book);


//Question:9

var specialString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
        
        // Display the string in an alert box
        alert(specialString);
        
        // Display the string on the browser through the web page
        document.write(specialString);





        // Chapter:3

        //Question:1

        var age = 23; 
        
        // Display the age in an alert box
        alert("I am " + age + " years old");


        //Question:2

        var visitCount = localStorage.getItem("visitCount"); // Retrieve the previous count from localStorage

        if (visitCount === null) {
            // If no count exists, initialize it to 1
            visitCount = 1;
        } else {
            // Increment the visit count
            visitCount = parseInt(visitCount) + 1;
        }

        // Save the updated count back to localStorage
        localStorage.setItem("visitCount", visitCount);

        // Display the number of visits on the webpage
        document.write("You have visited this site " + visitCount + " times.");


        //Question:3

        