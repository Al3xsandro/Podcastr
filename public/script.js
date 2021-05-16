function sendEpisode() {
    const title = document.getElementById('title').value;
    const members = document.getElementById('members').value;
    const url = document.getElementById('url').value;
    const description = document.getElementById('description').value;

    const data = {
        title: title,
        members: members,
        thumbnail: url,
        description: description
    }

    fetch('/episode/insert', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
}

function openSendEpisode() {
    const button = document.querySelector('.addEpisode');
    const popup = document.querySelector('.formModal');
    const close = document.querySelector('.closeModal');

    button.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    })
}

openSendEpisode()