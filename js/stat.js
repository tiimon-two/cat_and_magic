'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var COLUD_X = 100;
var COLUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
// var BAR_HEIGHT = 20;
// var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function(ctx, x, y, color){
	ctx.fillStyle = color;
	ctx.fillRect(x,y,CLOUD_WIDTH,CLOUD_HEIGHT);
};

var getMaxElement = function(arr){
	var maxElement = arr[0];
	if(arr.length > 0){
		for( var i = 1; i < arr.length; i++){
			if(maxElement < arr[i]){
				maxElement = arr[i];
			}
		}
	}
	

	return maxElement;
};

window.renderStatistics = function(ctx, players, times){
	//тень
	renderCloud(ctx, COLUD_X + GAP, COLUD_Y + GAP, 'rgba(0,0,0,0.7)');
	//облако
	renderCloud(ctx, COLUD_X, COLUD_Y, '#fff');

	ctx.fillStyle = '#000';

	var maxTime = getMaxElement(times);

	ctx.font = '16px PT Mono';
	ctx.fillText('Ура,вы победили!', COLUD_X + GAP, COLUD_Y + GAP + FONT_GAP);
	ctx.fillText('Список результатов', COLUD_X + GAP, COLUD_Y + (GAP + FONT_GAP) * 2);

	for(var i = 0; i < players.length; i++){
		if (players[i] == 'Вы'){
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		} else {
			ctx.fillStyle = 'rgba(0, 0, 255, 1)';
		}
		ctx.fillText(players[i], COLUD_X + GAP + (BAR_WIDTH + GAP + TEXT_WIDTH) * i,
		 COLUD_Y + (GAP + FONT_GAP) * 3);
		ctx.fillRect(COLUD_X + GAP + TEXT_WIDTH + (GAP + BAR_WIDTH + TEXT_WIDTH) * i,
		 COLUD_Y + GAP + (GAP + FONT_GAP) * 2,
		 BAR_WIDTH, BAR_HEIGHT * Math.round(times[i]) / maxTime);
		ctx.fillText(Math.round(times[i]),COLUD_X + GAP + TEXT_WIDTH + (GAP + BAR_WIDTH + TEXT_WIDTH) * i,
		COLUD_Y + GAP + (GAP + FONT_GAP) * 2 + GAP + BAR_HEIGHT + GAP);
	}
};