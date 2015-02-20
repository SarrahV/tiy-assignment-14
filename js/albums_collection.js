var AlbumsCollection = (function() {

  var template = JST["albumcoll"];

  function AlbumsCollection(data) {
    this.data = data;

  }

  AlbumsCollection.prototype = {

    render: function() {
       var $el = $( template() );
       var $ul = $el.find("ul");

      _.each(this.data, function(album) {
        var thumbnail = new AlbumThumbnail(album);
        $ul.append( thumbnail.render() );
      });
      return $el;
    }

  };

  return AlbumsCollection;

})();