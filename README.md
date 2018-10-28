## Lucy's Calculator
So this is my _first_ attempt at a calculator!

This was part of my pre-course materials beofre starting **Founders and Coders** in Oct 2018.

I was asked to code a calculator that is functionally similar to one built in a **FreeCodeCamp** exercise but _without_ any frameworks.
The guidelines given to get us started can be viewed [here](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator/).

During the process of making this calculator I tackled the following challenges:
* Limiting the input number of digits into display
* [Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)
* Javascript numeric precision wierdness
  > e.g. 0.1 + 0.2 = 0.300000004

I also utilised the following tools in order to aid the development and get a better understanding of a modern javascript working environment:
* Parcel - 
  * Code bundling to split my code across multiple files
  * Live locally hosted re-load code updates
  * Allows use of the latest javascript syntax
* ESLint -
  * Visual Studio Code extension
  * To highlight errors and/or typos in my code
* Prettier - 
  * Code formatter
* Jest -
  * Unit testing
* Babel -
  * Allowing Jest to work with the latest Javascript features
  
