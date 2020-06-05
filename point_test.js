var viewer = new Cesium.Viewer('cesiumContainer');


for (let i = 0; i < 100; i++) {
    var citizensBankPark = viewer.entities.add({
        name: 'Citizens Bank Park', position:
            Cesium.Cartesian3.fromDegrees(-75.166493 + i, 39.9060534 + i), point: {
                pixelSize: 5, color: Cesium.Color.RED,
                outlineColor: Cesium.Color.WHITE, outlineWidth: 2
            },
    });
} 
viewer.zoomTo(viewer.entities);