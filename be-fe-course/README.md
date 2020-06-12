# be-fe-course

Here is my attempt to put into practice what was tought in the course. We were asked to create an application using the technologies from the course and I chose to create an application to store a book collection. I ended up creating an input form and an output form, and on the way I experimented with different ways of doing things, as is witnessed by commented out code everywhere. There are 4 folders in the repository:

1. Just an HTML file, which hopefully passes accesibility criteria
2. The same file but styled with CSS
3. The same file but including some javascript and an attempt to use Webpack.I have to immediately admit that I had some problems making it all work. Mainly I tried to define some functions to provide validation for the input fields but for some reason the validation functions are not seen by the input form. To generate a framework for webpack I used code available on the internet, which gave me a starting point. Even so, I did not manage to build the functionality that I wanted.
4. The same input and output form, but now styled and created in React. There is some basic functionality, but  no connection to a back-end. The user interface is not ideal, either. To run it you will have to do: 
npm install --save-dev
npm run build
npm run start
and then connect a browser to localhost:3000

There are 2 buttons: Show and Input. When the Input form is showing you must first click on the Input button again to dismiss the form before the Show button works. By clicking on a book title in the Show form it gets deleted. The text box was meant to experiment with updating the book's author and dealing with typing input. There is no functionality to save the changes.


There are some subjects of the course I simply did not have time to implement or experiment with, mainly Redux and Jest. 


As a QA who recently made the switch from manual to automation testing a lot of these technologies are fairly new to me and the learning curve has been very steep. Nevertheless, I have learned a lot, but realise I have a long way to go to become proficient. I am currently taking some courses on Udemy which I find are very benificial.

If there is one comment I can make to improve the course it would be the following: the course introduces all the building blocks that go into creating a modern web application but what I missed was an overview of how these building blocks work together and how one would start designing and building an application from the ground up. To compare it with building a house: I learnt what a brick is and a door frame and roof tiles, but not how to construct a house from them, nor how to draw a plan for what the house should look like. 

Regards, Leo