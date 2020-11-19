

// selecting form

const loanForm = document.querySelector('#loan-form');



loanForm.addEventListener('submit', function(e){
  document.querySelector('#results').style.display = 'none';
  document.querySelector('#image').style.display = 'block';

  setTimeout(calculate, 2000);


  e.preventDefault()
})


function calculate() {
  //selecting all the dom elem required
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment =  document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');
  const result = document.querySelector('#results');
  const image = document.querySelector('#image');
  //converting the values
  const principal = parseFloat(amount.value);
  const calcInterest = parseFloat(interest.value) / 100 / 12;
  const calcPayment = parseFloat(years.value) * 12;

  // calculating monthly payment

  const m  = Math.pow(1 + calcInterest, calcPayment);

  const monthly = (principal* m * calcInterest ) / (m-1);

  if (isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calcPayment).toFixed(2);
    totalInterest.value = ((monthly * calcPayment) - principal).toFixed(2);

    result.style.display = "block";
    image.style.display = "none";

  }else {
    showError('please check your fields')
  }

}

//error function
function showError(error){

  const result = document.querySelector('#results');
  const image = document.querySelector('#image');
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  errorDiv.className ='alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));


  card.insertBefore(errorDiv, heading);


  result.style.display = "none";
  image.style.display = "none";
  setTimeout(clearErr, 3000);
}

// clear errors
const clearErr =() => document.querySelector('.alert').remove();
