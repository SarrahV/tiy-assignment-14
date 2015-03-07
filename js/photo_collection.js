var PhotoThumbnail = (function() {

  var template = JST["photothumb"]

  function PhotoThumbnail(data) {
    this.data = data;
  }

  PhotoThumbnail.prototype = {
    render: function() {
      return $( template(this.data) );

    }
  };

  return PhotoThumbnail
})();

var PhotoCollectionList = (function(){
  var template = JST["photocoll"];

  function PhotoCollectionList(data) {
    this.data = data;
  }

  PhotoCollectionList.prototype = {

    render: function() {
      var $el = $(template(this.data));
      var $list = $el.find("ul");

      _.filter(this.data, function(album){

        var albumThumbs = new PhotoThumbnail(album);
        $list.append( albumThumbs.render() );

      });

      return $el;
    }
  };

  return PhotoCollectionList;

})();