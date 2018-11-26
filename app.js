const app = angular.module('app', []);
app.filter('upper', () => {
  return (input, addBang) => {
    const upper = (input || "").toUpperCase();
    return addBang ? upper + '!!!' : upper
  }
});
