describe('Variables de bloque: let y const', () => {
  // Constante
  it('Asignación de una constante', () => {
    const add = (x, y) => x + y;
    expect(add(5, 3)).toBe(8);
  });

  // Variable
  it('Ámbito de las variables de bloque variable', () => {
    let varBloque = 7;
    var varGlobal = 7;
    {
      // Si no añadimos let indicando que es otra variable modifica la externa
      let varBloque = 3;
      var varGlobal = 3;
    }
    expect(varBloque).toBe(7);
    expect(varGlobal).toBe(3);
  });
});
