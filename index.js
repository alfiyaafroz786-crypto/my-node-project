// IMPORTING HTTP MODULE
const http = require('http');

// FILE SYSTEM MODULE
const fs = require("fs");

// PATH MODULE
const path = require("path");

// PORT NUMBER
const PORT = 3000;

// CREATING SERVER
const app = http.createServer((req,res) => {

    // ROUTES
    if (req.url === "/" || req.url === "/home" || req.url === "") {
        return loadHTMLFile("home.html", "text/html", res);
    }
    else if (req.url === "/about") {
       return loadHTMLFile("about.html", "text/html", res);
    }
    else if (req.url === "/contact") {
        return loadHTMLFile("contact.html", "text/html", res);
    }
    else if (req.url === "/service") {
        return loadHTMLFile("service.html", "text/html", res);
    }
    else if (req.url === "/privacy") {
        return loadHTMLFile("privacy.html", "text/html", res);
    }
    else if (req.url === "/term") {
        return loadHTMLFile("term.html", "text/html", res);
    }
    else if (req.url === "/refund") {
        return loadHTMLFile("refund.html", "text/html", res);
    }
    else if(req.url.startsWith("/assets")) {
        return loadStaticAssets(req.url, res);
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("404 Not Found");
    }

    // LOAD HTML FILES
    function loadHTMLFile(filename, contentType, res, statusCode = 200) {
        const headerPath = path.join(__dirname, "public", "common", "header.html");
        const footerPath = path.join(__dirname, "public", "common", "footer.html");
        const pagePath   = path.join(__dirname, "public", "pages", filename);
        fs.readFile(headerPath, "utf8", (err, header) => {
        fs.readFile(pagePath, "utf8", (err2, pageContent) => {
        fs.readFile(footerPath, "utf8", (err3, footer) => {
            const finalHtml = header + pageContent + footer;
            res.writeHead(statusCode, { "Content-Type": contentType });
            res.end(finalHtml);
        });
        });
        });
    }

    // LOAD ASSETS FILES
    function loadStaticAssets(url, res) {
        const filePath = path.join(__dirname,"public", url); 
        const ext = path.extname(filePath);
        const mimeTypes = {
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
            ".gif": "image/gif",
            ".css": "text/css",
            ".js": "application/javascript"
        };
        const contentType = mimeTypes[ext] || "application/octet-stream";
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end("File Not Found");
            } else {
                res.writeHead(200, { "Content-Type": contentType });
                return res.end(data);
            }
        });
    }
});

// LISTENING SERVER
app.listen(PORT,()=>{
    console.log(`Laundry Services Server is up and running on: http://localhost:${PORT}`);
});
 