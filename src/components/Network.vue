<template lang="html">
<div class="container is-fluid">
  <div class="notification is-primary">
    <button class="delete"></button>
    Yay! You successfully landed on the <strong>Network</strong> page!
  </div>
  <div style="width: 100%;">
    <div style="float:left; width: 65%">
        <svg width="900" height="800">
        </svg>
    </div>
    <div style="float:right; width: 35%">
        <center><p> The node you clicked has id : <span id="node-clicked"></span></p></center>
    </div>
  </div>
</div>
</template>
<script>
import * as d3 from 'd3'
/*
var svg = d3.select('svg')
var width = +svg.attr('width')
var height = +svg.attr('height')

var color = d3.scaleOrdinal(d3.schemeCategory20)

var simulation = d3.forceSimulation()
    .force('link', d3.forceLink().id(function (d) { return d.id }))
    .force('charge', d3.forceManyBody().strength(-150))
    .force('center', d3.forceCenter(width / 2, height / 2))
*/
var url = 'http://127.0.0.1:5000/graph'
d3.json(url, function (error, graph) {
  if (error) throw error
  console.log('Graph imported')
  console.log(graph)
  /*
  var link = svg.append('g')
      .attr('class', 'links')
    .selectAll('line')
    .data(graph.links)
    .enter().append('line')
      .attr('stroke-width', function (d) { return Math.sqrt(d.value) })

  var node = svg.append('g')
      .attr('class', 'nodes')
    .selectAll('circle')
    .data(graph.nodes)
    .enter().append('circle')
      .attr('r', 8)
      .attr('fill', function (d) { return color(d.group) })

  node.append('title')
      .text(function (d) { return d.id })

  simulation
      .nodes(graph.nodes)
      .on('tick', ticked)

  simulation.force('link')
      .links(graph.links)

  function ticked () {
    link
        .attr('x1', function (d) { return d.source.x })
        .attr('y1', function (d) { return d.source.y })
        .attr('x2', function (d) { return d.target.x })
        .attr('y2', function (d) { return d.target.y })

    node
        .attr('cx', function (d) { return d.x })
        .attr('cy', function (d) { return d.y })
  }
  */
})

export default {
  name: 'Network'
}
</script>

<style>

.links line {
  stroke: #999;
  stroke-opacity: 0.6;
}

.nodes circle {
  stroke: #fff;
  stroke-width: 1.5px;
}

</style>
