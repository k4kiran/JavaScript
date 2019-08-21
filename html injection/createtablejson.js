function CreateTableFromJSON() {
        var myBooks = [
            {
                "Book ID": "1",
                "Book Name": "Computer Architecture",
                "Category": "Computers",
                "Price": "300"
            },
            {
                "Book ID": "2",
                "Book Name": "let us cpp",
                "Category": "Programming",
                "Price": "560"
            },
            {
                "Book ID": "3",
                "Book Name": "Web designing",
                "Category": "Design",
                "Price": "210"
            }
        ]

        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var index = 0; index < myBooks.length; index++) {
            for (var key in myBooks[index]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create dynamic table
        var table = document.createElement("table");

        var tr = table.insertRow(-1);             

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th"); 
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        for (var i = 0; i < myBooks.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        }

        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }