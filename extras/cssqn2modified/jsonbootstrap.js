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
        "Count": "400",
        "description": "Open Position",
      },
      {
        "categoryTitle": "Multimedia",
        "Count": "300",
        "description": "Open Position",
      }
  ]

  $(document).ready(function(){
    var flag=true;
    var catListItemTitle = " ";
    var input1 = document.getElementById("dropdown1").value;
    var input2 = document.getElementById("dropdown2").value;
    var input3 = document.getElementById("dropdown3").value;
    for(var catItem = 0; catItem < myCategory.length; catItem++)
    {
      if(input1.match(myCategory[catItem].categoryTitle))
      {
        if(input2.match(myCategory[catItem].Count))
        {
          if(input3.match(myCategory[catItem].description))
          {
            catListItemTitle = catListItemTitle + '<li><div class="category" text-dark"><label class="categoryhead">'+ myCategory[catItem].categoryTitle + '</label>';
            catListItemTitle = catListItemTitle + '<label class="opennumber text-danger">' + myCategory[catItem].Count +'</label>&nbsp;';
            catListItemTitle = catListItemTitle + '<label class="poststatus text-secondary">' + myCategory[catItem].description + '</label><hr></div></li>';         
            
          } 
        }      
      }
    }
    if(!catListItemTitle.match(""))
    {
      $(".testlist").html("<li><p>No Data Found</p></li>");
    }
    else
    {
      $(".testlist").html(catListItemTitle);
    }
    

});
}

function getInput(){
  var input1 = document.getElementById("dropdown1").value;
  console.log(input1);
  var input2 = document.getElementById("dropdown2").value;
  console.log(input2);
  var input3 = document.getElementById("dropdown3").value;
  console.log(input3);
}