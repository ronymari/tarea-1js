// Cada producto que vende el super es creado con esta clase
class Producto {
    sku; // Identificador único del producto
    nombre; // Su nombre
    categoria; // Categoría a la que pertenece este producto
    precio; // Su precio
    stock; // Cantidad disponible en stock
  
    constructor(sku, nombre, precio, categoria, stock) {
      this.sku = sku;
      this.nombre = nombre;
      this.categoria = categoria;
      this.precio = precio;
  
      // Si no me definen stock, pongo 10 por default
      if (stock !== undefined) {
        this.stock = stock;
      } else {
        this.stock = 10;
      }
    }
  }
  
  // Creo todos los productos que vende mi super
  const queso = new Producto("KS944RUR", "Queso", 10, "lacteos", 4);
  const gaseosa = new Producto("FN312PPE", "Gaseosa", 5, "bebidas");
  const cerveza = new Producto("PV332MJ", "Cerveza", 20, "bebidas");
  const arroz = new Producto("XX92LKI", "Arroz", 7, "alimentos", 20);
  const fideos = new Producto("UI999TY", "Fideos", 5, "alimentos");
  const lavandina = new Producto("RT324GD", "Lavandina", 9, "limpieza");
  const shampoo = new Producto("OL883YE", "Shampoo", 3, "higiene", 50);
  const jabon = new Producto("WE328NJ", "Jabon", 4, "higiene", 3);
  
  // Genero un listado de productos. Simulando base de datos
  const productosDelSuper = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon];
  
  // Cada cliente que venga a mi super va a crear un carrito
  class Carrito {
    productos; // Lista de productos agregados
    categorias; // Lista de las diferentes categorías de los productos en el carrito
    precioTotal; // Lo que voy a pagar al finalizar mi compra
  
    // Al crear un carrito, empieza vació
    constructor() {
      this.precioTotal = 0;
      this.productos = [];
      this.categorias = [];
    }
  
    /**
     * función que agrega @{cantidad} de productos con @{sku} al carrito
     */
    async agregarProducto(sku, cantidad) {
      console.log(`Agregando ${cantidad} ${sku}`);
  
      // Busco el producto en la "base de datos"
      const producto = await findProductBySku(sku);
  
      if (!producto) {
        console.error(`El producto con sku ${sku} no existe.`);
        return;
      }
  
      console.log("Producto encontrado", producto);
  
      const indiceProducto = this.productos.findIndex((p) => p.sku === sku);
  
      if (indiceProducto !== -1) {
        // El producto ya existe, sólo agrego la cantidad
        this.productos[indiceProducto].cantidad += cantidad;
      } else {
        // Creo un producto nuevo
        const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad);
        this.productos.push(nuevoProducto);
        this.categorias.push(producto.categoria);
      }
  
      this.precioTotal += producto.precio * cantidad;
    }
}