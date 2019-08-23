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
        
        catListItemTitle = catListItemTitle + '<li><div="class="category" text-dark"><label class="categoryhead">'+ myCategory[catItem].categoryTitle + '</label>';
        catListItemTitle = catListItemTitle + '<label class="opennumber text-danger">' + myCategory[catItem].Count +'</label>&nbsp;';
        catListItemTitle = catListItemTitle + '<label class="poststatus text-secondary">' + myCategory[catItem].description + '</label><hr></div></li>';         
        $(".testlist").html(catListItemTitle);
    }

});
}
