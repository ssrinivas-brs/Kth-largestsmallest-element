function findLargestSmallest() {
  const inputArray = document.getElementById('inputArray').value;
  const numbers = inputArray.split(',').map(Number);

  if (numbers.some(isNaN)) {
    alert('Please enter valid numbers separated by commas.');
    return;
  }

  const largest = Math.max(...numbers);
  const smallest = Math.min(...numbers);

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `<p>Largest Element: ${largest}</p><p>Smallest Element: ${smallest}</p>`;
}
