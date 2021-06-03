var arr1 = ["Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan"];
window.addEventListener('DOMContentLoaded', exercise1());

function exercise1() {
    var mystr = '<ul>'
    for (var i = 0; i < arr1.length; i++) {
        mystr = mystr + '<li>' + arr1[i] + '</li>'
    }
    mystr = mystr + '</ul>'
    document.querySelector("#myCountriesList").innerHTML = mystr;
}

// ========================================================================

var arr2 = [

    "https://upload.wikimedia.org/wikipedia/commons/3/3c/A_view_of_New_York_City_with_the_Empire_State_Building_and_One_World_Trade_Center_from_the_Rockefeller_Center.jpg",

    "http://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_thescene.jpg,fl_progressive,g_face,h_450,q_80,w_800/v1586278003/thenewyorker_the-streets-of-new-york-under-quarantine.jpg",

    // "https://res.cloudinary.com/corcoran-dryrmqrbg/image/upload/carousel/UmbracoCMS/c72853ba-1645-4c50-9d7f-eab595ec01ff/c9a8bfa0-aed9-4989-83c0-023679eacbc2",

    "https://media.timeout.com/images/105621618/image.jpg",

    "https://www3.hilton.com/resources/media/hi/NYCMLHH/en_US/img/shared/full_page_image_gallery/main/HH_extersguest001_7_1270x560_FitToBoxSmallDimension_Center.jpg",

    "https://pix10.agoda.net/hotelImages/4876215/0/1529d90af33234c862c6c649c41b8f38.jpg?s=1024x768",

    "https://cdn.vox-cdn.com/thumbor/lFcfSBnC9XlpJLilDZYp5P76tEg=/0x0:4755x3136/1200x800/filters:focal(1998x1188:2758x1948)/cdn.vox-cdn.com/uploads/chorus_image/image/66532030/1208425176.jpg.14.jpg",

    "https://www.planetware.com/photos-large/USNY/new-york-city-statue-of-liberty.jpg",

    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/izPQEuBiZZB8/v1/1000x-1.jpg",

    "https://embedwistia-a.akamaihd.net/deliveries/d1aabab77032850938875a0ba7f9c26e.webp?image_crop_resized=1280x750",

    "https://www.fairmont.com/assets/0/104/3225/3230/4116/4124/6838fa59-8d09-4eb5-984a-01dab4bc1f07.jpg",

    "https://s7d2.scene7.com/is/image/ritzcarlton/50571394-Exterior?$XlargeViewport100pct$",

    "https://cdn.mos.cms.futurecdn.net/j9Uwhe7ehJLAdfoKPUJL9h-1200-80.jpg",

    "https://res.cloudinary.com/corcoran-dryrmqrbg/image/upload/f_auto,q_auto/v1587039150/marketreport/UmbracoCMS/59c923d0-cfaa-47cd-8719-7984f4d08d9c/rikyqgl4aspqif7vype5.jpg",

    "https://www.columbia.edu/content/sites/default/files/styles/cu_crop/public/content/Campus%20Images/vagelos-building.jpg?itok=G58R2Xpo",

    // "https://www.newyorkpass.com/images/rebrand/prices_01.jpg",

    "https://www.thetimehotels.com/d/new-york/images/smallimg.jpg?1484682100",

    "https://www.trumphotels.com/uploads/18509/0/cloudinary/trump-hotels-cloudinary/image/upload/x_0,y_48,w_1539,h_890,c_crop/c_fill,w_1440,ar_180:109,g_auto/v1541714598/wwd422hpy4wpimwlu3xp.jpg",

    "https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/the-pierre-ny/media/pierreny-home-header-mobile-1-5dc18bf3195e7.jpg",

    "https://media.nbcnewyork.com/2020/08/Screen-Shot-2020-08-24-at-6.53.52-PM-e1598310573423.png?crop&resize=850%2C478",

    "https://assets.newyorklife.com/is/image/newyorklife/timeline-image-nyl-building-tarp-light-2?$992x570-large$",

    "https://www.amtrak.com/content/dam/projects/dotcom/english/public/images/heros/Route_AcelaExpress_Carousel_NYC_2.jpg/_jcr_content/renditions/cq5dam.web.4256.2832.jpeg"

]
window.addEventListener('DOMContentLoaded', exercise2());

function exercise2() {
    var myimgs = ''
    for (var i = 0; i < arr2.length; i++) {
        myimgs = myimgs + '<img src=' + arr2[i] + '>'
    }

    document.querySelector("#imgs").innerHTML = myimgs;
}
// ========================================================================

var arr = []
function exercise3() {
    for (var i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * 21);
    }
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] === 5) {
            console.log('5 was found');
        } else {
            console.log(arr[i]);
        }
    }
    console.log("\n");
}

// ========================================================================

var x = []
var y = []
function exercise4() {
    for (var i = 0; i < 10; i++) {
        x[i] = 0;
        y[i] = 0;
    }
    for (var i = 0; i < 10; i++) {
        x[i] = Math.floor(Math.random() * 4);
        y[i] = Math.floor(Math.random() * 4);
    }
    for (var ix = 0; ix < 10; ix++) {
        for (var iy = 0; iy < 10; iy++) {
            if (x[ix] === y[iy]) {
                console.log(ix + "' in Array x = " + iy + "' in Array y = " + x[ix])
            }
        }

    }

}

// ========================================================================

var x = []
var y = []
function exercise5() {
    for (var i = 0; i < 10; i++) {
        x[i] = 0;
        y[i] = 0;
    }
    for (var i = 0; i < 10; i++) {
        x[i] = Math.floor(Math.random() * 21);
    }
    console.log(x);
    console.log(y);
    console.log("\n")
    for (var i = 0; i < 10; i++) {
        y[i] = x[i];
    }
    console.log(x);
    console.log(y);
    console.log('\n')
}


var arr3 = []
var maxI = 0
var maxVal = 0

// ========================================================================

function exercise6() {
    for (var i = 0; i < 10; i++) {
        arr3[i] = 0;
    }
    for (var i = 0; i < 10; i++) {
        arr3[i] = Math.floor(Math.random() * 21);
    }
    for (var i = 0; i < 10; i++) {
        if (arr3[i] > maxVal) {
            maxI = i + 1
            maxVal = arr3[i]
        }
    }
    console.log(arr3);
    console.log('the max value on the array: ' + maxVal);
    console.log('located on the ' + maxI + ' location');

}

// ========================================================================

var x = []
var y = []
var z = []
function exercise7() {
    for (var i = 0; i < 5; i++) {
        x[i] = 0;
        y[i] = 0;
        z[i] = 0;
    }
    for (var i = 0; i < 5; i++) {
        x[i] = Math.floor(Math.random() * 3);
        y[i] = Math.floor(Math.random() * 3);
    }
    for (var i = 0; i < 5; i++) {
        if (x[i] === y[i]) {
            z[i] = x[i] + y[i];
        }
    }
    console.log(x);
    console.log(y);
    console.log('-----------------------');
    console.log(z);
    console.log('\n')
}

// ========================================================================

function exercise8() {
    var arr4 = []

    for (var i = 0; i < 10; i++) {
        arr4[i] = Math.floor(Math.random() * 21);
    }
    var minVal = arr4[0]
    var maxVal = arr4[0]
    for (var i = 0; i < 10; i++) {
        if (arr4[i] > maxVal) {
            maxVal = arr4[i];
        }
        if (arr4[i] < minVal) {
            minVal = arr4[i];
        }
    }

    // minVal=Math.min.apply(Math,arr4);
    // maxVal=Math.max.apply(Math,arr4);

    console.log(arr4);
    console.log('max value: ' + maxVal);
    console.log('min value: ' + minVal);
}
