import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="position-relative">
        <img src="/img/pexels-cottonbro-studio-6739704.jpg" alt="Imagem de destaque" className="img-fluid w-100 h-100" />
        <div className="overlay-content position-absolute top-50 start-50 translate-middle text-center">
          <div className="custom-overlay bg-dark p-4 rounded">
            <p className="text-white">
              "Découvrez les trésors de la terre cuite, là où la beauté rencontre la tradition."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

