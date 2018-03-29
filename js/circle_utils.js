function addTins() {
  
  // uses globals map, countyCentroids, scaleCircles, activeCategory
  
  map.selectAll('g.pie').selectAll('.tin')
    .data(function(d) {
      return [d.properties];
    })
    .enter()
    .append('circle')
    .classed('tin', true)
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 1)
    // this is OK to not worry about it changing on hover (activeCategory only changes on click) 
    // because people won't be able to see tooltips at the same time anyways
    .on("mouseover", function(d) { showToolTip(this, d, activeCategory); })
    .on("mouseout", function(d) { hideTooltip(this, d); });
    
  tinsAdded = true;
  
  // these newly added circles won't work until updateCircles is called, but
  // since this function always gets called from updateCircles, that should be fine
}

function updatePieTins(category, prevTransition) {
  
  // add the circles if needed
  if (!tinsAdded) {
    addTins();
  }

  d3.selectAll(".tin")
    .transition(prevTransition).duration(0)
    .style("fill", categoryToColor(category));
}


