document.addEventListener("DOMContentLoaded", function () {

    /*** 1️ Preloader - Animation de chargement ***/
    const preloader = document.getElementById("preloader");
    if (preloader) {
        window.addEventListener("load", function () {
            preloader.classList.add("hidden");
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        });
    }

    /*** 2️ Effet de texte dynamique (Machine à écrire) ***/
    const phrases = [
        "Passionné par le Web.",
        "Développeur web full stack.",
        "Toujours en quête d'innovation."
    ];

    let indexPhrase = 0;
    let indexLettre = 0;
    const vitesse = 100;
    const typedText = document.getElementById("typed");

    function typeWriter() {
        if (!typedText) return;
        if (indexLettre < phrases[indexPhrase].length) {
            typedText.innerHTML = phrases[indexPhrase].substring(0, indexLettre + 1) + "<span class='cursor'>|</span>";
            indexLettre++;
            setTimeout(typeWriter, vitesse);
        } else {
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        if (indexLettre > 0) {
            typedText.innerHTML = phrases[indexPhrase].substring(0, indexLettre - 1) + "<span class='cursor'>|</span>";
            indexLettre--;
            setTimeout(eraseText, 50);
        } else {
            indexPhrase = (indexPhrase + 1) % phrases.length;
            setTimeout(typeWriter, 500);
        }
    }

    setTimeout(typeWriter, 500);

    /*** 3️ Effet de scroll sur le header ***/
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", function () {
            header.classList.toggle("scrolled", window.scrollY > 50);
        });
    }

    /*** 4️ Animation d'apparition au scroll ***/
    function ajouterAnimationScroll(sectionSelector) {
        const section = document.querySelector(sectionSelector);
        if (!section) return;

        function checkScroll() {
            const triggerBottom = window.innerHeight * 0.8;
            if (section.getBoundingClientRect().top < triggerBottom) {
                section.classList.add("fade-in");
            }
        }

        window.addEventListener("scroll", checkScroll);
        checkScroll();
    }

    ["propos", "experience", "projets", "veille"].forEach(section => ajouterAnimationScroll(`.${section}`));

    /*** 5 Validation du formulaire ***/
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert("Tous les champs sont obligatoires.");
                event.preventDefault();
            } else {
                alert("Votre message a été envoyé avec succès !");
            }
        });
    }

    /*** 6 Défilement fluide vers le haut ***/
    const backToTop = document.querySelector('.btn-top');
    if (backToTop) {
        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /*** 7 Affichage de lignes de code avec effet machine à écrire ***/
    const codeLines = [
        "function greet(name) { console.log('Bonjour ' + name + ' ! Cette ligne est très longue pour tester comment elle se comporte sur une grande largeur de page, en espérant qu'elle s'étende correctement et remplisse l'espace.'); }",
        "",
        "const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'Ruby', 'Go', 'TypeScript', 'Java', 'Swift', 'Kotlin']; skills.forEach(skill => console.log('I know ' + skill + ', and I am constantly learning more!');",
        "",
        "let count = 0; setInterval(() => { console.log('Ligne de code #' + count++ + ' : Cette ligne de code est volontairement longue pour observer le comportement des longues lignes dans le code, et voir comment elle s'ajuste dans la page en largeur.'); }, 1000);",
        "",
        "// Code à afficher dans le terminal, chaque ligne est volontairement longue pour tester la largeur.",
        "// Ligne après ligne, cela devrait permettre de remplir la page complètement si le texte est bien géré.",
        "function displayCode() { console.log('Code qui défile... Chaque ligne est un test pour la longueur de la ligne dans un format défilant et large.'); }",
        "displayCode();",
        "",
        "for (let i = 0; i < 100; i++) { console.log('Ligne ' + i + ' : Voici une ligne de code supplémentaire pour voir comment elle se comporte lorsque nous ajoutons des lignes de plus en plus longues dans notre script.'); }",
        "",
        "// Fin du code.",
        "// C'est tout pour l'instant, chaque ligne est bien ajustée pour s'étendre sur toute la largeur de la page."
    ];

    const codeElement = document.getElementById('code');

    function typeEffect(lines, index = 0) {
        if (index < lines.length) {
            const div = document.createElement('div');
            div.textContent = lines[index];
            div.style.opacity = "0";
            div.style.transition = "opacity 0.5s";
            codeElement.appendChild(div);
            setTimeout(() => div.style.opacity = "1", 50);
            setTimeout(() => typeEffect(lines, index + 1), 100);
        }
    }

    typeEffect(codeLines);
})