const fibonacci = function (n) {
  // at fun1 return 1
  // at fun2 return 1
  // at fun3 return fun1 + fun2 = 1 + 1 = 2
  // at fun4 return fun3 + fun2 = 2 + 1 = 3
  parseInt(n);
  if (n < 0) {
    return "OOPS";
  } else if (n == 0) {
    return 0;
  } else if (n <= 2 && n > 0) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
