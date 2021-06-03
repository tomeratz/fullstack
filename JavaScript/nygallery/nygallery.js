

var myArray = [

    "https://upload.wikimedia.org/wikipedia/commons/3/3c/A_view_of_New_York_City_with_the_Empire_State_Building_and_One_World_Trade_Center_from_the_Rockefeller_Center.jpg",

    "http://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_thescene.jpg,fl_progressive,g_face,h_450,q_80,w_800/v1586278003/thenewyorker_the-streets-of-new-york-under-quarantine.jpg",

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

    "https://www.newyorkpass.com/images/rebrand/prices_01.jpg",

    "https://www.thetimehotels.com/d/new-york/images/smallimg.jpg?1484682100",

    "https://www.trumphotels.com/uploads/18509/0/cloudinary/trump-hotels-cloudinary/image/upload/x_0,y_48,w_1539,h_890,c_crop/c_fill,w_1440,ar_180:109,g_auto/v1541714598/wwd422hpy4wpimwlu3xp.jpg",

    "https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/the-pierre-ny/media/pierreny-home-header-mobile-1-5dc18bf3195e7.jpg",

    "https://media.nbcnewyork.com/2020/08/Screen-Shot-2020-08-24-at-6.53.52-PM-e1598310573423.png?crop&resize=850%2C478",

    "https://assets.newyorklife.com/is/image/newyorklife/timeline-image-nyl-building-tarp-light-2?$992x570-large$",

    "https://www.amtrak.com/content/dam/projects/dotcom/english/public/images/heros/Route_AcelaExpress_Carousel_NYC_2.jpg/_jcr_content/renditions/cq5dam.web.4256.2832.jpeg"

];


window.addEventListener('DOMContentLoaded', showMyGallery());



function showMyGallery() {
    console.log(myArray.length);

    // var myStr = `<img width="300px" height="200px" src="${myArray[0]}">`;
    // myStr = myStr + `<img width="300px" height="200px" src="${myArray[1]}">`;
    // myStr = myStr + `<img width="300px" height="200px" src="${myArray[2]}">`;

    var myStr = "";

    for (var i = 0; i < myArray.length; i = i + 1) {
        myStr = myStr + `<img width="300px" height="200px" src="${myArray[i]}">`;
    }

    document.querySelector("#mainGallery").innerHTML = myStr;
}