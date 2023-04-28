class Carrito {
    constructor(montoTotal, productos) {
      this.montoTotal = montoTotal;
      this.productos = productos;
    }
  
    agregarProducto(nombre, precio, unidades) {
      const productoExistente = this.productos.find(
        (producto) => producto.nombre === nombre
      );
      if (productoExistente) {
        productoExistente.unidades += unidades;
        console.log(`Ya existe ${nombre} con ${productoExistente.unidades} unidades`);
      } else {
        const productoNuevo = new Producto(nombre, precio, unidades);
        this.productos.push(productoNuevo);
      }
      this.montoTotal += precio * unidades;
    }
  }
  
  class Producto {
    constructor(nombre, precio, unidades) {
      this.nombre = nombre;
      this.precio = precio;
      this.unidades = unidades;
    }
  }
  
  const carrito = new Carrito(10, [new Producto("Leche", 3, 1)]);
  console.log(carrito);
  
  carrito.agregarProducto("Azucar", 5, 2);
  console.log(carrito);
  
  carrito.agregarProducto("Leche", 3, 2);
  console.log(carrito);
  