Tinytest.add('Basic test', function (test) {
  var password = zxcvbn('Tr0ub4dour&3');
  
  test.equal(password.password, 'Tr0ub4dour&3', 'Expected zxcvbn to return Tr0ub4dour&3');
});
