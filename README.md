# JavaScript Assignment
-----------------------

## Project Discription
*This assignment demonstrats my skills using HTML form elements and JavaScript topics such as: Functions, parsing the DOM, form validation, conditional statements, debugging methods, formulas and Math Object.*

### Assingment Requirements
1. File Structure

 * Create two simple html pages
   - [x] index.html contains an HTML form that needs to be validated by JavaScript when submitted.
   - [x] excel.html contains a simple form to let the user enter their numeric values then you will use
         excel four common functions to find: the average, maximum, minimum, and total.
 * Create an external JavaScript file: script.js
   - [x] The file should be placed inside a sub-folder named “js”.
   - [x] All your code must be placed in this file
   - [x] The file must be linked to the two html files
 * Create an external Style Sheet file: styles.css
   - [x] The file should be placed inside a sub-folder named “css”.
   - [x] All your CSS rules must be placed in this file.
   - [x] The file must be linked to the two html files.
   - [x] You can use any CSS rules you like to style your 2 HTML pages but remember that this
         assignment is mainly about JavaScript, so it’s better to finish the assignment requirements first
         then add the styles later.
 * The two HTML files, JS file, CSS file, plus the two subfolders have to be inside the assignment main
   folder named: “JS-Assignment-YourFirstName”
   e.g: JS-Assignment-Martin

   ![File structure](/img/dom.PNG)
2. Home Page

 * You will create a web form to ask the user to enter the following information using the appropriate
  HTML5 form controls (elements) to represent each item in the list below:
   - [x] First Name ➔ input field of type text
   - [x] Last Name ➔ input field of type text
   - [x] Email Address ➔ input field of type email
   - [x] Address ➔ input field of type text
   - [x] City ➔ input field of type text
   - [x] Province ➔ input field of type text
   - [x] Radio buttons with the following options (one of these options should be selected as default,
         usually the first one): 
           * Premium Membership
           * Standard Membership
           * Basic Membership
   - [x] Send button to call (trigger) a function named “userForm()”, which you will have to create, will
         take all the form information (user’s input)
   - [x] Cancel button to reset the form elements 

3. Excel Page

 * Design a web form following the wireframe guidelines below. Notice that the image below is just a
   sample so you can use any styles like colour, font, layout, width, or borders plus any HTML Tags that you
   prefer
 * User can type his/her numbers with a space between each number (as a string with the space
   character as a delimiter or space separated numeric values) inside an input box (You need to notify
   the user to enter the numbers with a space between every two numbers as shown in the diagram)
 * Then the user can choose only one of the basic excel functions (radio buttons) to do the required
   calculation 
 * When the button “Calculate” is clicked, a function named myExcelFuns() will be loaded (triggered) so
   you will need to add “onClick” event to the form button “Calculate”, and inside myExcelFuns function
   body (block) you will have to do the following:
   - [x] Get the user input (string of numbers and spaces) and save it into a variable named “numberStr”
   - [x] Make sure to remove all the extra spaces before and after the user input (Remove whitespace from
         both sides of a string) using the appropriate JavaScript built-in method
   - [x] Convert the string user input “numberStr” into an array of numbers named “numberArr” using the
         appropriate JavaScript built-in method for array object
 * Continuing inside myExcelFuns(), you will use if condition to scan or to check which radio button was
   selected and based on this selection you will do the right calculations
   - [x] Use if else blocks to do the required calculation based on the selected radio button:
       * If (the AutoSum radio is checked) ➔ Do the calculation to find the total of all the numbers
       * else if (the Average radio is checked) ➔ Do the calculation to find the average of the numbers
       * else if (the Max radio is checked) ➔ Do the calculation to find the maximum number
       * else ➔ Do the calculation to find the minimum number
   - [x] The returned value for each if condition has to be saved into a global variable based on our
         function (it’s a local variable based on the entire JS file) named “result”, so you will need to declare
         this empty variable first, then use it inside each if condition and else block
 *  There is more than one way to get the selected radio button option, one of them for example, is to
    give each radio button control an “id” in your HTML code:
    * <input type="radio" name="excel" id="sum">AutoSum
    * <input type="radio" name="excel" id="avg">Average 
 * At the end of all the if else blocks (4 blocks), use the getElementById() method to print your result (the
   value of the result variable) into your specific HTML element.


### Built With
This section lists the languages I used to built this project.
* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://www.javascript.com/)

## Usage

**This project is downloadabe. If you would like to download this repo for personal use, feel free. Steps below:**

1. Click the green "Code" button above the file section.
2. Click "Download Zip".
3. Open your downloads file and extract.
4. You're set!

## Acknowledgements

* [Stack Overflow - Finding the average of an array](https://stackoverflow.com/questions/29544371/finding-the-average-of-an-array-using-js)
* [Codeburst.io - min, max, sum and average](https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332)
* [Team Treehouse - finding min and max in an array](https://teamtreehouse.com/community/finding-average-minimum-and-maximum-value-in-an-array)
* [W3 Schools - Math.min()](https://www.w3schools.com/jsref/jsref_min.asp)
* [W3 Schools - Math.max()](https://www.w3schools.com/jsref/jsref_max.asp)
* [MDN web docs - Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
* [MDN web docs - Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
* [DigitalOcean - map()](https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know)