var typed = new Typed(".text", {
    strings: ["MCA Student", "Frontend Developer", "Aspiring Software Engineer"],

    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function openPopup(id) {
    document.getElementById(id).style.display = "block";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

window.addEventListener("scroll", function () {
    let titles = document.querySelectorAll(".sub-title");

    titles.forEach(title => {
        let position = title.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            title.classList.add("show");
        }
    });
});

// INTEREST POPUP
function openInterest(id) {
    document.getElementById(id).style.display = "block";
}

function closeInterest(id) {
    document.getElementById(id).style.display = "none";
}


// SCROLL ANIMATION FOR INTERESTS
window.addEventListener("scroll", function () {

    let interests = document.querySelectorAll(".interest-card");

    interests.forEach(card => {
        let position = card.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            card.classList.add("show");
        }
    });

});


function openPopup(id) {
    document.getElementById(id).style.display = "block";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

/* CLOSE WHEN CLICK OUTSIDE */
window.onclick = function(event) {
    let popups = document.querySelectorAll(".popup");
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
}




window.addEventListener("load", () => {
    document.querySelectorAll(".progress span").forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
    });
});




function openCert(src) {
    document.getElementById("certPopup").style.display = "block";
    document.getElementById("certImg").src = src;
}

function closeCert() {
    document.getElementById("certPopup").style.display = "none";
}