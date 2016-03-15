
// 心 <span class="icon icon-supple-level-xin"></span>			-153px -326px
// 钻石 <span class="icon icon-supple-level-zuan"></span> 		-101px -326px
// 冠 <span class="icon icon-supple-level-guan"></span>			-257px -326px
// 金冠 <span class="icon icon-supple-level-jinguan"></span>	-179px -326px
var icons = [];
var xin = '<span class="icon icon-supple-level-xin"></span>';
var zuan = '<span class="icon icon-supple-level-zuan"></span>';
var guan = '<span class="icon icon-supple-level-guan"></span>';
var jinguan = '<span class="icon icon-supple-level-jinguan"></span>';

for (var i = 0; i < 20; i++) {
	if (i == 0)
		icons[0] = xin;
	else if (i < 5 && i > 0)
		icons[i] = icons[i-1] + xin;
	else if (i == 5)
		icons[5] = zuan;
	else if (i < 10 && i > 5)
		icons[i] = icons[i-1] + zuan;
	else if (i == 10)
		icons[10] = guan;
	else if (i < 15 && i > 10)
		icons[i] = icons[i-1] + guan;
	else if (i == 15)
		icons[15] = jinguan;
	else if (i < 20 && i > 15)
		icons[i] = icons[i-1] + jinguan;
};

console.log(icons);