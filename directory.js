window.addEventListener("load", function () {
	var urlmatch = /https?:\/\/([^.]+)\.github\.io\/([^/]+)/.exec(location.href);
	if (urlmatch && urlmatch.length >= 3) {
		var gitHubUsername = urlmatch[1];
		var gitHubRepo = urlmatch[2];
		document.getElementById("subheading").innerHTML = "Maintained by <a href='https://github.com/" + gitHubUsername + "/" + gitHubRepo + "'>" + gitHubUsername + "</a>";
	}
	
	var linksLive = document.getElementsByTagName("a");
	var links = [];
	for (var i=0; i<linksLive.length; i++) {
		links.push(linksLive[i]);
	}
	for (var i=0; i<links.length; i++) {
		(function () {
			var link = links[i];
			if (link.className.indexOf("sidebar_link") == -1) return;

			link.addEventListener("click", function (e) {
				if (e.target.target == "previewFrame") {
					var w = window.open(e.target.href, "previewFrame", "width=250, height=500,status,resizable");
					if (w) {
						w.focus();
						if (e && e.preventDefault) {
							e.preventDefault();
						}
					}
				}
			}, false);
			if (window.sidebar) {
				var span = document.createElement("span");
				span.innerHTML = " &middot; ";
				var addLink = document.createElement("a");
				addLink.innerHTML = "Add";
				addLink.href = "#";
				addLink.addEventListener("click", function (e) {
					if (e && e.preventDefault) {
						e.preventDefault();
						if (~link.className.indexOf("persistent")) {
							sidebar.addPersistentPanel(link.innerHTML.replace(/[ \t\r\n]+/, " "), link.href, "");
						} else {
							sidebar.addPanel(link.innerHTML.replace(/[ \t\r\n]+/, " "), link.href, "");
						}
					}
				}, false);
				span.insertBefore(addLink, span.firstChild);
				link.parentNode.insertBefore(span, link);
			}
			if (~link.className.indexOf("persistent")) {
				var icons = document.createElement("span");
				icons.innerHTML = " <span class='icon persistent'>P</span>";
				link.parentNode.insertBefore(icons, link.nextSibling);
			}
		})();
	}
}, false);
