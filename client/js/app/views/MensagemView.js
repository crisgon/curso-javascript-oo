class MensagemView extends View {

  constructor(element) {
    super(element);
  }

  template(modelo) {
    return modelo.texto ? `<p class="alert alert-info">${modelo.texto}</p>`: `<p></p>`;
  }
}