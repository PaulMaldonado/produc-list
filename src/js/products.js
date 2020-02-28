class Products {
    createProducts(product) {
        const name = document.getElementById('product-name').value;
        const price = document.getElementById('product-price').value;
        const description = document.getElementById('product-description').value;

        if(this.newProduct === null) {
            this.product.push(product);
        } else {
            this.newProduct = [];
        }
    }

    showProduct(product) {
        const element = document.createElement('div');
        const productUi = document.getElementById('product-ui');

        element.innerHTML = `
            <div class="card border-primary mb-3">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <p class="card-text"><strong>${product.description}</strong></p>

                    <button class="btn btn-danger" name="delete">Eliminar</button>
                </div>
            </div>
        `;

        productUi.appendChild(element);

    }

    deleteProducts(element) {
        const productUi = document.getElementById('product-ui');

        if(element.name === 'delete') {
            element.parentElement.parentElement.remove();
        }   
    }

    clearInputs() {
        const name = document.getElementById('product-name').value = '';
        const price = document.getElementById('product-price').value = '';
        const description = document.getElementById('product-description').value = '';
    }
    
}

export default Products;