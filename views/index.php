<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sort and Pagination</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="container mt=1">
        <h2 class="text-center">MVC pattern for sort and pagination in table view using html css js php</h2>
        <label for="rowsPerPage">Rows per page </label>
        <select class="form-control" id="rowsPerPage" onchange="changeRowsPerPage()">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
        <br><br>
        <table id="myTable">
            <thead>
                <tr>
                    <th onclick="sortTable(0)">ID</th>
                    <th onclick="sortTable(1)">Name</th>
                    <th onclick="sortTable(2)">Age</th>
                </tr>
            </thead>
            <tbody id="tableBody">
            </tbody>
        </table>
        <div class="pagination" id="pagination"></div>
        <br>
        <div>
            <button class="btn btn-primary" onclick="sortAscending()">Sort Ascending</button>
            <button class="btn btn-success" onclick="sortDescending()">Sort Descending</button>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="js/scripts.js"></script>
</body>
</html>
