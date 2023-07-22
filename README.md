# The URL Mage
A mage to shorten your URL

![image](/images/demo.jpg)

# Features

1. Input your URL
2. Click 'Shorten'  
3. Then you get a shorten URL to use
4. The shorten URL leads you to the original website
5. A same shorten URL for a same original URL 
6. If the shorten URL doesn't exist, he may ask you to generate a new one


# Installation and execution

1. Clone the project

2. Install the required dependencies

```
npm install
```

3. Install nodemon

```
npm i nodemon
```

3. Connect to MongoDB

create a file called '.env' in the root folder, 
add this and save:

MONGODB_URI=mongodb+srv://(Your MongoDB Account):(Your MongoDB Password)@cluster0.xxxx.xxxx.net/(Your MongoDB Table)?retryWrites=true&w=majority

4. Start the server

```
npm run dev
```

5. Execute successfully if seeing following message

```
Express is listening on localhost:3000
```

# Set Up

- Runtime: node @ 18.14.0
- Framework: express @ 4.18.2
- Template Engine: express-handlebars @ 4.0.2
- Database: MongoDB / mongoose @ 5.13.16
- Check package.json for other dependencies
