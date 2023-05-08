
class Producto {
    sku; 
    nombre; 
    categoria; 
    precio; 
    stock; 
  
    constructor(sku, nombre, precio, categoria, stock) {
      this.sku = sku;
      this.nombre = nombre;
      this.categoria = categoria;
      this.precio = precio;
  
      
      if (stock !== undefined) {
        this.stock = stock;
      } else {
        this.stock = 10;
      }
    }
  }
  
  
  const queso = new Producto("KS944RUR", "Queso", 10, "lacteos", 4);
  const gaseosa = new Producto("FN312PPE", "Gaseosa", 5, "bebidas");
  const cerveza = new Producto("PV332MJ", "Cerveza", 20, "bebidas");
  const arroz = new Producto("XX92LKI", "Arroz", 7, "alimentos", 20);
  const fideos = new Producto("UI999TY", "Fideos", 5, "alimentos");
  const lavandina = new Producto("RT324GD", "Lavandina", 9, "limpieza");
  const shampoo = new Producto("OL883YE", "Shampoo", 3, "higiene", 50);
  const jabon = new Producto("WE328NJ", "Jabon", 4, "higiene", 3);
  
  
  const productosDelSuper = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon];
  
  
  class Carrito {
    productos; 
    categorias; 
    precioTotal; 
  
    
    constructor() {
      this.precioTotal = 0;
      this.productos = [];
      this.categorias = [];
    }
  
  
    async agregarProducto(sku, cantidad) {
      console.log(`Agregando ${cantidad} ${sku}`);
  
      
      const producto = await findProductBySku(sku);
  
      if (!producto) {
        console.error(`El producto con sku ${sku} no existe.`);
        return;
      }
  
      console.log("Producto encontrado", producto);
  
      const indiceProducto = this.productos.findIndex((p) => p.sku === sku);
  
      if (indiceProducto !== -1) {
        
        this.productos[indiceProducto].cantidad += cantidad;
      } else {
        
        const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad);
        this.productos.push(nuevoProducto);
        this.categorias.push(producto.categoria);
      }
  
      this.precioTotal += producto.precio * cantidad;
    }
}
