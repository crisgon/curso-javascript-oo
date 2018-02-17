class View {

  constructor(elemento) {
    this._elemento = elemento;
  }

  template () {
    throw Error('O método template deve ser implementado!');
  }

  update (modelo) {
    this._elemento.innerHTML = this.template(modelo);
  }
}