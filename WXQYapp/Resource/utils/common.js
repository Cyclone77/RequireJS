define(function() {
    return {
        updateTitle: function(title, subtitle) {
            var el = document.querySelector(".jumbotron"),
                titEl = el.querySelector("h1"),
                subEl = el.querySelector("p");
            titEl.textContent = title || titEl.textContent;
            subEl.textContent = subtitle || subEl.textContent;
        }
    }
})