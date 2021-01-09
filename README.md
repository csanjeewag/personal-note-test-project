# Test Resources #

This project is for testing project given in Thirdfort

### Pre Requirements ###

1. NodeJs v12.x.x higher version 
2. MongoDB 5.x.x higher version

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### How To Start Project ###

## Node module install ##

```node
npm install
``` 

## Start Project ##
```node
npm start 
``` 

Server start : http://localhost:8000

## Project description ##

The text file can be altered and saved back in an archived or non-archived state
This is a REST API based project developed in NodeJs to manage personal notes. The content is saved in .txt files. The content is not stored in the Database. And the text files are saved in the server whereas the other details such as user ID, file name, title, and created time. Based on user preference the user can save the file in a.txt file format or .zip archive file format. The text can be retrieved in two ways which are if it’s an archived file it can be retrieved in archived format and if the content is saved in a text file it can be retrieved in the same file format. The content in the text file can be modified and saved back either as an archived file or a text file.  

## Assumptions ##

1. When creating a note it’s essential to add the User ID.
2. Initially at the file create stage the user can either archive the file or save it as a file itself. But the archived file cannot be reverted back into the non-archived stage.
3. The list of archived files or non-archived files can be obtained based on user ID.
4. The text in a non-archived file can be 
5. In a non-archived file, the text can be edited 
6. To authenticate should be send user Id with header as an 'access-token' regarding notes or a note. Then only access to update, delete and read.



# APIS

## API postman samples

https://schema.getpostman.com/json/collection/v2.1.0/collection.json

## add a note

create a new note
```node
http://localhost:8000/api/v1/note/add
```
* response at success
```node
{
    "status": "success",
    "message": "Success, create a new note."
}
```
* response at failure
```node
{
    "error": "error",
    "message": "The file has not been added, check again."
}
```

get archive or text files by userId
```node
http://localhost:8000/api/v1/note/unarchive/1
```
* response at success (unarchived)
```node
{
    "status": "success",
    "message": "The unarchived list has been obtained.",
    "data": [
        {
            "isArchive": false,
            "_id": "5ff98240fb6f904188d31542",
            "userId": "1",
            "titile": "my pet",
            "fileName": "kW8TTWbe1s.txt",
            "createdAt": "2021-01-09T10:15:28.650Z",
            "updatedAt": "2021-01-09T10:15:28.650Z",
            "__v": 0
        }
    ]
}
```
* response at success (archived)
```node
http://localhost:8000/api/v1/note/archive/1
```

```node
{
    "status": "success",
    "message": "The archived list has been obtained.",
    "data": [
        {
            "isArchive": true,
            "_id": "5ff98080d78e2606702dd7ef",
            "userId": "1",
            "titile": "about me",
            "fileName": "TdHHKNXjuz.txt.zip",
            "createdAt": "2021-01-09T10:08:00.215Z",
            "updatedAt": "2021-01-09T10:08:00.215Z",
            "__v": 0
        }
    ]
}
```

get details of a note
```node
http://localhost:8000/api/v1/note/5ff9576ef510ce034cabbe0e
```
* response at success
```node
{
    "status": "success",
    "message": "The unarchived list has been obtained.",
    "data": [
        {
            "isArchive": false,
            "_id": "5ff98240fb6f904188d31542",
            "userId": "1",
            "titile": "my pet",
            "fileName": "kW8TTWbe1s.txt",
            "createdAt": "2021-01-09T10:15:28.650Z",
            "updatedAt": "2021-01-09T10:15:28.650Z",
            "__v": 0
        }
    ]
}
```
* response at failure
```node
{
    "error": "error",
    "message": "Invalid user id."
}
```

chanage file format to archived
```node
http://localhost:8000/api/v1/note/toArchive/5ff8d770d152682be8269720
```
* response at success
```node
{
    "status": "success",
    "message": "Conversion to archived format is success."
}
```
* response at failure
```node
{
    "status": "error",
    "message": "The file has not been archived, check again."
}
```

chanage file format to unarchived
```node
http://localhost:8000/api/v1/note/tounArchive/5ff8d770d152682be8269720
```
* response at success
```node
{
    "status": "success",
    "message": "Conversion to unarchived format is success."
}
```
* response at failure
```node
{
    "status": "error",
    "message": "The file has not been unarchived, check again."
}
```

update content,titile in the file
```node
http://localhost:8000/api/v1/note/update/5ff98240fb6f904188d31542
```
* response at success
```node
{
    "status": "success",
    "message": "Succesfully updated."
}
```
* response at failure
```node
{
    "status": "error",
    "message": "Your file is archive file, can not modify"
}
```
remove files archive or not
```node
http://localhost:8000/api/v1/note/delete/5ff95554f510ce034cabbe0d
```
* response at success
```node
{
    "status": "success",
    "message": "Delete is complete"
}
```
* response at failure
```node
{
    "error": "error",
    "message": "The file has not been deleted."
}
```

# technologies

* node.js , cloud mongo db (atlas)

There are not heavy CPU processing functions. simple REST API. could MongoDB used as a DB.