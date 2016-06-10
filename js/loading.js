var pink = "#F581AB";

$(document).ready(function() {

    console.log("ready");

    $("body").prepend(
        $("<div/>")
        .attr("id", "loading-background")
    );

    $("body").prepend(
        $("<div/>")
        .attr("id", "loading-cover")
        .prepend(
            $("<div/>")
            .addClass("center")
        )
    );

    var loadingSVG = '<svg id="svg_logo_all" viewBox="0 0 500 250" width="500" height="250"> <g class="logo-2016"> <g> <g> <path d="M63.265,101.951c8.667-7.675,13.146-13.386,13.146-18.224c0-3.193-1.72-5.385-4.999-5.385 c-2.317,0-4.23,1.474-5.794,3.273l-2.594-2.56c2.514-2.724,5.108-4.395,8.95-4.395c5.391,0,8.869,3.51,8.869,8.833 c0,5.666-4.52,11.541-10.746,17.492c1.512-0.166,3.348-0.278,4.787-0.278h7.351v3.913H63.265V101.951z" /> </g> </g> <g> <g> <path d="M86.161,89.8c0-10.185,3.712-15.139,9.508-15.139c5.751,0,9.506,4.99,9.506,15.139 c0,10.228-3.755,15.344-9.506,15.344C89.873,105.144,86.161,100.028,86.161,89.8z M100.777,89.8 c0-8.432-2.113-11.508-5.108-11.508c-2.998,0-5.118,3.077-5.118,11.508c0,8.51,2.12,11.699,5.118,11.699 C98.664,101.5,100.777,98.31,100.777,89.8z" /> </g> </g> <g> <g> <path d="M110.491,100.82h6.433V80.373h-5.281v-2.918c2.766-0.517,4.722-1.197,6.399-2.234h3.477v25.6h5.752v3.801 h-16.779V100.82z" /> </g> </g> <g> <g> <path d="M147.888,80.62c-1.083-1.289-2.884-2.202-4.595-2.202c-3.764,0-6.875,2.832-7.074,11.223 c1.716-2.122,4.28-3.398,6.392-3.398c4.956,0,8.268,3.041,8.268,9.267c0,5.833-3.994,9.635-8.786,9.635 c-5.595,0-10.14-4.676-10.14-14.665c0-11.304,5.308-15.818,11.102-15.818c3.274,0,5.669,1.397,7.35,3.157L147.888,80.62z M146.607,95.509c0-3.785-1.678-5.911-4.837-5.911c-1.713,0-3.708,0.919-5.471,3.435c0.476,5.835,2.598,8.598,5.756,8.598 C144.607,101.631,146.607,99.308,146.607,95.509z" /> </g> </g> </g> <g class="logo-hackntu"> <g> <g> <path d="M182.521,74.082c0,0-4.049-0.04-4.049,5.044v25.582h4.049V74.082z" /> </g> </g> <g> <g> <path d="M205.581,88.93c0,0-15.227,0-16.66,0c-1.446,0-2.232,3.924-2.232,3.924h18.893v11.853h4.045V78.982 c0-5.089-4.045-4.889-4.045-4.889V88.93z" /> </g> </g> <g> <g> <path d="M220.171,94.112v5.26c0,0,0,5.177,4.694,5.177h19.292c0,0,3.202-0.953,3.202-5.177V89.221 c0,0,0.892-6.996-5.851-6.996h-15.916c0,0-0.053,4.181,1.947,4.181c1.985,0,13.161,0,13.161,0s2.827,0.582,2.506,3.401 l0.024,8.101c0,0,0.297,2.459-2.685,2.459h-13.791c0,0-2.614,0.016-2.514-1.874v-2.699c0,0-0.184-1,2.01-1h10.818 c0,0-0.219-4.155-2.891-4.155c-2.665,0-10.343,0-10.343,0S220.229,91.181,220.171,94.112z" /> </g> </g> <g> <g> <path d="M257.992,88.373v10.656c0,0,0.425,5.612,6.728,5.612h18.229c0,0-0.646-4.311-3.173-4.311 c-2.517,0-13.488,0-13.488,0s-4.14,0.127-4.14-3.483l-0.167-8.726c0,0,0.081-1.733,2.653-1.614h13.677 c0,0-0.676-4.283-2.967-4.283c-2.286,0-13.44,0-13.44,0s-3.912,0.425-3.912,3.667V88.373z" /> </g> </g> <g> <g> <path d="M293.823,74.964c0,0-2.51,0.119-2.51,3.525v26.135c0,0,4.054,0.779,4.054-3.478V74.934L293.823,74.964z" /> </g> </g> <g> <g> <path d="M311.604,90.364l5.479-3.753c0,0,1.9-3.523,0.244-4.811l-19.023,11.574l2.485,3.53l7.073-4.273l13.665,11.4 c0,0,3.574,1.55,5.173-0.52L311.604,90.364z" /> </g> </g> <g> <g> <path d="M338.286,76.297c0,0-3.948-0.823-3.998,5.71v22.405h3.998V81.8l21.025,22.612v-5.496L338.286,76.297z" /> </g> </g> <g> <g> <path d="M361.302,76.286h4.047v17.99c0,0,0.594,7.776-4.047,10.135V76.286z" /> </g> </g> <g> <g> <path d="M399.864,77.064h-22.608c0,0-4.532,0.018-4.532,4.099h27.141V77.064z" /> </g> </g> <g> <g> <path d="M388.327,83.648h-4.042v15.629c0,0-0.596,4.976,4.042,5.146V83.648z" /> </g> </g> <g> <g> <path d="M405.763,76.297h4.041v28.126c0,0-3.354-1.016-4.041-6.526V76.297z" /> </g> </g> <g> <g> <path d="M413.871,100.291v4.132h16.879c0,0,3.352-0.73,3.324-7.473l0.021-20.653h-4.079v23.994H413.871z" /> </g> </g> </g> <g class="logo-ttth"> <g> <path d="M109.05,147.251h-8.23v-2.892h19.91v2.892h-8.231v24.286h-3.448V147.251z" /> </g> <g> <path d="M121.026,161.487c0-6.711,4.411-10.604,9.344-10.604c4.93,0,9.343,3.893,9.343,10.604 c0,6.675-4.413,10.53-9.343,10.53C125.438,172.018,121.026,168.162,121.026,161.487z M136.227,161.487 c0-4.632-2.372-7.785-5.856-7.785c-3.486,0-5.821,3.153-5.821,7.785c0,4.636,2.335,7.713,5.821,7.713 C133.854,169.2,136.227,166.123,136.227,161.487z" /> </g> <g> <path d="M153.913,165.308v-11.159h-3.005v-2.559l3.152-0.186l0.407-5.637h2.818v5.637h5.45v2.744h-5.45v11.231 c0,2.486,0.779,3.895,3.114,3.895c0.705,0,1.632-0.259,2.299-0.519l0.667,2.521c-1.149,0.369-2.483,0.74-3.707,0.74 C155.357,172.018,153.913,169.349,153.913,165.308z" /> </g> <g> <path d="M167.298,142.022h3.373v8.083l-0.111,4.152c1.854-1.851,3.931-3.374,6.676-3.374 c4.224,0,6.153,2.746,6.153,7.899v12.754h-3.375v-12.312c0-3.782-1.148-5.374-3.819-5.374c-2.075,0-3.484,1.037-5.523,3.078 v14.607h-3.373V142.022z" /> </g> <g> <path d="M189.173,145.063c0-1.371,1-2.188,2.335-2.188s2.336,0.816,2.336,2.188c0,1.262-1.001,2.188-2.336,2.188 S189.173,146.325,189.173,145.063z M189.802,151.404h3.374v20.133h-3.374V151.404z" /> </g> <g> <path d="M199.997,151.404h2.781l0.296,2.892h0.112c1.928-1.889,4.004-3.412,6.749-3.412 c4.226,0,6.158,2.746,6.158,7.899v12.754h-3.38v-12.312c0-3.782-1.147-5.374-3.816-5.374c-2.077,0-3.486,1.037-5.526,3.078v14.607 h-3.374V151.404z" /> </g> <g> <path d="M222.658,142.022h3.335v20.022h0.074l8.64-10.641h3.744l-6.749,8.081l7.64,12.052h-3.672l-5.895-9.715 l-3.782,4.412v5.303h-3.335V142.022z" /> </g> <g> <path d="M242.196,176.578c2.3-1,3.67-2.78,3.708-5.041c-0.151,0.036-0.26,0.036-0.409,0.036 c-1.297,0-2.484-0.814-2.484-2.373c0-1.446,1.188-2.373,2.559-2.373c1.78,0,2.854,1.521,2.854,4.004 c0,3.56-2.074,6.341-5.413,7.749L242.196,176.578z" /> </g> <g> <path d="M262.846,165.308v-11.159h-3.004v-2.559l3.154-0.186l0.406-5.637h2.817v5.637h5.449v2.744h-5.449v11.231 c0,2.486,0.781,3.895,3.115,3.895c0.705,0,1.631-0.259,2.302-0.519l0.665,2.521c-1.149,0.369-2.483,0.74-3.706,0.74 C264.293,172.018,262.846,169.349,262.846,165.308z" /> </g> <g> <path d="M274.155,161.487c0-6.711,4.413-10.604,9.345-10.604c4.93,0,9.342,3.893,9.342,10.604 c0,6.675-4.412,10.53-9.342,10.53C278.568,172.018,274.155,168.162,274.155,161.487z M289.356,161.487 c0-4.632-2.372-7.785-5.856-7.785c-3.487,0-5.822,3.153-5.822,7.785c0,4.636,2.335,7.713,5.822,7.713 C286.984,169.2,289.356,166.123,289.356,161.487z" /> </g> <g> <path d="M306.448,142.022h3.375v8.083l-0.11,4.152c1.851-1.851,3.93-3.374,6.674-3.374 c4.227,0,6.154,2.746,6.154,7.899v12.754h-3.374v-12.312c0-3.782-1.15-5.374-3.819-5.374c-2.076,0-3.483,1.037-5.524,3.078v14.607 h-3.375V142.022z" /> </g> <g> <path d="M327.692,166.309c0-4.375,3.819-6.564,12.387-7.525c0-2.598-0.854-5.081-4.154-5.081 c-2.334,0-4.449,1.074-6.045,2.149l-1.333-2.335c1.855-1.187,4.71-2.633,7.935-2.633c4.892,0,6.971,3.301,6.971,8.269v12.385 h-2.781l-0.297-2.409h-0.11c-1.931,1.594-4.191,2.89-6.673,2.89C330.216,172.018,327.692,169.943,327.692,166.309z M340.079,166.643v-5.638c-6.788,0.817-9.086,2.487-9.086,5.083c0,2.297,1.557,3.223,3.558,3.223 C336.519,169.311,338.111,168.385,340.079,166.643z" /> </g> <g> <path d="M348.347,161.487c0-6.711,4.559-10.604,9.714-10.604c2.632,0,4.449,1.111,5.895,2.375l-1.742,2.26 c-1.188-1.074-2.412-1.816-4.041-1.816c-3.635,0-6.304,3.153-6.304,7.785c0,4.636,2.521,7.713,6.228,7.713 c1.856,0,3.486-0.853,4.746-2.002l1.446,2.264c-1.778,1.629-4.076,2.556-6.489,2.556 C352.46,172.018,348.347,168.162,348.347,161.487z" /> </g> <g> <path d="M368.735,142.022h3.338v20.022h0.075l8.64-10.641h3.745l-6.749,8.081l7.637,12.052h-3.668l-5.896-9.715 l-3.783,4.412v5.303h-3.338V142.022z" /> </g> <g> <path d="M389.017,169.462c0-1.521,1.112-2.635,2.449-2.635c1.334,0,2.446,1.114,2.446,2.635 c0,1.52-1.112,2.556-2.446,2.556C390.129,172.018,389.017,170.981,389.017,169.462z" /> </g> </g> <g class="logo-line"> <g> <path d="M63.024,128.596c6.012,0,12.021,0,18.031,0c15.685,0,31.371,0,47.058,0c21.843,0,43.685,0,65.527,0 c24.481,0,48.964,0,73.445,0c23.601,0,47.205,0,70.807,0c19.202,0,38.405,0,57.611,0c11.289,0,22.575,0,33.863,0 c1.576,0,3.15,0,4.728,0c2.116,0,2.116-3.276,0-3.276c-6.008,0-12.019,0-18.03,0c-15.688,0-31.372,0-47.058,0 c-21.844,0-43.686,0-65.529,0c-24.48,0-48.964,0-73.445,0c-23.6,0-47.203,0-70.805,0c-19.204,0-38.407,0-57.612,0 c-11.287,0-22.576,0-33.863,0c-1.576,0-3.15,0-4.728,0C60.91,125.319,60.91,128.596,63.024,128.596L63.024,128.596z" /> </g> </g> <g class="logo-frame"> <path d="M471,169.701C471,185.33,458.33,198,442.701,198H54.299C38.67,198,26,185.33,26,169.701V74.299 C26,58.67,38.67,46,54.299,46h388.402C458.33,46,471,58.67,471,74.299V169.701z M466,74.154C466,61.366,455.634,51,442.846,51 H55.154C42.366,51,32,61.366,32,74.154v95.692C32,182.634,42.366,193,55.154,193h387.691C455.634,193,466,182.634,466,169.846 V74.154z" /> </g> </svg>';

    $("#loading-cover .center").html(loadingSVG);


    // $(".center").load("img/load-cover.svg");

    // $.ajax({
    //     url: "img/load-cover.svg",
    //     dataType: "text",
    //     success: function(data) {
    //         $(".center").html(data);
    //     }
    // });

    function setPink(selector) {
        $(selector).addClass("pink");

        TweenMax.to($(selector + " *"), 0, {
            fill: pink,
        });

    }

    function setPinkStroke(selector) {
        $(selector).addClass("pink-stroke");

        TweenMax.to($(selector + " *"), 0, {
            stroke: pink,
            'stroke-linecap': 'round',
            'stroke-width': 1,
        });
    }

    function removePink(selector) {
        $(selector).removeClass("pink");

        TweenMax.to($(selector + " *"), 0, {
            clearProps: "fill"
        });

    }

    function removePinkStroke(selector) {
        $(selector).removeClass("pink-stroke");

        TweenMax.to($(selector + " *"), 0, {
            clearProps: "stroke, stroke-linecap, stroke-width"
        });
    }

    function loadingSuccess() {

        setPinkStroke("#svg_logo_all");

        logoVivus.reset();
        setTimeout(function() {
            logoVivus.play(1);
        }, "1000");

    }

    function staggerToOpacity(selector) {
        TweenMax.staggerTo($(selector).children(), 0.2, {
                delay: 1.5,
                // rotation: 1.5,
                opacity: 0.3,
                transformOrigin: "50% 50%",
                ease: Sine.easeOut,
                yoyo: true,
                repeat: 1,
            },
            0.1);
    }

    function logoVivus_callback() {
        // console.log("logoVivus_callback()");
        staggerToOpacity(".logo-hackntu,.logo-2016");

        TweenMax.to($("#svg_logo_all *"), 2, { // 1.2
            fill: pink,
            stroke: "#FFF",
            transformOrigin: "50% 50%",
            ease: Circ.easeOut,
            onComplete: function() {
                removePinkStroke("#svg_logo_all");
            }
        });

        TweenMax.to($("#svg_logo_all *"), 0.5, { // 1.2
            delay: 0.5,
            'stroke-opacity': 0,
            ease: Circ.easeOut,
        });

    }

    function loadingAnimate() {
        setPink("#svg_logo_all .logo-ttth");
        TweenMax.staggerTo($("#svg_logo_all .logo-ttth > *").children(), 0.2, {
                x: 3 + 2 * Math.random(), // 100 - 50,
                y: -9 + 2 * Math.random(), //50 - 25,
                scale: 1.1,
                rotation: -5 + 5 * Math.random(), // 60 - 30,
                opacity: 0.3,
                transformOrigin: "50% 50%",
                ease: Sine.easeOut,
                yoyo: true,
                repeat: 1,
            },
            0.06);

    }

    function checkLoading() {
        if (loading) {
            loadingChecker = clearInterval(loadingChecker);
            loadingSuccess();
        }
    }

    function logoInit() {

        console.log("loading initial")

        vivusOptions = {
            duration: 200,
            type: 'scenario',
            // animTimingFunction: Vivus.EASE_IN
            animTimingFunction: Vivus.EASE_OUT
        };

        logoVivus = new Vivus('svg_logo_all', vivusOptions, logoVivus_callback);
        logoVivus.stop();

        loading = false;

        loadingChecker = setInterval(function() {
            loadingAnimate();
            checkLoading();
        }, "1900");

        $("#loadingFinish").on("click", function() {
            loading = true;
            console.log("loading finish");
        });

    }

    logoInit();

});


$(window).load(function() {


    console.log("loaded");
    loading = true;

    setTimeout(function() {
        $("#loading-cover, #loading-background").fadeOut(1000).delay(100).queue(function() {
            $(this).remove();
        });
    }, "9000");

});
