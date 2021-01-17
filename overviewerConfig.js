var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "survival - overworld",
        "survival - end",
        "survival - nether"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1610926839",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Overworld",
            "zoomLevels": 13,
            "defaultZoom": 1,
            "maxZoom": 13,
            "path": "survivalday",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - overworld",
            "last_rendertime": 1610911876,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -48,
                64,
                252
            ],
            "minZoom": 0,
            "spawn": [
                -48,
                64,
                252
            ],
            "north_direction": 0
        },
        {
            "name": "End",
            "zoomLevels": 14,
            "defaultZoom": 1,
            "maxZoom": 14,
            "path": "survivalEnd",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - end",
            "last_rendertime": 1610905845,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -48,
                64,
                252
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Nether",
            "zoomLevels": 13,
            "defaultZoom": 1,
            "maxZoom": 13,
            "path": "survivalnether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - nether",
            "last_rendertime": 1610911828,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -48,
                64,
                252
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
