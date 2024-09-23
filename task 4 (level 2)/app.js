let display = document.querySelector('#display'); //get display input

const results = document.querySelector('#results'); //get results container

let keys = document.querySelectorAll('.keys'); //get key buttons

keys.forEach((key) => {

  key.addEventListener('click', () => {

    const getKeyContent = key.textContent; //get each key's text content

    if (getKeyContent === '=') {

      results.innerHTML = eval(display.value); // calculate and print results

    } else if (getKeyContent === '%') {

      results.innerHTML = eval(results.value / 100); // divide the results by 100

    } else if (getKeyContent === 'C') {

      display.value = ''; // reset display text content

      results.innerHTML = 0; // reset results text content

    } else if (
      getKeyContent === '/' && display.value === '' ||
      getKeyContent === '*' && display.value === '' ||
      getKeyContent === '-' && display.value === '' ||
      getKeyContent === '+' && display.value === '' ) {

      display.value = ''; // display an empty string if user clicks on /, *, -, + and . while there is no exiting value

    } else if (getKeyContent === '.' && display.value === '') {

      display.value = '0.'; // display an "0." if user clicks on "." while there is no exiting value

    } else {

      display.value += getKeyContent;

    }

  });

});