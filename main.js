document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const resultDiv = document.getElementById("result");
  
    calculateButton.addEventListener("click", function () {
      const date1Input = document.getElementById("date1");
      const date2Input = document.getElementById("date2");
  
      const date1 = new Date(date1Input.value);
      const date2 = new Date(date2Input.value);
  
      if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        resultDiv.textContent = "Por favor, insira datas válidas.";
        return;
      }
  
      const maxDate = findMaxDate(date1, date2);
      const intervalDays = calculateDateInterval(date1, date2);
      const currentDate = getCurrentDate();
  
      resultDiv.innerHTML = `
        <p>Data mais recente: ${maxDate.toLocaleDateString()}</p>
        <p>Intervalo de dias: ${intervalDays} dias</p>
        <p>Data atual: ${currentDate}</p>
      `;
    });
  });
  