(function(){
  function hasClass(elem,className) {
    var classNames = elem.className.split (' ');

        return classNames.indexOf(className) > - 1;
})();


(function() {

  function hasClass(elem,className) {
           className = ' ' + className + ' ';
           var classNames= ' ' + elem.className + ' ';
           return classNames.indexOf (className) > -1;

  }
})();
