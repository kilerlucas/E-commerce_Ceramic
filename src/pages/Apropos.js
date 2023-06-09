import React from 'react';

const Apropos = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-dark mt-5">Notre Histoire</h2>
      <hr className="mt-5" />
      <div className="row mt-5">
        <div className="col-md-6 mx-auto">
          <img src="/img/pexels-cottonbro-studio-6739699.jpg" alt="Imagem de destaque" className="img-fluid mt-5" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 mx-auto">
          <p className="text-dark">
            Les Trésors de la Terre Cuite est une entreprise de e-commerce spécialisée dans la vente de magnifiques produits en céramique. Notre histoire a commencé il y a plus de 20 ans, lorsque notre fondateur, passionné par la beauté et la tradition de la terre cuite, a décidé de créer une plateforme en ligne pour partager ces trésors avec le monde entier.
          </p>
          <p className="text-dark">
            Depuis lors, nous nous sommes engagés à fournir des produits de haute qualité, fabriqués par des artisans talentueux et passionnés. Chaque pièce que nous proposons est soigneusement sélectionnée pour son design unique et son artisanat exceptionnel. Nous croyons en la préservation des traditions anciennes et en la valorisation du savoir-faire artisanal, tout en offrant une expérience de shopping moderne et pratique à nos clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
