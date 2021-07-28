## shopping-list

# Aim:
Create an app to help users with their grocery shopping.

# Install
In the terminal run the following commands:
`npm install` 
`npm install knex`
`npm install knex sqlite3`
`npx knex migrate:latest --knexfile knexfile.js migrate:latest`
`npx knex --knexfile knexfile.js seed:run`

# Run
In the terminal type 'npm start' in order to run the code, if a browser doesn't automatically open, in your prefered internet browser type 'localhost:3000' and the app should be running there.

# Structure
This app is developed on react.js for the front end and sqlite3 for the back end.
The reason for using this stack is: for react, it is a simple and efficient way to use 'state' for each item to be added to the list; giving freedom to add, edit or delete items and for the app to be fast and reliable with no 'loading times'.
sqlite3 is ideal for low data and specially efficient for mobile apps, since this is an app that would be used in a smartphone or tablet and would not use a lot of data to be stored, sqlite3 is perfect for this app.

# Known Issue
The app is still not running with the database but it is set up. Given enough time, I would have been able to make the relations between react and sqlite in order to store the data. And I couldn't make the 'edit' funcionality to work properly in the app... yet.
