
var point;
Chart.plugins.register({
	afterEvent: function(chart, e){
        if(e.type === 'mousemove') {
            point = {
                x: e.x,
                y: e.y
            };
            chart.drawMouseLine = true;
        }
    },
    beforeDraw: function(chartInstance, easing) {
        if (chartInstance.drawMouseLine) {
            var yScale = chartInstance.scales['y-axis-0'];
            var xScale = chartInstance.scales['x-axis-0'];
            var ctx = chartInstance.chart.ctx;
            ctx.strokeStyle = "#6f6f6f";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(xScale.getPixelForValue(xScale.max), point.y);
            ctx.lineTo(xScale.getPixelForValue(xScale.min),point.y);
            ctx.moveTo(point.x, yScale.getPixelForValue(yScale.max));
            ctx.lineTo(point.x, yScale.getPixelForValue(yScale.min));
            ctx.stroke();
        }
    }
});