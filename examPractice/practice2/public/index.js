function loadUsers_then() {
    let url = 'https://randomuser.me/api/?results=50';
    try {
        fetch(url)
            .then((response) => { return response.json() })
            .then((data) => {
                let str = '';
                for (let curr of data.results) {
                    str += `<div class="card">
                    <img src="${curr.picture.large}">
                    <div class="userDetails">
                    <p>Name: ${curr.name.first} ${curr.name.last}</p>
                    <p>City: ${curr.location.country}</p>
                    </div>
                    </div>`
                }
                document.querySelector('#mydiv').innerHTML = str;
            })
    }
    catch (err) {
        console.log('there was an error', err);
    }
}


async function loadusers_async_await() {
    let url = 'https://randomuser.me/api/?results=50';

    try {
        let response = await fetch(url);
        let data = await response.json();

        let str = '';
        for (let curr of data.results) {
            str += `
            <div class="card">
            <img src="${curr.picture.large}">
            <div class="userDetails">
            <p>Name: ${curr.name.first} ${curr.name.last}</p>
            <p>City: ${curr.location.country}</p>
            </div>
            </div>`
        }
        document.querySelector('#mydiv').innerHTML = str;
    }
    catch (err) {
        console.log('there was an error', err);
    }
}

// loadusers_async_await();
loadUsers_then();