const observer = new IntersectionObserver((e) => {
    e.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenelements = document.querySelectorAll(".skillHidden");
hiddenelements.forEach((el) => observer.observe(el));

function easteregg() {
    alert("πμΆνλλ¦½λλ€ λΉμ μ μ΄μ€ν°μκ·Έλ₯Ό λ°κ²¬νμ¨μ΅λλ€!!");
}

function githubLink() {
    var github = "http://github.com/noobnuby";
    window.open(github);
}

function emailLink() {
    window.location.href = "mailto:me@noobnuby.com";
}

function discordLink() {
    var discord = "https://discord.com/users/878092667156856882";
    window.open(discord);
}
