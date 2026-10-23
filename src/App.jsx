
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

import "./App.css";

const etudiants = [
  {
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
    prenom: "ahlem",
    nom: "haha",
    email: "ahlem haha@example.com",
    telephone: "+216 90 888 060",
    filiere: "Développement Web",
    annee: "2ème année",
    groupe: "GLSI 2",
    ville: "Monastir",
    photo: sarraPhoto,
  },
  {
    prenom: "mounira",
    nom: "mansour",
    email: "mounira.mansour@example.com",
    telephone: "+216 28 566 893",
    filiere: "Réseaux",
    annee: "2ème année",
    groupe: "GLSI 2",
    ville: "Sousse",
    photo: mariemPhoto,
  },
  {
    prenom: "azer",
    nom: "ben selem",
    email: "azer.benselem@example.com",
    telephone: "+216 25 788 804",
    filiere: "Informatique",
    annee: "2ème année",
    groupe: "GLSI 2",
    ville: "Tunis",
    photo: ahmedPhoto,
  },
  {
    prenom: "khdija",
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
    prenom: "yassin",
    nom: "Hamdi",
    email: "yassin.hamdi@example.com",
    telephone: "+216 28 888 086",
    filiere: "Développement Web",
    annee: "2ème année",
    groupe: "GLSI 2",
    ville: "Sfax",
    photo: youssefPhoto,
  },
];

function App() {
  return (
    <div id="accueil">
      <Header />
      <Navbar />

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

          <div className="students-grid">
            {etudiants.map((etudiant) => (
              <StudentCard
                key={etudiant.email}
                {...etudiant}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
