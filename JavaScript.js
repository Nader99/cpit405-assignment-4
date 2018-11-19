// creating array of images 

function doClick() {
  var searchTerm = document.getElementById("search").value;
  var xhttp = new XMLHttpRequest();
  // When the request is successful, finished, and response is ready, execute these function
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resObj = JSON.parse(xhttp.responseText);

      for (item of resObj.data) {
        document.getElementById("search-result").innerHTML +=
          '<div><img src="' + item.link + '" alt="' + item.title + '"/></div>' +
          '<p>' + item.title + '</p>'
        '<p>Favorite: ' + item.favorite_count;
      }

    }
  }
  console.log("https://api.imgur.com/3/gallery/search/top/all/1?q=cats"+searchTerm);
  // Send an asynchronous HTTP GET request to the given end point (url)
  xhttp.open("GET", "https://api.imgur.com/3/gallery/search/top/all/1?q="+searchTerm, true);
  xhttp.setRequestHeader("Authorization","Client-ID 4fdd45f914c7313")
  xhttp.send();
}


var images = [
    {
        name: "gray_cat",
        likes: 28,
        dateUploaded: "2014-11-23 14:01:31",
        src: "download (3).jpg",
        size: 6.66,
        views : 423
    },
     {
        name: "small_cat",
        likes: 33,
        dateUploaded: "2018-09-05 18:22:01",
        src: "download (4).jpg",
        size: 7.80,
        views : 963
    }, {
        name: "cute_cat",
        likes: 86,
        dateUploaded: "2018-06-07 09:12:21",
        src: "download (5).jpg",
        size: 6.37,
        views : 865 
    }, {
        name: "green_eye_cat",
        likes: 19,
        dateUploaded: "2018-03-07 08:11:31",
        src: "download (6).jpg",
        size: 5.61,
        views : 264 
    }, {
        name: "brown_cat",
        likes: 44,
        dateUploaded: "2018-02-01 10:07:11",
        src: "download (7).jpg",
        size: 6.28,
        views : 2764 
    }, {
        name: "group_of_cats",
        likes: 76,
        dateUploaded: "2018-10-02 22:08:55",
        src: "download (8).jpg",
        size: 7.69,
        views : 3496 
    }, {
        name: "cat_on_laptop",
        likes: 52,
        dateUploaded: "2016-03-22 21:05:22",
        src: "download (9).jpg",
        size: 7.16,
        views : 1678 
    }, {
        name: "black_and_white",
        likes: 34,
        dateUploaded: "2018-04-28 17:22:07",
        src: "download (10).jpg",
        size: 5.54,
        views : 5837 
    }, {
        name: "blue_eye_cat",
        likes: 41,
        dateUploaded: "2017-06-20 20:08:22",
        src: "download (11).jpg",
         size: 5.45,
        views : 8618 
    }, {
        name: "yellow_eye_cat",
        likes: 55,
        dateUploaded: "2017-09-25 23:09:08",
        src: "download (12).jpg",
        size: 7.14
    }, {
        name: "mad_cat",
        likes: 92,
        dateUploaded: "2018-11-01 11:08:22",
        src: "download (13).jpg",
        size: 10.2,
        views : 2365 
    }, {
        name: "sleepy_cat",
        likes: 11,
        dateUploaded: "2018-10-24 12:35:01",
        src: "download (14).jpg",
        size: 4.99,
        views : 7856 
    }, {
        name: "cat",
        likes: 82,
        dateUploaded: "2017-12-02 11:11:00",
        src: "download.jpg",
        size: 6.39,
        views : 6529 
    }, {
        name: "black_cat",
        likes: 65,
        dateUploaded: "2016-11-02 06:02:00",
        src: "download2.jpg",
        size: 3.85,
        views : 5896 
    }, {
        name: "white_cat",
        likes: 34,
        dateUploaded: "2016-04-22 14:22:05",
        src: "download (1).jpg",
        size: 6.46,
        views : 3654 
    }, {
        name: "sad_cat",
        likes: 59,
        dateUploaded: "2016-01-25 14:25:00",
        src: "download (2).jpg",
        size: 11.3,
        views : 7568 
    }  
];

var sorted_img;

// Generate the HTML images using the DOM API
var divElem = document.createElement("div");
divElem.id = "div";
var imgElem = document.createElement("img");
imgElem.src = images[0].src;
var imgElem2 = document.createElement("img");
imgElem2.src = images[1].src;
var imgElem3 = document.createElement("img");
imgElem3.src = images[2].src;
var imgElem4 = document.createElement("img");
imgElem4.src = images[3].src;
var imgElem5 = document.createElement("img");
imgElem5.src = images[4].src;
var imgElem6 = document.createElement("img");
imgElem6.src = images[5].src;
var imgElem7 = document.createElement("img");
imgElem7.src = images[6].src;
var imgElem8 = document.createElement("img");
imgElem8.src = images[7].src;
var imgElem9 = document.createElement("img");
imgElem9.src = images[8].src;
var imgElem10 = document.createElement("img");
imgElem10.src = images[9].src;
var imgElem11 = document.createElement("img");
imgElem11.src = images[10].src;
var imgElem12 = document.createElement("img");
imgElem12.src = images[11].src;
var imgElem13 = document.createElement("img");
imgElem13.src = images[12].src;
var imgElem14 = document.createElement("img");
imgElem14.src = images[13].src;
var imgElem15 = document.createElement("img");
imgElem15.src = images[14].src;
var imgElem16 = document.createElement("img");
imgElem16.src = images[15].src;


divElem.appendChild(imgElem);
divElem.appendChild(imgElem2);
divElem.appendChild(imgElem3);
divElem.appendChild(imgElem4);
divElem.appendChild(imgElem5);
divElem.appendChild(imgElem6);
divElem.appendChild(imgElem7);
divElem.appendChild(imgElem8);
divElem.appendChild(imgElem9);
divElem.appendChild(imgElem10);
divElem.appendChild(imgElem11);
divElem.appendChild(imgElem12);
divElem.appendChild(imgElem13);
divElem.appendChild(imgElem14);
divElem.appendChild(imgElem15);
divElem.appendChild(imgElem16);
document.body.appendChild(divElem);

// for replacing between divs for example when clicking popular button to newest button or newest button to size button
function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

// this is for sorting by popular (likes)
document.getElementById("popular").addEventListener("click", function() {
sorted_img = images.sort(function (a, b ){return b.likes- a.likes});
});
// Generate the sorted array using the DOM API
document.getElementById("popular").addEventListener("click", function( ){
removeElement("div");
var divElem = document.createElement("div");
divElem.id ="div";
var imgElem = document.createElement("img");
imgElem.src = sorted_img[0].src;
var imgElem2 = document.createElement("img");
imgElem2.src = sorted_img[1].src;
var imgElem3 = document.createElement("img");
imgElem3.src = sorted_img[2].src;
var imgElem4 = document.createElement("img");
imgElem4.src = sorted_img[3].src;
var imgElem5 = document.createElement("img");
imgElem5.src = sorted_img[4].src;
var imgElem6 = document.createElement("img");
imgElem6.src = sorted_img[5].src;
var imgElem7 = document.createElement("img");
imgElem7.src = sorted_img[6].src;
var imgElem8 = document.createElement("img");
imgElem8.src = sorted_img[7].src;
var imgElem9 = document.createElement("img");
imgElem9.src = sorted_img[8].src;
var imgElem10 = document.createElement("img");
imgElem10.src = sorted_img[9].src;
var imgElem11 = document.createElement("img");
imgElem11.src = sorted_img[10].src;
var imgElem12 = document.createElement("img");
imgElem12.src = sorted_img[11].src;
var imgElem13 = document.createElement("img");
imgElem13.src = sorted_img[12].src;
var imgElem14 = document.createElement("img");
imgElem14.src = sorted_img[13].src;
var imgElem15 = document.createElement("img");
imgElem15.src = sorted_img[14].src;
var imgElem16 = document.createElement("img");
imgElem16.src = sorted_img[15].src;

    
document.body.appendChild(divElem);
divElem.appendChild(imgElem);
divElem.appendChild(imgElem2);
divElem.appendChild(imgElem3);
divElem.appendChild(imgElem4);
divElem.appendChild(imgElem5);
divElem.appendChild(imgElem6);
divElem.appendChild(imgElem7);
divElem.appendChild(imgElem8);
divElem.appendChild(imgElem9);
divElem.appendChild(imgElem10);
divElem.appendChild(imgElem11);
divElem.appendChild(imgElem12);
divElem.appendChild(imgElem13);
divElem.appendChild(imgElem14);
divElem.appendChild(imgElem15);
divElem.appendChild(imgElem16); 

});
//---------------------------------------------------------------------------------------------------------------------------
// this is for sorting by newest (dateUploaded) 
document.getElementById("newest").addEventListener("click",function() {
sorted_img = images.sort(function(a, b){return +new Date(b.dateUploaded) - +new Date(a.dateUploaded);});   
});
// Generate the sorted array using the DOM API
document.getElementById("newest").addEventListener("click",function(){
removeElement("div");
var divElem = document.createElement("div");
divElem.id ="div";
var imgElem = document.createElement("img");
imgElem.src = sorted_img[0].src;
var imgElem2 = document.createElement("img");
imgElem2.src = sorted_img[1].src;
var imgElem3 = document.createElement("img");
imgElem3.src = sorted_img[2].src;
var imgElem4 = document.createElement("img");
imgElem4.src = sorted_img[3].src;
var imgElem5 = document.createElement("img");
imgElem5.src = sorted_img[4].src;
var imgElem6 = document.createElement("img");
imgElem6.src = sorted_img[5].src;
var imgElem7 = document.createElement("img");
imgElem7.src = sorted_img[6].src;
var imgElem8 = document.createElement("img");
imgElem8.src = sorted_img[7].src;
var imgElem9 = document.createElement("img");
imgElem9.src = sorted_img[8].src;
var imgElem10 = document.createElement("img");
imgElem10.src = sorted_img[9].src;
var imgElem11 = document.createElement("img");
imgElem11.src = sorted_img[10].src;
var imgElem12 = document.createElement("img");
imgElem12.src = sorted_img[11].src;
var imgElem13 = document.createElement("img");
imgElem13.src = sorted_img[12].src;
var imgElem14 = document.createElement("img");
imgElem14.src = sorted_img[13].src;
var imgElem15 = document.createElement("img");
imgElem15.src = sorted_img[14].src;
var imgElem16 = document.createElement("img");
imgElem16.src = sorted_img[15].src;

    
document.body.appendChild(divElem);
divElem.appendChild(imgElem);
divElem.appendChild(imgElem2);
divElem.appendChild(imgElem3);
divElem.appendChild(imgElem4);
divElem.appendChild(imgElem5);
divElem.appendChild(imgElem6);
divElem.appendChild(imgElem7);
divElem.appendChild(imgElem8);
divElem.appendChild(imgElem9);
divElem.appendChild(imgElem10);
divElem.appendChild(imgElem11);
divElem.appendChild(imgElem12);
divElem.appendChild(imgElem13);
divElem.appendChild(imgElem14);
divElem.appendChild(imgElem15);
divElem.appendChild(imgElem16); 

});
//---------------------------------------------------------------------------------------------------------------------------
// this is for sorting by size  
document.getElementById("size").addEventListener("click",function() {
sorted_img = images.sort(function(a, b){return b.size - a.size;});   
});
// Generate the sorted array using the DOM API
document.getElementById("size").addEventListener("click",function(){
removeElement("div");
var divElem = document.createElement("div");
divElem.id ="div";
var imgElem = document.createElement("img");
imgElem.src = sorted_img[0].src;
var imgElem2 = document.createElement("img");
imgElem2.src = sorted_img[1].src;
var imgElem3 = document.createElement("img");
imgElem3.src = sorted_img[2].src;
var imgElem4 = document.createElement("img");
imgElem4.src = sorted_img[3].src;
var imgElem5 = document.createElement("img");
imgElem5.src = sorted_img[4].src;
var imgElem6 = document.createElement("img");
imgElem6.src = sorted_img[5].src;
var imgElem7 = document.createElement("img");
imgElem7.src = sorted_img[6].src;
var imgElem8 = document.createElement("img");
imgElem8.src = sorted_img[7].src;
var imgElem9 = document.createElement("img");
imgElem9.src = sorted_img[8].src;
var imgElem10 = document.createElement("img");
imgElem10.src = sorted_img[9].src;
var imgElem11 = document.createElement("img");
imgElem11.src = sorted_img[10].src;
var imgElem12 = document.createElement("img");
imgElem12.src = sorted_img[11].src;
var imgElem13 = document.createElement("img");
imgElem13.src = sorted_img[12].src;
var imgElem14 = document.createElement("img");
imgElem14.src = sorted_img[13].src;
var imgElem15 = document.createElement("img");
imgElem15.src = sorted_img[14].src;
var imgElem16 = document.createElement("img");
imgElem16.src = sorted_img[15].src;

    
document.body.appendChild(divElem);
divElem.appendChild(imgElem);
divElem.appendChild(imgElem2);
divElem.appendChild(imgElem3);
divElem.appendChild(imgElem4);
divElem.appendChild(imgElem5);
divElem.appendChild(imgElem6);
divElem.appendChild(imgElem7);
divElem.appendChild(imgElem8);
divElem.appendChild(imgElem9);
divElem.appendChild(imgElem10);
divElem.appendChild(imgElem11);
divElem.appendChild(imgElem12);
divElem.appendChild(imgElem13);
divElem.appendChild(imgElem14);
divElem.appendChild(imgElem15);
divElem.appendChild(imgElem16); 

});
//---------------------------------------------------------------------------------------------------------------------------
// this is for sorting by views  
document.getElementById("views").addEventListener("click",function() {
sorted_img = images.sort(function(a, b){return b.views - a.views;}); 
});
// Generate the sorted array using the DOM API
document.getElementById("views").addEventListener("click",function(){
removeElement("div");
var divElem = document.createElement("div");
divElem.id ="div";
var imgElem = document.createElement("img");
imgElem.src = sorted_img[0].src;
var imgElem2 = document.createElement("img");
imgElem2.src = sorted_img[1].src;
var imgElem3 = document.createElement("img");
imgElem3.src = sorted_img[2].src;
var imgElem4 = document.createElement("img");
imgElem4.src = sorted_img[3].src;
var imgElem5 = document.createElement("img");
imgElem5.src = sorted_img[4].src;
var imgElem6 = document.createElement("img");
imgElem6.src = sorted_img[5].src;
var imgElem7 = document.createElement("img");
imgElem7.src = sorted_img[6].src;
var imgElem8 = document.createElement("img");
imgElem8.src = sorted_img[7].src;
var imgElem9 = document.createElement("img");
imgElem9.src = sorted_img[8].src;
var imgElem10 = document.createElement("img");
imgElem10.src = sorted_img[9].src;
var imgElem11 = document.createElement("img");
imgElem11.src = sorted_img[10].src;
var imgElem12 = document.createElement("img");
imgElem12.src = sorted_img[11].src;
var imgElem13 = document.createElement("img");
imgElem13.src = sorted_img[12].src;
var imgElem14 = document.createElement("img");
imgElem14.src = sorted_img[13].src;
var imgElem15 = document.createElement("img");
imgElem15.src = sorted_img[14].src;
var imgElem16 = document.createElement("img");
imgElem16.src = sorted_img[15].src;

    
document.body.appendChild(divElem);
divElem.appendChild(imgElem);
divElem.appendChild(imgElem2);
divElem.appendChild(imgElem3);
divElem.appendChild(imgElem4);
divElem.appendChild(imgElem5);
divElem.appendChild(imgElem6);
divElem.appendChild(imgElem7);
divElem.appendChild(imgElem8);
divElem.appendChild(imgElem9);
divElem.appendChild(imgElem10);
divElem.appendChild(imgElem11);
divElem.appendChild(imgElem12);
divElem.appendChild(imgElem13);
divElem.appendChild(imgElem14);
divElem.appendChild(imgElem15);
divElem.appendChild(imgElem16); 

});
