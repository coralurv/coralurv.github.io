/* Coral URV - Marc Robledo 2016 */


/* mQuery */
function MQ(t){this.q=Marq._buildQuery(t),this._ul(),this.q[0]&&(this.style=this.q[0].style),this._isArray=!1}function m(t){return new MQ(t)}function mCreate(t,e){var r=document.createElement(t);if("object"==typeof e)for(var i in e)e.hasOwnProperty(i)&&("html"===i?r.innerHTML=e[i]:"class"===i?r.className=e[i]:i.startsWith("style")||i.startsWith("css")?r.style[i.replace(/^(style|css)(:- )?/,"")]=e[i]:r[i]=e[i]);return m(r)}var Marq=function(){var t=navigator.userAgent.match(/MSIE (\d+)/),e=t?parseInt(t[1]):!1;return Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var e=this.length>>>0,r=Number(arguments[1])||0;for(r=0>r?Math.ceil(r):Math.floor(r),0>r&&(r+=e);e>r;r++)if(r in this&&this[r]===t)return r;return-1}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),r=this,i=function(){},n=function(){return r.apply(this instanceof i&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,n.prototype=new i,n}),String.prototype.toCamel||(String.prototype.toCamel=function(){return this.replace(/(?:^\w|[A-Z]|\b\w)/g,function(t,e){return 0==e?t.toLowerCase():t.toUpperCase()}).replace(/\s|-+/g,"")}),{isCompatible:document.querySelectorAll,isIE:e,isMobile:/(Mobi|Android|WiiU|3DS|Playstation Vita)/.test(navigator.userAgent),_buildQuery:function(t){if("string"==typeof t){if(/^#[\w\-]+$/.test(t)){var e;return(e=document.getElementById(t.replace("#","")))?[e]:[]}return/^\w+$/.test(t)?document.getElementsByTagName(t):document.querySelectorAll(t)}return t.q?t.q:t.length?t:[t]},_forceToArray:function(t){if(8===e){for(var r=[],i=0;i<t.length;i++)r.push(t[i]);return r}return Array.prototype.slice.call(t)},_getBlockType:function(t){return"LI"===t.nodeName?"list-item":"TABLE"===t.nodeName?"table":"TR"===t.nodeName?"table-row":"TD"===t.nodeName?"table-cell":"block"},_getCSSNumVal:function(t,e){var r;return t.style[e]?r=t.style[e]:t.currentStyle?r=t.currentStyle[e]:document.defaultView&&document.defaultView.getComputedStyle?(s=document.defaultView.getComputedStyle(t,""),r=s&&s.getPropertyValue(e.toCamel())):r=0,r=parseInt(r.replace(/[^\d\-\.]/g,"")),r||(r=0),r},_hasClass:function(t,e){return t.className&&t.className.split(/ +/).indexOf(e)>=0},setOpacity:function(t,r){8===e?t.style.filter="alpha(opacity="+parseInt(100*r)+")":t.style.opacity=r},preventDefault:function(t){t.preventDefault?t.preventDefault():t.returnValue=!1},stopPropagation:function(t){"undefined"!=typeof t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},setWarnOnLeaving:function(t){t?window.onbeforeunload=function(t){return t=t||window.event,t&&(t.returnValue=!0),!0}:window.onbeforeunload=null},currentTarget:function(t){return t.currentTarget?t.currentTarget:t.srcElement}}}();MQ.prototype._ta=function(){this._isArray||(this.q=Marq._forceToArray(this.q),this._isArray=!0)},MQ.prototype._ul=function(){this.length=this.q.length},MQ.prototype.get=function(t){return 0==this.q.length?null:"undefined"!=typeof t?this.q[t]:this.q[0]},MQ.prototype.getAll=function(t){return this._ta(),this.q},MQ.prototype.first=function(){return this.q=[this.q[0]],this.length=1,this._isArray=!0,this},MQ.prototype.last=function(){return this.q=[this.q[this.q.length-1]],this.length=1,this._isArray=!0,this},MQ.prototype.eq=function(t){return this.q=[this.q[t]],this.length=1,this._isArray=!0,this},MQ.prototype.gt=function(t){return this._ta(),this.q=this.q.slice(t+1),this._ul(),this},MQ.prototype.lt=function(t){return this._ta(),this.q=this.q.slice(0,t),this._ul(),this},MQ.prototype.slice=function(t,e){return this._ta(),this.q=this.q.splice(t,e),this._ul(),this},MQ.prototype.children=function(){for(var t=[],e=0;e<this.q.length;e++)t=t.concat(Marq._forceToArray(this.q[e].children));return this.q=t,this._ul(),this._isArray=!0,this},MQ.prototype.find=function(t){for(var e=[],r=0;r<this.q.length;r++)e=e.concat(Marq._forceToArray(this.q[r].querySelectorAll(t)));return this.q=e,this._ul(),this._isArray=!0,this},MQ.prototype.add=function(t){return this._ta(),this.q=this.q.concat(Marq._forceToArray(Marq._buildQuery(t))),this._ul(),this},MQ.prototype.append=function(t){for(var e=Marq._buildQuery(t),r=0;r<e.length;r++)e[r].parentElement&&e[r].parentElement.removeChild(e[r]),this.q[0].appendChild(e[r]);return this},MQ.prototype.appendTo=function(t){for(var e=Marq._buildQuery(t),r=0;r<this.q.length;r++)this.q[r].parentElement&&this.q[r].parentElement.removeChild(this.q[r]),e[0].appendChild(this.q[r]);return this},MQ.prototype.prepend=function(t){for(var e=Marq._buildQuery(t),r=0;r<e.length;r++)e[r].parentElement&&e[r].parentElement.removeChild(e[r]),this.q[0].insertBefore(e[r],this.q[0].children[0]);return this},MQ.prototype.prependTo=function(t){for(var e=Marq._buildQuery(t),r=0;r<this.q.length;r++)this.q[r].parentElement&&this.q[r].parentElement.removeChild(this.q[r]),e[0].insertBefore(this.q[r],e[0].children[0]);return this},MQ.prototype.empty=function(){for(var t=0;t<this.q.length;t++)for(;this.q[t].firstChild;)this.q[t].removeChild(this.q[t].firstChild);return this},MQ.prototype.remove=function(t){if("string"==typeof t)for(var e=0;e<this.q.length;e++)for(var r=this.q[e].querySelectorAll(t),i=0;i<r.length;i++)this.q[e].removeChild(r[i]);else for(var e=0;e<this.q.length;e++)this.q[e].parentElement.removeChild(this.q[e]);return this},MQ.prototype.info=function(t){var e=this.q[0].offsetWidth,r=this.q[0].offsetHeight;return t&&(e+=Marq._getCSSNumVal(this.q[0],"borderLeftWidth")+Marq._getCSSNumVal(this.q[0],"borderRightWidth"),r+=Marq._getCSSNumVal(this.q[0],"borderTopWidth")+Marq._getCSSNumVal(this.q[0],"borderBottomWidth")),{width:e,height:r,offsetTop:Math.round(this.q[0].getBoundingClientRect().top),offsetLeft:Math.round(this.q[0].getBoundingClientRect().left),positionTop:this.q[0].offsetTop,positionLeft:this.q[0].offsetLeft}},MQ.prototype.addEvent=function(t,e,r){for(var i=0;i<this.q.length;i++){var n;n=r?e.bind(this.q[i]):e,8===Marq.isIE?this.q[i].attachEvent("on"+t,n):this.q[i].addEventListener(t,n,!1)}return this},MQ.prototype.removeEvent=function(t,e){for(var r=0;r<this.q.length;r++)8===Marq.isIE?this.q[r].detachEvent("on"+t,e):this.q[r].removeEventListener(t,e);return this},MQ.prototype.show=function(){for(var t=0;t<this.q.length;t++)this.q[t].style.display=Marq._getBlockType(this.q[t]);return this},MQ.prototype.hide=function(){for(var t=0;t<this.q.length;t++)this.q[t].style.display="none";return this},MQ.prototype.toggle=function(){for(var t=0;t<this.q.length;t++)this.q[t].style.display!==Marq._getBlockType(this.q[t])?this.q[t].style.display=Marq._getBlockType(this.q[t]):this.q[t].style.display="none";return this},MQ.prototype.html=function(t){if(void 0===t)return this.q[0].innerHTML;for(var e=0;e<this.q.length;e++)this.q[e].innerHTML=t;return this},MQ.prototype.css=function(t,e){if(void 0===e)return this.q[0].style[t];t=t.toCamel();for(var r=0;r<this.q.length;r++)this.q[r].style[t]=e;return this},MQ.prototype.hasClass=function(t){for(var e=0;e<this.q.length;e++)if(Marq._hasClass(this.q[e],t))return!0;return!1},MQ.prototype.addClass=function(t){for(var e=t.replace(/^ +| +$/g,"").split(/ +/),r=0;r<this.q.length;r++)for(var i=0;i<e.length;i++)this.q[r].className?Marq._hasClass(this.q[r],e[i])||(this.q[r].className+=" "+e[i]):this.q[r].className=e[i];return this},MQ.prototype.removeClass=function(t){for(var e=/^ +| +$/g,r=t.replace(e,"").split(/ +/),i=0;i<r.length;i++)r[i]="^"+r[i]+"$|^"+r[i]+" +| +"+r[i]+" +| +"+r[i]+"$";for(var n=new RegExp(r.join("|"),"g"),i=0;i<this.q.length;i++)this.q[i].className&&(this.q[i].className=this.q[i].className.replace(n," ").replace(e,""));return this},MQ.prototype.toggleClass=function(t){for(var e=/^ +| +$/g,r=t.replace(e,"").split(/ +/),i=new Array(r.length),n=0;n<r.length;n++)i[n]="^"+r[n]+"$|^"+r[n]+" +| +"+r[n]+" +| +"+r[n]+"$";for(var s=new RegExp(i.join("|"),"g"),n=0;n<this.q.length;n++)for(var o=0;o<r.length;o++)this.q[n].className?Marq._hasClass(this.q[n],r[o])?this.q[n].className=this.q[n].className.replace(s," ").replace(e,""):this.q[n].className+=" "+r[o]:this.q[n].className=r[o]};

var CORREU=[53,65,68,51,62,71,68,72,18,57,63,51,59,62,0,53,65,63];

var lazyBlocks;
m(window).addEvent('load', function(){
	var correuOk='';
	for(var i=0; i<CORREU.length; i++){
		correuOk+=String.fromCharCode(CORREU[i]+46);
	}
	m('#correu').html(correuOk).get().href='mailto:'+correuOk;

	lazyBlocks=document.querySelectorAll('div.lazy-block');
	handleScroll();
});


m(window).addEvent('scroll', handleScroll);

function elementInViewport(e){
    var r=e.getBoundingClientRect()
    return (r.top>=0 && r.left>=0 && r.top<=(window.innerHeight || document.documentElement.clientHeight))
}


function handleScroll(){
	if(lazyBlocks)
		for(var i=0; i<lazyBlocks.length; i++){
			var block=lazyBlocks[i];
			if(!block.woke && elementInViewport(block)){
				block.woke=true;

				var elements=block.querySelectorAll('.lazy-element');
				for(var j=0; j<elements.length; j++){
					addWakeUpElementEvent(elements[j], j);
				}
			}
		}

	var doc = document.documentElement;
	var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
	var parallax='center '+(50+top/10)+'%';

	document.getElementById('header').style.backgroundPosition=parallax;
	
	for(var i=0; i<4; i++){
		document.getElementById('slider-header').children[0].children[i].style.backgroundPosition=parallax;
	}
}


function addWakeUpElementEvent(e, pos){
	window.setTimeout(function(){
		m(e).addClass('wake');
	}, (pos)*350);
}



























/* MarcSlideshow.JS v20151009 ~ (c) 2012-2015 Marc Robledo ~ http://www.marcrobledo.com/license */
var DEFAULT_WAIT=3;
var DEFAULT_THUMBNAIL_SUFFIX='.thumbnail';

/*Shortcuts*/
function el(e){return document.getElementById(e)}
function addEvent(e,ev,func){if(e.addEventListener){e.addEventListener(ev,func,false)}else if(e.attachEvent){e.attachEvent('on'+ev,func)}else{e['on'+ev]=func}}
function getDirectChildren(e,t){var c=e.getElementsByTagName(t);var dc=new Array();for(var i=0;i<c.length;i++)if(c[i].parentNode==e)dc.push(c[i]);return dc} 
function getNumericCSS(e,a){var v;if(e.style[a]){v=e.style[a]}else if(e.currentStyle){v=e.currentStyle[a]}else if(document.defaultView&&document.defaultView.getComputedStyle){a=a.replace(/([A-Z])/g,'-$1');a=a.toLowerCase();s=document.defaultView.getComputedStyle(e,'');v=s&&s.getPropertyValue(a)}else{v=0}v=parseInt(v.replace(/[^\d\-\.]/g,''));if(!v)v=0;return v}
function changeElementOpacity(e,a){e.style.opacity=a/100}
function changeElementOpacityOldIE(e,a){e.filters.item('DXImageTransform.Microsoft.Alpha').opacity=a}
var isIE=false;
if(/MSIE [4-9]/.test(navigator.userAgent)){isIE=true;changeElementOpacity=changeElementOpacityOldIE}





function MarcSlideshow(id,params){
	if(!el(id)){
		console.error('Invalid slideshow ID or already exists.');
		return false
	}

	var container=el(id);

	if(document.querySelector){
		this.ul=document.querySelector('#'+id+'>ul');
		this.slides=document.querySelectorAll('#'+id+'>ul>li');
	}else{
		this.ul=getDirectChildren(container,'ul')[0];
		this.slides=getDirectChildren(this.ul,'li');
	}

	if(!this.ul || !this.slides){
		console.error('Slideshow '+id+' was not built correctly.');
		return false
	}

	this.speed=DEFAULT_WAIT*1000;
	if(params.speed)
		this.speed=parseInt(params.speed)*1000;

	this.ul.style.listStyle='none';
	this.length=this.slides.length;

	this.i=0;
	this.nextSlide=0;
	this.timer=0;
	this.changing=false;
	this.mouseOver=false;

	this.automatic=true;

	this.scroller=false;
	if(params.scroller)
		if(/v/.test(params.scroller))
			this.scroller='vertical';
		else
			this.scroller='horizontal';

	this.lazyImages=new Array(this.length);
	this.pendingLazyImages=new Array(this.length);
	for(var i=0;i<this.length;i++){
		var imgs=this.slides[i].getElementsByTagName('img');
		this.lazyImages[i]=new Array();
		for(var j=0;j<imgs.length;j++)
			if(imgs[j].getAttribute('data-lazy') && imgs[j].getAttribute('data-lazy')!='0')
				this.lazyImages[i].push(imgs[j]);

		this.pendingLazyImages[i]=this.lazyImages[i].length;
	}




	container.style.overflow='hidden';
	if(!this.scroller){
		//first slide=opaque,rest=transparent
		for(var i=0;i<this.length;i++){
			this.slides[i].style.position='absolute';
			this.slides[i].style.top='0px';
			this.slides[i].style.left='0px';
			this.slides[i].style.width='100%';
			this.slides[i].style.height='100%';
			if(i==0){
				this.slides[0].style.zIndex=301;
				changeElementOpacity(this.slides[0], 100);
			}else{
				this.slides[i].style.zIndex=300;
				changeElementOpacity(this.slides[i], 0);
			}
		}
		this.transitionFunction=createTransitionFunction(this);
	}else{
		this.ul.style.overflow='hidden';

		this.offsets=new Array(this.length);

		addResizeSlideshowEvent(this)
	}
	this.resumeFunction=createResumeFunction(this);


	this.marker=false;



	if(params.marker){
		var markerType;
		if(typeof params.marker === 'string'){
			var tempType=params.marker.toLowerCase();
			if(tempType==='numeric' || /numbers?/.test(tempType)){
				markerType='numeric';
			}else if(/thumb(nail)?s?/.test(tempType)){
				markerType='thumb';
			}else if(/texts?/.test(tempType)){
				markerType='text';
			}			
		}

		this.marker=new Array(this.length);

		var markerContainer=document.createElement('div');
		markerContainer.className='slideshow-markers';
		markerContainer.style.zIndex=302;

		for(var i=0; i<this.length; i++){
			var markerElement=document.createElement('div');
			if(markerType==='numeric'){
				markerElement.innerHTML=(i+1);
			}else if(markerType==='thumb'){
				if(this.slides[i].getAttribute('data-thumb')){
					markerElement.innerHTML='<img src="'+this.slides[i].getAttribute('data-thumb')+'" />';
				}else{
					var img;
					if(document.querySelector){
						img=this.slides[i].querySelector('img');
					}else{
						img=this.slides[i].getElementsByTagName('img')[0];
					}

					if(img.getAttribute('data-lazy')){
						img=img.getAttribute('data-lazy').replace(/\.(gif|jpe?g|png)$/, DEFAULT_THUMBNAIL_SUFFIX+'.$1');
					}else if(img){
						img=img.src.replace(/\.(gif|jpe?g|png)$/, DEFAULT_THUMBNAIL_SUFFIX+'.$1');
					}else{
						img='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
					}
					markerElement.innerHTML='<img src="'+img+'" />';
				}
			}else if(markerType==='text'){
				var h2;
				if(document.querySelector){
					h2=this.slides[i].querySelector('h2');
				}else{
					h2=this.slides[i].getElementsByTagName('h2')[0];
				}
				markerElement.innerHTML=h2.innerHTML;
			}
			
			markerElement.className='slideshow-marker slideshow-marker-'+i;
			if(i==0){
				markerElement.className+=' selected';
			}
			markerContainer.appendChild(markerElement);
			addClickMarkerEvent(this,markerElement,i);
			this.marker[i]=markerElement;
		}
		container.appendChild(markerContainer);
	}

	if(params.button || params.buttons){
		var button=document.createElement('div');
		button.className='slideshow-button slideshow-button-previous';
		button.style.zIndex=302;
		addEvent(button,'click',createPreviousFunction(this));
		container.appendChild(button);

		button=document.createElement('div');
		button.className='slideshow-button slideshow-button-next';
		button.style.zIndex=302;
		addEvent(button,'click',this.resumeFunction);
		container.appendChild(button);
	}

	if(params.manual || params.notAuto || params.noAuto || params.noauto || params.automatic===false)
		this.automatic=false;

	if(this.automatic)
		addSlideshowMouseEvents(this,container);

	if(!params.paused)
		addAutomaticSlideShowEvent(this)
}
function addSlideshowMouseEvents(s,c){
	addEvent(c,'mouseout',function(){s.resume()});
	addEvent(c,'mouseover',function(){s.pause()});
}

MarcSlideshow.prototype.calculateOffsets=function(){
	this.offsets[0]=0;
	var offset=0;
	for(var i=1;i<this.length;i++){
		if(this.scroller==='vertical'){
			offset+=this.slides[i-1].offsetHeight;		
			offset+=getNumericCSS(this.slides[i-1],'marginTop');
			offset+=getNumericCSS(this.slides[i-1],'marginBottom');
		}else{
			offset+=this.slides[i-1].offsetWidth;
			offset+=getNumericCSS(this.slides[i-1],'marginLeft');
			offset+=getNumericCSS(this.slides[i-1],'marginRight');
		}
		this.offsets[i]=offset;
	}
}




MarcSlideshow.prototype.resume=function(){
	if(!this.changing && this.automatic)
		this.timer=window.setTimeout(this.resumeFunction,this.speed);

	this.mouseOver=false
}
MarcSlideshow.prototype.pause=function(){if(!this.changing)clearInterval(this.timer);this.mouseOver=true}

function createLazyImageEvent(s,i){
	return function(){s.pendingLazyImages[i]--;if(s.pendingLazyImages[i]==0)s.set(i)}
}

MarcSlideshow.prototype.set=function(i){
	if(this.changing||this.i==i)
		return;
	else if(this.pendingLazyImages[i]){
		var imgs=this.lazyImages[i];
		var lazyImageEvent=createLazyImageEvent(this,i);
		for(var i=0; i<imgs.length; i++)
			if(imgs[i].getAttribute('src')!=imgs[i].getAttribute('data-lazy')){
				addEvent(imgs[i],'load',lazyImageEvent);
				imgs[i].src=imgs[i].getAttribute('data-lazy');
			}
		return
	}

	this.nextSlide=i;
	this.changing=true;

	clearTimeout(this.timer);

	if(this.marker){
		this.marker[this.nextSlide].className+=' selected';
		this.marker[this.i].className=this.marker[this.i].className.replace(/ selected/,'');
	}

	this.slides[this.nextSlide].className+=' current';
	this.slides[this.i].className=this.slides[this.i].className.replace(/ current/,'');

	if(!this.scroller){
		var lis=this.slides;
		lis[this.i].style.zIndex=300;
		changeElementOpacity(this.slides[this.nextSlide], 0);
		lis[this.nextSlide].style.zIndex=301;

		this.alpha=0;
		this.alphaInc=isIE?5:4;
		this.timer=window.setInterval(this.transitionFunction, 10);

	}else{
		if(this.scroller==='vertical')
			this.ul.style.marginTop=(-this.offsets[i])+'px';
		else
			this.ul.style.marginLeft=(-this.offsets[i])+'px';

		this.i=this.nextSlide;
		this.changing=false;
		if(!this.mouseOver)
			this.resume()
	}
	
}
MarcSlideshow.prototype.next=function(){var n=this.nextSlide+1;if(n>=this.length)n=0;this.set(n)}
MarcSlideshow.prototype.previous=function(){var p=this.nextSlide-1;if(p<=-1)p=this.length-1;this.set(p)}

function addClickMarkerEvent(s,markerElement,i){addEvent(markerElement,'click',function(){s.set(i)})}
function addResizeSlideshowEvent(s){var f=function(){s.calculateOffsets()};addEvent(window,'load',f);addEvent(window,'resize',f)}
function addAutomaticSlideShowEvent(s){addEvent(window,'load',function(){s.resume()})}
function createTransitionFunction(s){
	return function(){
		s.alpha+=s.alphaInc;

		changeElementOpacity(s.slides[s.nextSlide],s.alpha);

		if(s.alpha>=100){
			changeElementOpacity(s.slides[s.i],0);
			s.i=s.nextSlide;
			s.changing=false;
			clearInterval(s.timer);
			if(!s.mouseOver)
				s.resume()
		}
	}
}
function createResumeFunction(s){return function(){s.next()}}
function createPreviousFunction(s){return function(){s.previous()}}
