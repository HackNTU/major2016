function setFaq(lang) {

    var faqText = $(".faq-text-"+lang.toLowerCase());
    var faqDisplay = $(".faq-text.lang-"+lang.toLowerCase());
    
    faqText.children().find("b").each(function() {
        var question = $(this).text()
        var answer = $(this).parent().next().text();

        if (answer.length > 5) {
            html = "<div class='faq-div'><p class='faq-question'>" + question + "</p><p class='faq-answer'>" + answer + "</p></div>"
            faqDisplay.append(html)
        }
    });

}

$(function() {

    setFaq("TW");
    setFaq("EN");

});
