# MongoDB and Mongoose workshop

The story for this project is that we store information about popular programming languages in a MongoDB instance, and we can vote on the languages using our React UI.<br>
**In this section, you will familiarize yourself with using the MongoDB database for data storage. Beyond CRUD operations, you will also learn about more advanced sorting, filtering, and aggregations implemented on the database side. The task specifically focuses on the backend part, particularly the aspects related to database operations.**

## Install dependencies
### Install dependencies for Express server
```bash
cd backend
npm install
```
### Install dependencies for React
```bash
cd frontend
npm install
```
## Prepare the Mongo database

- Set your MongoDB URL in the `./backend/config/.env` file.<br>You can find sample setting in `./backend/config/.env.sample` file.
- Run `node backend/db/populate.js` - alternatively you can use `npm run populate` script.

## Launch the backend server

```bash
cd backend
npm run devStart
```

## Launch the frontend

```bash
cd frontend
npm run dev
```
## TASKS: write queries (language.query, feedback.query)
Write your queries in a way that they match the endpoints defined in the respective router (language, feedback). Ensure that all sorting, filtering, or any operations are performed at the database level.
You can find numerous test cases in `./backend/tests`. Feel free to use them for the implementation.

### TASK 1: Get all languages
Write the `getLanguages` function to retrieve all programming languages from the database, returning only their name and langid!

### TASK 2: Get language by langid
Write the `getLanguageById` function in a way that it returns all properties of the programming language with the provided langid as a parameter!

### TASK 3: Create a new language
Write the `createLanguage` function in a way that it saves the provided programming language to the database! The function should be capable of simultaneously saving data for multiple programming languages into the database.

### TASK 4: Sort and filter the languages
Modify the existing `getLanguages` function to be capable of sorting the languages in the database based on name, creation date, or GitHub stars in both ascending and descending order. Additionally, allow the inclusion of a search query that performs a case-insensitive search in the name, designer, and maintainer fields!

### TASK 5: Update language
Write the `updateLanguage` function in a way that it can modify one or more properties of a language with a given langid!

## TASK 6: complex query I.
Write the `getLanguagesByMinStarsOrMinDate` function in a way that it can determine which programming languages have at least 10 stars or were created in 1990 or later. Return these languages sorted alphabetically by name. Each language should include the following properties: langid, name, dob (date of birth), github23_stars!

## TASK 7: complex query II.
Write the `getLanguagesByMaxStarsOrMaxDate` function in a way that it can determine which programming languages have fewer than 10 stars and were created before 1990. Return these languages in ascending order based on the number of stars. Each language should include the following properties: langid, name, dob (date of birth), github23_stars!

## TASK 8: Get all feedbacks
Write the `getFeedbacks` function in a way it can retrieve some feedback from the database!

## TASK 9: Create a new vote
Write the `createFeedback` function so that it can create a new feedback for a specific programming language. The format is as follows: 
```json
{
    "langid": 2,
    "vote": 1
}
```
where `"vote": 1` indicates a positive vote for the given language, and `"vote": -1` indicates a negative vote for the language!

## TASK 10: aggregation
The `./backend/routes/feedback.router.js` contains an endpoint, which provides a reference implementation on how to query the database for aggregated votes, including the count of upvotes and downvotes. Your task now is to implement the same functionality, maintaining the aggregation (summing up votes) at the database level!
