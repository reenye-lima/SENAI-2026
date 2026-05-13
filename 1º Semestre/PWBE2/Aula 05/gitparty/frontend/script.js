const loadEvents = () => {
    axios.get("http://localhost:3000/eventos/listar").then(resp => {
        const eventos = resp.data;

        eventos.forEach(evento => {
            generateCards(evento.titulo, evento.data_evento);
        })
    }).catch(err => {
        console.log(err);
    })
}

const generateCards = (title, date) => {
    const eventsList = document.querySelector(".events-list");
    const card = document.querySelector(".card-model").cloneNode(true);

    card.classList.remove("hidden");

    card.querySelector("#event-title").innerHTML = title;
    card.querySelector("#event-date").innerHTML = formatDate(date);

    eventsList.appendChild(card);
}

const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });

    const timeFormatter = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    const formattedDate = `${dateFormatter.format(date)} • ${timeFormatter.format(date)}`;
    
    return formattedDate;
}

loadEvents();