const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function() {
    const selectedLanguage = languageSelect.value;
    // You can add logic here to handle language selection, such as changing the page content or making an AJAX request to fetch content in the selected language.
    console.log('Selected language:', selectedLanguage);
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.backgroundColor = "your-color-here"; /* Change to desired color */
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent"; /* Change back to initial color */
    }
}
