let currentPage = 1;
let rowsPerPage = 5;
let currentSortColumn = 0;
let currentSortOrder = 'asc';

function fetchData() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              const data = JSON.parse(xhr.responseText);
              displayData(data);
              setupPagination(data);
          } else {
              console.error('Failed to fetch data');
          }
      }
  };
  xhr.open('GET', 'getData.php', true);
  xhr.send();
}

fetchData(); 

function displayData(data) {
	const tableBody = document.getElementById("tableBody");
	tableBody.innerHTML = "";
	const startIndex = (currentPage - 1) * rowsPerPage;
	const endIndex = startIndex + rowsPerPage;
	const paginatedData = data.slice(startIndex, endIndex);
	paginatedData.forEach(item => {
		const row = document.createElement("tr");
		row.innerHTML = `
		<td>${item.id}</td>
		<td>${item.name}</td>
		<td>${item.age}</td>
		`;
		tableBody.appendChild(row);
	});
}

function setupPagination(data) {
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        button.addEventListener("click", function () {
            currentPage = i;
            displayData(data);
            highlightActivePageButton();
        });
        pagination.appendChild(button);
    }
    highlightActivePageButton();
}

function highlightActivePageButton() {
	const paginationButtons = document.querySelectorAll(".pagination button");
	paginationButtons.forEach((button, index) => {
		if (index + 1 === currentPage) {
		button.classList.add("active");
		} else {
		button.classList.remove("active");
		}
	});
}

function changeRowsPerPage() {
	rowsPerPage = parseInt(document.getElementById('rowsPerPage').value);
	currentPage = 1;
	fetchData()
}

function sortAscending() {
	currentSortOrder = 'asc';
	sortTable();
}

function sortDescending() {
	currentSortOrder = 'desc';
	sortTable();
}

function sortTable() {
	const table = document.getElementById("myTable");
	const tbody = table.querySelector('tbody');
	const rows = Array.from(tbody.getElementsByTagName("tr"));
	const sortedRows = rows.sort((a, b) => {
		const cellA = a.getElementsByTagName("td")[currentSortColumn].textContent.trim();
		const cellB = b.getElementsByTagName("td")[currentSortColumn].textContent.trim();
		return isNaN(cellA) ? cellA.localeCompare(cellB) : cellA - cellB;
	});
	if (currentSortOrder === 'desc') {
		sortedRows.reverse();
	}
	tbody.innerHTML = '';
	sortedRows.forEach(sortedRow => tbody.appendChild(sortedRow));
	highlightSortButton();
}

function highlightSortButton() {
	const sortButtons = document.querySelectorAll("button");
	sortButtons.forEach(button => button.classList.remove("active"));
	const activeSortButton = document.querySelector(`button:nth-child(${(currentSortOrder === 'desc' ? 2 : 1)})`);
	activeSortButton.classList.add("active");
}

displayData(data);
setupPagination(data);