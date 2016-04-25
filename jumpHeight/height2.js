/**
 * Created by me20082010 on 16/4/24.
 */
var startTime=new Date();
var h=[3,3,3,3,3]
var maxChange=2;
var h0=3;
var mod=10;
var oUl=document.getElementById('lines');
var oLi=document.getElementsByTagName('li');

function move() {
    var nowTime=new Date();
    var timeChange=nowTime-startTime;
    
    for (var i = 0; i < h.length; i++) {
        //var change=(timeChange-400*i)/400%10;//模10
        var change=(timeChange-400*i)/400%mod;
        //if(change<5)
        if(change<(mod/2))
        {
            //h[i]=h0+0.2*maxChange*(change);//模10，前5步增加1/(10/2)个maxChange;
            h[i]=h0+(1/(mod/2))*maxChange*(change);
        }
        else
        {
            //h[i]=h0+maxChange-0.2*maxChange*(change-5);//模10，后5步减少1/(10/2)个maxChange;
            h[i]=h0+maxChange-(1/(mod/2))*maxChange*(change-(mod/2));
            
        }
        oLi[i].style.height=h[i]*50+'px';
    }

    console.log(h);
};
setInterval("move();", 400);