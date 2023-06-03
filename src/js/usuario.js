//
//
// Disciplina: Trabalho Interdisciplinar - Aplicações Web
// Professor: Rommel Vieira Carneiro (rommelcarneiro@gmail.com)
//
// Código LoginApp utilizado como exemplo para alunos de primeiro período 


// Página inicial de Login
const LOGIN_URL = document.location.hostname;

var db_usuarios = {};

var usuarioCorrente = {};

function initLoginApp() {
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
    }

    var usuariosJSON = localStorage.getItem('db_usuarios');

    if (!usuariosJSON) {
        console.log('Não há usuários cadastrados no localStorage');
    }
    else {        
        db_usuarios = JSON.parse(usuariosJSON);
    }
};

function entrar(nome_usuario, senha) {
    var usuarioEncontrado = db_usuarios.usuarios.find(function (usuario) {
        return nome_usuario === usuario.nome_usuario && senha === usuario.senha;
    });

    if (usuarioEncontrado) {
        sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioEncontrado));
        return usuarioEncontrado.tipo;
    }

    return false;
}

// Apaga os dados do usuário corrente no sessionStorage
function sair() {
    usuarioCorrente = {};
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
    window.location = LOGIN_URL;
}

function adicUsuario(nome, logradouro, numero, bairro, cidade, cep, estado, nome_usuario, senha, telefone, email, recursos_financeiros, tipo) {

    // Cria um objeto de usuario para o novo usuario 
    let newId = generateUUID();
    let usuario = {
        "id": newId,
        "nome_usuario": nome_usuario,
        "senha": senha,
        "nome": nome,
        "endereco": {
            "logradouro": logradouro,
            "numero": numero,
            "bairro": bairro,
            "cidade": cidade,
            "cep": cep,
            "estado": estado
        },
        "contato": {
            "telefone": telefone,
            "email": email
        },
        "recursos_financeiros": recursos_financeiros,
        "tipo": tipo
    };

    db_usuarios.usuarios.push(usuario);
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuario));
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));

    return tipo;
}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

// Inicializa as estruturas utilizadas pelo LoginApp
initLoginApp();