$(function(){
	var operacao = "A"; //"A"=Adição; "E"=Edição
	var indice_selecionado = -1; //Índice do item selecionado na lista
	var tbPrestador = localStorage.getItem("tbPrestador");// Recupera os dados armazenados
	tbPrestador = JSON.parse(tbPrestador); // Converte string para objeto
	if(tbPrestador == null) // Caso não haja conteúdo, iniciamos um vetor vazio
	tbPrestador = [];
});