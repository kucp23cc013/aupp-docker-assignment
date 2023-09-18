# aupp-docker-assignment

- ENV:
	- **MONGO_DB_URI**
- API:
	- /: [GET] root url
	- /api/employees: [POST] create employee API
 - Example request body:
```json
    {
        "empid": 2,
        "name": "minuth prom 123",
        "emailid": "minuth@gmail.com",
        "password": "12345"
    }
```
- /api/login: [POST] login API (with data that avialable in. database. Use )
- Example request body:
```json
{
  "emailid": "minuth@gmail.com",
  "password": "12345"
}
```
- /api/employees: [GET] list all empoyee API
- /api/employees/{empid}: [GET] get employee detail API

> Docker Image: kucp23cc013/docker-node-assignment
