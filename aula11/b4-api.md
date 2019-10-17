# Better Book Bundle Builder API documentation

The base part of the URI path for the bundles API is `/b4/api`

The following sections describe each API endpoint

## Obtain all bundles

- Request:
  - Method: GET
  - Path: `/bundles`
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

- Request:
  - Method: GET
  - Path: `/bundles/:id`
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

  - Error:
    - 404 - When the bundle is not found
  -  Body:
 
    ```json
        {
          "error": "Resource not found",
          "uri": "/b4/api/budled/notfoundbundle",
        }
    ```

---

## Create a Bundle

- Request:
  - Method: POST
  - Path: `/bundles`
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

- Request:
  - Method: PUT
  - Path: `/bundles/:id`
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
  
---

## Delete a Bundle

- Request:
  - Method: DELETE
  - Path: `/bundles/:id`
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
  
---

## Associate a Book with a Bundle

- Request:
  - Method: PUT
  - Path: `/bundles/:id/:book-id`
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
  
---

