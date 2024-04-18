// Function to calculate mean (average)
function calculateMean(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }
  
  // Function to calculate mode (most frequent number)
  function calculateMode(numbers) {
    const freqCounter = createFrequencyCounter(numbers);
  
    let count = 0;
    let mode;
  
    for (let key in freqCounter) {
      if (freqCounter[key] > count) {
        mode = parseFloat(key);
        count = freqCounter[key];
      }
    }
  
    return mode;
  }
  
  // Function to calculate median (middle value)
  function calculateMedian(numbers) {
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedNumbers.length / 2);
  
    if (sortedNumbers.length % 2 === 0) {
      return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2;
    } else {
      return sortedNumbers[mid];
    }
  }
  
  // Helper function to create a frequency counter from an array
  function createFrequencyCounter(arr) {
    return arr.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});
  }
  
  module.exports = {
    calculateMean,
    calculateMode,
    calculateMedian
  };
  