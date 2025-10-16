async function demo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const root = document.getElementById("root");

  // Create table and header row
  const table = document.createElement("table");
  table.border = "1";
  table.style.borderCollapse = "collapse";
  table.style.marginTop = "20px";

  const headerRow = document.createElement("tr");
  ["Name", "Email", "Company","Phone"].map(text => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Add user rows
  data.forEach(user => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    nameCell.style.padding = "8px";

    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    emailCell.style.padding = "8px";

    const companyCell = document.createElement("td");
    companyCell.textContent = user.company.name;
    companyCell.style.padding = "8px";

     const phoneCell = document.createElement("td");
    phoneCell.textContent = user.phone;
    phoneCell.style.padding = "8px";

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(companyCell);
    row.appendChild(phoneCell);

    table.appendChild(row);
  });

  root.appendChild(table);
}

demo();
