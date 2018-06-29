//class XiaoMi{
//	constructor(){
//		
//	}
//}
//
//
function getById(id){
	return typeof(id) === "string"?document.getElementById(id):id
}

var shopCart = document.querySelectorAll('.top_right_2 ul')   //显示购物车
//console.log(document.querySelectorAll('.top_right_2 ul')[0].children[1].className)
var enterFn = function(e){
//	console.log(e)
	e.target.children[1].className += ' move_top_shopcart'
	e.target.children[0].style.backgroundColor = '#F0F8FF'
	e.target.children[0].style.color = '#FF6700'
}
var overFn = function(e){
//	console.log(e)
	e.target.children[1].className = 'top_shopcart'
	e.target.children[0].style.backgroundColor = '#333'
	e.target.children[0].style.color = '#999'
}		
shopCart[0].addEventListener('mouseenter',enterFn)
shopCart[0].addEventListener('mouseleave',overFn)
//document.querySelectorAll('.top_right_2 ul')[0].children[1].className



var siteList = document.querySelectorAll('.container_left .site_list')   //显示标题栏
//console.log(document.querySelectorAll('.top_right_2 ul')[0].children[1].className)
var enterFn = function(e){
//	console.log(e.target.children[1])
	e.target.children[1].className += ' conten_height'
}
var overFn = function(e){
//	console.log(e.target.children[1])
	e.target.children[1].className = 'conten'
}
for(var i = 2;i<10;i++){
	siteList[0].children[i].addEventListener('mouseenter',enterFn)
	siteList[0].children[i].addEventListener('mouseleave',overFn)
}

var winleftList = document.querySelectorAll('.winleftList ul')   //显示标题栏
//console.log(document.querySelectorAll('.top_right_2 ul')[0].children[1].className)
var enterFn = function(e){
//	console.log(e.target.children[2])
	e.target.children[2].className += ' boxlist_conten_move'
}
var overFn = function(e){
	e.target.children[2].className = 'boxlist_conten'
}
//console.log(winleftList[0].children.length)
for(var i = 0;i<winleftList[0].children.length;i++){
	winleftList[0].children[i].addEventListener('mouseenter',enterFn)
	winleftList[0].children[i].addEventListener('mouseleave',overFn)
}



class Swiper{             // 轮播特效
	constructor(){
		this.showWin = document.querySelectorAll('.showImg div')
		this.lastImg = getById('lastImg')
		this.nextImg = getById('nextImg')
		this.seletDots = document.querySelectorAll('.dots span')
		
		this.imgNum = 0
		var that = this
		
		this.lastImg.onclick = function(e){
			that.ShowlastImg(e)
		}
		this.nextImg.onclick = function(e){
			that.ShownextImg(e)
		}
		setInterval(function(){
				that.ShownextImg()
			},4500)
		
		for(var i=0;i<this.seletDots.length;i++){
			this.seletDots[i].onclick = function(e){
				that.SeletDotsclick(e)
			}
		}
	}

	ShowlastImg(e){
		this.showWin[this.imgNum--].className = 'img img'+(this.imgNum+2)
		if(this.imgNum<0){
			this.imgNum = this.showWin.length-1
		}
		this.showWin[this.imgNum].className += ' imgactive'	
		
		for(var i=0;i<this.seletDots.length;i++){      //初始化圆点class属性
			this.seletDots[i].className = ''
		}
		this.seletDots[this.imgNum].className = 'active'
	}
	ShownextImg(e,imgNum,imgLong){
		this.showWin[this.imgNum++].className = 'img img'+(this.imgNum)
		if(this.imgNum>(this.showWin.length-1)){
				this.imgNum = 0
		}
		this.showWin[this.imgNum].className += ' imgactive'
		
		for(var i=0;i<this.seletDots.length;i++){      //初始化圆点class属性
			this.seletDots[i].className = ''
		}
		this.seletDots[this.imgNum].className = 'active'
	}
	
	SeletDotsclick(e){
		var j = e.target.dataset.index
		this.imgNum = j
		for(var i=0;i<this.seletDots.length;i++){
			this.seletDots[i].className = ''
		}
		this.seletDots[j].className = 'active'
		//e.target.className = 'active'
		for(var k=0;k<this.showWin.length;k++){       
			this.showWin[k].className = 'img img'+(k+1)
		}
		this.showWin[this.imgNum].className += ' imgactive'
	}
}
var swiper = new Swiper()


class CounterDown{                  //倒计时类
	constructor(year,month,day,hour,min,sec){
		this.year = year || new Date().getFullYear();
		this.month = month || new Date().getMonth()+1;
		this.day = day || 1;
		this.hour = hour || 0;
		this.min = min || 0;
		this.sec = sec || 0;
		this.createTime = new Date(this.year,this.month-1,this.day,this.hour,this.min,this.sec)
		this.timestamp = this.createTime.getTime()
//		console.log(this.createTime)
		
	}
	getTime(){
		var cTime = new Date()
		var cStamp = cTime.getTime()
//		console.log(cStamp,this.timestamp)
		var juliHour = parseInt((this.timestamp - cStamp)/(60*60*1000)) 
//		console.log(juliHour)
		var minTime = (this.timestamp - cStamp)%(60*60*1000)
		var juliMin = parseInt(minTime/(60*1000))
//		console.log(juliMin)
		var secTime = minTime%(60*1000)
		var juliSec = parseInt( secTime/1000)
		
		if(juliHour<10){
			juliHour = '0' + juliHour;
		}
		if(juliMin<10){
			juliMin = '0' + juliMin
		}
		if(juliSec<10){
			juliSec = '0' + juliSec
		}
		
		return {
			hour:juliHour,
			min:juliMin,
			sec:juliSec
		}	
	}
}
var x = new CounterDown(2018,6,1,18,0,0)
setInterval(function(){
	var countdown = x.getTime()
//	console.log(x)
	document.querySelector('.hour').innerHTML = countdown.hour
	document.querySelector('.min').innerHTML = countdown.min
	document.querySelector('.sec').innerHTML = countdown.sec
},1000)



class FlashList{               // 小米闪购商品栏平移
	constructor(){
		
		this.mLeft = document.querySelector('.moreleft')
		this.mRight = document.querySelector('.moreright')
		this.moreLeft = document.querySelector('.moreleft .icon')
		this.moreRight = document.querySelector('.moreright .icon')
		this.shopList = document.querySelector('.shoplistBox')
		var num = 0
		var that = this
		if(this.mLeft.dataset.index){
			that.moreLeft.style.color = '#e0e0e0'
			that.moreRight.style.color = '#ff6700'
		}
		this.mRight.onclick = function(e){
			that.moreLeft.style.color = '#ff6700'
			that.moreRight.style.color = '#e0e0e0'
			that.shopList.style.marginLeft = '-744px'
		}
		this.mLeft.onclick = function(e){
			that.moreLeft.style.color = '#e0e0e0'
			that.moreRight.style.color = '#ff6700'
			that.shopList.style.marginLeft = '0px'
		}
	}
}
var flashl =new FlashList()
