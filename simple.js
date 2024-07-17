function toggleVisibility(image) {
    var hiddenContent = image.nextElementSibling;
    var allHiddenContents = document.querySelectorAll('.hidden-content');

    // Hide all other hidden contents
    allHiddenContents.forEach(function(content) {
        if (content !== hiddenContent) {
            content.style.display = 'none';
        }
    });

    // Toggle visibility of the current hidden content
    if (hiddenContent.style.display === "block") {
        hiddenContent.style.display = "none";
    } else {
        hiddenContent.style.display = "block";
    }
}
