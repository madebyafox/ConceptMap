//TODO: Fix bug where D3 see's nodes as "old" and tries to replace them all.  This function is currently unused
function redraw() {
  console.log("here");
  let nodeElements = d3.select(canvas)
                       .selectAll(".node")
                       .data(nodes);
  //update existing nodes
  
  //Append new
  nodeElements.enter()
       .append("g")
       .attr("class", "node")
       .attr("id", n => n.id)
       .attr("transform", n => "translate("+ n.x+","+ n.y+")")
       .append("circle")
       .attr("class", "node-rep")
       .style("fill", n => n.color)
       .style("z-index", 1)
       .style("stroke", "#25AEC8")
       .style("stroke-width", "3px")
       .attr("r", n => n.radius)
       .attr("cx", 0)
       .attr("cy", 0)
       .attr("id", n => n.id)
       .attr("xmlns", "http://www.w3.org/2000/svg");

  //Remove deleted
  nodeElements.exit()
       .remove();
}