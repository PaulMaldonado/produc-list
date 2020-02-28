import Product from '../js/product';
import Products from '../js/products';

let total = 0;

const productForm = document.getElementById('product-form');

productForm.addEventListener('submit', e => {
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const description = document.getElementById('product-description').value;
    const productTotal = document.getElementById('price-total');

    if(name === '' || price === '' || price <= 0 || description === '') {
        return;
    }

    const product = new Product(name, price, description);
    total += +price;

    productTotal.textContent = total;
    
    const products = new Products();

    products.createProducts(product);
    products.showProduct(product);
    products.clearInputs();

    const productUi = document.getElementById('product-ui');

    productUi.addEventListener('click', e => {
        const products = new Products();
        products.deleteProducts(e.target);

        e.preventDefault();
    });

    e.preventDefault();
});