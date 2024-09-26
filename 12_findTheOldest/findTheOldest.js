const findTheOldest = function (people) {
  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  return people.reduce((oldest, currentPerson) => {
    const currentPersonAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

    return oldestAge < currentPersonAge ? currentPerson : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
