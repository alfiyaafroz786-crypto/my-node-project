// navnar menus
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector('.hamburger');
  const hamburgerMenu = document.querySelector('.menus');
  hamburgerMenu.addEventListener('mouseenter', () => {
    hamburgerBtn.classList.add('open');
    hamburgerMenu.classList.toggle('active');
  });
  hamburgerMenu.addEventListener('mouseleave', () => {
    hamburgerMenu.classList.remove('open');
  });
  hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
  });
});

// show message if tbody is empty 
function checkEmptyTable() {
  const tbody = document.getElementById("cart-tbody");
  if (tbody.rows.length === 0) {
    tbody.setAttribute('data','no');
    tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; padding:20px;"><img src="/assets/img/services/alert.jpg" width="60" alt="No data">
    <h3>No Items Added</h3><p>Add Items to the cart from the services bar.</p></td></tr>`;
  }
}

// call once at page load
checkEmptyTable();

// add Items
let cart = []; let total = 0;
function addItem(service_name,service_rate,service_no)
{
  const tbody = document.getElementById("cart-tbody");
  tbody.setAttribute('data', 'yes');
  cart.push({service_no,service_name,service_rate});
  updateCart();
}

// update Items
function updateCart() { 
 const tbody = document.getElementById("cart-tbody");
  tbody.innerHTML = " ";
  total = 0;
  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="serial-no">${index+1}</td>
      <td class="service-name">${item.service_name}</td>
      <td class="price">&#8377;&nbsp;${item.service_rate}.00</td>`;
    tbody.appendChild(row);
    total += item.service_rate;
    let service = document.querySelector(".service-" + item.service_no);
    let btn1 = service.querySelector(".add-item-btn");
    let btn2 = service.querySelector(".remove-item-btn");
    btn1.style.display = "none";
    btn2.style.display = "block";
  });
  document.getElementById("total").textContent = `${total}.00`;
  checkEmptyTable();
}

// remove Items
function removeItem(service_name,service_rate,service_no) {
  let service = document.querySelector(".service-" + service_no);
  let btn1 = service.querySelector(".add-item-btn");
  let btn2 = service.querySelector(".remove-item-btn");
  btn1.style.display = "block";
  btn2.style.display = "none";
  cart = cart.filter(item => item.service_name !== service_name);
  updateCart();
}

//book-now
const form = document.getElementById("booking-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("booking-name").value;
  const email = document.getElementById("booking-email").value;
  const phone = document.getElementById("booking-phone-number").value;
  const msg = document.querySelector('.booking-label');
  const tbody = document.getElementById('cart-tbody');
  const total = document.querySelector('.total-amt').textContent;
  const addBtn = document.querySelectorAll('.add-item-btn');
  const removeBtn = document.querySelectorAll('.remove-item-btn');
  const totalUpdate = document.getElementById('total');
  const rows = tbody.querySelectorAll("tr");
  let data = tbody.getAttribute('data');
  if(tbody.rows.length === 1 && data == 'no')
  {
    msg.innerHTML = `<ion-icon name="alert-circle-outline"></ion-icon>&nbsp; Add the items to the cart`;
    msg.style.color = "red";
    setTimeout(() => { msg.innerHTML = `&nbsp;` }, 1000);
  }
  else{
     emailjs.send("service_pak8gjl", "template_hu1yhaw", {
        name: name,
        email: email,
        phone: phone,
        services: tbody.innerHTML,
        total: total
      })
      .then((res) => {
        msg.innerHTML = `<ion-icon name="alert-circle-outline"></ion-icon>&nbsp; Email sent successfully`;
        msg.style.color = "green";
        setTimeout(() => { 
          msg.innerHTML = `&nbsp;`
          tbody.innerHTML = '';
          totalUpdate.textContent = '0.00';
          checkEmptyTable();
          form.reset();
          addBtn.forEach(b1 => {
            b1.style.display = 'block';
          });
          removeBtn.forEach(b2 => {
            b2.style.display = 'none';
          });
          cart.length = 0;
          tbody.setAttribute('data','no');
         }, 1000);
      })
      .catch((err) => {
        console.error("Email send failed", err);
      });
  }
});