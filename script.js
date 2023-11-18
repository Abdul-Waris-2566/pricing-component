const prices = [
  { montly: 19.99, annualy: 199.99 },
  { montly: 24.99, annualy: 249.99 },
  { montly: 39.99, annualy: 399.99 },
]

const pricesEl = document.querySelectorAll('.card .display-1')
const switchEl = document.querySelector('.form-switch input ')

switchEl.addEventListener('change', function () {
  console.log(switchEl.checked)
  const switchStatus = switchEl.checked

  pricesEl.forEach(
    (pr, i) =>
      (pr.textContent = switchStatus ? prices[i].montly : prices[i].annualy)
  )
})
