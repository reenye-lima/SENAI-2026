const prisma = require("../data/prisma");

const limiteInscricoes = async (eventoId) => {
    const evento = await prisma.eventos.findUnique({
        where: { id: eventoId },
        include: {
            inscricoes: true
        }
    });

    const numeroInscricoes = evento.inscricoes.filter(inscricao => inscricao.status == "CONFIRMADA").length;

    if (numeroInscricoes == evento.capacidade_maxima) {
        return "LISTA_ESPERA";
    } else {
        return "";
    }
};

const inscricaoDuplicada = async (usuarioId, eventoId) => {
    const evento = await prisma.eventos.findUnique({
        where: { id: eventoId },
        include: {
            inscricoes: true
        }
    });

    const inscrito = evento.inscricoes.filter(inscricao => inscricao.usuariosId == usuarioId).length;

    if (inscrito == 1) {
        throw new Error("Usuario ja inscrito no evento").message;
    }
};

const prazoCancelamento = async (eventoId) => {
    const evento = await prisma.eventos.findUnique({
        where: {
            id: eventoId
        }
    });

    let hoje = new Date();
    let dataEvento = new Date(evento.data_evento);
    let intervaloEvento = (dataEvento - hoje) / (1000 * 60 * 60);

    if (intervaloEvento < 24) throw new Error("Prazo para cancelamento expirou").message;
};

const promocaoListaEspera = async (eventoId) => {
    const evento = await prisma.inscricoes.findFirst({
        where: {
            id: eventoId,
            status: "LISTA_ESPERA"
        },
        orderBy: {
            data_inscricao: "asc"
        }
    });

    console.log(evento);
};

module.exports = {
    limiteInscricoes,
    inscricaoDuplicada,
    prazoCancelamento,
    promocaoListaEspera
}