var App = (function() {
  
  function App(data) {

    this.data = data;

    this.$sidebar = $(".sidebar");
    this.$content = $(".content");

    this.showAlbums();
    this.addListeners();

  }

  App.prototype = {

    getAlbumData: function() { //gets albums with photo
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

        album.photo_url = photo.photo_url;

       });

       return albumData;

    },

    showAlbums: function() { //shows the album and photo

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

        var photoName = photo_url.photo_url;
                      console.log(photoName);

        var photoHold = _.find(app.data, function(photo) {
          return photo.description === photoName;
        });

        photo_url.photo_url = photo_url.photo_url;

        });

                      console.log(photoThumbs);

       return photoThumbs;
    },

    getPhotoGroup: function(albumName) {
      return _.filter(this.data, function(album){
        return album.album === albumName;
      });
      console.log(albumName); //no logging
    },

    showPhotos: function(albumName) { 
      var photoData = this.getPhotos(albumName);
      var collection = new PhotoCollectionList(photoData);

      this.$content.html( collection.render());
      
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

       this.$content.on("click", ".thumbBox", function(e){  //supposed to allow click on thumbox to show photos
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var indAlbum = $clicked.data("ind-album");
        app.showAlbumNames(albumData);
      });

       this.$sidebar.on("click", "li", function(e){ //supposed to allow click on li to show photos in that album
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var albumName = $clicked.data("list-name");
        app.showPhotos(albumName);
      });

    }

  };
  return App;

})();