async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '66eaf0dd9fmshc19b8a01f428291p106c96jsna58e7469f451',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };

    const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Toronto&minDate=2023-10-01&maxDate=2024-02-24&page=1', options);
    const record = await res.json();

    document.getElementById("concerts").innerHTML = record.data.map(item => {
        const eventName = item.name;
        const eventLink = item.location.sameAs;
        const eventDate = new Date(item.startDate).toLocaleDateString('en-CA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
        });
        return `<li>${eventName} on ${eventDate} - <a href="${eventLink}" target="_blank">Event Details</a></li>`;
    }).join('');
}

fetchData();