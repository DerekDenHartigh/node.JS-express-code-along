1)  npm init in folder
    initializes the folder with npm (similar to git init)
2)  npm install express
    downloads a lot of packages
3)  copy paste code from lms slides with app.get/app.put/app.post/app.delete
4)  npm start (in the console)

What is express for?
Epress is a framework for building rest APIs w/ node.JS

What is router for?
breaking up routes to differentiate modules

How de we access body and params?
    use express.JSON // app.use(express.json());
        body: then you have access to req.body
        params: then you have access to req.params
            req = the request param of a get()
                express.Router().get("/pathway", (req, res) => {
                res.send("sending message");
                });
        
What is Postman used for?
    