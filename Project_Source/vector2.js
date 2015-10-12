Vector2= function() {
	this.x = 0;
	this.y = 0;
};

Vector2.prototype.set = function (x,y) {
	this.x = x;
	this.y = y;
};
	
Vector2.prototype.copy = function(){
	var v = new Vector2();
	v.x = this.x
	v.y = this.y
	return v;
}
	
Vector2.prototype.add = function (v2) {
	this.x += v2.x;
	this.y += v2.y;
}

Vector2.prototype.subtract = function (v2) {
	this.x -= v2.x;
	this.y -= v2.y;
}

Vector2.prototype.multiplyScalar = function (num) {
	this.x *= num;
	this.y *= num;
}

Vector2.prototype.normalize = function() {
	var length = Math.sqrt (this.x * this.x + this.y * this.y);
	this.x = this.x / length;
	this.y = this.y / length;
}
 






