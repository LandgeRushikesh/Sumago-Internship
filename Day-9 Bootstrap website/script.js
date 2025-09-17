const nashikPlaces = [
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/4/45/Saptashrungi_temple.jpg",
        name: "Saptashrungi Devi Temple",
        description:
            "A revered hilltop temple dedicated to Goddess Saptashrungi, located about 60 km from Nashik. It attracts thousands of devotees during Navratri."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Pandavleni_Caves_Nashik.jpg",
        name: "Pandav Leni Caves",
        description:
            "Ancient rock-cut caves dating back to the 1st century BCE, showcasing beautiful Buddhist sculptures, inscriptions, and meditation halls."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Godavari_River_in_Nashik.jpg",
        name: "Godavari Ghat (Ramkund)",
        description:
            "A sacred bathing ghat on the Godavari river, believed to be where Lord Rama performed rituals during his exile. A major spot during Kumbh Mela."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Sula_Vineyards.jpg",
        name: "Sula Vineyards",
        description:
            "India's most famous vineyard and winery. Offers wine-tasting tours, lush vineyard views, and annual music festivals like SulaFest."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Trimbakeshwar_Temple.jpg",
        name: "Trimbakeshwar Temple",
        description:
            "One of the 12 Jyotirlingas of Lord Shiva, located at the origin of the Godavari river. Known for its unique architecture and religious significance."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Anjaneri_fort.jpg",
        name: "Anjaneri Hills",
        description:
            "Considered the birthplace of Lord Hanuman, Anjaneri Hills offer scenic trekking trails and panoramic views of the surrounding Sahyadri ranges."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Someshwar_Temple_Nashik.jpg",
        name: "Someshwar Waterfall & Temple",
        description:
            "A scenic picnic spot with a beautiful waterfall and an ancient Lord Shiva temple, located near Gangapur Dam."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Coin_Museum_Nashik.jpg",
        name: "Indian Coin Museum",
        description:
            "The only coin museum in Asia, displaying rare coins, currency notes, and artifacts representing India's monetary history."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/7/79/Gargoti_Mineral_Museum.jpg",
        name: "Gargoti Mineral Museum",
        description:
            "A world-famous mineral museum showcasing rare minerals, crystals, and precious stones from India and around the world."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Harihar_fort.jpg",
        name: "Harihar Fort",
        description:
            "A unique fort famous for its near-vertical rock-cut steps and thrilling trek, offering a breathtaking view from the top."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/1/16/Brahmagiri_Hill_Trimbakeshwar.jpg",
        name: "Brahmagiri Hills",
        description:
            "The origin of the holy Godavari river. A popular trekking and spiritual destination with temples and panoramic views."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Kalaram_temple_nashik.jpg",
        name: "Kalaram Temple",
        description:
            "An ancient temple dedicated to Lord Rama, known for its black stone idol and beautiful architecture. A major site during Ramnavami celebrations."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Sita_Gufa_Nashik.jpg",
        name: "Sita Gufa",
        description:
            "A narrow cave where Sita is believed to have stayed during the exile. It is located near Panchvati and holds mythological significance."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Dudhsagar_Falls_Nashik.jpg",
        name: "Dudhsagar Falls (Nashik)",
        description:
            "A stunning seasonal waterfall near Someshwar, popular for its white foamy water and scenic beauty during monsoons."
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Muktidham_temple.jpg",
        name: "Muktidham Temple",
        description:
            "A marble temple complex housing replicas of all 12 Jyotirlingas and major Hindu deities, making it a mini spiritual hub."
    }
];


const places = document.body.querySelector(".places")


nashikPlaces.map((place) => {
    `<div class="card" style="width: 18rem">
        <img src=${place.imgURL} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">
                Ramkund is a holy bathing ghat where pilgrims perform rituals.
                It is believed Lord Rama bathed here during his exile. It’s the
                focal point during Kumbh Mela.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>`
})