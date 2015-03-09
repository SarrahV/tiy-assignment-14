var App = (function() {
  
  function App(data) {

    this.data = data;

    this.$sidebar = $(".sidebar");
    this.$content = $(".content");

    this.showAlbums();
    this.showAlbumNames();
    this.addListeners();
    this.$sidebar.hide();
  }

  App.prototype = {

    getAlbumData: function() { //gets albums with photo
      var app = this;

      var albumData = _.chain(this.data)
       .pluck("album")
       .uniq()
       .map(function(albumName) {
        return {album: albumName};
       })
       .value();

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

        console.log(collection);

      this.$content.html( collection.render() );
      this.$sidebar.hide();

    },

    showAlbumNames: function() { //pulls list items into sidebar
      
      var albumData = this.getAlbumData();
      
      var albumGroupsList = new AlbumGroupsList(albumData);
      console.log(albumGroupsList);
      this.$sidebar.append( albumGroupsList.render() );

    },

    showPhotoThumbs: function(photo) { 
      var photoData = new PhotoCollectionList(photo);

      this.$content.html( photoData.render());
      this.$sidebar.show();
    },

    zoomPhoto: function(photoId) {
      var photoData = _.find(this.data, function(photo) {
        return photo.photo_id === photoId;
      });

      var photo = new PhotoFull(photoData);
      this.$content.html( photo.render() );

      /* $(".album-full a").on("click", function(event){// click "back to all albums"
        event.preventDefault();

        var currentAlbumPics = photoData.group;
        app.showPhotoThumbs(currentAlbumPics);
        console.log(currentAlbumPics);// logs name if given photoData
      });*/

    },

    addListeners: function() {
      var app = this;

       this.$content.on("click", ".thumbBox a", function(e){  // allow click on thumbox 
                                                              // to show photos
        e.preventDefault();

        var $clickedAlbum = $(e.currentTarget);

        var indAlbum = $clickedAlbum.data("album-name");  //refers to albumthumb file

        var currentAlbumPics = _.filter(app.data, function(photo) {
          return photo.album === indAlbum;
        });
        app.showPhotoThumbs(currentAlbumPics);
        console.log(currentAlbumPics);
      });

       this.$sidebar.on("click", "li a", function(e){ // allow click on li to show photos 
                                                      // in that album
        e.preventDefault();

        var $clickedName = $(e.currentTarget);

        var albumName = $clickedName.data("list-name");

        var currentAlbumPics = _.filter(app.data, function(photo) {
          return photo.album === albumName;
          console.log(currentAlbumPics);
        });

        app.showPhotoThumbs(currentAlbumPics);
      });

       this.$content.on("click", ".back_button a", function(e){// click "back to all albums"
          e.preventDefault();

        var $clickedName = $(e.currentTarget);

        var albumName = $clickedName.data("list-name");

        var currentAlbumPics = _.filter(app.data, function(photo) {
          return photo.album === albumName;

        });

          app.showPhotoThumbs(currentAlbumPics);
          console.log(currentAlbumPics);// logs name if given photoData
      });

       this.$content.on("click", ".photoThumb a", function(e) { // allows for click on photo 
                                                                // thumbs inside album
          e.preventDefault();
          $clicked = $(e.currentTarget);
          var photoId = $clicked.data("photo-id");

          app.zoomPhoto(photoId);
       });

    }

  };
  return App;

})();








