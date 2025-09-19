const nashikPlaces = [
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755070345/Pandav_Caves_fjwy9a.jpg",
        name: "Pandav Leni Caves",
        description:
            "Ancient rock-cut caves dating back to the 1st century BCE, showcasing beautiful Buddhist sculptures, inscriptions, and meditation halls."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755090621/Ramkund_btp5x3.jpg",
        name: "Godavari Ghat (Ramkund)",
        description:
            "A sacred bathing ghat on the Godavari river, believed to be where Lord Rama performed rituals during his exile. A major spot during Kumbh Mela."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755076305/Sula_Vineyards_ewl092.jpg",
        name: "Sula Vineyards",
        description:
            "India's most famous vineyard and winery. Offers wine-tasting tours, lush vineyard views, and annual music festivals like SulaFest."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755076310/Trimbakeshwar_Temple_jwmzht.jpg",
        name: "Trimbakeshwar Temple",
        description:
            "One of the 12 Jyotirlingas of Lord Shiva, located at the origin of the Godavari river. Known for its unique architecture and religious significance."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755070345/Anjneri_Hill_faf4iu.jpg",
        name: "Anjaneri Hills",
        description:
            "Considered the birthplace of Lord Hanuman, Anjaneri Hills offer scenic trekking trails and panoramic views of the surrounding Sahyadri ranges."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755090636/Someshwar_Temple_xni8kk.jpg",
        name: "Someshwar Waterfall & Temple",
        description:
            "A scenic picnic spot with a beautiful waterfall and an ancient Lord Shiva temple, located near Gangapur Dam."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755076297/Coin_Museum_dr67pg.jpg",
        name: "Indian Coin Museum",
        description:
            "The only coin museum in Asia, displaying rare coins, currency notes, and artifacts representing India's monetary history."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755076299/Gargoti_Museum_dwgcwv.jpg",
        name: "Gargoti Mineral Museum",
        description:
            "A world-famous mineral museum showcasing rare minerals, crystals, and precious stones from India and around the world."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755076298/Harihar_Fort_ahg3zs.jpg",
        name: "Harihar Fort",
        description:
            "A unique fort famous for its near-vertical rock-cut steps and thrilling trek, offering a breathtaking view from the top."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755076302/Kalaram_Temple_kvxgm8.jpg",
        name: "Kalaram Temple",
        description:
            "An ancient temple dedicated to Lord Rama, known for its black stone idol and beautiful architecture. A major site during Ramnavami celebrations."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755076302/Sita_Gumpha_cghflz.jpg",
        name: "Sita Gufa",
        description:
            "A narrow cave where Sita is believed to have stayed during the exile. It is located near Panchvati and holds mythological significance."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755076383/Someshwar_waterfall_ezzf7n.webp",
        name: "Dudhsagar Falls (Nashik)",
        description:
            "A stunning seasonal waterfall near Someshwar, popular for its white foamy water and scenic beauty during monsoons."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755076300/Muktidham_Temple_rl2jf2.jpg",
        name: "Muktidham Temple",
        description:
            "A marble temple complex housing replicas of all 12 Jyotirlingas and major Hindu deities, making it a mini spiritual hub."
    }
];


const places = document.body.querySelector(".places")


places && nashikPlaces.map((place) => {
    places.innerHTML = places.innerHTML + `
    <div class="card">
        <img src=${place.imgURL} alt="..." />
        <div class="card-body">
            <h5 class="card-title">${place.name}</h5>
            <p class="card-text">
                ${place.description}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>`
})

const nashikEvents = [
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755083089/Kumbh_Mela_lkdkkf.jpg",
        name: "Kumbh Mela",
        description:
            "The largest religious gathering in the world, held every 12 years in Nashik. Millions of devotees take a holy dip at Ramkund on the Godavari River."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755083087/SulaFest_x47xgz.webp",
        name: "SulaFest",
        description:
            "India's biggest vineyard music festival held annually at Sula Vineyards. Features live music, gourmet food, wine tasting, and camping."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755083084/Ramnavami_Festival_kbkwrh.jpg",
        name: "Ram Navami Festival",
        description:
            "Celebrated with grandeur at Kalaram Temple in Panchvati. The temple and streets are beautifully decorated, and processions attract thousands of devotees."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755083083/Maha_Shivratri_Fair_e3bnll.jpg",
        name: "Maha Shivratri at Trimbakeshwar",
        description:
            "A major festival where devotees visit Trimbakeshwar Temple to offer prayers to Lord Shiva. The entire town lights up with religious fervor."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755083086/Grape_Harvest_Festival_wqwkl3.jpg",
        name: "Nashik Grape Harvest Festival",
        description:
            "A celebration of the grape harvest season featuring grape stomping, wine tasting, food stalls, and cultural performances."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755083080/Diwali_in_Nashik_ckjvq0.webp",
        name: "Diwali in Nashik",
        description:
            "The city glows with lamps and fireworks. Major temples and markets are decorated beautifully, attracting visitors from nearby towns."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755083078/Ganesh_Chaturthi_Festival_tslsk2.avif",
        name: "Ganesh Chaturthi",
        description:
            "A 10-day grand festival with beautifully decorated Ganesh idols, processions, and immersion ceremonies in the Godavari river."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755086354/Nashik_International_Film_Festival_iihj3l.jpg",
        name: "Nashik International Film Festival",
        description:
            "An event that promotes independent cinema, showcasing films, documentaries, and short films by Indian and international filmmakers."
    },
    {
        imgURL: "https://res.cloudinary.com/de3hys95z/image/upload/v1755086353/Nashik_Marathon_zje8py.avif",
        name: "Nashik Run Marathon",
        description:
            "A charity marathon organized every year to raise funds for social causes. Participants include professionals and amateur runners."
    }
];

const events = document.body.querySelector(".events-cnt")

events && nashikEvents.map((event) => {
    events.innerHTML = events.innerHTML + `<div class="card">
        <img src=${event.imgURL} alt="..." />
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">
                ${event.description}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>`
})