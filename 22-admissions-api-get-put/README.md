# Admissions API (GET/PUT)

## Setup
1. Install dependencies: `npm install`
2. Create `.env` using `.env.example` and add your MongoDB Atlas connection string.
3. Run server: `npm start`

## Endpoints
- GET `/api/applicants` - list all applicants
- GET `/api/applicants/:id` - get one applicant
- PUT `/api/applicants/:id` - update applicant

## Sample Body
```json
{
  "fullName": "Aryan Dhamdhere",
  "email": "aryan@example.com",
  "course": "IT",
  "status": "approved"
}
```
PS C:\Users\Admin\Desktop\WAD PS\22-admissions-api-get-put> npm start

> admissions-api-get-put@1.0.0 start
> node server.js

Server running on http://localhost:3000
MongoDB connected


Step 2: Insert Command in MongoDB Atlas
Step 3: Postman commands for 22

GET all

Method: GET
URL: http://localhost:3000/api/applicants
GET by id

Method: GET
URL: http://localhost:3000/api/applicants/<id>

PUT update

Method: PUT
URL: http://localhost:3000/api/applicants/<id>
Body → raw → JSON:
{
  "status": "approved"
}
