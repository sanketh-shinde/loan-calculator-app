const amount = document.getElementById('amount');
const interestRate = document.getElementById('interest-rate');
const months = document.getElementById('months');
const calculateButton = document.getElementById('btn');

calculateButton.addEventListener('click', () => {

  const rateOfInterestPerAnnum = interestRate.value / 12 / 100;

  const emi = Math.round((amount.value * rateOfInterestPerAnnum * (Math.pow(1 + rateOfInterestPerAnnum, months.value))) / (Math.pow(1 + rateOfInterestPerAnnum, months.value) - 1))

  const totalInterestPayable = Math.round(emi * months.value - amount.value);

  document.getElementById('display').innerHTML = `<hr><p>monthly emi is: ${emi}</p> <p>total interset payable is: ${totalInterestPayable}</p><p>total amount payable is: ${emi * months.value}</p>`;
});