const d3 = require('d3');

const data = [4, 8, 15, 16, 23, 42];
const x = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, 500]);


d3.select('body')
    .append('div')
    .attr('class', 'chart')
        .selectAll('div')
        .data(data)
    .enter().append('div')
        .style('width', d => x(d) + 'px')
        .text(d => d);

