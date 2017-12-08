"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Lissette Ramos
   Date:   11/130/2017
   
   Filename: projects.js
	
*/

var projectName = ["Average Grocery Bill Calculator","Dice Game" , "Discord Bot" , "Personal Site"];
var languageUsed = ["C","Javascript", "Java", "HTML + CSS"];
var description = ["GUses the grocery bill amount of three weeks to calculate how much you spend on groceries on average.","Dice game,HTML and CSS pre-provided, this was Javascript coded during a Udacity course."  ,"Named Brodoroki, nickname of Shouto Todoroki from 'My Hero Academia' (He is  a true bro). Much of this project was done with the help of tutorials and gitHub pages.","The site you are looking at right now :)"];
var gitHubLink = ["https://goo.gl/qZGQPk", "https://goo.gl/jBfmMa", "https://goo.gl/Z4CfFE",4];
var arrayLength = projectName.length;
var projectsHTML = "";

//Declaring and initializing arrays needed for this table.

projectsHTML += "<table>";
var tableColumns=["Project Name","Language Name", "Description / Comments", "GitHub Repository Link"];
projectsHTML+="<tr>";
for( var i = 0; i <= tableColumns.length - 1; i++){
	projectsHTML += "<th>" + tableColumns[i] + "</th>";
}
projectsHTML+="</tr>";
//Puts titles for each table column.
for (var i = 0; i <= arrayLength - 1; i++) {
	projectsHTML += "<tr>";
	projectsHTML += "<td>" + projectName[i] + "</td>";
	projectsHTML += "<td>" + languageUsed[i] + "</td>";
	projectsHTML += "<td>" +  description[i] + "</td>";
	projectsHTML +="<td>" + gitHubLink[i] + "</td>";
	projectsHTML += "</tr>";
	//Populates the table with information abourt my projects. 
}
projectsHTML+="</table>";
document.getElementById("projectTable").innerHTML=projectsHTML;


