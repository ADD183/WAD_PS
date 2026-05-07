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
