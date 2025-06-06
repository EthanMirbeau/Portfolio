document.addEventListener("DOMContentLoaded", function () {

    /*** Preloader - Animation de chargement ***/
    const preloader = document.getElementById("preloader");
    if (preloader) {
        window.addEventListener("load", function () {
            preloader.classList.add("hidden");
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        });
    }

    /*** Effet de texte dynamique (Machine à écrire) ***/
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

    /*** Validation du formulaire ***/
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

    // Afficher le bouton lorsque l'utilisateur fait défiler la page
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.btn-top');
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

    /*** Défilement fluide vers le haut ***/
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

    /***  Affichage de lignes de code avec effet machine à écrire ***/
    const codeLines = [
        "function greet(name) { console.log('Bienvenue ' + name + ' sur mon portfolio ! Vous y découvrirez mon parcours, mes expériences, mes formations, mes projets réalisés,;",
        "ma veille technologique et mes compétences en développement.'); }",
        "",
        "const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Java', 'C', 'CMS', 'MySQL', 'PL/SQL'];",
        "skills.forEach(skill => console.log(`✔ Compétence acquise : ${skill} - Toujours en quête d'amélioration et d'innovation !`));",
        "",
        "const projects = [",
        "   { name: 'Site Vitrine', tech: ['HTML', 'CSS', 'JavaScript'] },",
        "   { name: 'Application React', tech: ['React', 'Node.js', 'MongoDB'] },",
        "   { name: 'Gestionnaire de Tâches', tech: ['Java', 'Spring Boot', 'MySQL'] }",
        "];",
        "projects.forEach(project => console.log(`🚀 Projet : ${project.name} | Technologies : ${project.tech.join(', ')}`));",
        "",
        "let updateCount = 0;",
        "setInterval(() => { console.log(`🔄 Mise à jour #${++updateCount} : Mon portfolio évolue avec de nouvelles compétences, projets, formations et expériences !`); }, 500);",
        "",
        "function contactMe() {",
        "   console.log('📩 N'hésitez pas ! Contactez-moi pour toute collaboration ou échange technique !');",
        "}",
        "contactMe();",
        "",
        "// Mes projets open-source sur GitHub :",
        "const githubProjects = ['Project A', 'Project B', 'Project C'];",
        "githubProjects.forEach(project => console.log(`🌍 Code source ouvert : ${project} | Retrouvez-moi sur GitHub`));",
    
        "// N'hésitez pas à explorer mon portfolio et à me suivre pour voir mes dernières réalisations !",
        "// Contactez-moi également sur mes réseaux professionnels (LinkedIn, GitHub, etc.).",
        "// Fin du script."
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