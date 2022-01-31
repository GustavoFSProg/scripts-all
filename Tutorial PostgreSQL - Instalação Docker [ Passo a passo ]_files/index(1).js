(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.photo = function() {
	this.initialize(img.photo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.dot = function() {
	this.initialize(img.dot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAVIAAgqIApAAIAAAqg");
	this.shape.setTransform(109.875,32.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBRQgUgOgGgdIAngEQAEAOALAHQAKAIAQAAQAOAAAJgGQAKgHAAgKQAAgJgJgFQgJgEgPgEIgTgFQgMgDgKgEQgKgEgHgFQgIgGgEgIQgEgJAAgMQAAgNAGgKQAFgKAJgHQAKgIANgEQANgEAOAAQAeAAAUAOQAUANAEAaIgmADQgEgLgJgGQgJgGgOAAQgOAAgHAGQgIAGAAAIQAAAJAIAEQAHAEAOAEIAUAFIAZAIQALAEAHAFQAHAHADAIQAEAIAAAMQAAANgGALQgFAKgKAIQgJAIgOAEQgOAEgQAAQggAAgVgOg");
	this.shape_1.setTransform(97.925,26.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcByQgPAAgKgCQgJgCgGgFQgHgFgCgJQgDgIAAgOIAAhnIgaAAIAAgfIAaAAIAAgwIAnAAIAAAwIAiAAIAAAfIgiAAIAABUIABAQQACAGACADQADADAEABIAMABIAIAAIAEAAIgEAhIgIABIgLAAg");
	this.shape_2.setTransform(84.25,23.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnBcIAAhbQAAgagIgQQgHgQgWAAQgMAAgIAGQgJAFgEAKQgEAJgCANIgBAZIAABRIgoAAIAAiVIAAgOIgBgPIAnAAIAAALIAAAGIAAAGIAAAAQAIgMAOgIQAOgIATAAQAfAAARATQARATAAAjIAABug");
	this.shape_3.setTransform(69.125,25.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjBYQgRgHgMgMQgMgNgGgSQgGgRAAgVQAAgTAGgSQAGgRANgNQALgNARgHQARgHAUAAQAWAAARAIQARAIAKAPQAMANAEAUQAFASABAVIAAACIiKAAQACAXANANQAOAOAVAAQARgBALgHQAMgIAGgKIAmAHQgFAMgHAJQgJAKgLAHQgLAHgOAEQgNAEgPAAQgTAAgRgHgAgfgzQgNAMgDAVIBfAAQgCgTgNgNQgLgLgVgBQgTABgNAKg");
	this.shape_4.setTransform(49.7,26.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABeBcIAAhfQAAgbgIgNQgIgOgSAAQgLAAgIAEQgHAEgFAHQgEAHgCAKQgDAKAAALIAABgIgnAAIAAhfQAAgbgIgNQgIgOgTAAQgLAAgHAEQgHAEgFAHQgEAHgDAKQgCAJAAAMIAABgIgoAAIAAiVIAAgOIgBgPIAnAAIAAAIIAAAHIAAAIIAAAAQAHgMANgIQANgIAUAAQAUAAANAIQAMAIAIAPQAEgHAFgFQAGgFAHgFQAHgEAKgDQAJgCAMAAQAfAAAQATQARATAAAkIAABtg");
	this.shape_5.setTransform(24.825,25.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3B5IgJgBIgGghIAWAAQALAAAGgGQAFgGAFgOIACgFIhEiwIAtAAIAZBLIAKAgIAHAZIABAAIAJgbIAJgfIAZhKIAsAAIhNDLQgEALgFAHQgEAHgHAFQgHAEgJACQgKACgNAAIgHAAg");
	this.shape_6.setTransform(0.875,29.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BPQgSgOAAgZQABgOAFgKQAEgJAJgHQAJgFANgFQAMgEAQgCIAigGQAJgCADgDQADgDAAgGQAAgKgIgIQgJgHgRAAQgSAAgJAJQgJAIgCANIgogDQACgNAGgLQAHgLAKgIQAJgIAOgEQAOgEAQgBQARABANADQAPAEAJAJQAKAIAFANQAFAOAAASIAABmIAAAGIAAAGIgjAAIAAgIIAAgGIAAgFIgBAAQgHAKgNAGQgOAIgUgBQgfAAgTgPgAAhAHIgIABIgjAHQgMACgHAGQgHAFAAALQAAAMAIAGQAIAHAOAAQAVAAAMgMQANgMAAgVIAAgGIAAgDIABgFIgIACg");
	this.shape_7.setTransform(-17.4,26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhaB7IAAjWIAAgMIAAgOIAnAAIAAAMIAAAGIgBAIIABAAQAIgNAPgIQAOgKAWAAQATAAAPAHQAPAHALAMQALANAGASQAGARAAAVQAAAUgGAQQgGASgKANQgLALgQAIQgPAGgUAAQgTAAgPgHQgPgIgIgMIAAAGIAAAJIABAKIAAAKIAAAygAgWhTQgJAFgGAHQgHAJgDALQgEALAAANQAAANAEAMQAEAKAGAIQAHAIAJAEQAKAEALABQALgBAJgEQAJgFAGgIQAHgIADgKQAEgMAAgMQAAgNgEgLQgDgLgHgJQgGgHgJgFQgKgFgKAAQgMAAgKAFg");
	this.shape_8.setTransform(-36.025,28.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpB1QgPgGgLgNQgLgMgGgRQgGgSAAgUQAAgVAGgQQAGgSALgMQALgNAPgHQAPgHATgBQAVABAPAIQAPAIAHAMIAAgJIAAgKIAAhFIAoAAIAADbIAAAMIAAAMIgmAAIAAgMIAAgHIAAgGIAAAAQgIAMgQAIQgPAJgWAAQgSAAgPgHgAgTgZQgJAFgGAJQgGAIgEAKQgDALAAANQAAANADALQAEALAGAIQAGAIAJAFQAJAEALAAQAMAAAJgEQAKgFAHgJQAGgHAEgMQADgLAAgNQAAgNgDgLQgEgLgHgHQgHgJgJgEQgKgEgLAAQgLAAgJAEg");
	this.shape_9.setTransform(-64.875,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAnBcIAAhbQAAgagIgQQgHgQgWAAQgMAAgIAGQgJAFgEAKQgEAJgCANIgBAZIAABRIgoAAIAAiVIAAgOIgBgPIAnAAIAAALIAAAGIAAAGIAAAAQAIgMAOgIQAOgIATAAQAfAAARATQARATAAAjIAABug");
	this.shape_10.setTransform(-84.425,25.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag9BPQgSgOAAgZQABgOAFgKQAEgJAJgHQAJgFANgFQAMgEAQgCIAigGQAJgCADgDQADgDAAgGQAAgKgIgIQgJgHgRAAQgSAAgJAJQgJAIgCANIgogDQACgNAGgLQAHgLAKgIQAJgIAOgEQAOgEAQgBQARABANADQAPAEAJAJQAKAIAFANQAFAOAAASIAABmIAAAGIAAAGIgjAAIAAgIIAAgGIAAgFIgBAAQgHAKgNAGQgOAIgUgBQgfAAgTgPgAAhAHIgIABIgjAHQgMACgHAGQgHAFAAALQAAAMAIAGQAIAHAOAAQAVAAAMgMQANgMAAgVIAAgGIAAgDIABgFIgIACg");
	this.shape_11.setTransform(-103.8,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-115,0,230.1,45.8), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbByQgOAAgKgCQgJgCgGgFQgGgFgDgJQgDgIAAgOIAAhnIgbAAIAAgfIAbAAIAAgwIAoAAIAAAwIAhAAIAAAfIghAAIAABUIABAQQABAGACADQACADAFABIAMABIAHAAIAGAAIgGAhIgIABIgLAAg");
	this.shape.setTransform(133.7,23.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9BKQgRgSAAgoIAAhrIApAAIAABgQAAANABAJQACAKAEAGQAFAHAHAEQAHADALAAQAKABAIgFQAIgFAEgHQAFgIACgKQABgKAAgMIAAhcIApAAIAACYIAAANIAAANIgmAAIAAgMIAAgHIAAgFIgBAAQgIANgNAIQgOAIgTAAQgdAAgSgSg");
	this.shape_1.setTransform(118.525,26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmBYQgRgHgMgMQgMgNgGgSQgHgRAAgVQAAgTAHgSQAGgSAMgNQANgMARgHQARgHAUAAQAVAAARAHQARAHAMAMQANANAGASQAHASAAATQAAAVgHARQgGASgNANQgMAMgRAHQgRAHgVAAQgVAAgRgHgAgVg3QgJAEgHAIQgGAJgEAKQgDAMAAAMQAAAcANAQQANARAYAAQAXAAAOgRQANgQAAgcQAAgMgEgMQgDgKgHgJQgGgIgKgEQgJgFgLAAQgMAAgJAFg");
	this.shape_2.setTransform(98.975,26.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlB6Ig+hNIgNAAIAABNIgoAAIAAjzIAoAAIAACEIALAAIA5hDIAxAAIhKBRIBJBVIAAAMg");
	this.shape_3.setTransform(81.375,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghBYQgQgHgNgNQgLgMgHgSQgFgRgBgVQAAgTAHgSQAGgRAMgNQAMgNAQgHQASgHAUAAQAhAAAVARQAUARAIAbIgqAEQgFgOgKgIQgKgIgQAAQgKAAgKAEQgIAEgHAIQgGAIgEALQgDALAAANQAAAbAOARQANARAXAAQAPAAALgIQAKgIAFgNIAoADQgFANgHALQgGALgMAIQgJAIgOAEQgOAFgQAAQgVAAgQgHg");
	this.shape_4.setTransform(62.6,26.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBYQgQgHgMgMQgMgNgGgSQgHgRAAgVQAAgTAHgSQAGgRAMgNQANgNAQgHQARgHAUAAQAWAAARAIQARAIAKAPQALANAGAUQAEASAAAVIAAACIiJAAQACAXAOANQANAOAVAAQARgBAMgHQALgIAGgKIAnAHQgFAMgIAJQgJAKgLAHQgLAHgNAEQgOAEgPAAQgTAAgSgHgAgfgzQgNAMgDAVIBfAAQgCgTgNgNQgLgLgVgBQgTABgNAKg");
	this.shape_5.setTransform(43.55,26.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnB6IAAhcQAAgNgCgLQgBgKgFgHQgEgIgHgEQgIgEgKAAQgKAAgHAEQgIAEgGAHQgEAHgDAJQgCAKAAAMIAABgIgoAAIAAjzIAoAAIAAAwIAAATIAAATQAIgLANgIQANgHASgBQAfABARASQASAUgBAhIAABwg");
	this.shape_6.setTransform(24.2,22.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghBYQgRgHgLgNQgMgMgGgSQgHgRABgVQAAgTAGgSQAGgRAMgNQAMgNARgHQAQgHAUAAQAiAAAVARQAVARAGAbIgpAEQgFgOgKgIQgJgIgRAAQgKAAgJAEQgJAEgHAIQgGAIgDALQgEALAAANQAAAbANARQANARAXAAQAQAAALgIQAKgIAGgNIAmADQgEANgGALQgIALgKAIQgLAIgNAEQgNAFgRAAQgVAAgQgHg");
	this.shape_7.setTransform(5.4,26.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbByQgOAAgKgCQgJgCgGgFQgHgFgCgJQgDgIAAgOIAAhnIgbAAIAAgfIAbAAIAAgwIAoAAIAAAwIAhAAIAAAfIghAAIAABUIAAAQQACAGACADQACADAFABIAMABIAHAAIAGAAIgGAhIgIABIgLAAg");
	this.shape_8.setTransform(-16.5,23.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBRQgUgOgGgdIAngEQAEAOALAHQAKAIAQAAQAOAAAJgGQAKgHAAgKQAAgJgJgFQgJgEgPgEIgTgFQgMgDgKgEQgKgEgHgFQgIgGgEgIQgEgJAAgMQAAgNAGgKQAFgKAJgHQAKgIANgEQANgEAOAAQAeAAAUAOQAUANAEAaIgmADQgEgLgJgGQgJgGgOAAQgOAAgHAGQgIAGAAAIQAAAJAIAEQAHAEAOAEIAUAFIAZAIQALAEAHAFQAHAHADAIQAEAIAAAMQAAANgGALQgFAKgKAIQgJAIgOAEQgOAEgQAAQggAAgVgOg");
	this.shape_9.setTransform(-30.325,26.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag8BPQgTgOABgZQAAgOAEgKQAFgJAJgHQAJgFAMgFQANgEAQgCIAhgGQAKgCADgDQADgDAAgGQAAgKgJgIQgIgHgSAAQgRAAgJAJQgJAIgCANIgogDQACgNAGgLQAGgLAKgIQALgIANgEQAOgEAPgBQASABAOADQAOAEAJAJQAKAIAFANQAGAOgBASIAABmIAAAGIAAAGIgiAAIAAgIIAAgGIAAgFIgCAAQgHAKgOAGQgOAIgTgBQggAAgRgPgAAgAHIgIABIgiAHQgMACgHAGQgHAFAAALQAAAMAIAGQAJAHAOAAQAUAAANgMQAMgMAAgVIAAgGIAAgDIABgFIgJACg");
	this.shape_10.setTransform(-48.05,26.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYB6IAAiTIgYAAIAAgfIAYAAIAAgNQAAgPADgKQAEgLAHgGQAHgFAJgDQALgDAQABIAIAAIAGABIACAfIgFAAIgFAAQgPAAgFAGQgEAFAAAOIAAAIIAhAAIAAAfIggAAIAACTg");
	this.shape_11.setTransform(-61.525,22.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAnB6IAAhcQAAgNgCgLQgCgKgEgHQgEgIgIgEQgGgEgLAAQgJAAgJAEQgHAEgFAHQgFAHgDAJQgCAKAAAMIAABgIgpAAIAAjzIApAAIAAAwIAAATIAAATQAHgLAOgIQANgHATgBQAfABAQASQARAUAAAhIAABwg");
	this.shape_12.setTransform(-83.55,22.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcByQgPAAgKgCQgJgCgGgFQgHgFgCgJQgDgIAAgOIAAhnIgaAAIAAgfIAaAAIAAgwIAnAAIAAAwIAiAAIAAAfIgiAAIAABUIABAQQACAGACADQADADAEABIAMABIAIAAIAEAAIgEAhIgIABIgLAAg");
	this.shape_13.setTransform(-98.9,23.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTB6IAAiyIAnAAIAACygAgUhQIAAgpIApAAIAAApg");
	this.shape_14.setTransform(-108.225,22.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAfBZIgThJIgEgOIgDgNIgDgPIgCgLIAAAAIgFAaQgDANgEANIgTBKIgtAAIg2iyIAqAAIARA/IAJAiIAJAlIABAAIAEgSIAFgRIAEgRIAFgUIAOg+IAoAAIATBIIADAQIAEANIADAPIAFASIABAAIAHgdIAJggIAUhJIAoAAIg4Cyg");
	this.shape_15.setTransform(-125.1,26.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-140.7,0,281.6,45.8), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BbIAAiRIAAgRIAAgQIAmAAIAAAIIAAAJIAAAJQAGgQAMgHQAOgGARAAIAHAAIAHAAIAEAmIgMgBIgKAAQgMAAgGACQgIADgEAFQgHAHgEANQgCAOAAARIAABTg");
	this.shape.setTransform(166.05,25.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBYQgRgHgMgMQgMgNgGgSQgGgRAAgVQAAgTAGgSQAHgRAMgNQAMgNAQgHQARgHATAAQAXAAARAIQARAIAKAPQAMANAEAUQAGASAAAVIAAACIiKAAQACAXANANQAOAOAVAAQARgBALgHQAMgIAFgKIAnAHQgEAMgJAJQgIAKgLAHQgLAHgOAEQgNAEgPAAQgTAAgRgHgAgfgzQgNAMgDAVIBeAAQgBgTgMgNQgMgLgVgBQgTABgNAKg");
	this.shape_1.setTransform(149.25,26.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABeBcIAAhfQAAgbgIgNQgIgOgSAAQgLAAgIAEQgHAEgFAHQgEAHgCAKQgDAKAAALIAABgIgnAAIAAhfQAAgbgIgNQgIgOgTAAQgLAAgHAEQgHAEgFAHQgEAHgDAKQgCAJAAAMIAABgIgoAAIAAiVIAAgOIgBgPIAnAAIAAAIIAAAHIAAAIIAAAAQAHgMANgIQANgIAUAAQAUAAANAIQAMAIAIAPQAEgHAFgFQAGgFAHgFQAHgEAKgDQAJgCAMAAQAfAAAQATQARATAAAkIAABtg");
	this.shape_2.setTransform(124.375,25.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBYQgRgHgMgMQgMgNgGgSQgHgRAAgVQAAgTAHgSQAGgSAMgNQANgMARgHQARgHAUAAQAVAAARAHQARAHAMAMQANANAGASQAHASAAATQAAAVgHARQgGASgNANQgMAMgRAHQgRAHgVAAQgVAAgRgHgAgVg3QgJAEgHAIQgGAJgEAKQgDAMAAAMQAAAcANAQQANARAYAAQAXAAAOgRQANgQAAgcQAAgMgEgMQgDgKgHgJQgGgIgKgEQgJgFgLAAQgMAAgJAFg");
	this.shape_3.setTransform(99.125,26.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcByQgPAAgKgCQgJgCgGgFQgHgFgCgJQgDgIAAgOIAAhnIgbAAIAAgfIAbAAIAAgwIAoAAIAAAwIAhAAIAAAfIghAAIAABUIABAQQAAAGADADQADADAEABIAMABIAHAAIAGAAIgGAhIgIABIgKAAg");
	this.shape_4.setTransform(83.55,23.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBRQgUgOgGgdIAngEQAEAOALAHQAKAIAQAAQAOAAAJgGQAKgHAAgKQAAgJgJgFQgJgEgPgEIgTgFQgMgDgKgEQgKgEgHgFQgIgGgEgIQgEgJAAgMQAAgNAGgKQAFgKAJgHQAKgIANgEQANgEAOAAQAeAAAUAOQAUANAEAaIgmADQgEgLgJgGQgJgGgOAAQgOAAgHAGQgIAGAAAIQAAAJAIAEQAHAEAOAEIAUAFIAZAIQALAEAHAFQAHAHADAIQAEAIAAAMQAAANgGALQgFAKgKAIQgJAIgOAEQgOAEgQAAQggAAgVgOg");
	this.shape_5.setTransform(69.725,26.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag9BKQgRgSAAgoIAAhrIApAAIAABgQAAANABAJQACAKAEAGQAFAHAHAEQAHADALAAQAKABAIgFQAIgFAEgHQAFgIACgKQABgKAAgMIAAhcIApAAIAACYIAAANIAAANIgmAAIAAgMIAAgHIAAgFIgBAAQgIANgNAIQgOAIgTAAQgdAAgSgSg");
	this.shape_6.setTransform(51.875,26.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghBYQgRgHgLgNQgMgMgGgSQgHgRABgVQAAgTAGgSQAGgRAMgNQAMgNARgHQAQgHAVAAQAhAAAUARQAWARAGAbIgpAEQgFgOgKgIQgJgIgRAAQgKAAgJAEQgJAEgHAIQgGAIgDALQgEALAAANQAAAbANARQANARAXAAQAQAAALgIQAKgIAGgNIAmADQgEANgGALQgIALgKAIQgLAIgNAEQgNAFgRAAQgVAAgQgHg");
	this.shape_7.setTransform(33.3,26.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag9BPQgSgOAAgZQABgOAFgKQAEgJAJgHQAJgFANgFQAMgEAQgCIAigGQAJgCADgDQADgDAAgGQAAgKgIgIQgJgHgRAAQgSAAgJAJQgJAIgCANIgogDQACgNAGgLQAHgLAKgIQAJgIAOgEQAOgEAQgBQARABANADQAPAEAJAJQAKAIAFANQAFAOABASIAABmIAAAGIAAAGIgkAAIAAgIIAAgGIAAgFIgBAAQgHAKgNAGQgOAIgUgBQgfAAgTgPgAAhAHIgIABIgjAHQgMACgHAGQgHAFAAALQAAAMAIAGQAIAHAOAAQAVAAAMgMQANgMAAgVIAAgGIAAgDIABgFIgIACg");
	this.shape_8.setTransform(7.35,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkBYQgQgHgMgMQgMgNgGgSQgGgRgBgVQABgTAGgSQAHgRAMgNQALgNARgHQARgHATAAQAXAAARAIQARAIALAPQAKANAFAUQAGASgBAVIAAACIiJAAQACAXANANQAOAOAVAAQARgBALgHQAMgIAFgKIAoAHQgGAMgIAJQgIAKgLAHQgLAHgOAEQgNAEgPAAQgUAAgRgHgAgfgzQgNAMgDAVIBeAAQgBgTgMgNQgNgLgUgBQgTABgNAKg");
	this.shape_9.setTransform(-17.95,26.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyBRQgUgOgGgdIAngEQAEAOALAHQAKAIAQAAQAOAAAJgGQAKgHAAgKQAAgJgJgFQgJgEgPgEIgTgFQgMgDgKgEQgKgEgHgFQgIgGgEgIQgEgJAAgMQAAgNAGgKQAFgKAJgHQAKgIANgEQANgEAOAAQAeAAAUAOQAUANAEAaIgmADQgEgLgJgGQgJgGgOAAQgOAAgHAGQgIAGAAAIQAAAJAIAEQAHAEAOAEIAUAFIAZAIQALAEAHAFQAHAHADAIQAEAIAAAMQAAANgGALQgFAKgKAIQgJAIgOAEQgOAEgQAAQggAAgVgOg");
	this.shape_10.setTransform(-36.025,26.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmBYQgRgHgMgMQgMgNgGgSQgHgRAAgVQAAgTAHgSQAGgSAMgNQANgMARgHQARgHAUAAQAVAAARAHQARAHAMAMQANANAGASQAHASAAATQAAAVgHARQgGASgNANQgMAMgRAHQgRAHgVAAQgVAAgRgHgAgVg3QgJAEgHAIQgGAJgEAKQgDAMAAAMQAAAcANAQQANARAYAAQAXAAAOgRQANgQAAgcQAAgMgEgMQgDgKgHgJQgGgIgKgEQgJgFgLAAQgMAAgJAFg");
	this.shape_11.setTransform(-54.125,26.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTB6IAAjzIAnAAIAADzg");
	this.shape_12.setTransform(-68.025,22.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0BbIAAiRIAAgRIAAgQIAmAAIAAAIIAAAJIAAAJQAGgQAMgHQAOgGASAAIAGAAIAGAAIAGAmIgNgBIgKAAQgMAAgHACQgHADgEAFQgIAHgCANQgDAOAAARIAABTg");
	this.shape_13.setTransform(-83.85,25.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkBYQgQgHgMgMQgMgNgGgSQgGgRgBgVQABgTAGgSQAHgRALgNQAMgNARgHQARgHATAAQAXAAARAIQARAIALAPQAKANAGAUQAEASAAAVIAAACIiJAAQACAXANANQAOAOAVAAQARgBAMgHQALgIAFgKIAoAHQgGAMgIAJQgIAKgLAHQgLAHgOAEQgNAEgPAAQgUAAgRgHgAgfgzQgNAMgDAVIBeAAQgBgTgMgNQgNgLgUgBQgTABgNAKg");
	this.shape_14.setTransform(-100.65,26.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTBZIhEiyIAtAAIAXBHIAHATIAFAQIAEANIADANIABAAIAFgQIAFgPIAEgNIAGgSIAXhGIAsAAIhFCyg");
	this.shape_15.setTransform(-118.875,26.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkBYQgQgHgMgMQgMgNgGgSQgGgRgBgVQABgTAGgSQAHgRAMgNQALgNARgHQARgHATAAQAXAAARAIQARAIALAPQAKANAFAUQAGASgBAVIAAACIiJAAQACAXANANQAOAOAVAAQARgBALgHQAMgIAFgKIAoAHQgGAMgIAJQgIAKgLAHQgLAHgOAEQgNAEgPAAQgUAAgRgHgAgfgzQgNAMgDAVIBeAAQgBgTgMgNQgNgLgUgBQgTABgNAKg");
	this.shape_16.setTransform(-137.2,26.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAxB6IhOiFIgSghIgMgXIgBAAIAAALIABAOIAAAQIAAAPIAACFIgqAAIAAjzIA2AAIBPCKIAHAMIAIAOIAGANIAHAMIAAAAIAAgNIAAgRIAAgSIAAgSIAAh7IAqAAIAADzg");
	this.shape_17.setTransform(-159.3,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-174.3,0,347,45.8), null);


(lib.mc_photo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_photo, new cjs.Rectangle(0,0,600,1200), null);


(lib.mc_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AikD6IAAnzIFEAAIAABNIjuAAIAACDIDdAAIAABKIjdAAIAACMIDzAAIAABNg");
	this.shape.setTransform(334.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AhYDxQgvgVgfghQgigkgRguQgRgvAAg5QAAg4ARguQARgwAigjQAhgiAtgVQAwgUA3AAQBSAAA4AnQA4AmAXBAIhZARQgTgngggWQgigWgtABQgkAAgdAOQgdAOgUAZQgVAZgKAiQgLAiAAAmQAAAmAMAjQALAiAUAZQAVAZAdANQAdAOAlAAQAyAAAfgYQAggYASghIBYAOQgMAegTAZQgUAagbATQgcATgjAMQgjALguAAQg3AAgugTg");
	this.shape_1.setTransform(283.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("ACeD6IgziPIjaAAIgzCPIhSAAIAAgYIC0nbICEAAICxHbIAAAYgAhUAhIClAAIhHjOIgVAAg");
	this.shape_2.setTransform(229.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("Ai4D6IAAnzIC4AAQA0AAAjAMQAkAMAVAVQAWAUAJAdQAKAcAAAhQAAAngOAcQgNAdgZASQgZAUgjAJQgiAJgsAAIhaAAIAADAgAhfgQIBUAAQAWAAAVgEQATgDAPgKQAOgIAIgQQAIgOAAgXQAAgXgIgQQgIgPgOgJQgOgIgUgFQgSgDgXAAIhWAAg");
	this.shape_3.setTransform(184.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("Ah+DkQg0gkgLhLIBUgHQAIAmAcAVQAdAWAtAAQAsAAAZgWQAZgUgBgkQAAgRgGgLQgHgMgMgIQgLgIgSgGIhLgWQgggKgcgNQgdgOgQgPQgTgSgJgYQgKgWAAgfQAAggAMgaQAOgdAWgRQAXgUAggLQAjgLAmAAQBOAAAsAlQAtAmAIA+IhTAHQgHgfgYgSQgWgSgpAAQgmAAgWASQgVATAAAcQAAAPAHAMQAFAKANAIQANAKAPAFQAQAHAWAGIAjAMQAiALAbAMQAaALATAQQATAQAJAWQALAXAAAhQAAAjgOAeQgOAegZAUQgaAVghALQgiALgrAAQhMAAgzglg");
	this.shape_4.setTransform(134.3,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AikD6IAAnzIFEAAIAABNIjuAAIAACDIDdAAIAABKIjdAAIAACMIDzAAIAABNg");
	this.shape_5.setTransform(87.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("ABqD6IiYjEIg5AAIAADEIhWAAIAAnzICiAAQAkAAAkAFQAjAGAcATQA7AmAABPQAAAigLAZQgJAZgRASQgTATgUAJQgUALgZAGICQC1IAAAYgAhngUIBMAAQAxgBAegRQAdgUAAgpQgBgqgdgQQgdgQgxAAIhMAAg");
	this.shape_6.setTransform(41.3,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("ACeD6IgziPIjaAAIgzCPIhSAAIAAgYICznbICFAAICxHbIAAAYgAhUAhIClAAIhHjOIgVAAg");
	this.shape_7.setTransform(-13.2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("AhUD5QgkgLgagaQgZgYgPgoQgNgoAAg3IAAk4IBXAAIAAE2QAABFAeAhQAdAjA1AAQA1AAAegjQAdghAAhFIAAk2IBYAAIAAE4QAAA2gOApQgOAogaAYQgZAagmALQgkALgvAAQgvAAglgLg");
	this.shape_8.setTransform(-66.7,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("ACeEYIgug6QgZAMgbAGQgbAGghABQg5AAgugUQgvgTgfgjQgggigTgyQgRguAAg6QAAg7ARgvQATgxAggiQAggkAvgTQAvgUA3AAQA4AAAuATQAuAUAhAjQAgAhASAzQATAxAAA5QAAA7gTAxQgUAwgjAjIBDBQIAAAYgAhDi9QgeAOgVAaQgTAXgMAjQgLAjAAAoQAAAoAMAiQALAiAUAZQATAZAfAPQAcAOAnAAQAlAAAdgNQAdgNAVgZQAVgbALghQALgjAAgoQAAgogLgkQgLghgVgaQgVgYgdgPQgdgOgmABQgmgBgcAOg");
	this.shape_9.setTransform(-125.7,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("Ah+DkQg0gkgLhLIBUgHQAIAmAcAVQAdAWAtAAQAsAAAZgWQAZgUgBgkQAAgRgGgLQgHgMgMgIQgKgIgTgGIhLgWQgggKgcgNQgcgNgRgQQgTgTgJgXQgKgWAAgfQAAggAMgaQAOgdAWgRQAXgUAggLQAjgLAmAAQBOAAAsAlQAtAmAJA+IhUAHQgHgfgYgSQgWgSgpAAQgmAAgWASQgVATAAAcQAAAPAHAMQAFAKANAIQANAKAPAFQAQAHAWAGIAjAMQAiALAbAMQAaALATAQQATAQAJAWQALAXAAAhQAAAjgOAeQgOAegZAUQgaAVghALQgiALgrAAQhMAAgzglg");
	this.shape_10.setTransform(-180.7,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AkND4QgqgSggghIgfgfIA9g+IAfAfQApAqA8AAQA7AAApgqIGKmPIA+A/ImKGOQggAhgqASQgrARgtAAQguAAgqgRg");
	this.shape_11.setTransform(-285.2,23.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AhME0IFWlXQAqgqAAg8QAAg7gqgrQgqgqg7AAQg8AAgpAqImMGOIg+g9IGMmPQAgghArgRQAqgRAugBQAuAAAqASQAqARAhAhQBDBEAABgQAABghDBDIlWFYg");
	this.shape_12.setTransform(-267.225,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("Aj8FhQgrgSggghQhDhEAAhgQAAhfBDhDIFWlZIA9A+IlVFYQgqAqAAA7QAAA8AqAqQAqAqA7ABQA8AAApgrIGMmOIA+A+ImMGOQggAhgrASQgqARguAAQguAAgqgRg");
	this.shape_13.setTransform(-313.2,-14);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("Al2DLIGJmPQAhghAqgRQAqgRAugBQAuAAAqASQApARAhAhIAfAgIg+A+IgfggQgqgqg6AAQg8AAgpAqImKGPg");
	this.shape_14.setTransform(-295.2,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_logo, new cjs.Rectangle(-352.7,-51,704,102), null);


(lib.mc_cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {off:0,on:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgoBAIAAh/IAXAAIAABsIA5AAIAAATg");
	this.shape.setTransform(98.4,-0.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AApBAIgOglIg3AAIgMAlIgWAAIAAgGIAvh5IAgAAIAtB5IAAAGgAgEgmIgCAHIgEAIIgDAMIgIAUIAqAAIgHgUIgHgUIgEgNIgFAAIgCAGg");
	this.shape_1.setTransform(86.75,-0.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKBAIAAh/IAVAAIAAB/g");
	this.shape_2.setTransform(78.125,-0.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAbBAIgngzIgOAAIAAAzIgWAAIAAh/IAqAAIASABQAIABAHAFQAQAKAAAUQAAAJgCAHQgEAGgEAEQgEAFgFADIgMADIAlAvIAAAGgAgagFIAUAAQAMAAAHgEQAIgFAAgLQAAgLgIgEQgHgEgMAAIgUAAg");
	this.shape_3.setTransform(70.55,-0.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKBAIAAhsIglAAIAAgTIBfAAIAAATIglAAIAABsg");
	this.shape_4.setTransform(59.425,-0.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpBAIAAh/IBSAAIAAATIg9AAIAAAiIA5AAIAAATIg5AAIAAAkIA+AAIAAATg");
	this.shape_5.setTransform(45.9,-0.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpBAIAAh/IBSAAIAAATIg9AAIAAAiIA5AAIAAATIg5AAIAAAkIA+AAIAAATg");
	this.shape_6.setTransform(35.55,-0.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAbBAIgngzIgOAAIAAAzIgWAAIAAh/IAqAAIASABQAJABAHAFQAPAKAAAUQAAAJgDAHQgCAGgFAEQgEAFgGADIgLADIAlAvIAAAGgAgagFIAUAAQAMAAAHgEQAHgFABgLQgBgLgHgEQgHgEgMAAIgUAAg");
	this.shape_7.setTransform(24.85,-0.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoBAIAAh/IBQAAIAAATIg5AAIAAAiIA1AAIAAATIg1AAIAAA3g");
	this.shape_8.setTransform(14.35,-0.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbBAIgmgzIgPAAIAAAzIgWAAIAAh/IApAAIASABQAKABAGAFQAQAKAAAUQAAAJgCAHQgEAGgDAEQgFAFgFADIgNADIAmAvIAAAGgAgagFIATAAQANAAAHgEQAIgFgBgLQABgLgIgEQgHgEgNAAIgTAAg");
	this.shape_9.setTransform(0.15,-0.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVA/QgJgDgHgGQgHgHgEgKQgDgKAAgOIAAhOIAXAAIAABNQAAASAHAJQAIAJANAAQAOAAAHgJQAJgJgBgSIAAhNIAXAAIAABOQAAAOgEAKQgDAKgHAHQgHAGgJADQgKADgMAAQgLAAgKgDg");
	this.shape_10.setTransform(-12.3,-0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaA+QgMgFgIgJQgJgJgEgMQgFgMAAgPQAAgOAFgMQAEgMAJgJQAIgJAMgFQAMgFAOAAQAOAAAMAEQAMAFAJAKQAIAJAFAMQAFAMAAAOQAAAPgFAMQgEAMgJAJQgIAJgMAFQgMAFgPAAQgOAAgMgFgAgRgsQgHAEgGAGQgFAHgDAJQgDAIAAAKQAAAKADAJQADAIAFAHQAGAHAHADQAIAEAJAAQAJAAAIgEQAIgDAFgHQAFgGADgJQADgJAAgKQAAgKgDgIQgDgJgFgHQgFgGgIgEQgIgDgJAAQgJAAgIADg");
	this.shape_11.setTransform(-25.575,-0.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBAIAAgvIgphJIAAgHIAVAAIAOAaIAGAJIADAIIAFAIIADAJIAKgTIAJgPIAOgaIAUAAIAAAHIgqBJIAAAvg");
	this.shape_12.setTransform(-38,-0.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKBAIAAhsIglAAIAAgTIBfAAIAAATIglAAIAABsg");
	this.shape_13.setTransform(-52.125,-0.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAbBAIgmgzIgPAAIAAAzIgWAAIAAh/IApAAIATABQAIABAHAFQAQAKAAAUQAAAJgCAHQgDAGgFAEQgEAFgFADIgMADIAlAvIAAAGgAgagFIATAAQANAAAHgEQAIgFAAgLQAAgLgIgEQgHgEgNAAIgTAAg");
	this.shape_14.setTransform(-62.3,-0.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AApBAIgOglIg3AAIgMAlIgWAAIAAgGIAvh5IAgAAIAtB5IAAAGgAgEgmIgCAHIgEAIIgDAMIgIAUIAqAAIgHgUIgHgUIgEgNIgFAAIgCAGg");
	this.shape_15.setTransform(-74.8,-0.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKBAIAAhsIglAAIAAgTIBfAAIAAATIglAAIAABsg");
	this.shape_16.setTransform(-86.075,-0.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggA6QgNgKgDgSIAVgCQACAJAIAGQAHAFALAAQAMAAAHgFQAFgGAAgIQABgFgCgDQgCgDgDgCIgHgDIgKgDIgJgDQgJgCgGgEQgIgCgFgFQgEgEgDgGQgCgGAAgHQAAgIADgHQADgHAGgFQAGgFAIgDQAJgCAJAAQAVAAALAJQAMAJACAQIgWACQgBgIgHgFQgFgEgLAAQgJAAgFAEQgGAFAAAHQAAAEABADQACADADACIAIAEIAJADIAJADIAPAGQAIADAEADQAFAEADAGQACAGAAAIQAAAJgEAHQgDAIgHAFQgGAFgJADQgJADgLAAQgSAAgOgJg");
	this.shape_17.setTransform(-96.4,-0.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// border
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AyfEdIAAo5MAk+AAAIAAI5gAyNELMAkbAAAIAAoVMgkbAAAg");
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("A0xFAIAAp/MApjAAAIAAJ/g");
	this.shape_19.setTransform(0.0199,0.03,0.89,0.89);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.298)").s().p("A0xFAIAAp/MApjAAAIAAJ/g");
	this.shape_20.setTransform(0.0199,0.03,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_20}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-28.5,236.7,57);


(lib.mc_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	this.shape.setTransform(300,599.9985,1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_back, new cjs.Rectangle(0,0,600,1200), null);


(lib.clickthrough = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mc_copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.c3 = new lib.Symbol3();
	this.c3.name = "c3";
	this.c3.setTransform(155,178.05,1.1,1.1,0,0,0,-110.9,17.3);

	this.c2 = new lib.Symbol2();
	this.c2.name = "c2";
	this.c2.setTransform(121,146.1,1.1,1.1,0,0,0,-140.9,22.8);

	this.c1 = new lib.Symbol1();
	this.c1.name = "c1";
	this.c1.setTransform(89,95,1.1,1.1,0,0,0,-170,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c1},{t:this.c2},{t:this.c3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_copy, new cjs.Rectangle(84.2,84,381.7,125.4), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/**
		* Squarewave CreateJS Template 3.3 (Feb '21)
		**/
		var root = r = this,
		    adCompleted = false,
			isOver = false,
			timeout,
			hasLooped = 0,
			tl;
		
		var EO = Elastic.easeOut.config;
		var EI = Elastic.easeIn.config;
		var EIO = Elastic.easeInOut.config;
		var R = gsap.utils.Random;
			
		this.onInit = function()
		{
			setTimeout( function(){ 
				console.log('%c----------------------------------------\n------------- 15 SECONDS ---------------\n----------------------------------------\n', 'background: #ffff33; color: #ff00ff');
			} , 15000 );
				
			r.tl = tl = gsap.timeline({onComplete:function(){ if(!isOver){ r.adHelper.sleep(); } adCompleted = true; }});
			
			tl.add( "start" , "+=0" );
			tl.add( function(){ console.log('end'); } , "start+=14.5" );
			
			tl.addLabel("frame01", "start+=.25");
			tl.from(root.m_copy.c1, .8, {alpha:0, scaleY:"-=.3", rotation:-5, ease:Quad.easeInOut}, "frame01");
			tl.from(root.m_copy.c2, .8, {alpha:0, scaleY:"-=.3", rotation:-5, ease:Quad.easeInOut}, "frame01+=.2");
			tl.from(root.m_copy.c3, .8, {alpha:0, scaleY:"-=.3", rotation:-5, ease:Quad.easeInOut}, "frame01+=.4");
			//tl.from(root.m_copy.c4, .8, {alpha:0, scaleY:"-=.3", rotation:-5, ease:Quad.easeInOut}, "frame01+=.6");
			//tl.from(root.m_copy.c5, .8, {alpha:0, scaleY:"-=.3", rotation:-5, ease:Quad.easeInOut}, "frame01+=.8");
			//tl.from(root.m_copy.c6, .8, {alpha:0, scaleY:"-=.3", rotation:-5, ease:Quad.easeInOut}, "frame01+=1");
			
			//tl.from(root.m_subTxt, .8, {alpha:0}, "frame01+=1");
		}
		
		this.onRollOverEvent = function(e)
		{
			// wake up creative if asleep //
			clearTimeout( timeout );
			if( root.adHelper && !root.adHelper.awake ) root.adHelper.wake();
			isOver = true;
			console.log("creative-mouse over" );
			if( adCompleted ) {}
			
			root.m_cta.gotoAndStop("on");
		}
		
		this.onRollOutEvent = function(e)
		{
			if( adCompleted ) timeout = setTimeout( function(){ if(!isOver) r.adHelper.sleep(); } , 3000 );
			isOver = false
			console.log("creative-mouse out" );
			if( adCompleted ) {}
			
			root.m_cta.gotoAndStop("off");
		}
		
		this.onClickEvent = function(e)
		{
			console.log("creative-click");
		}
		
		this.adHelper = null; // adhelper reference //
		this.onSlowDown = function()
		{
			console.log("creative-slowdown");
		}
		
		this.onSleep = function()
		{
			console.log("creative-sleep");
		}
		
		this.onWake = function()
		{
			console.log("creative-wake");
		}
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pixel
	this.instance = new lib.dot();
	this.instance.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// clickthrough
	this.clickthrough = new lib.clickthrough();
	this.clickthrough.name = "clickthrough";
	this.clickthrough.setTransform(300.2,600.8,2,4.7997,0,0,0,150.1,125.2);
	new cjs.ButtonHelper(this.clickthrough, 0, 1, 2, false, new lib.clickthrough(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egu3BdwMAAAi7fMBdvAAAMAAAC7fgEgutBdmMBdbAAAMAAAi7LMhdbAAAg");
	this.shape.setTransform(300,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// cta
	this.m_cta = new lib.mc_cta();
	this.m_cta.name = "m_cta";
	this.m_cta.setTransform(300.15,1092.15,1.5,1.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.m_cta).wait(1));

	// logo
	this.instance_1 = new lib.mc_logo();
	this.instance_1.setTransform(300,99.95,0.51,0.51,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// copy
	this.m_copy = new lib.mc_copy();
	this.m_copy.name = "m_copy";
	this.m_copy.setTransform(-84,102,1.39,1.39);

	this.timeline.addTween(cjs.Tween.get(this.m_copy).wait(1));

	// photo
	this.instance_2 = new lib.mc_photo();
	this.instance_2.setTransform(300,250,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// back
	this.instance_3 = new lib.mc_back();
	this.instance_3.setTransform(300,250,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(290,590,310,610);
// library properties:
lib.properties = {
	id: '6E90FE806F27F34393A5255C3C9E9E98',
	width: 600,
	height: 1200,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/photo.jpg?1620166828458", id:"photo"},
		{src:"images/dot.png?1620166828458", id:"dot"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6E90FE806F27F34393A5255C3C9E9E98'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;