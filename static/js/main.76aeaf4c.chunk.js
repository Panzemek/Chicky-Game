(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://i.ebayimg.com/images/g/NKMAAOSw9hdaR0M0/s-l300.jpg"},{id:2,image:"https://gudieleisurefarm.org/wp-content/uploads/2016/05/Day_Chicks-300x300.jpg"},{id:3,image:"https://86cb8127dc14737f5057-7c0671222953158607ea93d5febd68b4.ssl.cf1.rackcdn.com/812/assets/responsive/392000/392833/web_chick10.jpg"},{id:4,image:"https://i1.wp.com/tarboxhollowpoultry.com/wp-content/uploads/2018/07/Splash-Orpington-Chicks.jpg?resize=300%2C300&ssl=1"},{id:5,image:"https://cdn.insteading.com/wp-content/uploads/2016/07/5027041365_9eab7a8248_b-300x300.jpg"},{id:6,image:"https://www.wbfarmstore.net/wp-content/uploads/2017/06/ChickWithEgg_Dollar62115459-300x300.jpg"},{id:7,image:"https://i.pinimg.com/originals/ba/d4/69/bad4690e9330d3c5333963aacf3acfff.jpg"},{id:8,image:"https://www.hscountrystore.com/wp-content/uploads/2019/01/Purina-Flock-Talk-Post-3-300x300.jpg"},{id:9,image:"https://i.ebayimg.com/images/g/tDYAAOSwSFZakkft/s-l300.jpg"},{id:10,image:"https://2.bp.blogspot.com/-8OmVg2BpBFQ/WoCprLBRXyI/AAAAAAACfR4/Uz3qqf6uu3InhuQHMDcwaYKVabCkuDpkQCLcBGAs/s300-c/baby-chicks-in-grass.jpg"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(3),r=a.n(n),s=(a(15),a(4)),o=a(5),l=a(7),p=a(6),u=a(8);a(16);var m=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.playerClick(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.id,src:e.image})))};a(17);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(18);var h=function(e){return i.a.createElement("h1",{className:"title"},e.children)};a(19);var g=function(e){return i.a.createElement("h1",{className:"title"},e.children)},f=a(1),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={playerScore:0,highScore:0,ChickPics:f,notGuessed:f.slice()},a.playerClick=function(e){a.state.notGuessed.includes(f[e-1])?a.setState({playerScore:a.state.playerScore+1,notGuessed:a.state.notGuessed.filter(function(t){return t.id!==e})}):(a.state.playerScore>a.state.highScore&&a.setState({highScore:a.state.playerScore}),a.setState({playerScore:0,notGuessed:a.state.ChickPics.slice()}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"randomChicks",value:function(e){for(var t=e.slice(),a=[];t.length>0;){var c=Math.floor(Math.random()*t.length);a.push(t[c]),t.splice(c,1)}return a}},{key:"render",value:function(){var e=this,t=this.randomChicks(f);return i.a.createElement(d,null,i.a.createElement(h,null,"Pick a Chick Pic"),i.a.createElement(g,null,"Score: ",this.state.playerScore," | High Score ",this.state.highScore),t.map(function(t){return i.a.createElement(m,{id:t.id,key:t.id,image:t.image,playerClick:e.playerClick})}))}}]),t}(c.Component);r.a.render(i.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.76aeaf4c.chunk.js.map