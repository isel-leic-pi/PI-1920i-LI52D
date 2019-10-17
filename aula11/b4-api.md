# Better Book Bundle Builder API documentation

The base part of the URI path for the bundles API is `/b4/api`

The following sections describe each API endpoint.

## Obtain all bundles

```http
GET /bundles
```

- Request:
  - Body: none
- Response:
  - Success:
    - Status code: 200
    - Content-Type: application/json
    - Body example:

    ```json
      {
        "bundles": [
          {
            "id": 1,
            "name": "bundle1",
            "description": "description of bundle 1"
          },
          {
            "id": 2,
            "name": "bundle2",
            "description": "description of bundle 2"
          },
          ...
        ]
      }
    ```

---

## Obtain a specific bundle

```http
GET /bundles/:id
```

- Request:
  - Path parameters:
    - id - The bundle identifier
  - Body: none
- Response:
  - Success:
    - Status code: 200
    - Content-Type: application/json
    - Body:

    ```json
        {
          "id": 1,
          "name": "bundle1",
          "description": "description of bundle 1"
          "books": [  
            {
              ...
            }
          ]
        }
    ```

  - Errors:
    - 400 and 404 (see Common Error Handling section)

---

## Create a Bundle

```http
POST /bundles
```

- Request:
  - Content-Type: application/json
  - Body:

```json
  {
    "name": "bundle1",
    "description": "description of bundle 1"
  },  

```

- Response:
  - Success:
    - Status code: 201
    - Headers:
      - Location: `/b4/api/bundles/2`
    - Content-Type: application/json
    - Body example:
 
    ```json
      {
        "status" : "Bundle create",
        "uri": `/b4/api/bundles/2`
      }
    ```
  
---

## Update a Bundle

```http
PUT /bundles/:id
```

- Request:
  - Path parameters:
    - id - The bundle identifier
  - Content-Type: application/json
  - Body:

```json
  {
    "name": "bundle11",
    "description": "description of bundle 11"
  },  

```

- Response:
  - Success:
    - Status code: 200
    - Content-Type: application/json
    - Body example:
 
    ```json
      {
        "status" : "Bundle updated",
        "uri": `/b4/api/bundles/2`
      }
    ```

  - Errors:
    - 400 and 404 (see Common Error Handling section)
  
---

## Delete a Bundle

```http
DELETE /bundles/:id
```

- Request:
  - Path parameters:
    - id - The bundle identifier
  - Content-Type: application/json
  - Body: none

- Response:
  - Success:
    - Status code: 200
    - Content-Type: application/json
    - Body example:
 
    ```json
      {
        "status" : "Bundle deleted",
        "uri": `/b4/api/bundles/2`
      }
    ```

  - Errors:
    - 404 (see Common Error Handling section)
  
---

## Associate a Book with a Bundle

```http
PUT /bundles/:id/:book-id
```

- Request:
  - Path parameters:
    - id - The bundle identifier
    - book-id - The book identifier
  - Content-Type: application/json
  - Body: none

- Response:
  - Success:
    - Status code: 200
    - Content-Type: application/json
    - Body example:
 
    ```json
      {
        "status" : "Book associated with a bundle deleted",
        "uri": `/b4/api/bundles/2`
      }
    ```

  - Errors:
    - 404 (see Common Error Handling section)
  
---

## Common Error Handling

This section describes the error handling that is done in every endpoint that produces these erros. This is presented in a separate section to avoid repeating these descriptions wherever it applies.

Every error response has an `application/json` body with the content described for each error.

### 400 - Bad request

Every time the request contains a URI with and invalid QueryString or a Body with invalid Json content for that specific request, the response has a 400 status code with the following sample body:

- Body:

  ```json
      {
        "error": "The request query string is invalid",
        "uri": "/b4/api/budles/?InvalidQueryString",
      }
  ```

### 404 - Not found

Every time the request contains a URI for a resource not managed by the API, the response has a 404 status code with the following sample body.

- Body:

  ```json
      {
        "error": "Resource not found",
        "uri": "/b4/api/budles/notfoundbundle",
      }
  ```
