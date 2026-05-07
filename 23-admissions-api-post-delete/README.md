# Admissions API (POST/DELETE)

## Setup
1. Install dependencies: `npm install`
2. Create `.env` using `.env.example` and add your MongoDB Atlas connection string.
3. Run server: `npm start`

## Endpoints
- POST `/api/applicants` - create applicant
- DELETE `/api/applicants/:id` - delete applicant

## Sample Body
```json
{
  "fullName": "Aditi Sharma",
  "email": "aditi@example.com",
  "course": "IT",
  "status": "pending"
}
```

Step 2: POST (create)
Postman:

Method: POST
URL: http://localhost:3000/api/applicants
Body → raw → JSON:
{
  "fullName": "Aditi Sharma",
  "email": "aditi@example.com",
  "course": "IT",
  "status": "pending"
}
Response will include _id. Copy it.

Step 3: DELETE
Postman:

Method: DELETE
URL: http://localhost:3000/api/applicants/<id>


