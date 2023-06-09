import React, { useContext, useState } from 'react';
import { ProductContext } from './ProductContext';

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleAddProduct = () => {
    const product = {
      name: productName,
      description: productDescription,
      price: productPrice,
      category: productCategory,
    };

    addProduct(product);
    setProductName('');
    setProductDescription('');
    setProductPrice(0);
    setProductCategory('');
    setShowForm(false);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <h2>Ajouter un produit</h2>
      {!showForm ? (
        <button className="btn btn-primary" onClick={handleToggleForm}>
          Ajouter un nouveau produit
        </button>
      ) : (
        <div>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Nom du produit
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
              Description du produit
            </label>
            <textarea
              className="form-control"
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Prix du produit
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(parseFloat(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">
              Catégorie du produit
            </label>
            <input
              type="text"
              className="form-control"
              id="productCategory"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleAddProduct}>
            Ajouter le produit
          </button>
          <button className="btn btn-secondary" onClick={handleToggleForm}>
            Annuler
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
