/* 1. CART MEMORY */
// Loads saved items or starts empty 
let cart = JSON.parse(localStorage.getItem("squareCareCart")) || [];

/* 2. ON LOAD */
function welcomeMessage() {
    console.log("Square Care: Clinical routine initialized.");
    updateCart(); // Syncs UI with memory 
}

/* 3. ADDING PRODUCTS */
function addToCart(product) {
    cart.push(product); // Add to list 
    localStorage.setItem("squareCareCart", JSON.stringify(cart)); // Save 
    alert(product + " added to your Square routine.");
    updateCart();
}

/* 4. REFRESHING THE CART UI */
function updateCart() {
    let count = document.getElementById("cartCount");
    let list = document.getElementById("cartItems");
    
    if(count) count.innerText = cart.length; // Update number 
    
    if(!list) return;
    list.innerHTML = ""; // Clear list before rebuilding 
    
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.style.padding = "10px 0";
        li.style.borderBottom = "1px solid #eee";
        li.innerHTML = `<span>■ ${item}</span>`; // Square bullet point
        list.appendChild(li);
    });
}

/* 5. UI INTERACTION */
function toggleCart() {
    // Slides panel in/out [cite: 47]
    document.getElementById("cartPanel").classList.toggle("active");
}

function clearCart() {
    cart = [];
    localStorage.removeItem("squareCareCart"); // Wipe memory 
    updateCart();
}

function toggleDetails(id) {
    let current = document.getElementById(id);
    // Switch between hidden and visible 
    if(current.style.display === "block") {
        current.style.display = "none";
    } else {
        current.style.display = "block";
    }
}

/* 6. FORM SUBMISSION */
const contactForm = document.getElementById("contactForm");
if(contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop page refresh 
        let name = document.getElementById("name").value;
        alert("Thank you, " + name + ". Your consultation request is received.");
        this.reset();
    });
}

function toggleDetails(id) {
    // 1. Find the element the user clicked
    let current = document.getElementById(id);
    
    // 2. Get all other detail boxes on the page
    let allDetails = document.querySelectorAll('.details');
    
    // 3. Loop through them and hide them (except the one clicked)
    allDetails.forEach((detail) => {
        if (detail.id !== id) {
            detail.style.display = "none";
        }
    });

    // 4. Toggle the clicked one
    if (current.style.display === "block") {
        current.style.display = "none";
    } else {
        current.style.display = "block";
    }
}
