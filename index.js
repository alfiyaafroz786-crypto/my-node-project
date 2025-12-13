const http = require('http');

const app = http.createServer((req,res) =>{
   
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html>
    <head> <title>Laundry Services</title> </head>
    <body>
    <header>
      <div style="display: flex; justify-content: space-around; align-items: center; gap: 15px; padding: 8px;">
        <div>
          <h1 style="color: #61656B;">Logo</h1>
        </div>
        <div>
          <ul style="display: flex; gap: 2.5rem;">
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/home">Home</a></li>
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/services">Services</a></li>
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/about">About Us</a></li>
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div style="background-color: #E6F6FF; border-radius: 12px; padding: 1rem; color: #87CFFF; font-size: 1rem; font-weight: bold;">
          <span>Username</span>
        </div>
      </div>
    </header>
    <main>
      <section style="display: grid; grid-template-columns: 1fr 1fr; padding: 30px 24%; align-items: center;">
        <div>
          <h2 style="font-size: 2.4rem; color: #4B5B67;line-height: 1.6">Revitalize Your <br> Clothes with Expert <br> <b style="font-size: 2.4rem; color: #06A8FF; font-weight: bold;"> Laundry Services! </b></h2>
          <p style="color: #A0A8AE; font-size: 1rem; line-height: 1.8; margin-bottom: 1.5rem; margin-top: -8%;">
            From premium dry cleaning to swift wash and fold, we deliver care
            and convenience. Schedule a pickup and rediscover the freshness of
            your clothes today!
          </p>
          <a href="/services"><button style="background-color: #30B4FF;color: white; padding: 1rem 2rem; border: none; border-radius: 12px; font-size: 0.8rem;
      cursor: pointer; font-weight: 600;">Book a service today!</button></a>
        </div>
        <div>
          <img style="width: 100%;" src="https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Laundry Service" />
        </div>
      </section>
    </main>
    </body>
    </html>`);
        return res.end();

    }else if(req.url === '/about'){
      res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html>
    <head> <title>Laundry Services</title> </head>
    <body>
    <header>
      <div style="display: flex; justify-content: space-around; align-items: center; gap: 15px; padding: 8px;">
        <div>
          <h1 style="color: #61656B;">Logo</h1>
        </div>
        <div>
          <ul style="display: flex; gap: 2.5rem;">
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/home">Home</a></li>
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/services">Services</a></li>
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/about">About Us</a></li>
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div style="background-color: #E6F6FF; border-radius: 12px; padding: 1rem; color: #87CFFF; font-size: 1rem; font-weight: bold;">
          <span>Username</span>
        </div>
      </div>
    </header>
    <main><section style="display: grid; grid-template-columns: 1fr 1fr; padding: 30px 24%; 
          align-items: center;"><div><h2 style="color: #61656B;">About Us Page</h2></div></main></body></html>`);
        return res.end();

    
    }else if(req.url === '/contact'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html>
    <head> <title>Laundry Services</title> </head>
    <body>
    <header>
      <div style="display: flex; justify-content: space-around; align-items: center; gap: 15px; padding: 8px;">
        <div>
          <h1 style="color: #61656B;">Logo</h1>
        </div>
        <div>
          <ul style="display: flex; gap: 2.5rem;">
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/home">Home</a></li>
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/services">Services</a></li>
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/about">About Us</a></li>
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div style="background-color: #E6F6FF; border-radius: 12px; padding: 1rem; color: #87CFFF; font-size: 1rem; font-weight: bold;">
          <span>Username</span>
        </div>
      </div>
    </header>
    <main><section style="display: grid; grid-template-columns: 1fr 1fr; padding: 30px 24%; align-items: center;">
        <div>
          <h2 style="color: #61656B;">Contact Us Page</h2></div></div></main></body></html>`);
        return res.end();

    }else if(req.url === '/services'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html>
    <head> <title>Laundry Services</title> </head>
    <body>
    <header>
      <div style="display: flex; justify-content: space-around; align-items: center; gap: 15px; padding: 8px;">
        <div>
          <h1 style="color: #61656B;">Logo</h1>
        </div>
        <div>
          <ul style="display: flex; gap: 2.5rem;">
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/home">Home</a></li>
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/services">Services</a></li>
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/about">About Us</a></li>
            <li style="list-style: none;"><a style="text-decoration: none; color: #8D898E; font-size: 1.1rem;" href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div style="background-color: #E6F6FF; border-radius: 12px; padding: 1rem; color: #87CFFF; font-size: 1rem; font-weight: bold;">
          <span>Username</span>
        </div>
      </div>
    </header>
    <main><section style="display: grid; grid-template-columns: 1fr 1fr; padding: 30px 24%; align-items: center;">
        <div>
          <h2 style="color: #61656B;">Services Page</h2></div></div></main></body></html>`);
        return res.end();

    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`<h1>404 Not Found</h1>`);
        return res.end();
    }
});

const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`NodeJs server is up and running - http://localhost:${PORT}`);
});
