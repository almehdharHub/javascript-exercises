const leapYears = function (yr) {
  if (yr % 100 == 0 && yr % 400 == 0) return true;
  if (yr % 100 != 0 && yr % 4 == 0) return true;

  return false;
};

// Do not edit below this line
module.exports = leapYears;
