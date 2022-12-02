function diagonal(length) {
    return Math.sqrt(2) * length;
}

const length = 9;

console.log(diagonal(9));

function areaT(l1, l2, l3) {
    var s = (l1 + l2 + l3) / 2;
    Math.sqrt(s * ((s - l1) * (s - l2) * (s - l3)));
}

console.log(areaT(5, 6, 7));

function circle(radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    this.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
}
var c = new circle(4);
console.log('Area = ', c.area().toFixed(2));
console.log('Perimeter = ', c.perimeter().toFixed(2));
