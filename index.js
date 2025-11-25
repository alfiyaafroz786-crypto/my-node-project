const http = require('http');

const app = http.createServer((req,res) =>{

    const head = `<html>
    <head><title>Laundry Services</title>
    <style>/* body section */
*{ margin: 0; padding: 0; box-sizing: border-box; }
body{ background-color: #ffffff;}
/* header section */
header{ height: 10vh; }
.navbar{ display: flex; justify-content: space-around; align-items: center; gap: 15px; padding: 8px; }
.navbar h1{ color: #61656B; }
.nav-list ul { display: flex; gap: 2.5rem; }
.nav-list ul li{ list-style: none; }
.nav-list ul li a{ text-decoration: none; color: #8D898E; font-size: 1.1rem; }
.username{ background-color: #E6F6FF; border-radius: 12px; padding: 1rem; color: #87CFFF; font-size: 1rem; font-weight: bold; }
/* main section */
main, section{ height: 90vh;}
.services{ display: grid; grid-template-columns: 1fr 1fr; padding: 30px 24%; align-items: center; }
.services-content h2 { font-size: 2.4rem; color: #4B5B67; line-height: 1.4; }
.services-content p { color: #A0A8AE; font-size: 1rem; line-height: 1.8; margin-bottom: 1.5rem; }
.services-content .text-highlight { color: #06A8FF; font-weight: bold; }
.services-content button { background-color: #30B4FF;color: white; padding: 1rem 2rem; border: none; border-radius: 12px; font-size: 0.8rem;
cursor: pointer; font-weight: 600;}
.services-image img { width: 100%; height: auto; object-fit: contain; }
/* media queries */
@media only screen and (max-width: 1200px) { .nav-list ul { gap: 2rem;}.services{ padding: 30px 20%;}}
@media only screen and (max-width: 1024px) {.services{ padding: 30px 15%;}}
@media only screen and (max-width: 768px) { .services { padding: 30px 6%;}}
@media only screen and (max-width: 500px) {
  header{ height: 20vh;}
  main, section{ height: 80vh; }
  .navbar{ flex-direction: column; gap: 8px; padding: 5px; }
  .username{ padding: 0.6rem; }
  .services { text-align: center; grid-template-columns: 1fr; padding: 8px 8%; }
  .services-content h2 { font-size: 1.8rem; }
  .services-content p { line-height: 1.2; margin-bottom: 0.8rem; }
  .services-content button { padding: 12px; font-size: 0.6rem; }
  .services-image img { width: 50%;} }</style>
    </head>
    <body>
    <!-- HEADER SECTION START -->
    <header>
      <div class="navbar">
        <!-- logo -->
        <div class="logo">
          <h1>Logo</h1>
        </div>
        <!-- menu -->
        <div class="nav-list">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <!-- user-details -->
        <div class="username">
          <span>Username</span>
        </div>
      </div>
    </header>
    <!-- HEADER SECTION END -->
     <!-- MAIN SECTION START -->
    <main>`;

    if(req.url === '/home' || req.url === '/'){
        res.write(head+`
      <!-- section1 -->
      <section class="services" id="services">
        <!-- left part -->
        <div class="services-content">
          <h2>Revitalize Your</h2>
          <h2>Clothes with Expert</h2>
          <h2 class="text-highlight">Laundry Services!</h2>
          <p>
            From premium dry cleaning to swift wash and fold, we deliver care
            and convenience. Schedule a pickup and rediscover the freshness of
            your clothes today!
          </p>
          <a href="/services"><button>Book a service today!</button></a>
        </div>
         <!-- right part -->
        <div class="services-image">
          <img src="https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Laundry Service" />
        </div>
      </section>
    </main>
    <!-- MAIN SECTION END -->
    </body>
    </html>`);
        return res.end();
    }else if(req.url === '/about'){
        res.write(head+`<section class="services" id="services">
        <div class="services-content">
          <h2>About Us Page</h2></div></div></main></body></html>`);
        return res.end();
    }else if(req.url === '/contact'){
        res.write(head+`<section class="services" id="services">
        <div class="services-content">
          <h2>Contact Us Page</h2></div></div></main></body></html>`);
        return res.end();
    }else if(req.url === '/services'){
        res.write(head+`<section class="services" id="services">
        <div class="services-content">
          <h2>Services Page</h2></div></div></main></body></html>`);
        return res.end();
    }else{
        res.write(`<h1>404 Not Found</h1>`);
        return res.end();
    }
});
const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`NodeJs server is up and running - http://localhost:${PORT}`);
});
