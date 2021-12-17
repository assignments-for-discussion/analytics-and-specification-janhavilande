
function average(numbers) {
  
  const checkNan = numbers.filter(function (num) {
    return !Number.isNaN(num);
  });

  return checkNan.reduce((p, c) => p + c, 0) / checkNan.length;
}

module.exports = {average};
