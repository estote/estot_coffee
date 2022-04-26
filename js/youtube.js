// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
	new YT.Player("player", {
		videoId: "Tdwetb0Mvyc", // 최초 재생할 유튜브 영상 아이디
		playerVars: {
			autoplay: true,
			loop: true,
			playlist: "Tdwetb0Mvyc",
		},
		events: {
			// 영상이 준비되었을 때,
			onReady: function (event) {
				event.target.mute(); // 음소거!
			},
		},
	});
}
