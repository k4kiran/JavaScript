// ===========  GLOBAL ============ //
  
// -----------  PRODUCTS JSON ------------ //

  var myProducts = [
  {
    "imageUrl": "assets/images/latest-furniture-01.jpg",
    "imageBadge":"",
    "itemTitle": "wildcraft",
    "itemCategory": "Bags",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "discountPrice":"",
    "itemPrice1": 100,
    "itemPrice2": 120
  },
  {
    "imageUrl": "assets/images/latest-furniture-03.jpg",
    "imageBadge":"",
    "itemTitle": "wildcraft",
    "itemCategory": "Bags",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "discountPrice":"",
    "itemPrice1": 100,
    "itemPrice2": 120
  },
  {
    "imageUrl": "assets/images/prod-img-14.jpg",
    "imageBadge":"",
    "itemTitle": "wildcraft",
    "itemCategory": "Bags",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "discountPrice":"",
    "itemPrice1": 100,
    "itemPrice2": 120
  },
  {
    "imageUrl": "assets/images/prod-img-15.jpg",
    "imageBadge":"",
    "itemTitle": "wildcraft",
    "itemCategory": "Bags",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "discountPrice":"",
    "itemPrice1": 100,
    "itemPrice2": 120
  },
  {
    "imageUrl": "assets/images/prod-img-06.jpg",
    "imageBadge":"",
    "itemTitle": "wildcraft",
    "itemCategory": "Bags",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "discountPrice":"",
    "itemPrice1": 100,
    "itemPrice2": 120
  },
  {
    "imageUrl": "assets/images/latest-furniture-01.jpg",
    "imageBadge":"",
    "itemTitle": "wildcraft",
    "itemCategory": "Bags",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "discountPrice":"",
    "itemPrice1": 100,
    "itemPrice2": 120
  },
  {
    "imageUrl": "assets/images/prod-img-13.jpg",
    "imageBadge":"",
    "itemTitle": "wildcraft",
    "itemCategory": "Bags",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "discountPrice":"",
    "itemPrice1": 100,
    "itemPrice2": 120
  },
  {
    "imageUrl": "assets/images/lighting-design-03.jpg",
    "imageBadge":"",
    "itemTitle": "wildcraft",
    "itemCategory": "Bags",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "discountPrice":"",
    "itemPrice1": 100,
    "itemPrice2": 120
  },
  {
    "imageUrl": "assets/images/lighting-design-01.jpg",
    "imageBadge":"",
    "itemTitle": "wildcraft",
    "itemCategory": "Bags",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "discountPrice":"",
    "itemPrice1": 100,
    "itemPrice2": 120
  },
  {
    "imageUrl": "assets/images/prod-img-12.jpg",
    "imageBadge":"",
    "itemTitle": "wildcraft",
    "itemCategory": "Bags",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "discountPrice":"",
    "itemPrice1": 100,
    "itemPrice2": 120
  },
  {
    "imageUrl": "assets/images/prod-img-17.jpg",
    "imageBadge":"",
    "itemTitle": "wildcraft",
    "itemCategory": "Bags",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "discountPrice":"",
    "itemPrice1": 100,
    "itemPrice2": 120
  },
  {
    "imageUrl": "assets/images/latest-furniture-01.jpg",
    "imageBadge":"",
    "itemTitle": "wildcraft",
    "itemCategory": "Bags",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "discountPrice":"",
    "itemPrice1": 100,
    "itemPrice2": 120
  }    
  ]

// ===========  CREATE ROW ============ //

function createProduct(){
  var count = 0;
  var productPage = "";
    for(var prodItem = 0 ; prodItem < 12; prodItem++)
    {
      var productImage = '<figure><img src="' + myProducts[prodItem].imageUrl + '" alt="product image"></figure>';
      var productTitle = '<p class="itemtitle">' + myProducts[prodItem].itemTitle + '</p>';
      var productSubTitle = '<p class="itemsubtitle">' + myProducts[prodItem].itemCategory + '</p>';
      var productPrice = '<p class="itemprice text-danger">$' + myProducts[prodItem].itemPrice2 + '</p>';
      var productdescription = '<p class="describe">' + myProducts[prodItem].description + '</p>';
      var addcart = '<button type="button" class="cartbutton">ADD TO CART</button>';
      var wishlist = '<i class="fa fa-heart mt-3 mb-3 wishlists" aria-hidden="true">&nbsp;Add To Wishlist</i>' + '</br><i class="fas fa-layer-group comparing" aria-hidden="true">&nbsp;Compare</i>'
      productPage =  '<div class="col1 shadow2" id="col5"><div class="image"><a href="#">' + productImage + '</div><div class="content">' + productTitle + productSubTitle + productPrice + productdescription + addcart + wishlist + '</div></a></div>';
      count++;
      console.log(count);
      $("#fillproduct").append(productPage);
    } 
}
  
// ===========  List View ============ //

function listView()
{
  console.log(document.getElementsByClassName("col1")[0].style.width);
  //document.getElementsByClassName("col1")[0].style.width="";
  $("#fillproduct").removeClass("flex-row");
  $("#fillproduct").addClass("flex-column");
  $(".col1").addClass("d-flex"); 
  $(".col1").addClass("flex-row");
  $(".col1").css("width","100%");
  $(".productlist").css("text-align","left");
  $(".content").css("padding","2em");
  $(".describe").css("display","block");
  $(".image").css("width","100%");
  $(".cartbutton").css("display","block");
  $(".wishlists").css("display","block");
  $(".comparing").css("display","block");
}

// ===========  Grid View ============ //

function gridView()
{
  $("#fillproduct").removeClass("flex-column");
  $("#fillproduct").addClass("flex-row");
  $(".col1").removeClass("d-flex"); 
  $(".col1").removeClass("flex-row");
  $(".col1").css("width","24%");
  $(".productlist").css("text-align","center");
  $(".content").css("padding","0");
  $(".describe").css("display","none");
  $(".cartbutton").css("display","none");
  $(".wishlists").css("display","none");
  $(".comparing").css("display","none");
}

// ===========  CHANGE PRICERANGE ============ //

function sliderValue(){
  var slider1 = document.getElementById("slider1").value;
  var slider2 = document.getElementById("slider2").value;
  $("#minfilter").html(slider1);
  $("#maxfilter").html(slider2);
 
}

// ===========  DOCUMENT READY ============ //

$(document).ready(function(){
createProduct();
});