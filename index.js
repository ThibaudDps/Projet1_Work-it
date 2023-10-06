/* charger le DOM */

document.addEventListener("DOMContentLoaded", function () {
  const profils = [
    {
      photoUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      nom: "Ipticem D.",
      metier: "Developpeur Web",
      localisation: "Lyon",
      experience: 1,
    },

    {
      photoUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      nom: "John S.",
      metier: "Designer UX",
      localisation: "Lyon",
      experience: 5,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1546961342-ea5f71b193f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      nom: "Farida B.",
      metier: "Data Analyst",
      localisation: "Lille",
      experience: 2,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      nom: "Jennyfer R.",
      metier: "Chef de projet",
      localisation: "Orléans",
      experience: 5,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1507152927179-bc4ebfef7103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      nom: "Adel K.",
      metier: "Developpeur Web",
      localisation: "Strasbourg",
      experience: 4,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      nom: "Greg D.",
      metier: "Designer UX",
      localisation: "Nantes",
      experience: 1,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      nom: "Thib D.",
      metier: "Developpeur Web",
      localisation: "Paris",
      experience: 3,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      nom: "Julien S.",
      metier: "Graphiste",
      localisation: "Bordeaux",
      experience: 5,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      nom: "Marie H.",
      metier: "Developpeur Web",
      localisation: "Lille",
      experience: 2,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      nom: "Yavuz R.",
      metier: "Ingénieur Système",
      localisation: "Marseille",
      experience: 5,
    },
    {
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Joe_Exotic_%28Santa_Rose_County_Jail%29.png/800px-Joe_Exotic_%28Santa_Rose_County_Jail%29.png",
      nom: "Mindy M.",
      metier: "Graphiste",
      localisation: "Paris",
      experience: 4,
    },
    {
      photoUrl:
        "https://www.schmidtspiele.de/files/Autoren/schmidtspiele_autor_bob_ross.jpg",
      nom: "Bob R.",
      metier: "Developpeur Web",
      localisation: "Nantes",
      experience: 1,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80",
      nom: "Theo P.",
      metier: "Developpeur Web",
      localisation: "Bordeaux",
      experience: 2,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      nom: "Christelle E.",
      metier: "Developpeur Web",
      localisation: "Brest",
      experience: 3,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      nom: "Samir F.",
      metier: "Developpeur Web",
      localisation: "Cannes",
      experience: 1,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80",
      nom: "Aline S.",
      metier: "Data Analyst",
      localisation: "Rennes",
      experience: 1,
    },
    {
      photoUrl:
        "https://images.mubicdn.net/images/cast_member/762616/cache-855228-1676220742/image-w856.jpg?size=240x",
      nom: "Boubaker G.",
      metier: "Developpeur Web",
      localisation: "Nantes",
      experience: 1,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      nom: "Alycia K.",
      metier: "Data Scientist",
      localisation: "Paris",
      experience: 3,
    },
    {
      photoUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      nom: "Sarah A.",
      metier: "Developpeur PHP",
      localisation: "Caen",
      experience: 5,
    },
    {
      photoUrl:
        "https://images.ladepeche.fr/api/v1/images/view/5c2cea548fe56f588b4c9f7c/full/image.jpg",
      nom: "Sylvain D.",
      metier: "Developpeur PHP",
      localisation: "Marseille",
      experience: 10,
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

    /* Effacer le contenu précédent dans la section des résultats */
    resultatsSection.innerHTML = "";

    /* Afficher les résultats filtrés */
    results.forEach((profile) => {
      createCard(
        profile.photoUrl,
        profile.nom,
        profile.metier,
        profile.localisation,
        profile.experience
      );
    });
  }

  function createCard(photoUrl, nom, metier, localisation, experience) {
    const card = document.createElement("div");
    card.classList.add("card");
    resultatsSection.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    // Création de l'icône d'étoile pour ajouter aux favoris

    const favorisIcon = document.createElement("i");
    favorisIcon.classList.add(
      "fa-sharp",
      "fa-solid",
      "fa-star",
      "favoris-icon"
    );
    favorisIcon.style.color = "#00000b"; // Appliquer la couleur personnalisée initiale
    favorisIcon.style.fontSize = "24px";
    cardHeader.appendChild(favorisIcon);

    // Ajouter un gestionnaire d'événements click pour l'icône d'étoile
    favorisIcon.addEventListener("click", function () {
      if (favorisIcon.style.color === "black") {
        favorisIcon.style.color = "#ea9009"; // Changer la couleur à la couleur initiale
      } else {
        favorisIcon.style.color = "black"; // Changer la couleur à noir
      }
    });

    // ... (le reste du code pour les autres éléments de la carte)

    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${photoUrl})`;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardName = document.createElement("h4");
    cardName.classList.add("card-name");
    cardName.innerHTML = nom;
    cardBody.appendChild(cardName);

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    card.appendChild(cardInfo);

    const cardMetier = document.createElement("p");
    cardMetier.classList.add("card-metier");
    cardMetier.innerHTML = `${metier}`;
    cardInfo.appendChild(cardMetier);

    const cardLocalisation = document.createElement("p");
    cardLocalisation.classList.add("card-localisation");
    cardLocalisation.innerHTML = `${localisation}`;
    cardInfo.appendChild(cardLocalisation);

    const cardExperience = document.createElement("p");
    cardExperience.classList.add("card-experience");
    cardExperience.innerHTML = `${experience} ans`;
    cardInfo.appendChild(cardExperience);

    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.innerHTML = "Plus d'infos";
    cardBody.appendChild(cardButton);
  }

  // Initialisation de l'affichage avec tous les profils
  profils.forEach((profile) => {
    createCard(
      profile.photoUrl,
      profile.nom,
      profile.metier,
      profile.localisation,
      profile.experience
    );
  });
});
