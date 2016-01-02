// Write your tests here!
// Here is an example.
if(Meteor.isServer) {
  Tinytest.add('example', function (test) {
    test.equal(true, true);
  });
}

if(Meteor.isClient) {
  Tinytest.add('client example', function(test) {
    test.equal(false, false);
  });
}

