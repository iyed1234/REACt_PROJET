
import { useState } from "react";

function StudentCard({
  id,
  prenom = "Iyed",
  nom = "Maaref",
  email = "iyedmaaref77@gmail.com",
  telephone = "+216 28 911 498",
  filiere = "Génie Logiciel et Systèmes d'Information",
  annee = "2ème année",
  groupe = "GLSI 2",
  ville = "Teboulba",
  photo,
  onDelete,
  onEdit,
}) {
  const [afficher, setAfficher] = useState(true);
  const [modifier, setModifier] = useState(false);

  const [form, setForm] = useState({
    prenom,
    nom,
    email,
    telephone,
    filiere,
    annee,
    groupe,
    ville,
  });

  function changerChamp(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function enregistrer(e) {
    e.preventDefault();
    onEdit(id, form);
    setModifier(false);
  }

  return (
    <article className="student-card">
      <img
        className="student-photo"
        src={photo}
        alt={`Photo de ${prenom} ${nom}`}
      />

      <h2 className="student-title">Fiche étudiant</h2>

      {modifier ? (
        <form className="edit-form" onSubmit={enregistrer}>
          <input
            name="prenom"
            value={form.prenom}
            onChange={changerChamp}
            placeholder="Prénom"
            required
          />

          <input
            name="nom"
            value={form.nom}
            onChange={changerChamp}
            placeholder="Nom"
            required
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={changerChamp}
            placeholder="Email"
            required
          />

          <input
            name="telephone"
            value={form.telephone}
            onChange={changerChamp}
            placeholder="Téléphone"
          />

          <input
            name="filiere"
            value={form.filiere}
            onChange={changerChamp}
            placeholder="Filière"
            required
          />

          <input
            name="annee"
            value={form.annee}
            onChange={changerChamp}
            placeholder="Année d'étude"
          />

          <input
            name="groupe"
            value={form.groupe}
            onChange={changerChamp}
            placeholder="Groupe"
          />

          <input
            name="ville"
            value={form.ville}
            onChange={changerChamp}
            placeholder="Ville"
          />

          <button type="submit" className="contact-button">
            Enregistrer
          </button>

          <button
            type="button"
            className="contact-button"
            onClick={() => setModifier(false)}
          >
            Annuler
          </button>
        </form>
      ) : (
        <>
          {afficher && (
            <div className="student-details">
              <p><strong>Nom & Prénom :</strong> {prenom} {nom}</p>
              <p><strong>Email :</strong> {email}</p>
              <p><strong>Téléphone :</strong> {telephone}</p>
              <p><strong>Filière :</strong> {filiere}</p>
              <p><strong>Année :</strong> {annee}</p>
              <p><strong>Groupe :</strong> {groupe}</p>
              <p><strong>Ville :</strong> {ville}</p>
            </div>
          )}

          <div className="student-actions">
            <button
              type="button"
              className="contact-button"
              onClick={() => setAfficher(!afficher)}
            >
              {afficher
                ? "Masquer les coordonnées"
                : "Afficher les coordonnées"}
            </button>

            <a className="contact-button" href={`mailto:${email}`}>
              Contacter
            </a>

            <button
              type="button"
              className="contact-button"
              onClick={() => setModifier(true)}
            >
              Modifier
            </button>

            <button
              type="button"
              className="contact-button delete-button"
              onClick={() => onDelete(id)}
            >
              Supprimer
            </button>
          </div>
        </>
      )}
    </article>
  );
}

export default StudentCard;
