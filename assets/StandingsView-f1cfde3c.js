import{S as h}from"./SmallHeroHeader-96c800a5.js";import{_ as u,o as i,c,a as v,d as s,u as d,e as p,F as _,r,f as m,s as l,t as o,g as n,p as g,b}from"./index-a308b33f.js";const f="/eternals-frontend//assets/BracketChampions-71b6fee9.png",k="/eternals-frontend//assets/BracketAcad-a6d3ae94.png";const t=a=>(g("data-v-3a0eed6c"),a=a(),b(),a),S={class:"content"},V=m('<div class="brackets" data-v-3a0eed6c><div class="br" data-v-3a0eed6c><h3 data-v-3a0eed6c>Bracket Champions</h3><img class="bracket" src="'+f+'" data-v-3a0eed6c></div><div class="br" data-v-3a0eed6c><h3 data-v-3a0eed6c>Bracket Académie</h3><img class="bracket" src="'+k+'" data-v-3a0eed6c></div></div>',1),B={key:0,class:"lds-ring"},C=t(()=>s("div",null,null,-1)),N=t(()=>s("div",null,null,-1)),x=t(()=>s("div",null,null,-1)),y=t(()=>s("div",null,null,-1)),L=[C,N,x,y],w={class:"allstandings"},A={class:"standings"},I=t(()=>s("h3",null,"Champions",-1)),D={class:"menufranchise"},F={class:"number"},H={class:"name"},P=["src"],R={class:"team"},W={class:"results"},E=t(()=>s("div",{class:"title"},"Résultats",-1)),T=t(()=>s("br",null,null,-1)),j={class:"games"},q=t(()=>s("div",{class:"title"},"V/D",-1)),z=t(()=>s("br",null,null,-1)),G={class:"points"},J=t(()=>s("div",{class:"title"},"Points",-1)),K=t(()=>s("br",null,null,-1)),M={class:"pts"},O=t(()=>s("div",{class:"pts2"},"pts",-1)),Q={class:"standings"},U=t(()=>s("h3",null,"Académie",-1)),X={class:"menufranchise"},Y={class:"number"},Z={class:"name"},$=["src"],ss={class:"team"},ts={class:"results"},es=t(()=>s("div",{class:"title"},"Résultats",-1)),os=t(()=>s("br",null,null,-1)),ns={class:"games"},is=t(()=>s("div",{class:"title"},"V/D",-1)),cs=t(()=>s("br",null,null,-1)),as={class:"points"},ds=t(()=>s("div",{class:"title"},"Points",-1)),ls=t(()=>s("br",null,null,-1)),_s={class:"pts"},rs=t(()=>s("div",{class:"pts2"},"pts",-1)),hs={__name:"StandingsView",setup(a){return(us,vs)=>(i(),c("main",null,[v(h,{msg:"Classement de la saison courante"}),s("div",S,[V,d(l).standingsChampions.length===0?(i(),c("div",B,L)):p("",!0),s("div",w,[s("div",A,[I,(i(!0),c(_,null,r(d(l).standingsChampions,e=>(i(),c("div",D,[s("div",F,o(e.position),1),s("div",H,[s("img",{src:e.teamLogo},null,8,P),s("p",R,o(e.teamName),1),s("div",W,[E,T,n(o(e.resultsWins)+"-"+o(e.resultsLoses),1)]),s("div",j,[q,z,n(o(e.victories)+"/"+o(e.defeats),1)]),s("div",G,[J,K,n(o(e.points),1)]),s("div",M,[n(o(e.points)+" ",1),O])])]))),256))]),s("div",Q,[U,(i(!0),c(_,null,r(d(l).standingsAcademy,e=>(i(),c("div",X,[s("div",Y,o(e.position),1),s("div",Z,[s("img",{src:e.teamLogo},null,8,$),s("p",ss,o(e.teamName),1),s("div",ts,[es,os,n(o(e.resultsWins)+"-"+o(e.resultsLoses),1)]),s("div",ns,[is,cs,n(o(e.victories)+"/"+o(e.defeats),1)]),s("div",as,[ds,ls,n(o(e.points),1)]),s("div",_s,[n(o(e.points)+" ",1),rs])])]))),256))])])])]))}},gs=u(hs,[["__scopeId","data-v-3a0eed6c"]]);export{gs as default};
