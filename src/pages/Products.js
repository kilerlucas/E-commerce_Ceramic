import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const Products = () => {
  const [showForm, setShowForm] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: null,
  });
  const [productList, setProductList] = useState([]);

  const categories = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (productList.some((p) => p.name === product.name)) {
      alert('Produto já existe na lista!');
      return;
    }
    const newProductList = [...productList, product];
    setProductList(newProductList);
    setProduct({
      name: '',
      description: '',
      price: '',
      category: '',
      image: null,
    });
    setShowForm(false);
    // Salvar os dados no localStorage
    localStorage.setItem('productList', JSON.stringify(newProductList));
  };

  useEffect(() => {
    // Recuperar os dados do localStorage ao carregar a página
    const savedProductList = localStorage.getItem('productList');
    if (savedProductList) {
      setProductList(JSON.parse(savedProductList));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct((prevProduct) => ({
      ...prevProduct,
      image: URL.createObjectURL(file),
    }));
  };

  const handleEditProduct = (index) => {
    const editedProduct = productList[index];
    setProduct(editedProduct);
    setShowForm(true);
    setProductList((prevProductList) => {
      const updatedProductList = [...prevProductList];
      updatedProductList.splice(index, 1);
      return updatedProductList;
    });
  };

  const handleDeleteProduct = (index) => {
    const productToDelete = productList[index];
    setProductToDelete(productToDelete);
    setDeleteConfirmation(true);
  };

  const confirmDeleteProduct = () => {
    const updatedProductList = productList.filter((product) => product !== productToDelete);
    setProductList(updatedProductList);
    setProductToDelete(null);
    setDeleteConfirmation(false);
    // Salvar os dados no localStorage
    localStorage.setItem('productList', JSON.stringify(updatedProductList));
  };

  const cancelDeleteProduct = () => {
    setProductToDelete(null);
    setDeleteConfirmation(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Products</h1>
      <Button onClick={() => setShowForm(true)}>Ajouter un produit</Button>

      <Modal show={showForm} onHide={() => setShowForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un produit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="productName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={product.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="productDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={product.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="productPrice">
              <Form.Label>Prix</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="productCategory">
              <Form.Label>Catégorie</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={product.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionner une catégorie</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="productImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Ajouter
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {deleteConfirmation && (
        <Modal show={deleteConfirmation} onHide={cancelDeleteProduct}>
          <Modal.Header closeButton>
            <Modal.Title>Supprimer un produit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Êtes-vous sûr de vouloir supprimer le produit "{productToDelete.name}" ?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cancelDeleteProduct}>
              Annuler
            </Button>
            <Button variant="danger" onClick={confirmDeleteProduct}>
              Supprimer
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {productList.length === 0 ? (
        <p>Aucun produit disponible.</p>
      ) : (
        <div className="row">
          {productList.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="box">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="img-fluid" />
                ) : (
                  <img src="placeholder.jpg" alt="Image Placeholder" className="img-fluid" />
                )}

                <div className="box-content">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <p>Prix: {product.price}</p>
                  <p>Catégorie: {product.category}</p>
                  <Button
                    variant="dark"
                    onClick={() => handleEditProduct(index)}
                    className="mr-2"
                  >
                    Modifier
                  </Button>
                  <Button variant="danger" onClick={() => handleDeleteProduct(index)}>
                    Supprimer
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
