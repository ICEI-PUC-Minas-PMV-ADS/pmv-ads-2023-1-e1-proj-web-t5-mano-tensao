function adicPerfil(id, nome_perfil, cidade, bairros, recursos) {
    var usuarioIndex = db_usuarios.usuarios.findIndex(function(usuario) {
        return usuario.id === id;
    });

    if (usuarioIndex !== -1) {
        var usuario = db_usuarios.usuarios[usuarioIndex];

        var perfil = {
            "nome_perfil": nome_perfil,
            "recursos_financeiros": recursos,
            "cidade": {
                "nome": cidade,
                "bairros": bairros.split(","),
            }
        };
        usuario.perfis_cliente.push(perfil);

        db_usuarios.usuarios[usuarioIndex] = usuario; 
		usuarioCorrente = usuario;
        sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuario));
        localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));

        return true;
    } else {
        return false; 
    }
}