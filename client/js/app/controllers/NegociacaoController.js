class NegociacaoController {

  constructor () {
    let $ = document.querySelector.bind(document);

    this._data = $('#data');
    this._quantidade = $('#quantidade');
    this._valor = $('#valor');
    
    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(), 
      new NegociacoesView($('#negociacoesView')),
      ['adiciona', 'esvazia']
    );
    
    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagemView')),
      ['texto']
    );
  }

  adiciona(event){

    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Sucesso ao adcionar negociação!';
    this._limpaFormulario();

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

  apaga() {

    this._listaNegociacoes.esvazia();
    this._mensagem.texto = 'Negociação apagada com sucesso!';
  }
}