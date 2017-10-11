/*!
* chartjs-plugin-zoom
* http://chartjs.org/
* Version: 1.0.0
*
* Copyright 2016 Evert Timberg
* Released under the MIT license
* https://github.com/chartjs/chartjs-plugin-zoom/blob/master/LICENSE.md
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
},{}]},{},[1]);
