
function StudentCard({
  prenom = "Iyed",
  nom = "Maaref",
  email = "iyedmaaref77@gmail.com",
  telephone = "+216 28 911 498",
  filiere = "Génie Logiciel et Systèmes d'Information",
  annee = "2ème année",
  groupe = "GLSI 2",
  ville = "Teboulba",
  photo,
}) {
  return (
    <article className="student-card">
      <img
        className="student-photo"
        src={photo}
        alt={`Photo de ${prenom} ${nom}`}
      />

      <h2 className="student-title">Fiche étudiant</h2>

      <div className="student-details">
        <p><strong>Nom & Prénom :</strong> {prenom} {nom}</p>
        <p><strong>Email :</strong> {email}</p>
        <p><strong>Téléphone :</strong> {telephone}</p>
        <p><strong>Filière :</strong> {filiere}</p>
        <p><strong>Année d'étude :</strong> {annee}</p>
        <p><strong>Groupe :</strong> {groupe}</p>
        <p><strong>Ville :</strong> {ville}</p>
      </div>

      <a className="contact-button" href={`mailto:${email}`}>
        Contacter
      </a>
    </article>
  );
}

export default StudentCard;
