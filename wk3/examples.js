(function(){

function getMultipliers(n){
  var multipliers =[];

    for(var i=0;i < n; i ++){

        multipliers.push(function multiplier(n){
          return multipliers.indexOf(multiplier) * n;
        });
    }
    return multipliers;
}

var multipliers = getMultipliers (3);
console.log(multipliers [2](4));
})();
