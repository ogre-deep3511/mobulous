# mobulous_assesment_api

Solution to question 1 is in question1.js <br />
Solution to question 2 is in question2.js <br />
Solution to question 6 is in question6.md <br />

<br />
Solution to question 3, 4, 5 are implemented <br />

<br />

## Routes

- Register: http://localhost:8080/register
- login: http://localhost:8080/login
- Relation of two tables: http://localhost:8080/lookup

### Postman cURL

- Register: <br />
  curl --location --request POST 'http://localhost:8080/register' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "name": "Deepak Kumar Oraon",
  "email": "deep.deepak.3891@gmail.com",
  "phone": "9122183036",
  "age": 24,
  "gender": "Male",
  "password": "1241@deep"
  }'

- Login: <br />
  curl --location --request POST 'http://localhost:8080/login' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "email": "deep.deepak.3891@gmail.com",
  "password": "1241@deep"
  }'

- lookup: <be />
  curl --location --request GET 'http://localhost:8080/lookup'
