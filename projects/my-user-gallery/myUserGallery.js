// roni yossi mishel
// randomuser.me/api/?results=50;
var selectedUsersArr = []

function getUsersDetails() {
    for (i = 0; i < selectedUsersArr.length; i++) {
        var userFirstName = membersArr[selectedUsersArr[i]]["name"]['first'];
        var userLastName = membersArr[selectedUsersArr[i]]["name"]['last'];
        var userEmail = membersArr[selectedUsersArr[i]]['email'];
        var userImage = membersArr[selectedUsersArr[i]].picture.large;
        var oneUser = `
        <div id="oneUser">
            <img index=${selectedUsersArr[i]} src=${userImage}  onclick="f1(event)" >
            <div id="Name1" class="overlay"> ${userFirstName} ${userLastName}</div>
        </div>`;
        document.querySelector("#usersDetails").innerHTML += oneUser;
    };
};

function f1(event) {
    var userIndex = event.target.getAttribute('index');
    console.log(userIndex);
    var userFullName = `${membersArr[userIndex]["name"]['first']} ${membersArr[userIndex]["name"]['last']}`
    console.log(userFullName);
    var userEmail = membersArr[userIndex]["email"]
    console.log(userEmail);
    var userImgUrl = membersArr[userIndex].picture.large;
    console.log(userImgUrl);

    document.querySelector("#hiddenImg").setAttribute('src', userImgUrl);
    document.querySelector("#hiddenName").innerHTML = 'Full Name: ' + userFullName;
    document.querySelector("#hiddenEmail").innerHTML = 'E-mail Address: ' + userEmail;
    document.querySelector("#hiddenDescrition").innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias id ut alias repellendus, doloremque delectus nihil quo eligendi possimus fugiat. Nihil impedit tempora aspernatur nulla atque commodi consequuntur excepturi neque nostrum, recusandae, itaque dignissimos minus quis? Perspiciatis explicabo quasi aliquam qui nesciunt error amet voluptatum veniam facilis nihil similique praesentium at expedita, ullam beatae, reprehenderit illum non repudiandae et perferendis blanditiis libero sapiente sint! Dignissimos sunt aliquid alias quidem totam animi doloremque illum cupiditate ex veniam provident esse est natus odio accusamus, molestiae laborum placeat id iure recusandae, deleniti sequi dicta quod nobis? Ipsam enim praesentium, consectetur dolorem ut, suscipit et ducimus illum odit id ratione commodi non saepe? Ipsa et iure voluptate repudiandae non ut iste doloribus, sapiente atque exercitationem eos architecto, eius mollitia dolorum? Quo harum nemo est, obcaecati, sit non consequatur itaque provident quaerat laudantium ipsam architecto sunt laboriosam voluptas labore eius repudiandae sapiente, fuga vero corrupti nam voluptates veniam? Laborum, quibusdam minima? Voluptatem eum reiciendis voluptate earum ea corrupti minima maxime quos tempore, minus optio quis doloribus eligendi sit, quia consectetur? Accusamus, veritatis. Delectus alias eveniet omnis, amet similique consequatur autem mollitia tempora ducimus dolores quas provident animi, pariatur voluptatem nihil aut rerum laudantium beatae. Asperiores esse consequatur, laboriosam commodi eveniet doloribus fugit dignissimos facere numquam deserunt minima nobis sapiente sed at. Voluptatum adipisci vel tempore molestiae deleniti, blanditiis quos eveniet sunt voluptas labore quisquam nemo, autem minima perspiciatis. Reprehenderit, amet similique! Quae quasi aliquam doloremque vero, sed sapiente ex excepturi assumenda! Hic reiciendis magnam velit dicta nesciunt impedit neque pariatur repellat mollitia consectetur? Quibusdam eum facere incidunt sequi? Possimus vitae qui illum, ducimus debitis dolores perferendis amet deleniti unde, accusamus maxime nisi ratione ea fuga!';

    document.querySelector(".modal").style.display = "flex";
}

function clearUserData() {
    document.querySelector(".modal").style.display = "none";
}

function randomUser() {
    var newRandomUser = Math.floor(Math.random() * membersArr.length);
    if (!selectedUsersArr.includes(newRandomUser)) {
        selectedUsersArr.push(newRandomUser)
        console.log(newRandomUser);
        if (selectedUsersArr.length === 50) {
            console.log("have 50 users");
            getUsersDetails()
        }else {
            randomUser()            
        }
    }else {
    console.log("Repited number");
    randomUser()
    }
}

document.addEventListener('DOMContentloaded', randomUser())
