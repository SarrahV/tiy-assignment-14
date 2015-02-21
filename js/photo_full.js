var PhotoFull = (function(){

  var template = JST["photofull"];

  function PhotoFull(data) {
    this.data = data;
  }

  PhotoFull.prototype = {
    render: function() {
      return $( template(this.renderData()) );
    },

    renderData: function() {
      var defaultPhoto = "images/user-default.jpg";
      var data = _.clone(this.data);
      if (!data.photo_url) {
        data.photo_url = defaultPhoto;
      }
      return data;
    }
  }

  return PhotoFull;

})();
