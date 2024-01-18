// ------------------------------------------------------------------------------------------------------------
//getting the data from google sheet reusable (multiple) table

const getDataFromGoogleSheets2 = (SHEET_ID,RANGE,SHEET_TITLE,tableNo) => {
  const GOOGLE_SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${RANGE}`;

  fetch(GOOGLE_SHEET_URL)
    .then((response) => response.text())
    .then((data) => {
      const jsonStart = data.indexOf("google.visualization.Query.setResponse(");

      if (jsonStart !== -1) {
        const jsonString = data.substring(
          jsonStart + "google.visualization.Query.setResponse(".length,
          data.length - 2
        );

        const jsonData = JSON.parse(jsonString);
        const dataTable = jsonData.table;
        const rows = dataTable.rows;

        const tableBody = document.getElementById("indianTableBody"+tableNo);
        let timeFlag = true;

        console.log('rows...KadirKhan...',rows);

        rows.forEach((rowData) => {
          console.log("rowData..??", rowData);
          const row = document.createElement("tr");
          rowData.c.forEach((cellData, index) => {
            const cell = document.createElement("td");
            const link = document.createElement("a");
            if ((index === 3 && timeFlag)) {
              let date = cellData.v.slice(0,10);
              let time =  cellData.v.slice(10);
              cell.innerHTML = `${date} <br> ${time}`;
              cell.setAttribute("rowspan", 3);
              row.appendChild(cell);
              timeFlag = false;
            }else if(index === 0 || index === 2){
              link.textContent = cellData?.v;
              // link.setAttribute("href","https://abdulkadirkhan786.netlify.app/");
              let id = cellData?.v;
              // console.log('id...???',id);
              // console.log('id...typeof',typeof id);
              link.setAttribute("href",`http://www.kktv1.com/m/?roomid=${id}`);   // here i am updating the user id dynamically...
              cell.appendChild(link);
              row.appendChild(cell);
            }else if (index !== 3) {
              cell.textContent = cellData?.v;
              row.appendChild(cell);
            }
          });

          tableBody.appendChild(row);
        });
        const tableContainer = document.getElementById("indiaTable"+tableNo);
        tableContainer.appendChild(tableBody);
      } else {
        console.error("Data not found in the response.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

getDataFromGoogleSheets2("11ZLpOSrhZISYYzGusflZZA3FcXkznRKfvaO_t9hzKJA","B101:E103","Dec 23 Agency PK Battle","1");
getDataFromGoogleSheets2("11ZLpOSrhZISYYzGusflZZA3FcXkznRKfvaO_t9hzKJA","B105:E107","Dec 23 Agency PK Battle","2");
getDataFromGoogleSheets2("11ZLpOSrhZISYYzGusflZZA3FcXkznRKfvaO_t9hzKJA","B109:E111","Dec 23 Agency PK Battle","3");
getDataFromGoogleSheets2("11ZLpOSrhZISYYzGusflZZA3FcXkznRKfvaO_t9hzKJA","B127:E129","Dec 23 Agency PK Battle","4");
