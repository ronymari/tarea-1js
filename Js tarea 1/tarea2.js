function elementosComunes(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i]) && !result.includes(array1[i])) {
        result.push(array1[i]);
      }
    }
    return result;
  }
  
  // Ejemplo 1
  const array1 = ['rojo', 'azul', 'amarillo'];
  const array2 = ['blanco', 'negro', 'rojo'];
  const resultado1 = elementosComunes(array1, array2);
  console.log(resultado1); // Debería imprimir ['rojo']
  
  // Ejemplo 2
  const array3 = [4, 3, true, 'manzana'];
  const array4 = ['pera', 3, false, true, 3, true];
  const resultado2 = elementosComunes(array3, array4);
  console.log(resultado2); // Debería imprimir [3, true]
  