var App = (function() {
  
  function App(data) {

    this.data = data;

    this.$sidebar = $(".sidebar");
    this.$content = $(".content");

    this.showAlbums();
    this.showAlbum();
    this.showPhotos();
    this.zoomPhoto();
    this.addListeners();

  }

  App.prototype = {

    getAlbumData: function() {
      var albumData = _.chain(this.data)
       .pluck("album")
       .uniq()
       .map(function(albumName) {
                            console.log(albumName);
        return {album: albumName};
       })
       .value();


        var app = this;

       _.each(albumData, function(album) {

        var albumName = album.album;

        var photo = _.find(app.data, function(photo) {
          return photo.album === albumName;
        });

        album.description = photo.description;
        album.photo_url = photo.photo_url;

       });

       return albumData;

    },

    showAlbums: function() {

      var albumData = this.getAlbumData();
      var collection = new AlbumsCollection(albumData);

      $("body").html( collection.render() );

    },

    getAlbumNames: function() {   /// for list in sidebar
      var albumNames = _.chain(this.data)
        .pluck("album")
        .uniq()
        .map(function(albumNames) {
                      console.log(albumNames)
          return {album: albumNames}
        })
        .value();
        
        var app = this;

       _.each(albumNames, function(album) {

        var albumNames = album.album;

        });

       console.log(albumNames);

       return albumNames;
    },

    showAlbum: function(album) { //pulls list items into sidebar
      var albumData = this.getAlbumNames();
      this.albumGroupsList = new AlbumGroupsList(albumData);
      this.$sidebar.html( this.albumGroupsList.render() );
            console.log(albumData);
    },

    getAlbum: function(albumName) {//makes list with all
      if(albumName === "all") {
        return this.data;
      }
      return _.filter(this.data, function(album){
        return album.album === albumName;
        console.log(albumName);
      });

    },

    showPhotos: function(albumName) { 
      var photoData = this.getAlbum(albumName);
      var pl = new PhotoList(photoData);
      this.currentAlbum = albumName;
      this.albumGroupsList.select(albumName);
      this.$content.html( pl.render() );
    },

    zoomPhoto: function(photoId) {
      var photoData = _.find(this.data, function(album) {
        return album.photo_id === photoId;
      });

      var photo = new PhotoFull(photoData);

      this.$content.html( photo.render() );
    },

    addListeners: function() {
      var app = this;

       this.$thumb-box.on("click", "div", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var indAlbum = $clicked.data("ind-album");
        app.showPhotos(indAlbum);
      });

       this.$sidebar.on("click", "li", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var albumName = $clicked.data("list-name");
        app.showContacts(albumName);
      });

    }

  };
  return App;

})();