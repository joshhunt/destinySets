var DestinyTracker;
(function(DestinyTracker) {
    var Tooltip = (function() {
        function Tooltip() {
            var _this = this;
            this.tooltipData = {};
            if (document.addEventListener) { document.addEventListener('mouseenter', function(e) {
                    return _this.onDocumentMouseOver(e); }, true);
                document.addEventListener('mouseleave', function(e) {
                    return _this.onDocumentMouseLeave(e); }, true); } else { document.attachEvent('onmouseenter', function(e) {
                    return _this.onDocumentMouseOver(e); });
                document.attachEvent('onmouseleave', function(e) {
                    return _this.onDocumentMouseLeave(e); }); }
        }
        Tooltip.prototype.onDocumentMouseOver = function(e) {
            var e = window.event || e;
            if (e.target.tagName == 'A')
                this.onLinkMouseOver(e);
        };
        Tooltip.prototype.onDocumentMouseLeave = function(e) {
            var e = window.event || e;
            if (e.target.tagName == 'A') {
                var container = this.getTooltipContainer();
                container.style.opacity = '0'; } };
        Tooltip.prototype.onLinkMouseOver = function(e) {
            var _this = this;
            var target = e.target;
            var url = target.getAttribute('href');
            var self = this;
            this.detectUrl(url, target, function() {
                _this.fetchTooltip(url, function(html) {
                    var container = self.getTooltipContainer();
                    container.innerHTML = html;
                    container.style.opacity = '1';
                    var rect = target.getBoundingClientRect();
                    var top = rect.top + 10;
                    if ((top + container.clientHeight) > window.innerHeight)
                        top += window.innerHeight - (top + container.clientHeight);
                    container.style.top = top + 'px';
                    var left = rect.right + 10;
                    if ((left + container.clientWidth) > window.innerWidth) {
                        var newLeft = rect.left - container.clientWidth - 10;
                        if (newLeft > 0)
                            left = newLeft;
                    }
                    container.style.left = left + 'px';
                });
            });
        };
        Tooltip.prototype.getTooltipContainer = function() {
            if (this.container == null) { this.container = document.createElement('div');
                this.container.id = "DTRTooltip";
                document.body.appendChild(this.container); }
            return this.container;
        };
        Tooltip.prototype.detectUrl = function(url, target, callback) {
            if (url == null)
                return;
            if (target.getAttribute("data-dtr-tooltip") == "no-show")
                return;
            if (url.indexOf("bungie.net") !== -1 || url.indexOf("destinytracker.com") !== -1 || url.indexOf("/") == 0) {
                var regex = /(activities\/|destinations\/|items\/|inventory\/item\/|quests\/|(?:\&|\?)item\=|sources\/|vendors\/)([0-9]+)/i;
                if (regex.test(url)) {
                  console.log('it matches', url);
                    if (window.location.hostname == "bungie.net" && url.indexOf("www.bungie.net") !== -1)
                        return;
                    callback();
                }
            }
        };
        Tooltip.prototype.fetchTooltip = function(url, callback) {
          console.log('fetching tooltip');
            var _this = this;
            if (this.tooltipData[url] == "")
                return;
            if (this.tooltipData[url] !== undefined) { callback(this.tooltipData[url]);
                return; }
            this.tooltipData[url] = '';
            var request = new XMLHttpRequest();
            request.open('POST', '//db.destinytracker.com/api/tooltip');
            request.onload = function() {
                if (request.readyState == 4 && request.status == 200) { _this.tooltipData[url] = request.responseText;
                    callback(request.responseText); } };
            request.send(url);
        };
        return Tooltip;
    })();
    DestinyTracker.Tooltip = Tooltip;
})(DestinyTracker || (DestinyTracker = {}));
var DTRTooltip = new DestinyTracker.Tooltip(); //# sourceMappingURL=Tooltip.js.map
