class NegociacaoController {

  constructor () {
    let $ = document.querySelector.bind(document);

    this._data = $('#data');
    this._quantidade = $('#quantidade');
    this._valor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacoesView($('#negociacoesView'));
    this._negociacoesView.update(this._listaNegociacoes);
    this._mensagem = new Mensagem();
    
    this._mensagemView = new MensagemView($('#mensagemView'));
    this._mensagemView.update(this._mensagem);
  }

  adiciona(event){

    event.preventDefault();
  
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Sucesso ao adcionar negociação!';
    this._limpaFormulario();
    
    this._mensagemView.update(this._mensagem);
    this._negociacoesView.update(this._listaNegociacoes);
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._data.value),
      this._quantidade.value,
      this._valor.value
    );
  }
  
  _limpaFormulario() {
    this._data.value = '';
    this._quantidade.value = 1;
    this._valor.value = 0;

    this._data.focus();
  }

}