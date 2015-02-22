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

  function PhotoCollectionList(data) {
    this.data = data;
    this.$el = $("<ul />");
  }

  PhotoCollectionList.prototype = {
    select: function(albumName) {
      this.$el.find("li").removeClass("active");
      this.$el
        .find("li[data-ind-album='"+ albumName +"']")
        .addClass("active");
    },

    render: function() {
      var $el = this.$el;

      _.each(this.data, function(groupData){

        var albumThumbs = new PhotoThumbnail(groupData);
        $el.append( albumThumbs.render() );

      });

      return $el;
    }
  }

  return PhotoCollectionList;

})();