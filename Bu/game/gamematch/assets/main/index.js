System.register("chunks:///_virtual/GameGlobal.ts",["cc"],(function(o){"use strict";var l,t;return{setters:[function(o){l=o.cclegacy,t=o._decorator}],execute:function(){var e,i;l._RF.push({},"3ee49fF/WRK8J8Mzz/LeVN+","GameGlobal",void 0);var r=t.ccclass;t.property,o("GameGlobal",r("GameGlobal")(((i=function(){}).maxBox=56,i.colomx=8,i.colomy=7,i.listParentColorBox=[],i.listColorBox=[],i.listScriptColorBox=[],i.listFirstRaw=void 0,i.listColumnLimit=[],i.listRowLimit=[],i.listAllRow=[],i.listAllColumn=[],i.widthBox=85,i.heightBox=85,i.hightScoreValue=0,i.scoreValue=0,i.timerValue=0,i.gameStop=!1,i.scrManager=null,e=i))||e);l._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameGlobal.ts","./GameRules.ts","./ItemColorBox.ts"],(function(e){"use strict";var t,o,l,r,i,n,a,u,c,s,m,p,b,h,f,g,d,B;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,l=e.createForOfIteratorHelperLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){n=e.cclegacy,a=e._decorator,u=e.Color,c=e.Node,s=e.Layout,m=e.Sprite,p=e.Label,b=e.CCInteger,h=e.instantiate,f=e.Component},function(e){g=e.GameGlobal},function(e){d=e.GameRules},function(e){B=e.ItemColorBox}],execute:function(){var x,y,S,C,v,w,G,R,V,z,L,P,T,k,I,M,N,H,D,_,A,F,O,j,E,U,W,q,J,K,Q,X,Y,Z,$,ee,te,oe,le;n._RF.push({},"ec456lhSlxIBL7NUO5IWyoA","GameManager",void 0);var re=a.ccclass,ie=a.property;e("GameManager",(x=re("GameManager"),y=ie(u),S=ie(u),C=ie(c),v=ie(c),w=ie(c),G=ie(c),R=ie(c),V=ie(c),z=ie(s),L=ie(c),P=ie(c),T=ie(c),k=ie(m),I=ie(p),M=ie(p),N=ie(p),H=ie(p),D=ie(b),x((F=t((A=function(e){function t(){for(var t,o=arguments.length,l=new Array(o),n=0;n<o;n++)l[n]=arguments[n];return t=e.call.apply(e,[this].concat(l))||this,r(t,"colorBox",F,i(t)),r(t,"colorDefault",O,i(t)),r(t,"panelButtonPlay",j,i(t)),r(t,"nodeButtonPlay",E,i(t)),r(t,"nodeButtonReload",U,i(t)),r(t,"nodeLabelHi",W,i(t)),r(t,"nodeLabelCurrentScore",q,i(t)),r(t,"panelBox",J,i(t)),r(t,"layoutBox",K,i(t)),r(t,"prefabBox",Q,i(t)),r(t,"prefabParentBox",X,i(t)),r(t,"drageBox",Y,i(t)),r(t,"spriteBox",Z,i(t)),r(t,"lblValueHIScore",$,i(t)),r(t,"lblValueCurrentScore",ee,i(t)),r(t,"lblValueScore",te,i(t)),r(t,"lblValueTimer",oe,i(t)),r(t,"timeNum",le,i(t)),t.totalTime=0,t.callbackScheduleTime=void 0,t.callbackCheckGame=void 0,t}o(t,e);var n=t.prototype;return n.onLoad=function(){g.scrManager=this,g.gameStop=!1,this.totalTime=this.timeNum},n.onPlayGame=function(){this.panelButtonPlay.active=!1,this.nodeButtonPlay.active=!1,this.createGridBox()},n.createGridBox=function(){var e=this;this.layoutBox.enabled=!0,this.panelBox.removeAllChildren();var t=[],o=[];g.listFirstRaw=[];for(var l=0;l<g.colomx;l++)g.listFirstRaw.push[l];for(var r=function(l){var r=h(e.prefabParentBox),i=h(e.prefabBox),n=r.getComponent(B);if(r.parent=e.panelBox,r.name="parentBox_"+l.toString(),i.parent=r,i.name="box_"+l.toString(),n.nodeBox=i,n.spriteBox=i.getComponent(m),n.idColor=e.RandomColor(),n.spriteBox.color=e.colorBox[n.idColor],n.idBox=l,n.startEvent(),n.getSidePos(),setTimeout((function(){n.getDefaultPos()}),20),g.listParentColorBox.push(r),g.listColorBox.push(i),g.listScriptColorBox.push(n),t.push(l),l==g.colomx*(g.listColumnLimit.length+1)-1&&(g.listColumnLimit.push(l),g.listAllRow.push(t),t=[]),l==g.maxBox-(g.colomx-g.listRowLimit.length)){(o=[]).push(l);for(var a=1;a<g.colomy;a++)o.push(l-g.colomx*a);g.listRowLimit.push(l),g.listAllColumn.push(o)}},i=0;i<g.maxBox;i++)r(i);setTimeout((function(){e.layoutBox.enabled=!1,e.RunGameRules(),e.countdownTimer()}),20*g.maxBox)},n.RandomColor=function(){return Math.floor(Math.random()*this.colorBox.length)},n.RunGameRules=function(){this.callbackCheckGame=setInterval((function(){g.gameStop||d.checkSameColor()}),100)},n.countdownTimer=function(){this.lblValueTimer.string=this.timeNum.toString(),console.log("triasss111"),this.callbackScheduleTime=function(){this.timeNum--,console.log("timenun : "+this.timeNum),this.lblValueTimer.string=this.timeNum.toString(),0==this.timeNum&&(this.unschedule(this.callbackScheduleTime),this.winGame())},console.log("triasss222"),this.schedule(this.callbackScheduleTime,1),console.log("triasss333")},n.winGame=function(){g.gameStop=!0,this.panelButtonPlay.active=!0,this.nodeButtonReload.active=!0,this.nodeLabelHi.active=!0,this.nodeLabelCurrentScore.active=!0,console.log("testttt1 >> "+g.hightScoreValue),console.log("testttt2 >> "+g.scoreValue),this.lblValueHIScore.string=g.hightScoreValue.toString(),this.lblValueCurrentScore.string=g.scoreValue.toString(),g.hightScoreValue<=g.scoreValue&&(g.hightScoreValue=g.scoreValue),this.cleanGame()},n.cleanGame=function(){clearInterval(this.callbackCheckGame),g.scoreValue=0,this.lblValueScore.string="0";for(var e,t=l(g.listScriptColorBox);!(e=t()).done;){var o=e.value;o.idColor=-1,o.spriteBox.color=g.scrManager.colorDefault}},n.onReloadGame=function(){g.gameStop=!1,this.panelButtonPlay.active=!1,this.timeNum=this.totalTime;for(var e,t=l(g.listScriptColorBox);!(e=t()).done;){var o=e.value;o.idColor=g.scrManager.RandomColor(),o.spriteBox.color=g.scrManager.colorBox[o.idColor]}this.RunGameRules(),this.countdownTimer()},t}(f)).prototype,"colorBox",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),O=t(A.prototype,"colorDefault",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=t(A.prototype,"panelButtonPlay",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(A.prototype,"nodeButtonPlay",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=t(A.prototype,"nodeButtonReload",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=t(A.prototype,"nodeLabelHi",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=t(A.prototype,"nodeLabelCurrentScore",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=t(A.prototype,"panelBox",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=t(A.prototype,"layoutBox",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=t(A.prototype,"prefabBox",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=t(A.prototype,"prefabParentBox",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=t(A.prototype,"drageBox",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=t(A.prototype,"spriteBox",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=t(A.prototype,"lblValueHIScore",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ee=t(A.prototype,"lblValueCurrentScore",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),te=t(A.prototype,"lblValueScore",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),oe=t(A.prototype,"lblValueTimer",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),le=t(A.prototype,"timeNum",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),_=A))||_));n._RF.pop()}}}));

System.register("chunks:///_virtual/GameRules.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameGlobal.ts"],(function(o){"use strict";var r,l,t,i;return{setters:[function(o){r=o.createForOfIteratorHelperLoose},function(o){l=o.cclegacy,t=o._decorator},function(o){i=o.GameGlobal}],execute:function(){var c;l._RF.push({},"06a0dLrbd5AHqGr5rudN3Ml","GameRules",void 0);var e=t.ccclass;t.property,o("GameRules",e("GameRules")(c=function(){function o(){}return o.checkSameColor=function(){for(var o=function(o){if(-1==i.listScriptColorBox[o].idColor)return"continue";var l=i.listScriptColorBox[o].idColor,t=i.listColumnLimit.find((function(r){return o<=r})),c=function(){for(var l,t=r(i.listAllColumn);!(l=t()).done;){var c=l.value;if(c.includes(o))return c.indexOf(o)}}();var e=t-o>=3?[o,o+1,o+2,o+3]:[],s=c>=3?[o,o+1*i.colomx,o+2*i.colomx,o+3*i.colomx]:[],n=t-o>=2?[o,o+1,o+2]:[],a=c>=2?[o,o+1*i.colomx,o+2*i.colomx]:[];function x(o){if(i.listScriptColorBox[o].idColor==l&&-1!=i.listScriptColorBox[o].idColor)return!0}e.length>0&&e.every(x)&&e.forEach((function(o){i.scoreValue+=2,i.scrManager.lblValueScore.string=i.scoreValue.toString(),i.listScriptColorBox[o].idColor=-1,i.listScriptColorBox[o].spriteBox.color=i.scrManager.colorDefault})),s.length>0&&s.every(x)&&s.forEach((function(o){i.scoreValue+=2,i.scrManager.lblValueScore.string=i.scoreValue.toString(),i.listScriptColorBox[o].idColor=-1,i.listScriptColorBox[o].spriteBox.color=i.scrManager.colorDefault})),n.length>0&&n.every(x)&&n.forEach((function(o){i.scoreValue+=1,i.scrManager.lblValueScore.string=i.scoreValue.toString(),i.listScriptColorBox[o].idColor=-1,i.listScriptColorBox[o].spriteBox.color=i.scrManager.colorDefault})),a.length>0&&a.every(x)&&a.forEach((function(o){i.scoreValue+=1,i.scrManager.lblValueScore.string=i.scoreValue.toString(),i.listScriptColorBox[o].idColor=-1,i.listScriptColorBox[o].spriteBox.color=i.scrManager.colorDefault}))},l=0;l<i.listParentColorBox.length;l++)o(l);this.getBoxToMove()},o.getBoxToMove=function(){for(var o=0;o<i.maxBox;o++){if(!(o+i.colomx>i.maxBox-1))if(-1==i.listScriptColorBox[o+i.colomx].idColor)i.listScriptColorBox[o+i.colomx].spriteBox.color=i.listScriptColorBox[o].spriteBox.color,i.listScriptColorBox[o+i.colomx].idColor=i.listScriptColorBox[o].idColor,i.listScriptColorBox[o+i.colomx].idBox=o+i.colomx,i.listScriptColorBox[o+i.colomx].nodeBox.name="box_"+(o+i.colomx).toString(),i.listFirstRaw.includes(o)&&-1==i.listScriptColorBox[o].idColor&&(i.listScriptColorBox[o].idColor=i.scrManager.RandomColor(),i.listScriptColorBox[o].spriteBox.color=i.scrManager.colorBox[i.listScriptColorBox[o].idColor]);else-1==i.listScriptColorBox[o].idColor&&(i.listScriptColorBox[o].idColor=i.scrManager.RandomColor(),i.listScriptColorBox[o].spriteBox.color=i.scrManager.colorBox[i.listScriptColorBox[o].idColor])}},o}())||c);l._RF.pop()}}}));

System.register("chunks:///_virtual/ItemColorBox.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameGlobal.ts"],(function(o){"use strict";var t,i,r,e,l,s,n,d,a,c,h,x,u;return{setters:[function(o){t=o.applyDecoratedDescriptor,i=o.inheritsLoose,r=o.initializerDefineProperty,e=o.assertThisInitialized},function(o){l=o.cclegacy,s=o._decorator,n=o.Node,d=o.Sprite,a=o.CCInteger,c=o.Color,h=o.Vec3,x=o.Component},function(o){u=o.GameGlobal}],execute:function(){var B,p,f,g,I,P,C,b,y,m,w,v,W,S,D,M,z,T,E;l._RF.push({},"ec3cdc/ryZGYZwKQbIrTNYc","ItemColorBox",void 0);var L=s.ccclass,_=s.property;o("ItemColorBox",(B=L("ItemColorBox"),p=_(n),f=_(d),g=_(a),I=_(a),P=_(a),C=_(a),b=_(a),y=_(a),B((v=t((w=function(o){function t(){for(var t,i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return t=o.call.apply(o,[this].concat(l))||this,r(t,"nodeBox",v,e(t)),r(t,"spriteBox",W,e(t)),r(t,"idBox",S,e(t)),r(t,"idColor",D,e(t)),r(t,"leftId",M,e(t)),r(t,"rightId",z,e(t)),r(t,"topId",T,e(t)),r(t,"bottomId",E,e(t)),t.defaultPos=null,t.defaultWorldPos=null,t}i(t,o);var l=t.prototype;return l.startEvent=function(){var o=this;this.nodeBox.on(n.EventType.TOUCH_MOVE,(function(t){var i=t.getUILocation();u.scrManager.drageBox.active||(u.scrManager.drageBox.active=!0,u.scrManager.spriteBox.color=o.spriteBox.color,o.spriteBox.color=new c(o.spriteBox.color.r,o.spriteBox.color.g,o.spriteBox.color.b,1)),u.scrManager.drageBox.setWorldPosition(new h(i.x,i.y,0)),i.x>o.defaultWorldPos.x+.5*u.widthBox&&-1==o.rightId&&o.setDefaultPos(),i.x<o.defaultWorldPos.x-.5*u.widthBox&&-1==o.leftId&&o.setDefaultPos(),i.y>o.defaultWorldPos.y+.5*u.heightBox&&-1==o.topId&&o.setDefaultPos(),i.y<o.defaultWorldPos.y-.5*u.heightBox&&-1==o.bottomId&&o.setDefaultPos()})),this.nodeBox.on(n.EventType.TOUCH_END,(function(t){o.setDefaultPos()})),this.nodeBox.on(n.EventType.TOUCH_CANCEL,(function(t){var i=t.getUILocation();o.setDefaultPos(),i.x>o.defaultWorldPos.x+.5*u.widthBox&&-1==o.rightId||i.x<o.defaultWorldPos.x-.5*u.widthBox&&-1==o.leftId||i.y>o.defaultWorldPos.y+.5*u.heightBox&&-1==o.topId||i.y<o.defaultWorldPos.y-.8*u.heightBox&&-1==o.bottomId||(i.x>=o.defaultWorldPos.x+.5*u.widthBox&&i.x<o.defaultWorldPos.x+1.5*u.widthBox?o.changePosRight():i.x<o.defaultWorldPos.x-.5*u.widthBox&&i.x>o.defaultWorldPos.x-1.5*u.widthBox?o.changePosLeft():i.y>o.defaultWorldPos.y+.5*u.heightBox&&i.y<o.defaultWorldPos.y+1.5*u.widthBox?o.changePosTop():i.y<o.defaultWorldPos.y-.8*u.heightBox&&i.y>o.defaultWorldPos.y-1.5*u.widthBox&&o.changePosBottom())}))},l.setDefaultPos=function(){this.spriteBox.color=new c(this.spriteBox.color.r,this.spriteBox.color.g,this.spriteBox.color.b,255),u.scrManager.drageBox.active=!1},l.changePosRight=function(){var o=u.listScriptColorBox[this.rightId].idColor;u.listScriptColorBox[this.rightId].spriteBox.color=this.spriteBox.color,u.listScriptColorBox[this.rightId].idColor=this.idColor,this.spriteBox.color=u.scrManager.colorBox[o],this.idColor=o},l.changePosLeft=function(){var o=u.listScriptColorBox[this.leftId].idColor;u.listScriptColorBox[this.leftId].spriteBox.color=this.spriteBox.color,u.listScriptColorBox[this.leftId].idColor=this.idColor,this.spriteBox.color=u.scrManager.colorBox[o],this.idColor=o},l.changePosTop=function(){var o=u.listScriptColorBox[this.topId].idColor;u.listScriptColorBox[this.topId].spriteBox.color=this.spriteBox.color,u.listScriptColorBox[this.topId].idColor=this.idColor,this.spriteBox.color=u.scrManager.colorBox[o],this.idColor=o},l.changePosBottom=function(){var o=u.listScriptColorBox[this.bottomId].idColor;u.listScriptColorBox[this.bottomId].spriteBox.color=this.spriteBox.color,u.listScriptColorBox[this.bottomId].idColor=this.idColor,this.spriteBox.color=u.scrManager.colorBox[o],this.idColor=o},l.getSidePos=function(){this.setDefaultSidePos(),this.idBox>=u.colomx&&(this.topId=this.idBox-u.colomx),this.idBox<Math.pow(u.colomy,2)-1&&(this.bottomId=this.idBox+u.colomx),this.idBox>0&&(this.idBox<u.colomx||this.idBox%u.colomx>0)&&(this.leftId=this.idBox-1),(this.idBox+1)%u.colomx>0&&(this.rightId=this.idBox+1)},l.getDefaultPos=function(){this.defaultPos=this.nodeBox.getPosition(),this.defaultWorldPos=this.nodeBox.getWorldPosition()},l.setDefaultSidePos=function(){this.leftId=-1,this.rightId=-1,this.topId=-1,this.bottomId=-1},t}(x)).prototype,"nodeBox",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=t(w.prototype,"spriteBox",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(w.prototype,"idBox",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-1}}),D=t(w.prototype,"idColor",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-1}}),M=t(w.prototype,"leftId",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-1}}),z=t(w.prototype,"rightId",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-1}}),T=t(w.prototype,"topId",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-1}}),E=t(w.prototype,"bottomId",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-1}}),m=w))||m));l._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameGlobal.ts","./GameManager.ts","./GameRules.ts","./ItemColorBox.ts"],(function(){"use strict";return{setters:[null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});