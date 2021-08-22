
// function navbar() {
// let menuItemsArr = ['Home', 'Post new car', 'Get car by id', 'Delete car', 'Update car']
// const menueItemsLinkArr = ['home()', 'postNewCar()', 'getCarById', 'deleteCarById', 'Updatecar()']
// let navBar1 = `<nav class="navbar"><img src="./navbar.png">`
// for (i = 0; i < menuItemsArr.length; i++) {
//     navBar1 += `<a class="menuItems" onclick="${menueItemsLinkArr[i]}">${menuItemsArr[i]}</a>`
// }
// navBar1 += `</nav>`

// document.getElementById('top').innerHTML = navBar1
// }

function postNewCar() {
    console.log('post a new car');
    let htmlContent = `
    <form class="carsForm" action="/api/cars" method="POST">
    <label for="carsForm">
        <h3>Enter new car</h3>
    </label>
    <input type="text" name="manufacturer" class="input" placeholder="manufacturer">
    <input type="text" name="model" class="input" placeholder="model">
    <input type="text" name="year" class="input" placeholder="year">
    <input type="text" name="plate" class="input" placeholder="plate">
    <button type="submit">Submit</button>
    </form>`

    document.getElementById('content').innerHTML = htmlContent
}

function Updatecar() {
    console.log('Update a car');
    const htmlContent = `
    <form class="carsForm" action="/api/cars" method="POST">
    <label for="carsForm">
        <h3>Update new car</h3>
    </label>
    <input type="text" name="id" class="input" placeholder="ID">
    <input type="text" name="manufacturer" class="input" placeholder="manufacturer">
    <input type="text" name="model" class="input" placeholder="model">
    <input type="text" name="year" class="input" placeholder="year">
    <input type="text" name="plate" class="input" placeholder="plate">
    <button type="submit">Submit</button>
    </form>`

    document.getElementById('content').innerHTML = htmlContent
}

// navbar()

