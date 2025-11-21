# Assignment 6 - Simple Web Server using nodejs

## About:
    This Node.js server is built using the built-in http, fs, and path modules. When the server receives a request, it checks the requested URL and decides which file to send back to the browser.

    1. Handling Page Routes
        > For routes such as /, /home, /about, /contact, etc., the server calls the loadHTMLFile() function.
        > This function:
            >> Reads the header.html, the required page HTML, and the footer.html
            >> Combines them into one complete HTML document
            >> Sends the final HTML to the browser
            >> This allows the website to reuse the same header and footer across all pages.

    2. Serving Static Files (CSS, JS, Images)
        > If the URL starts with /assets, the server calls loadStaticAssets().
        > This function:
            >> Locates the requested file inside the /public/assets folder
            >> Determines the correct MIME type (CSS, JS, PNG, JPG, etc.)
            >> Reads the file using fs.readFile()
            >> Sends the file back with the correct Content-Type header
            >> This is how CSS, JavaScript, and images load properly.

    3. 404 Handling
        > If the requested route does not match any known page or asset, the server responds with: 404 Not Found
        > This prevents the browser from hanging on invalid URLs.

    4. Server Startup
        > Finally, the server listens on port 3000, and once started it prints: Laundry Services Server is up and running on: http://localhost:3000

## Technology:
    > HTML, CSS, Javascript
    > Node JS, Nodemon
    > Email JS
    > GIT GitHub, Netlify

## Editor: 
    > VS Code

## Project Setup command:
    > npm init
    > npm i nodemon --save-dev
    > npm run dev

## Git command:
    > git config --global user.name "username"
    > git config --global user.email "email"
    > git config --global color.ui auto
    > git remote add origin github-https-url
    > git init 
    > git rm -r --cached folder-or-file-name
    > git status 
    > git add . 
    > git commit -m "message"
    > git branch -M main
    > git push -u origin main or git push

## Email JS Key:
    > Service Key
    > Template Key
    > Public Key

## GitHub URL: 
    > https://github.com/alfiyaafroz786-crypto/my-node-project

## Netlify URL:
    > https://alfiyaafroz-assignment6.netlify.app/

## Project Screenshot: 
    > Inside screenshot folder

