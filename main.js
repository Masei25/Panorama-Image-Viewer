window.addEventListener("load", event => {
    document.getElementById('image');
});

viewer  = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "./Panorama.jpg",
    "autoLoad":true,
    "hotSpotDebug": true,

    "hotSpots": [
        {
            "pitch": -11.4,
            "yaw": 120.6,
            "type": "info",
            "text": "Agenda"
        },
        {
            "pitch": -11.4,
            "yaw": 178.9,
            "type": "info",
            "text": "Sponsor Hall"
        },
        {
            "pitch": -11.4,
            "yaw": 240.9,
            "type": "info",
            "text": "Conference Hangout"
        },
        {
            "pitch": -11.4,
            "yaw": 300.9,
            "type": "info",
            "text": "View Our Speaker"
        },
        {
            "pitch": -11.4,
            "yaw": 0.1,
            "type": "info",
            "text": "Accreditation Information"
        },
        {
            "pitch": -10.9,
            "yaw": 60.1,
            "type": "info",
            "text": "Live Event"
        }
    ]
});