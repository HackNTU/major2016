function setSponsor(lang) {

    var sponsorDisplay = $("<div/>").addClass("lang-"+lang.toLowerCase()).appendTo($("#sponsorDisplay"));

    $("#sponsorSrc b:contains(+++" + lang + "-Sponsor-Start+++)").parent().nextUntil("p:has(b:contains(+++" + lang + "-Sponsor-End+++))").filter("h2").each(function() {

        sponsorDisplay.append($("<h2/>").text($(this).text()));
        // console.log($(this).text());
       
        var sponsorsDiv = $("<div/>").appendTo(sponsorDisplay);
       
        $(this).next("ul").children("li").each(function() {
            sponsorsDiv
                .append($("<a/>")
                    .attr("href",
                        $(this).find("a").text()
                    )
                    .append($("<img/>")
                        .attr("src",
                            $(this).find("img").attr("src")
                        )
                    )
                    .append($("<span/>")
                        .text(
                            $(this).find("b").text()
                        )
                    )
                );
            // console.log($(this).find("a").text());
            // console.log($(this).find("img").attr("src");
            // console.log($(this).find("b").text());
        });
    });

}

$(function() {

    setSponsor("TW");
    setSponsor("EN");

});
