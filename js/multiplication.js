


create_table = function() {

    // Resets the table to prevent more than one table from being created
    var mainTable = document.querySelector(".main-table-container");
    mainTable.innerHTML = "";

    var cStartValue = document.getElementById("colMin").value
    var cEndValue = document.getElementById("colMax").value
    var rStartValue = document.getElementById("rowMin").value
    var rEndValue = document.getElementById("rowMax").value

    var vals = [cStartValue, cEndValue, rStartValue, rEndValue]

    var minColValue = Math.min(vals[0], vals[1])
    var maxColValue = Math.max(vals[0], vals[1])
    var minRowValue = Math.min(vals[2], vals[3])
    var maxRowValue = Math.max(vals[2], vals[3])

    newTable = document.createElement("table")
    newTable.setAttribute("id", "newTable")
    var newTbody = document.createElement("tbody")
    for (var i = minRowValue; i <= maxRowValue; i++) {
        var tr = document.createElement("tr");
        for (var j = minColValue; j <= maxColValue; j++) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(parseInt(i) * parseInt(j)));
            tr.appendChild(td);
        }
        newTbody.appendChild(tr);
    }

    var hRow = document.createElement("tr");
    hRow.appendChild(document.createElement("td"))
    for (var i = minColValue; i <= maxColValue; i++) {
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