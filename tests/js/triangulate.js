$(document).ready(function () {

var c = $('#canvas');

var vertices = [
  [100, 200],
  [100, 300],
  [300, 400],
  [300, 300],
  [400, 200],
  [300, 200],
  [300, 100],
  [200, 200],
  [200, 100],
];

var edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 0]
]

var face = [[0, 1, 2, 3, 4, 5, 6, 7, 8]];

/*
var vertices = [
  [100, 100],
  [100, 200],
  [200, 200],
  [200, 100]
];

var edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0]
]

var face = [[0, 1, 2, 3]];
*/
var g = new Graph(vertices, edges);
var d = new Graph(vertices, []);

g.makeInteractive({
  canvas: c,
  onChange: function(g) {
    d.edges = triangulateFace(vertices, face);
    c.clearCanvas();
    d.draw(c);
  }
});

})
