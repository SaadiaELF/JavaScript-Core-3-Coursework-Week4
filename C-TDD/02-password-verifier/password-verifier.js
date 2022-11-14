function verify(password) {
  let uppercase = /[A-Z]/g;
  let numbers = /[0-9]/g;
  if (
    password.length < 8 ||
    !uppercase.test(password) ||
    !numbers.test(password)
  ) {
    return "Password rejected";
  } else {
    return "Password accepted";
  }
}

module.exports = verify;
