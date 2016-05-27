function changeLang(language) {

    switch (language) {
        case "lang-tw":
            $(".lang-tw").show();
            $(".lang-en").hide();
            break;
        case "lang-en":
            $(".lang-en").show();
            $(".lang-tw").hide();
            break;
    }
}


function langInit() {

    lang = "";
    var userLang = window.navigator.userLanguage || window.navigator.language;
    var lowerLang = lang.toLowerCase();

    switch (lowerLang) {
        case "zh-cn":
            lang = "lang-tw";
            break;
        case "zh-tw":
            lang = "lang-tw";
            break;
        default:
            lang = "lang-en";
    }

    changeLang(lang);

}

function setLangSwitch() {
    console.log("setLangSwitch");
    $("#langSwitch a").on("click", function() {
        console.log(this.name);

        lang = this.name;
        changeLang(lang);

    })
}

$(function() {

    langInit();
    setLangSwitch();

});
