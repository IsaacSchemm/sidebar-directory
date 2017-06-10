window.addEventListener("load", function () {
	var urlmatch = /https?:\/\/([^.]+)\.github\.io\/([^/]+)/.exec(location.href);
	if (urlmatch && urlmatch.length >= 3) {
		var gitHubUsername = urlmatch[1];
		var gitHubRepo = urlmatch[2];
		document.getElementById("subheading").innerHTML = "Maintained by <a href='https://github.com/" + gitHubUsername + "/" + gitHubRepo + "'>" + gitHubUsername + "</a>";
	} else {
		document.getElementById("subheading").innerHTML = "";
	}
	
	var links = document.getElementsByClassName("sidebar_link");
	for (var i=0; i<links.length; i++) {
		(function () {
			var link = links[i];
			var span = document.createElement("span");
			span.innerHTML = " &middot; ";
			var addLink = document.createElement("a");
			addLink.innerHTML = "Add";
			addLink.href = "#";
			addLink.addEventListener("click", function (e) {
				if (e && e.preventDefault) {
					e.preventDefault();
					if (e.target.className.indexOf("persistent")) {
						sidebar.addPersistentPanel(link.innerHTML.replace(/[ \t\r\n]+/, " "), link.href, "");
					} else {
						sidebar.addPanel(link.innerHTML.replace(/[ \t\r\n]+/, " "), link.href, "");
					}
				}
			});
			span.insertBefore(addLink, span.firstChild);
			link.parentNode.insertBefore(span, link);
		})();
	}
	
	var iframe = document.getElementById("previewFrame");
	window.addEventListener("scroll", function () {
		if (window.scrollY > 180) {
			iframe.style.position = "fixed";
		} else {
			iframe.style.position = "";
		}
	});
});
