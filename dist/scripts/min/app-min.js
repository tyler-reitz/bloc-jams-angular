var blocJams=angular.module("blocJams",["ui.router"]);blocJams.config(function(t,l){l.html5Mode({enabled:!0,requireBase:!1}),t.state("artist",{"abstract":!0,templateUrl:"/templates/album.html"}).state("artist.album",{url:"/album",templateUrl:"/templates/table.html",controller:"AlbumCtrl"})}),blocJams.controller("LandingCtrl",["$scope",function(t){t.tagline="Turn the music up!"}]),blocJams.controller("CollectionCtrl",["$scope","$http",function(t,l){l.get("http://localhost:3000/scripts/fixtures.js").success(function(t){}),t.album=albumPicasso}]),blocJams.controller("AlbumCtrl",["$scope","$http",function(t,l){l.get("http://localhost:3000/scripts/fixtures.js").success(function(t){}),t.album=albumPicasso,console.log(t.album)}]);