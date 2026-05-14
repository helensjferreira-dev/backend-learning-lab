// Criando Objetos JS
const usuario = {
    nome: "Sofia",
    idade: 11,
    email: "sofia@sofia.com",
    curso: "Fundamental I",
    cidade: "Florianópolis",
    telefone: 48948484848
}

console.log(usuario)

// Acesso por ponto
console.log(usuario.email)

// Acesso por colchete
console.log(usuario["nome"])

// Adicionando e removendo propriedades
usuario.id = 1
delete usuario.telefone
console.log(usuario)

// Usando keys,values,entries
console.log(Object.keys(usuario))
console.log(Object.values(usuario))
console.log(Object.entries(usuario))

// Exibir como tabela formatada
console.table(usuario)

// Mesclar objetos
const documentos = {
    rg: 12345678901
}
const usuarioCompleto= Object.assign({}, usuario, documentos)

console.log(usuarioCompleto)

// Desestruturar

const {nome,rg} = usuarioCompleto
console.log(nome)
console.log(rg)

// Clonando obj com spread operator
const copiaUsuarioCompleto = {...usuarioCompleto}

console.log(copiaUsuarioCompleto)