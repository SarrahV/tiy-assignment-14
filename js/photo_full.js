var PhotoFull = (function(){

  var template = JST["photofull"];

  function PhotoFull(data) {
    this.data = data;
  }

  PhotoFull.prototype = {
    render: function() {
      return $( template(this.data) );
    
    }
  }

  return PhotoFull;

})();
