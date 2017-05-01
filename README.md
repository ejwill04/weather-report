# Weather Report

## Code Exercise

Write an application using React/Redux that allows a user to search the current weather by city. The application should also allow a user to view previous searches. Pull current weather data from the Open Weather Map Current API (https://openweathermap.org/current). You will need to sign up to get an API key.

### Step 1

Create a page that allows a user to type in a city and search for the current weather. The current weather will be displayed back to the user and should include:

* current conditions
* brief description of weather
* city name
* time of the search

### Step 2

Display a list of the user's search history. The history should include the same displayed fields as above. You can display both the current search and history on the same page.

### Extra credit

* Add four passing tests ( 2 reducer tests, 1 action test, and 2 unit tests )
* Add an alert when the city does not exist
* Add some small UI features like disabling the submit button when the input is blank and clearing the input when the city is found
* Add responsiveness
