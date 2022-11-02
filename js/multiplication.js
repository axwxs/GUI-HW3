

/*
create_table = function() {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    for (var i = 0; i < 10; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < 10; j++) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(i * j));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    return table;
}
*/

create_table = function() {
    /* var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    for (var i = 0; i < 10; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < 10; j++) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(i * j));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody); */

    var cStartValue = document.getElementById("colStart").value
    var cEndValue = document.getElementById("colEnd").value
    var rStartValue = document.getElementById("rowStart").value
    var rEndValue = document.getElementById("rowEnd").value

    var vals = [cStartValue, cEndValue, rStartValue, rEndValue]

    newTable = document.createElement("table")
    newTable.setAttribute("id", "newTable")
    var newTbody = document.createElement("tbody")
    for (var i = rStartValue; i <= rEndValue; i++) {
        var tr = document.createElement("tr");
        for (var j = cStartValue; j <= cEndValue; j++) {
            var td = document.createElement("td");
            // td.appendChild(document.createTextNode(j));
            td.appendChild(document.createTextNode(parseInt(i) * parseInt(j)));
            tr.appendChild(td);
        }
        newTbody.appendChild(tr);
    }

    var hRow = document.createElement("tr");
    hRow.appendChild(document.createElement("td"))
    for (var i = cStartValue; i <= cEndValue; i++) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(i));
        hRow.appendChild(th);
    }
    newTbody.insertBefore(hRow, newTbody.firstChild)

    newTable.appendChild(newTbody);

    var elementToAppend = document.querySelector('.main-table-container')



    // var addition = document.createElement('div')

    // addition.textContent = 'Added by JavaScript'
    // elementToAppend.appendChild(addition)
    // elementToAppend.innerHTML += table;

    elementToAppend.appendChild(newTable)

    var rowsToAppend = document.querySelectorAll("tr")
    var rowValueToAdd = rStartValue
    for (var i = 1; i < rowsToAppend.length; i++) {
        rowsToAppend[i].innerHTML = `<th>${rowValueToAdd}</th>` + rowsToAppend[i].innerHTML
        rowValueToAdd++
    }

    console.log('table created');
    console.log(vals);
    console.log(rowsToAppend)
    console.log(rowValueToAdd)
    return false;
}