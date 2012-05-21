jQuery(document).ready(function($) {

var t = -0.1;
var data = d3.range(63).map(next);

function next() {
  t = t + 0.1;
  return {
    time: t,
    value: Math.sin(t)
  }
};

var w = 480,
    h = 270;

var x = d3.scale.linear()
          .domain([0, 6.2])
          .range([0, w]);

var y = d3.scale.linear()
          .domain([-1.2, 1.2])
          .rangeRound([0, h]);

var chart = d3.select("body").append("svg")
              .style("background", "beige")
              .attr("class", "chart")
              .attr("width", w)
              .attr("height", h);

chart.selectAll("circle")
     .data(data)
   .enter().append("circle")
     .attr("cx", function(d) { return x(d.time); })
     .attr("cy", function(d) { return h - y(d.value); })
     .attr("r", 4)
     .style("fill", "orange")
     .style("stroke", "black");


chart.append("line")
     .attr("x1", 0)
     .attr("x2", w)
     .attr("y1", h/2)
     .attr("y2", h/2)
     .style("stroke", "gray")
     .style("stroke-dasharray", [5,5])
     .style("stroke-width", 1);

}); //ready
