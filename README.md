# Contact Management API Documentation

## Overview

The Contact Management API allows users to create, retrieve, update, delete, and search for contacts efficiently. The API follows RESTful principles and provides structured responses.

### **Base URL:**

`https://contact-management-y4of.onrender.com`

## Authentication

This API does not require authentication.

---

## **Endpoints**

### **1. Get All Contacts**

**Endpoint:** `GET /contacts`

**Description:** Fetch all contacts.

**Response:**

```json
{
  "contacts": [
    {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "phoneNumber": "1234567890",
      "address": "123 Street, City",
      "createdAt": "2024-02-10T12:00:00Z"
    }
  ]
}
```

---

### **2. Create a Contact**

**Endpoint:** `POST /contacts`

**Description:** Create a new contact.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "address": "123 Street, City"
}
```

**Response:**

```json
{
  "createdContact": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "address": "123 Street, City",
    "createdAt": "2024-02-10T12:00:00Z"
  }
}
```

---

### **3. Update a Contact**

**Endpoint:** `PUT /contacts/:id`

**Description:** Update an existing contact.

**Request Body:**

```json
{
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```

**Response:**

```json
{
  "statusCode": 200,
  "status": "SUCCESS",
  "message": "Contact updated successfully."
}
```

---

### **4. Delete a Contact**

**Endpoint:** `DELETE /contacts/:id`

**Description:** Delete a contact based on its ID.

**Response:**

```json
{
  "statusCode": 204,
  "status": "SUCCESS",
  "message": "Contact deleted successfully."
}
```

---

### **5. Get a Contact by ID**

**Endpoint:** `GET /contacts/:id`

**Description:** Fetch a specific contact using its ID.

**Response:**

```json
{
  "contactData": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "phoneNumber": "1234567890",
    "address": "123 Street, City",
    "createdAt": "2024-02-10T12:00:00Z"
  }
}
```

---

### **6. Search Contacts**

**Endpoint:** `GET /contacts/search?name=John&email=john@example.com`

**Description:** Search contacts by name or email (case-insensitive).

**Response:**

```json
{
  "contacts": [
    {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "phoneNumber": "1234567890",
      "address": "123 Street, City",
      "createdAt": "2024-02-10T12:00:00Z"
    }
  ]
}
```

---

## **Error Handling**

All errors return structured responses with appropriate HTTP status codes.

Example Error Response:

```json
{
  "statusCode": 400,
  "status": "INVALID_CONTACT_ID",
  "message": "Invalid contact ID."
}
```

| Status Code | Meaning                                                          |
| ----------- | ---------------------------------------------------------------- |
| 400         | Bad request (e.g., missing required fields, invalid email/phone) |
| 404         | Not found (invalid api urls)                                     |
| 500         | Internal server error                                            |

---

## **How to Run Locally**

1. Clone the repository:
   ```sh
   git clone https://github.com/Kalyanpandaga/contact-management.git
   cd contact-management
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following:
   ```
   PORT=5000
   MONGO_URI=<YOUR_MONGO_URI>
   ```
4. Start the server:
   ```sh
   npm run dev
   ```
5. The server will run at `http://localhost:5000`

---

## **Notes**

- All responses return JSON format.
- Ensure request bodies follow the correct structure.
- Searching is case-insensitive and partial matches are supported.

---

### **Developed By:** Kalyan Pandaga 🚀
