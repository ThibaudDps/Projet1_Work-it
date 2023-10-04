document.addEventListener("DOMContentLoaded", function () {
  const profils = [
    {
      photoUrl: "https://placekitten.com/200/287",
      nom: "John D.",
      metier: "Développeur Web",
      localisation: "Paris",
      experience: 3,
    },

    {
      photoUrl: "https://placekitten.com/200/287",
      nom: "Jane S.",
      metier: "Designer UX",
      localisation: "Lyon",
      experience: 5,
    },
    {
      photoUrl: "https://placekitten.com/200/287",
      nom: "Marc B.",
      metier: "Data Analyst",
      localisation: "Bordeaux",
      experience: 2,
    },
    {
      photoUrl: "https://placekitten.com/200/287",
      nom: "James R.",
      metier: "Chef de projet",
      localisation: "Orléans",
      experience: 5,
    },
    {
      photoUrl: "https://placekitten.com/200/287",
      nom: "Adel K.",
      metier: "Développeur Web",
      localisation: "Strasbourg",
      experience: 4,
    },
    {
      photoUrl: "https://placekitten.com/200/287",
      nom: "Greg D.",
      metier: "Designer UX",
      localisation: "Nantes",
      experience: 1,
    },
    {
      photoUrl: "https://placekitten.com/200/287",
      nom: "Thib D.",
      metier: "Développeur Web",
      localisation: "Paris",
      experience: 3,
    },
    {
      photoUrl: "https://placekitten.com/200/287",
      nom: "Julien S.",
      metier: "Graphiste",
      localisation: "Bordeaux",
      experience: 5,
    },
    {
      photoUrl: "https://placekitten.com/200/287",
      nom: "Marie H.",
      metier: "Développeur Web",
      localisation: "Lille",
      experience: 2,
    },
    {
      photoUrl: "https://placekitten.com/200/287",
      nom: "Alex R.",
      metier: "Ingénieur système",
      localisation: "Marseille",
      experience: 5,
    },
    {
      photoUrl: "https://placekitten.com/200/287",
      nom: "Mindy M.",
      metier: "Graphiste",
      localisation: "Paris",
      experience: 4,
    },
    {
      photoUrl: "https://placekitten.com/200/287",
      nom: "Bob R.",
      metier: "Développeur Web",
      localisation: "Nantes",
      experience: 1,
    },
  ];
  /*  récuperez les input par leur ID */

  const metiersInput = document.getElementById("metiers-input");
  const localiteInput = document.getElementById("localite-input");
  const experienceInput = document.getElementById("experience-input");

  /* afficherer les résultats */
  const resultatsSection = document.querySelector(".resultats");

  /* ecouter les input sur les champs de saisie */
  metiersInput.addEventListener("input", handleSearch);
  localiteInput.addEventListener("input", handleSearch);
  experienceInput.addEventListener("input", handleSearch);

  /* Fonction de recherche et d'affichage des résultats */
  function handleSearch() {
    // Récupérer les valeurs saisies par l'utilisateur
    const metiersValue = metiersInput.value.toLowerCase();
    const localiteValue = localiteInput.value.toLowerCase();
    const experienceValue = experienceInput.value.toLowerCase();

    /* Filtre des profils en fonction des critères de recherche */
    const results = profils.filter((profile) => {
      return (
        profile.metier.toLowerCase().includes(metiersValue) &&
        profile.localisation.toLowerCase().includes(localiteValue) &&
        profile.experience.toString().includes(experienceValue)
      );
    });

    /* effacer le contenu précédent dans la section des résultats */
    resultatsSection.innerHTML = "";

    /* afficher les résultats trouvés ou un message si aucun résultat n'est trouvé */
    if (results.length === 0) {
      resultatsSection.innerHTML = "<p>Aucun résultat trouvé.</p>";
    } else {
      results.forEach((profile) => {
        /* Créer un élément de carte pour chaque profil trouvé */
        const profileCard = document.createElement("div");
        profileCard.classList.add("card");

        /* Construire le contenu de la carte en utilisant les données du profil */
        const profileName = document.createElement("h3");
        profileName.textContent = profile.nom;

        const profileDetails = document.createElement("p");
        profileDetails.textContent = `${profile.metier} · ${profile.localisation} · ${profile.experience} ans`;

        /* ajouter le contenu à la carte */
        profileCard.appendChild(profileName);
        profileCard.appendChild(profileDetails);

        /* ajout la carte à la section des résultats */
        resultatsSection.appendChild(profileCard);
      });
    }
  }
});
