window.addEventListener("load", function () {
	var gitHubUsername = "IsaacSchemm";
	document.getElementById("subheading").innerHTML = "Maintained by <a href='https://github.com/" + gitHubUsername + "'>" + gitHubUsername + "</a>";
	
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
					sidebar.addPanel(link.innerHTML.replace(/[ \t\r\n]+/, " "), link.href, "");
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
