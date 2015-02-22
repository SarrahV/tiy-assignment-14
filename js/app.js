var App = (function() {
  
  function App(data) {

    this.data = data;

    this.$sidebar = $(".sidebar");
    this.$content = $(".content");

    this.showAlbums();
    this.showAlbumNames();
    this.showPhotos();
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

        // album.description = photo.description;
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

    showAlbumNames: function(album) { //pulls list items into sidebar
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

    getPhotos: function() {   /// for photos that are in that album
      var photoThumbs = _.chain(this.data)
        .pluck("photo_url")
        .uniq()
        .map(function(photoThumbs) {
                      console.log(photoThumbs)
          return {photo_url: photoThumbs}
        })
        .value();
        
        var app = this;

       _.each(photoThumbs, function(photo_url) {

        var photoThumbs = photo_url.photo_url;

        });

       console.log(photoThumbs);

       return photoThumbs;
    },

    showPhotos: function(photoThumbs) { 
      var photoData = this.getPhotos(photoThumbs);
      var pl = new PhotoThumbnail(photoData);
      this.currentPhoto = photoThumbs;
      this.photoCollectionList.select(photoThumbs);
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

       this.$content.on("click", ".thumbBox", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var indAlbum = $clicked.data("ind-album");
        app.showPhotos(indAlbum);
        app.showAlbumNames()
      });

       this.$sidebar.on("click", "li", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var albumName = $clicked.data("list-name");
        app.showPhotos(albumName);
      });

    }

  };
  return App;

})();