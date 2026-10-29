
import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard.jsx";

import iyedPhoto from "./components/iyed.jpg";
import sarraPhoto from "./components/sarra.jpg";
import mariemPhoto from "./components/mariem.jpg";
import ahmedPhoto from "./components/ahmed.jpg";
import amiraPhoto from "./components/amira.jpg";
import youssefPhoto from "./components/youssef.jpg";
import benaliPhoto from "./components/benali.jpg";

import "./App.css";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "Iyed",
      nom: "Maaref",
      email: "iyed.maaref@example.com",
      telephone: "+216 20 111 001",
      filiere: "Génie Logiciel et Systèmes d'Information",
      annee: "2ème année",
      groupe: "GLSI 2",
      ville: "Teboulba",
      photo: iyedPhoto,
    },
    {
      id: 2,
      prenom: "Ahlem",
      nom: "Haha",
      email: "ahlem.haha@example.com",
      telephone: "+216 90 888 060",
      filiere: "Développement Web",
      annee: "2ème année",
      groupe: "GLSI 2",
      ville: "Monastir",
      photo: sarraPhoto,
    },
    {
      id: 3,
      prenom: "Mounira",
      nom: "Mansour",
      email: "mounira.mansour@example.com",
      telephone: "+216 28 566 893",
      filiere: "Réseaux",
      annee: "2ème année",
      groupe: "GLSI 2",
      ville: "Sousse",
      photo: mariemPhoto,
    },
    {
      id: 4,
      prenom: "Azer",
      nom: "Ben Selem",
      email: "azer.benselem@example.com",
      telephone: "+216 25 788 804",
      filiere: "Informatique",
      annee: "2ème année",
      groupe: "GLSI 2",
      ville: "Tunis",
      photo: ahmedPhoto,
    },
    {
      id: 5,
      prenom: "Khadija",
      nom: "Mansour",
      email: "khadija.mansour@example.com",
      telephone: "+216 20 868 963",
      filiere: "Data Science",
      annee: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      photo: amiraPhoto,
    },
    {
      id: 6,
      prenom: "Yassin",
      nom: "Hamdi",
      email: "yassin.hamdi@example.com",
      telephone: "+216 28 888 086",
      filiere: "Développement Web",
      annee: "2ème année",
      groupe: "GLSI 2",
      ville: "Sfax",
      photo: youssefPhoto,
    },
  ]);

  const [recherche, setRecherche] = useState("");

  // Ajouter un étudiant
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id: Date.now(),
      prenom: "Ahmed",
      nom: "Ben Ali",
      email: "ahmedbenali@gmail.com",
      telephone: "+216 25 55 484",
      filiere: "Génie Logiciel et Systèmes d'Information",
      annee: "2ème année",
      groupe: "GLSI 1",
      ville: "Sousse",
      photo: benaliPhoto,
    };

    setEtudiants((anciens) => [...anciens, nouvelEtudiant]);
  }

  // Supprimer un étudiant
  function supprimerEtudiant(id) {
    setEtudiants((anciens) =>
      anciens.filter((etudiant) => etudiant.id !== id)
    );
  }

  // Modifier les informations d'un étudiant
  function modifierEtudiant(id, nouvellesInfos) {
    setEtudiants((anciens) =>
      anciens.map((etudiant) =>
        etudiant.id === id
          ? { ...etudiant, ...nouvellesInfos }
          : etudiant
      )
    );
  }

  // Filtrer les étudiants selon leur filière
  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.filiere.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div id="accueil">
      <Header />
      <Navbar />

      <div className="actions">
        <button onClick={ajouterEtudiant}>
          + Ajouter un étudiant
        </button>
      </div>

      <main>
        <section className="hero">
          <p className="hero-label">
            BIENVENUE SUR UNICONNECT
          </p>

          <h1>
            La communauté étudiante, <span>connectée.</span>
          </h1>

          <p>
            Découvrez les étudiants, leurs spécialités et leurs coordonnées
            dans un seul espace.
          </p>

          <a href="#etudiants" className="hero-button">
            Découvrir les étudiants
          </a>
        </section>

        <section className="students-section" id="etudiants">
          <div className="section-heading">
            <p className="section-label">NOTRE COMMUNAUTÉ</p>
            <h2>Nos étudiants</h2>
            <p>Retrouvez les profils de nos étudiants.</p>
          </div>

          <div className="filter-container">
            <input
              type="text"
              placeholder="Rechercher une filière..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
            />
          </div>

          <div className="students-grid">
            {etudiantsFiltres.map((etudiant) => (
              <StudentCard
                key={etudiant.id}
                {...etudiant}
                onDelete={supprimerEtudiant}
                onEdit={modifierEtudiant}
              />
            ))}
          </div>

          {etudiantsFiltres.length === 0 && (
            <p className="no-results">
              Aucun étudiant trouvé pour cette filière.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
