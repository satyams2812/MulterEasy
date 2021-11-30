# Steps
1. Put MongoURI on key.js File in Config Folder 
eg - mongodb+srv://satyam:<password>@cluster0.ziri6.mongodb.net/sfasf?retryWrites=true&w=majority
2. Before Proceed Please npm install for packages 
3. nodemon index.js for run the project


//POST
@access - public
@desc   - post photos,name,description
@data   - photos(form-data/array type), name: String, description: String
http://localhost:5000/data  

//GET
@access - public
@desc   - retrieve all data of product
http://localhost:5000/data  

//GE
@access - public
@desc   - retrieve Product by id
http://localhost:5000/data/:id

