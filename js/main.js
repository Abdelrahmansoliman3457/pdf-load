///active buttons
const buttons = document.querySelectorAll(".butfliter button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));

    this.classList.add("active");
  });
});


// .btns
const btnItems = document.querySelectorAll('.btns .item');

btnItems.forEach(button => {
  button.addEventListener('click', function() {
    btnItems.forEach(btn => btn.classList.remove('active'));
    
    this.classList.add('active');
  });
});
const btnsthree = document.querySelectorAll(".btnsthree .item");

btnsthree.forEach((button) => {
  button.addEventListener("click", function () {
    btnsthree.forEach((btn) => btn.classList.remove("active"));

    this.classList.add("active");
  });
});



/////
document.addEventListener("DOMContentLoaded", function () {
  const startDateInput = document.getElementById("startDate");
  const endDateInput = document.getElementById("endDate");
  const filterButton = document.getElementById("filterButton");
  const tableBody = document.getElementById("table-body");
  const dataTable = document.getElementById("data-table");
  const noDataMessage = document.getElementById("no-data");
  const exportButtons = document.getElementById("exportButtons");
  // const exportPDFButton = document.getElementById("exportPDF");
  const exportExcelButton = document.getElementById("exportExcel");

  const tableData = [
    {
      id: 1,
      date: "2024-09-10",
      details: "رسوم تحويل CITY:Digital Channel",
      notes: "Empty",
      reference: "134485977",
      operationCode: "",
      credit: "",
      debit: "-0.08",
      balance: "8.94",
    },
    {
      id: 2,
      date: "2024-09-11",
      details: "ضريبة القيمة المضافة CITY:Digital Channel CITY:Digital Channel",
      notes: "Empty",
      reference: "110957014",
      operationCode: "9M",
      credit: "",
      debit: "-3.00",
      balance: "9.02",
    },
    {
      id: 3,
      date: "2024-09-12",
      details: "ضريبة القيمة المضافة CITY:Digital Channel CITY:Digital Channel",
      notes: "Empty",
      reference: "110957014",
      operationCode: "9M",
      credit: "",
      debit: "-3.00",
      balance: "9.02",
    },
    {
      id: 4,
      date: "2024-09-13",
      details: "تحويل داخلي صادر تحويل الى الاهل والاصدقاء 11100156095500",
      notes: "Empty",
      reference: "134485977",
      operationCode: "JM",
      credit: "",
      debit: "-4.00",
      balance: "9.52",
    },
    {
      id: 5,
      date: "2024-09-14",
      details: "تحويل داخلي صادر تحويل الى الاهل والاصدقاء 11100156095500",
      notes: "Empty",
      reference: "134485977",
      operationCode: "JM",
      credit: "",
      debit: "-4.00",
      balance: "9.52",
    },
    {
      id: 6,
      date: "2024-09-15",
      details: "تحويل داخلي صادر تحويل الى الاهل والاصدقاء 11100156095500",
      notes: "Empty",
      reference: "134485977",
      operationCode: "JM",
      credit: "",
      debit: "-4.00",
      balance: "9.52",
    },
    {
      id: 7,
      date: "2024-09-16",
      details: "تحويل داخلي صادر تحويل الى الاهل والاصدقاء 11100156095500",
      notes: "Empty",
      reference: "134485977",
      operationCode: "JM",
      credit: "",
      debit: "-4.00",
      balance: "9.52",
    },
    {
      id: 8,
      date: "2024-09-17",
      details: "تحويل داخلي صادر تحويل الى الاهل والاصدقاء 11100156095500",
      notes: "Empty",
      reference: "134485977",
      operationCode: "JM",
      credit: "",
      debit: "-4.00",
      balance: "9.52",
    },
    // المزيد من البيانات...
  ];

  function filterByDate() {
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    const filteredData = tableData.filter(
      (item) => item.date >= startDate && item.date <= endDate
    );

    if (filteredData.length > 0) {
      populateTable(filteredData);
      tan.style.display='block';
      resluts.style.display='block';
      dataTable.style.display = "table";
      exportButtons.style.display = "block";
      noDataMessage.style.display = "none";
    } else {
      dataTable.style.display = "none";
            resluts.style.display = "none";

      tan.style.display = "none";
      exportButtons.style.display = "none";
      noDataMessage.style.display = "block";
    }
  }

  function populateTable(data) {
    tableBody.innerHTML = "";
    data.forEach((row) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
                <td>${row.date}</td>
                <td>${row.details}</td>
                <td style="color: green;">${row.notes}</td>

                <td>${row.reference}</td>
                <td>${row.operationCode}</td>
                <td>${row.credit}</td>
                <td style="color: red ;">${row.debit}</td>
                <td>${row.balance}</td>
            `;
      tableBody.appendChild(tr);
    });
  }

  filterButton.addEventListener("click", filterByDate);

  // exportPDFButton.addEventListener("click", function () {
  //   const { jsPDF } = window.jspdf;
  //   const doc = new jsPDF();
  //   let rowData = Array.from(tableBody.querySelectorAll("tr")).map((row) =>
  //     Array.from(row.children).map((cell) => cell.textContent)
  //   );

  //   doc.autoTable({
  //     head: [
  //       [
  //         "التاريخ",
  //         "التفاصيل",
  //         "الملاحظات",
  //         "المرجع",
  //         "رمز العملية",
  //         "دائن",
  //         "مدين",
  //         "الرصيد",
  //       ],
  //     ],
  //     body: rowData,
  //     theme: "grid",
  //   });

  //   doc.save("كشف-حساب.pdf");
  // });

  exportExcelButton.addEventListener("click", function () {
    const rowData = Array.from(tableBody.querySelectorAll("tr")).map((row) => {
      return {
        date: row.children[0].textContent,
        details: row.children[1].textContent,
        notes: row.children[2].textContent,
        reference: row.children[3].textContent,
        operationCode: row.children[4].textContent,
        credit: row.children[5].textContent,
        debit: row.children[6].textContent,
        balance: row.children[7].textContent,
      };
    });

    const ws = XLSX.utils.json_to_sheet(rowData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "كشف-حساب.xlsx");
  });
});


