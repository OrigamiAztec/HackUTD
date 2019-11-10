console.log("testing");

require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Locate"
  ], function(Map, MapView, BasemapGallery, Locate) {
    var map = new Map({
      basemap: "topo-vector"
    });
  
    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-117.3281, 33.9737],
      zoom: 13
    });
  

   
  });
  