const d3 = require('d3');

const data = [4, 8, 15, 16, 23, 42];

const width = 420;
const barHeight = 20;

const x = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, width]);

const chart = d3.select(".chart")
                .attr('width', width)
                .attr('height', barHeight * data.length);

let bar = chart.selectAll('g')
                .data(data)
            .enter().append('g')
                .attr('transform', (d, i) => {
                    return 'translate(0,' + i * barHeight + ')';
                });

bar.append('rect')
    .attr('width', x)
    .attr('height', barHeight - 1);

bar.append('text')
    .attr('x', d => x(d) - 3)
    .attr('y', barHeight / 2)
    .attr('dy', '.35em')
    .text(d => d);




// d3.select('body')
//     .append('div')
//     .attr('class', 'chart')
//         .selectAll('div')
//         .data(data)
//     .enter().append('div')
//         .style('width', d => x(d) + 'px')
//         .text(d => d);