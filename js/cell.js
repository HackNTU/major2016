// <!--from  http://nardove.com/ -->

$(function(){


// nardove.js -- start// 

var NARDOVE = NARDOVE || {};

NARDOVE.Jelly = function(id, radius, resolution) {

		this.cellCenter = new Point({
		  x: 200,
		  y: 200
		});



    // this.path = new Path();
    this.pathRadius = radius;
    this.pathSides = resolution;
    this.pathPoints = [this.pathSides];
    this.pathPointsNormals = [this.pathSides];
    this.group = new Group();

    this.pathPointsVector = [this.pathSides];
		this.path = new Path.RegularPolygon(this.cellCenter, this.pathSides, this.pathRadius);


		this.antennaNumber =  Math.floor((this.pathSides / 3) * Math.random()) + 5;
		this.antennas = [];

		for (var i = 0; i < this.pathSides; i += 2) {
		    this.antennas[i] = 1;
		}

/*
		var antennasNumberCount = 0;
		while (antennasNumberCount <= this.antennaNumber) {
		    for (var i = 0; i < this.pathSides; i++) {
		        if(this.antennas[i] !== 0){
				        if (Math.random() * 2 > 1) {
				            this.antennas[i] = 1;
				            i++; //to avoid constantly antenna.
				            antennasNumberCount++;
				        }
		     		}
		    }
		}
*/

/*
    // Colours courtesy of deliquescence:
    // http://www.colourlovers.com/palette/38473/boy_meets_girl
    this.colours = [{ s: "#1C4347", f: "#49ACBB" },
        { s: "#1b3b3a", f: "#61cac8" },
        { s: "#2d393f", f: "#88a5b3" },
        { s: "#422b3a", f: "#b0809e" },
        { s: "#5b263a", f: "#d85c8a" },
        { s: "#580c23", f: "#ff3775" },
        { s: "#681635", f: "#EB1962" }
    ];
*/

		var cellFill = "#F581AB";
		var cellStroke = "#595757";

    this.colours = [{ s: cellStroke, f: cellFill },
        { s: cellStroke, f: cellFill },
        { s: cellStroke, f: cellFill },
        { s: cellStroke, f: cellFill },
        { s: cellStroke, f: cellFill },
        { s: cellStroke, f: cellFill },
        { s: cellStroke, f: cellFill }
    ];

    this.pathStyle = {
        strokeWidth: 3,
        strokeColor: this.colours[id].s,
        fillColor: this.colours[id].f
    };

    this.location = new Point(-50, Math.random() * view.size.height);
    this.velocity = new Point(0, 0);
    this.acceleration = new Point(0, 0);

    this.maxSpeed = Math.random() * 0.1 + 0.15;
    this.maxTravelSpeed = this.maxSpeed * 3.5;
    this.maxForce = 0.2;
    this.wanderTheta = 0;
    this.orientation = 0;
    this.lastOrientation = 0;
    this.lastLocation;

    this.tentacles;
    this.numTentacles = 0;

    // console.log(id);
    // console.log(this.maxSpeed);
    // console.log(this.pathRadius);
    // console.log("---------------------------------------");
}


NARDOVE.Jelly.prototype.init = function() {
    for (var i = 0; i < this.pathSides; i++) {
/*

        var theta = (Math.PI * 2) / this.pathSides;
        var angle = theta * i;
        var x = Math.cos(angle) * this.pathRadius * 0.7;
        var y = Math.sin(angle) * this.pathRadius;

        if (angle > 0 && angle < Math.PI) {
            y -= Math.sin(angle) * (this.pathRadius * 0.6);
            this.numTentacles++;
        }

        var point = new Point(x, y);

        this.path.add(point);
        this.pathPoints[i] = point.clone();
        this.pathPointsNormals[i] = point.normalize().clone();
*/
				this.pathPoints[i] = this.path.segments[i].point.clone();
        this.pathPointsNormals[i] = this.path.segments[i].point.normalize().clone();


		    var vectorCenter = new Point(this.cellCenter.clone());
		    var vectorPoint = new Point(this.path.segments[i].point.clone());

	    	this.pathPointsVector[i] = new Point(vectorPoint.x - vectorCenter.x, vectorPoint.y - vectorCenter.y).normalize();



    }


    this.path.closed = true;
    this.path.smooth();
    this.path.style = this.pathStyle;
    this.group.addChild(this.path);

		// this.path.fullySelected = true; // test


/*
    // Create tentacles
    this.tentacles = [this.numTentacles];
    for (var t = 0; t < this.numTentacles; t++) {
        this.tentacles[t] = new NARDOVE.Tentacle(7, 4);
        this.tentacles[t].init();
        this.tentacles[t].path.strokeColor = this.path.strokeColor;
        this.tentacles[t].path.strokeWidth = this.path.strokeWidth;
    }
*/    
}


NARDOVE.Jelly.prototype.update = function(event) {
    this.lastLocation = this.location.clone();
    this.lastOrientation = this.orientation;

    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    this.velocity.length = Math.min(this.maxTravelSpeed, this.velocity.length);

    this.location.x += this.velocity.x;
    this.location.y += this.velocity.y;

    this.acceleration.length = 0;

    // this.path.position = this.location.clone();
    this.group.position = this.location.clone();


    // Rotation alignment
    var locVector = new Point(this.location.x - this.lastLocation.x,
        this.location.y - this.lastLocation.y);
    this.orientation = locVector.angle + 90;
    // this.path.rotate(this.orientation - this.lastOrientation);
    this.group.rotate(this.orientation - this.lastOrientation);

/*
    // Expansion Contraction
    for (var i = 0; i < this.pathSides; i++) {
        var segmentPoint = this.path.segments[i].point;
        // var sineSeed = -(event.time * 3 + this.path.segments[i].point.y * 0.5);
        var sineSeed = -((event.count * this.maxSpeed) + (this.pathPoints[i].y * 0.0375));
        var normalRotatedPoint = this.pathPointsNormals[i].rotate(this.orientation);

        segmentPoint.x += normalRotatedPoint.x * Math.sin(sineSeed);
        segmentPoint.y += normalRotatedPoint.y * Math.sin(sineSeed);
    }

*/

		// Expansion Contraction
		for (var i = 0; i < this.pathSides; i+=1) {

				if (this.antennas[i] === 1) {
			
			    var segmentPoint = this.path.segments[i].point;

			    // var normalRotatedPoint = this.pathPointsNormals[i].rotate(this.orientation);

			    var vectorCenter = new Point(this.cellCenter);
			    var vectorPoint = new Point(this.path.segments[i].point.clone());

		    	var vector = this.pathPointsVector[i].rotate(this.orientation);;

		 		  var sineSeed = (event.count * 0.05); //0.05


			    //segmentPoint.x += normalRotatedPoint.x * Math.sin(sineSeed);
			    //segmentPoint.y += normalRotatedPoint.y * Math.sin(sineSeed);


			    var antennaRate = 0.01; //0.006
			    segmentPoint.x += vector.x * Math.sin(sineSeed) * this.pathRadius * antennaRate;
			    segmentPoint.y += vector.y * Math.sin(sineSeed) * this.pathRadius * antennaRate;
			
				}
		}



/*

    for (var t = 0; t < this.numTentacles; t++) {
        this.tentacles[t].anchor.point = this.path.segments[t + 1].point;
        this.tentacles[t].update(this.orientation);
    }
*/

    this.path.smooth();
    this.wander();
    this.checkBounds();
}


NARDOVE.Jelly.prototype.steer = function(target, slowdown) {
    var steer;
    var desired = new Point(target.x - this.location.x, target.y - this.location.y);
    var dist = desired.length;

    if (dist > 0) {
        if (slowdown && dist < 100) {
            desired.length = (this.maxTravelSpeed) * (dist / 100);
        } else {
            desired.length = this.maxTravelSpeed;
        }

        steer = new Point(desired.x - this.velocity.x, desired.y - this.velocity.y);
        steer.length = Math.min(this.maxForce, steer.length);
    } else {
        steer = new Point(0, 0);
    }
    return steer;
}


NARDOVE.Jelly.prototype.seek = function(target) {
    var steer = this.steer(target, false);
    this.acceleration.x += steer.x;
    this.acceleration.y += steer.y;
}


NARDOVE.Jelly.prototype.wander = function() {
    var wanderR = 5;
    var wanderD = 100;
    var change = 0.05;

    this.wanderTheta += Math.random() * (change * 2) - change;

    var circleLocation = this.velocity.clone();
    circleLocation = circleLocation.normalize();
    circleLocation.x *= wanderD;
    circleLocation.y *= wanderD;
    circleLocation.x += this.location.x;
    circleLocation.y += this.location.y;

    var circleOffset = new Point(wanderR * Math.cos(this.wanderTheta), wanderR * Math.sin(this.wanderTheta));

    var target = new Point(circleLocation.x + circleOffset.x, circleLocation.y + circleOffset.y);

    this.seek(target);
}


NARDOVE.Jelly.prototype.checkBounds = function() {
    var offset = 60;
    if (this.location.x < -offset) {
        this.location.x = view.size.width + offset;
        /*
        for (var t = 0; t < this.numTentacles; t++) {
            this.tentacles[t].path.position = this.location.clone();
        }
        */
    }
    if (this.location.x > view.size.width + offset) {
        this.location.x = -offset;
        /*
        for (var t = 0; t < this.numTentacles; t++) {
            this.tentacles[t].path.position = this.location.clone();
        }
        */
    }
    if (this.location.y < -offset) {
        this.location.y = view.size.height + offset;
        /*
        for (var t = 0; t < this.numTentacles; t++) {
            this.tentacles[t].path.position = this.location.clone();
        }
        */
    }
    if (this.location.y > view.size.height + offset) {
        this.location.y = -offset;
        /*
        for (var t = 0; t < this.numTentacles; t++) {
            this.tentacles[t].path.position = this.location.clone();
        }
        */
    }
}

// nardove.js -- end// 



// tentacle.js -- start// 

var NARDOVE = NARDOVE || {};

NARDOVE.Tentacle = function(segments, length) {
    this.anchor = new Segment();
    this.path = new Path();
    this.numSegments = segments;
    this.segmentLength = Math.random() * 1 + length - 1;
}


NARDOVE.Tentacle.prototype.init = function() {
    for (var i = 0; i < this.numSegments; i++) {
        this.path.add(new Point(0, i * this.segmentLength));
    }

    this.path.strokeCap = 'round';

    this.anchor = this.path.segments[0];
}


NARDOVE.Tentacle.prototype.update = function(orientation) {
    this.path.segments[1].point = this.anchor.point;

    var dx = this.anchor.point.x - this.path.segments[1].point.x;
    var dy = this.anchor.point.y - this.path.segments[1].point.y;
    var angle = Math.atan2(dy, dx) + ((orientation + 90) * (Math.PI / 180));

    this.path.segments[1].point.x += Math.cos(angle);
    this.path.segments[1].point.y += Math.sin(angle);

    for (var i = 2; i < this.numSegments; i++) {
        var px = this.path.segments[i].point.x - this.path.segments[i - 2].point.x;
        var py = this.path.segments[i].point.y - this.path.segments[i - 2].point.y;
        var pt = new Point(px, py);
        var len = pt.length;

        if (len > 0.0) {
            this.path.segments[i].point.x = this.path.segments[i - 1].point.x + (pt.x * this.segmentLength) / len;
            this.path.segments[i].point.y = this.path.segments[i - 1].point.y + (pt.y * this.segmentLength) / len;
        }
    }
}


// tentacle.js -- end// 

// nardove.js -- start //

var NARDOVE = NARDOVE || {};

NARDOVE.Main = (function() {

    paper.install(window);
    paper.setup('canvas');

    var timer = new Date();
    var addJellyTimer = 0;
    var jellyCounter = 0;
    var numJellies = 5; //7
    var jellies = [numJellies];
    var jellyResolution = 15; //14


    window.onload = function() {
        view.onFrame = draw;
    };


    this.draw = function(event) {
    		var jellyResolution = 10 +  Math.floor(5 * Math.random()) * 2; //10 ~ 18
    		var cellBornInterval = 3;
        if (event.time > addJellyTimer + cellBornInterval && jellyCounter < numJellies) {
            jellySize = Math.random() * 10 + 40;
            jellies[jellyCounter] = new NARDOVE.Jelly(jellyCounter, jellySize, jellyResolution);
            jellies[jellyCounter].init();

            jellyCounter++;
            addJellyTimer = event.time;
        }

        if (jellyCounter > 0) {
            for (var j = 0; j < jellyCounter; j++) {
                jellies[j].update(event);
            }
        }
    };

})();

// nardove.js -- end //

});
