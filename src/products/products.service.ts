import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    private products: Product[] = [];

    insertProdcut(title: string, description: string, price: number){
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, description, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts() {
        return [...this.products];
    }

    getProduct(productId: string) {
        const product = this.findProduct(productId)[0];
        return {...product};
    }

    updateProduct(
        productId: string,
        title: string,
        desc: string,
        price: number
    ) {
        const [product, index] = this.findProduct(productId);
        const updateProduct = {...product};
        if (title) {
            updateProduct.title = title;
        }
        if (desc) {
            updateProduct.description = desc;
        }
        if (price) {
            updateProduct.price = price;
        }
        this.products[index] = updateProduct;
    }

    deleteProduct(productId: string) {
        const [_, index] = this.findProduct(productId);
        this.products.splice(index, 1);
    }

    private findProduct(id: string): [Product, number]{
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Cannot find product.');
        }
        return [product, productIndex];
    }
}