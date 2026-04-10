const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    const data = req.body;

    let numNomes = data.nome.split(" ").length;
    if (numNome < 2) {
        return res.json({ msg: "Nome incompleto" }).status(500).end();
    }

    //ADB-1234 | ABC 1234 | abc1234
    let placa = data.placa.trim()
        .replace("-", "")
        .replace(" ", "")
        .toUpperCase();
    if (placa.length != 7) {
        return res.json({}).status(500).end();
    }
    data.placa = placa;

    //Fiat UNO
    if(!data.marcamodelo) {
        return res.json().status(500).end();
    }

    let infoCarro = data.marcamodelo
                        .toLowerCase()
                        .split(" ");
    data.marca = infoCarro[0];
    data.modelo = infoCarro[1];
    
    const item = await prisma.modelo.create({
        data
    });

    res.json(data).status(201).end();

};

const listar = async (req, res) => {
    const lista = await prisma.modelo.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.modelo.findUnique({
        where: { id },
        include: {
            modelo: true
        }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const item = await prisma.modelo.findUnique({
        where: { id },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.modelo.delete({
        where: { id }
    });

    res.json(item).status(200).end();
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}
