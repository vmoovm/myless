// JavaScript Document

//最大分辨率,默认支持全屏，输入具体数值（分辨率）支持最大分辨率
//例：支持全分辨率: var zmaxWidth=false;  支持最大分辨率640: var zmaxWidth=640;
var zmaxWidth=640;
function zzoomm(zf){
	if(zf){
		if(document.documentElement.clientWidth<zf){
			document.querySelector('html').style.fontSize=document.documentElement.clientWidth/320*10+'px';
		}else{
			document.querySelector('html').style.fontSize=zf/320*10+'px';
		}
	}else{
		document.querySelector('html').style.fontSize=document.documentElement.clientWidth/320*10+'px';
	}
};

// TODO fdfsa d


// XXX dff

// FIXME asdf


// XXX Xdf d 


zzoomm(zmaxWidth);
window.onresize=function(){
	zzoomm(zmaxWidth);
}
