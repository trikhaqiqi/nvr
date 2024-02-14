module.exports = {
	/* System Settings */
	system: {
		/* Username */
		username: "admin",
		/* bcrypt password (default: admin) */
		password: '$2a$10$CnOx/6vFY2ehRDf68yqd..aLlv0UM.zeBLKnRjuU8YykCsC2Ap3iG',
		/* bcrypt API Key (default: x7Te9m38JHQq6ddv) */
		apiKey: '$2a$10$N53ci.EIQ7JCu6u1HlOjoO//W0Bmp3GrRruyK1Jysr01CQ1rDrVQK',
		/* Any random string */
		cookieKey: 'f3gi6FLhIPVV31d1TBQUPEAngrI3wAoP',
		interfacePort: 7878,
		/* location used for 24/7 recording and database generation */
		/* This should be the root of a mount point i.e a dedicated HDD for 24/7 recordings */
		storageVolume: '/home/ilyas/Projects/VMS-UPDATED/vms-kci/video',
		/* Continuous recording settings */
		ffmpegLocation: '/usr/bin/ffmpeg',
		continuousSegTimeMinutes: 15,
		continuousDays: 14,
		continuousPurgeIntervalHours: 24,
		/* event throttle per sensorId */
		eventSensorIdCoolOffSeconds: 60
	},
	/* Cameras */
	cameras: {
		"CAM-018": {
            "path": "CAM-018",
            "name": "NVR 1",
            "floor": "JPO-001",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0201/picture",
            "continuous": false,
            "liveConfig": {
                "codecString": "video/mp4; codecs=\"avc1.64001f\"",
                "streamConfig": {
                    "an": "",
                    "vcodec": "copy",
                    "f": "mp4",
                    "movflags": "+frag_keyframe+empty_moov+default_base_moof",
                    "reset_timestamps": "1"
                }
            }
        },
        "CAM-020": {
            "path": "CAM-020",
            "name": "NVR 3",
            "floor": "JPO-001",
            "inputConfig": {
                "use_wallclock_as_timestamps": "1",
                "fflags": "+igndts",
                "analyzeduration": "1000000",
                "probesize": "1000000",
                "rtsp_transport": "tcp",
                "stimeout": "30000000"
            },
            "input": "rtsp://admin:rastek123@10.50.0.2/ISAPI/Streaming/channels/0401/picture",
            "continuous": false,
            "liveConfig": {
                "codecString": "video/mp4; codecs=\"avc1.64001f\"",
                "streamConfig": {
                    "an": "",
                    "vcodec": "copy",
                    "f": "mp4",
                    "movflags": "+frag_keyframe+empty_moov+default_base_moof",
                    "reset_timestamps": "1"
                }
            }
        },
	}
};
