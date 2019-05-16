"use strict";

const express = require("express");

// adds a rounter for students
//lets us split API routes into seperate modules
const students = express.Router();  // Router has to be capital

// respond with "Hello Class!" at URI: /students
students.get("/students/me", (req, res) => {
    res.send("Getting Me..");
    });

students.get("/students", (req, res) => {
    res.send("Getting all students..");
    });

students.get("/students/:id", (req, res) => {
    console.log(req.params.id); // logs this on the terminal running server (not on the browser console)
    });
// accept POST request at URI: /students
students.post("/students", (req, res) => {
    console.log("req ",req.body);
    res.send("Adding a student..");
    });
// accept PUT request at URI: /students
students.put("/students", (req, res) => {
    console.log(req.body);
    res.send("Updating a student..");
    });
// accept DELETE request at URI: /students
students.delete("/students", (req, res) => {
    res.send("Deleting a student..");
    });


module.exports = students; // exports 1 thing (whole thing)