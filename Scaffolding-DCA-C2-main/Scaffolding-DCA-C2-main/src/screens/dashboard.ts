import { addObserver, appState } from "../store/store";

// IMPORTAMOS NUESTRO COMPONENTE DE NUESTRO PRODUCTO
import Product, { Attribute } from '../components/product-item/product-item'

//Importamos nuestra API desde services
import { getProducts } from "../services/getProducts";

class Dashboard extends HTMLElement {
	// defino mi arreglo para meterle los productos
    products: Product[] = [];
    dataProducts: any[] = [];

	// // defino mi arreglo para meterle los productos(DELCARRITO)s
    // shoppingCart: ShoppingCartItem[] = [];
	// // este se usará para relalizar la peticipn a la API
	

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		// Agregamos el observadoe akii eso significa que al arreglo de
		// observadores que esta en store.ts se le agrega esta clase paara que pueda escuchar cambios
		addObserver(this) 
		
	}

	async connectedCallback() { 
		// Aqui se hace la peticion a la API y deevuevbe la promesa y se alpacenan en this.dataProducts
		this.dataProducts = await getProducts();

		// Se llama a la funcion que crea las cards de los productos para que se muestre en el DOMM
		this.createCardsProduct();

		// Se llama a la funcion que crea las cards de del carrito de compras para que se muestre en el DOMMM
		this.createCardsShoppingItem();
		this.render();
	}

	createCardsProduct ()  {
		this.dataProducts.forEach((productData: any) => {
			const product = this.ownerDocument.createElement('product-card') as Product;
			product.setAttribute(Attribute.image, productData.image);
			product.setAttribute(Attribute.titleproduct, productData.title);
			product.setAttribute(Attribute.description, productData.description);
			product.setAttribute(Attribute.category, productData.category);
			product.setAttribute(Attribute.price, productData.price);
			product.setAttribute(Attribute.stock, productData.rating.rate); 
			// pusheo toda esta info a mi arreglo de productos que defini al principio
			this.products.push(product);
		 
			});
		}

		createCardsShoppingItem ()  {
            appState.shoppingList.forEach((element: any) => {
                const product = this.ownerDocument.createElement('product-card') as Product; 
                product.setAttribute(AttributeProduct.image, element.image);
                product.setAttribute(AttributeProduct.titleproduct, element.title);
                product.setAttribute(AttributeProduct.price, element.price);
                	// pusheo toda esta info a mi arreglo de productos que defini al principio
                this.products.push(product);
        
            });
        }

	render() {
		if (this.shadowRoot){
			this.shadowRoot.innerHTML = `
  
    <h1>Store Products</h1>
    <hr>
   
    <div class="dashboard-container">
       
    <product-card> <product-card>
    </div>
`;

	
	
		   const container = this.shadowRoot?.querySelector('.container-products');

		//    hAGO Iteracion sobre mi arreglo de productos(products) que previammente defini vacio
		// y despues le setie atributos a ellos
		   this.products.forEach((product) => {
			// le hago appendchild de toda la iteracion a container es decir a mi clase de (.container-products)
			   container?.appendChild(product);
		   });
	
		   const containerShoppingCartItem = this.shadowRoot?.querySelector('.container-shopping');

		   //    hAGO Iteracion sobre mi arreglo de productos pal CARRITO(shoppingCart) que previammente defini vacio
		// y despues le setie atributos a ellos
		   this.products.forEach((productShopping) => {
			// le hago appendchild de toda la iteracion a container(containerShoppingCartItem) 
			// es decir a mi clase de (.container-shopping)
			containerShoppingCartItem?.appendChild(productShopping);
		   });

		}
		
	}
}

customElements.define('app-dashboard', Dashboard);