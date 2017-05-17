const d3 = require('d3');

// const width = 960;
// const height = 500;

// const scaleX = d3.scaleBand()
//     .range([0, width]);


// const scaleY = d3.scaleLinear()
//     .range([height, 0]);

// const chart = d3.select('.chart')
//     .attr('width', width)
//     .attr('height', height);

// d3.json('./data.json', (err, data) => {
//     scaleX.domain(data.map(d => d.name));
//     scaleY.domain([0, d3.max(data, d => d.value)]);

//     const bar = chart.selectAll('g')
//         .data(data)
//         .enter()
//         .append('g')
//         .attr('transform', d => 'translate(' + scaleX(d.name) + ',0)')
//     bar.append('rect')
//         .attr('y', d => scaleY(d.value))
//         .attr('height', d => height - scaleY(d.value))
//         .attr('width', scaleX.rangeRound().bandwidth());
// });

const width = 960;
const height = 500;

const scaleY = d3.scaleLinear()
    .range([height, 0]);

const chart = d3.select('.chart')
    .attr('width', width)
    .attr('height', height);

d3.json('./data.json', (error, data) => {
    scaleY.domain([0, d3.max(data, d => d.value)]);

    const barWidth = width / data.length;
    
    const bar = chart.selectAll('g')
        .data(data)
        .enter()
        .append('g')
        .attr('transform', (d, i) => 
            'translate(' + i * barWidth + ', 0)')
    bar.append('rect')
        .attr('y', d => scaleY(d.value))
        .attr('height', d => height - scaleY(d.value))
        .attr('width', barWidth - 1);
    bar.append('text')
        .attr('x', barWidth / 2)
        .attr('y', d => scaleY(d.value) + 3)
        .attr('dy', '.75em')
        .text(d => d.value);

});



// const width = 420;
// const barHeight = 20;

// const scaleX = d3.scaleLinear()
//     .range([0, width]);

// const chart = d3.select('.chart')
//     .attr('width', width);


// d3.json('./data.json', (error, data) => {
//     scaleX.domain([0, d3.max(data, d => +d.value)]);

//     chart.attr('height', barHeight * data.length);

//     const bar = chart.selectAll('g')
//         .data(data)
//         .enter()
//         .append('g')
//         .attr('transform', (d, i) =>
//             'translate(0,' + i * barHeight + ')');
//     bar.append('rect')
//         .attr('width', d => scaleX(+d.value))
//         .attr('height', barHeight - 1);

//     bar.append('text')
//         .attr('x', d => scaleX(+d.value) - 5)
//         .attr('y', barHeight / 2)
//         .attr('dy', '.35em')
//         .text(d => d.name + ' --> ' + d.value);
// });


// const scaleX = d3.scaleLinear()
//                  .domain([0, d3.max(data)])
//                  .range([0, width]);

// const chart = d3.select('.chart')
//                 .attr('width', width)
//                 .attr('height', barHeight * data.length);

// const bar = chart.selectAll('g')
//                  .data(data)
//                  .enter()
//                  .append('g')
//                  .attr('transform', (d, i) => 'translate(0,'
//                       + i * barHeight + ')');
// bar.append('rect')
//    .attr('width', scaleX)
//    .attr('height', barHeight - 1);
// bar.append('text')
//    .attr('x', d => scaleX(d) - 3)
//    .attr('y', barHeight / 2)
//    .attr('dy', '.35em')
//    .text(d => d);