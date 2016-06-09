function changeLang(language) {

    switch (language) {
        case "lang-tw":
            $(".lang-tw").css("display", "");
            $(".lang-en").css("display", "none");
            break;
        case "lang-en":
            $(".lang-en").css("display", "");
            $(".lang-tw").css("display", "none");
            break;
    }
    // $().css("property","") to remove style seems doesn't works on IE8
    // 
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
