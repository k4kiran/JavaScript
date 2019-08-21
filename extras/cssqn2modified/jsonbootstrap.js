function createCategory() {
  var myCategory = [
      {
          "categoryTitle": "Web Designer",
          "Count": "300",
          "description": "Open Position",
      },
      {
        "categoryTitle": "Php Developer",
        "Count": "100",
        "description": "Open Position",
      },
      {
        "categoryTitle": "Database Designer",
        "Count": "200",
        "description": "Open Position",
      },
      {
        "categoryTitle": "Multimedia",
        "Count": "500",
        "description": "Open Position",
      }
  ]

  $(document).ready(function(){
    
    var catListItemTitle = " ";
    for(var catItem = 0; catItem < myCategory.length; catItem++){
        
        catListItemTitle = catListItemTitle + '<div class="list-group list-group-flush"><div class="list-group-item text-dark">'+ myCategory[catItem].categoryTitle +'</br>';
        catListItemTitle = catListItemTitle + '<label class="opennumber text-danger">' + myCategory[catItem].Count +'</label>&nbsp;';
        catListItemTitle = catListItemTitle + '<label class="poststatus text-secondary">' + myCategory[catItem].description + '</label></div></div>';         
        $(".col1").html(catListItemTitle);
    }

});
}
