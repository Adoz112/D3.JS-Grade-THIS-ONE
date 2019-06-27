// @TODO: YOUR CODE HERE!
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select("#container")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

//   // var svg = d3.select("#container")
//   // .append("svg")
//   // .attr("preserveAspectRatio", "xMinYMin meet")
//   // .attr("viewBox", "0 0 " + svgWidth + " " + svgHeight)
//   // .classed("svg-content", true);
  

 var dataGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

       d3.csv("/data/data.csv").then(function(data) {
          console.log(data[0]);
  });  