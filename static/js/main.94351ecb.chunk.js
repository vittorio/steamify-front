(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),s=t.n(c),i=t(13),o=t(7),l=t(39),m=t.n(l),p=t(54),u=t(27),d=t(28),f=t(32),h=t(29),v=t(33),g=t(11),E=t.n(g),O=t(26),b=function(e){var a=0;if(!e.items&&e.dlc.length>0&&e.dlc.forEach(function(e){a+=e.price}),"pack"===e.type){var t=0;return e.games.forEach(function(e){return t+=e.playtimeForever}),t<=60?e.price:Math.round(e.price/t/60)}if(e.playtimeForever<=60)return e.price+a;var n=e.playtimeForever/60;return(e.price+a)/n},k=function(e){var a=Math.floor(e/60),t=e%60;return t>10&&t.toString().length<2&&(t*=10),a?t?"".concat(a,"h ").concat(t,"m"):"".concat(a,"h"):"".concat(t,"m")},S=function(e){var a=e.price;return e.dlc&&e.dlc.length&&e.dlc.forEach(function(e){return a+=e.price}),a},y=t(22),N=t.n(y),I=t(6),D=t.n(I),C=t(30),j=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(f.a)(this,Object(h.a)(a).call(this,e))).handleInputSubmit=function(e,a){13===e.keyCode?t.props.saveData(a,t.state.value):t.setState({value:e.target.value})},t.handleDlc=function(e,a){13===e.keyCode&&t.props.saveDataDlc(a,t.dlcNameRef.current.value,t.dlcPriceRef.current.value)},t.definePriceHourClassName=function(e){var a=b(e);return a<=10?"darkGreen":a<=50?"green":a<=100?"yellow":a<=200?"orange":a>=200?"red":void 0},t.hideGame=function(e){t.setState({gameClassName:"hide",hidden:!0},function(){E.a.patch("http://steamify-api.61hub.com/v1/games/".concat(e),{hidden:t.state.hidden})})},t.toggleOptions=function(){t.setState({isExpanded:!t.state.isExpanded})},t.patchSubmitedData=function(e,a){a.preventDefault();e.toString();var n=t.selectRef.current.options[t.selectRef.current.selectedIndex].value,r=t.props.packages.find(function(e){return e.packId==n});E.a.patch("http://steamify-api.61hub.com/v1/packs/".concat(n),{items:Object(o.a)(r.items).concat([e])}).then(function(){t.props.onAddedToPack(),t.hideGame(e)})},t.renderOptions=function(){var e=t.props.data;return r.a.createElement("div",{className:N.a.options},r.a.createElement("div",null,"Item price:",r.a.createElement("input",{className:"priceInput",defaultValue:e.price,type:"number",onKeyUp:function(a){return t.handleInputSubmit(a,e.appId,e.playtimeForever)}})),r.a.createElement("div",{className:"hideButton"},r.a.createElement("button",{onClick:function(){return t.hideGame(e.appId)}},"Hide")),r.a.createElement("div",{className:"dropDownPacks"},"pack"!==e.type&&r.a.createElement("form",{onSubmit:function(a){return t.patchSubmitedData(e.appId,a)}},r.a.createElement("select",{ref:t.selectRef},t.props.packages&&t.props.packages.map(function(e){return r.a.createElement("option",{value:e.packId},e.name)})),r.a.createElement("button",null,"Package"))))},t.dlcNameRef=r.a.createRef(),t.dlcPriceRef=r.a.createRef(),t.selectRef=r.a.createRef(),t.state={value:"",hidden:e.data.hidden,isExpanded:!1},t}return Object(v.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=this.props.data,t=this.state.hidden,n="pack"===a.type,c=n?a.games:a.dlc;return r.a.createElement("div",null,r.a.createElement("div",{className:D()(N.a.gameWrapper,Object(O.a)({},N.a.hidden,t))},r.a.createElement("div",{className:N.a.gameIcon},r.a.createElement("img",{src:a.logo,alt:"Image logo"})),r.a.createElement("div",{className:"gameInformation"},r.a.createElement("div",{className:"gameName",onClick:this.toggleOptions},a.name),r.a.createElement("div",{className:"gameMinorInfo"},r.a.createElement("div",{className:"gameHourPrice ".concat(this.definePriceHourClassName(a))}),r.a.createElement("div",{className:"gameIndex"},"#",this.props.index+1),r.a.createElement("div",{className:"gameTotalPrice"},a.totalPrice,"P"))),r.a.createElement("div",{className:"gameDuration"},k(a.playtimeForever))),r.a.createElement("div",{className:D()({dlcWrapperHidden:!this.state.isExpanded})},this.renderOptions(),r.a.createElement("div",{className:N.a.white},r.a.createElement("h3",null,n?"Items in pack:":"DLCs list:"),!C.isEmpty(c)&&c.map(function(e){return r.a.createElement("div",{className:"dlc"},e.name&&r.a.createElement("div",{className:"dlcName"},e.name),n?r.a.createElement("div",null,k(e.playtimeForever)):r.a.createElement("div",null,e.price))}),!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("input",{className:"dlcInput",placeholder:"DLC name",type:"text",onKeyUp:function(t){return e.handleDlc(t,a.appId)},ref:this.dlcNameRef})),r.a.createElement("div",null,r.a.createElement("input",{className:"dlcInput",placeholder:"DLC price",type:"text",onKeyUp:function(t){return e.handleDlc(t,a.appId)},ref:this.dlcPriceRef}))))))}}]),a}(n.Component),_=t(31),P=t(113),w=t(116),T=t(12),F=t(110),R=(t(93),t(95),t(97),t(99),function(e){var a=e.games,t=e.packs,n=0,c=0;return a.forEach(function(e){e.hidden||(n+=S(e),c+=e.playtimeForever)}),t.forEach(function(e){n+=e.price,c+=e.playtimeForever}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stats"},r.a.createElement("div",null,"Total price: ".concat(n,"P")),r.a.createElement("div",null,"Total playtime: ".concat(Math.round(c/60),"hrs"))),r.a.createElement("div",{className:"twoWeeks"},r.a.createElement("h3",null,"Two weeks leaders:"),a.filter(function(e){return e.playtimeTwoWeeks}).sort(function(e,a){return a.playtimeTwoWeeks-e.playtimeTwoWeeks}).map(function(e){var a=Object(i.a)({},e);return a.playtimeForever=a.playtimeTwoWeeks,a}).map(function(e,a){return r.a.createElement(j,{data:e,index:a},e.name," ",k(e.playtimeTwoWeeks))})))}),G=t(115),x=t(111),B=t(35),H=function(e){var a=e.isOpen,t=e.onClose,n=e.serverStatus,c=e.onSortChange,s=e.sortedBy,i=e.sortOrder,o=e.onSortOrderChange,l=e.addPack;return r.a.createElement(w.a,{isOpen:a,onClose:t,autoFocus:!0,canEscapeKeyClose:!0,canOutsideClickClose:!0,enforceFocus:!0,hasBackdrop:!0,position:T.a.RIGHT,usePortal:!0,size:w.a.SIZE_SMALL},r.a.createElement("div",{className:F.a.DRAWER_BODY},r.a.createElement("div",{className:F.a.DIALOG_BODY},r.a.createElement("div",{className:"loadingState ".concat(n)}),r.a.createElement(G.a,{label:"Sort by:",onChange:c,selectedValue:s},r.a.createElement(x.a,{label:"Price",value:"totalPrice"}),r.a.createElement(x.a,{label:"Hours",value:"playtimeForever"}),r.a.createElement(x.a,{label:"Price per hour",value:"pricePerHour"})),r.a.createElement(G.a,{label:"Order:",onChange:o,selectedValue:i},r.a.createElement(x.a,{label:"Asc",value:"asc"}),r.a.createElement(x.a,{label:"Desc",value:"desc"})),r.a.createElement(B.b,{onSubmit:l,render:function(e){var a=e.handleSubmit;return r.a.createElement("form",{onSubmit:a},r.a.createElement(B.a,{name:"packName",component:"input",type:"text",placeholder:"Package name"}),r.a.createElement(B.a,{name:"packPrice",component:"input",type:"number",placeholder:"Package price"}),r.a.createElement("button",{type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))}}))))},W="FETCH_GAMES_SUCCESS",A=function(){return function(e){return E.a.get("http://steamify-api.61hub.com/v1/games").then(function(a){return e((t=a.data,{type:W,games:t}));var t})}},L="FETCH_PACKS_SUCCESS",U=function(){return function(e){return E.a.get("http://steamify-api.61hub.com/v1/packs").then(function(a){return e((t=a.data,{type:L,packs:t}));var t})}},M=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(f.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={serverStatus:"",sortedBy:"playtimeForever",sortOrder:"desc",isSettingsOpen:!1,isStatsOpen:!1},t.fetchData=Object(p.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.fetchGames();case 2:return e.next=4,t.props.fetchPacks();case 4:case"end":return e.stop()}},e,this)})),t.saveData=function(e,a){t.setState({serverStatus:"loading"}),a=parseInt(a),E.a.patch("http://steamify-api.61hub.com/v1/games/".concat(e),{price:a}).then(function(e){return t.setState({serverStatus:"success"})}).catch(function(e){return t.setState({serverStatus:"error"})}),t.props.gameUpdate({appId:e,price:a})},t.saveDataDlc=function(e,a,n){var r=Object(o.a)(t.props.games),c=r.find(function(a){return a.appId==e});t.setState({serverStatus:"loading"}),E.a.patch("http://steamify-api.61hub.com/v1/games/".concat(e),{dlc:Object(o.a)(c.dlc).concat([{name:a,price:n}])}).then(function(e){return t.setState({serverStatus:"success"})}).catch(function(e){return t.setState({serverStatus:"error"})});var s=r.findIndex(function(a){return a.appId==e}),l=Object(i.a)({},c);l.dlc=Object(o.a)(l.dlc).concat([{name:a,price:n}]),r[s]=l,t.props.dispatchGamesToStore(r)},t.addPack=function(e){var a=e.packName,t=e.packPrice;E.a.post("http://steamify-api.61hub.com/v1/packs",{name:a,price:t})},t}return Object(v.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,a=this.props,t=a.games,n=a.packs;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"controls"},r.a.createElement(P.a,{className:"bp3-minimal",onClick:function(){return e.setState({isSettingsOpen:!0})},icon:"settings"}),r.a.createElement(P.a,{className:"bp3-minimal",onClick:function(){return e.setState({isStatsOpen:!0})},icon:"grouped-bar-chart"}),r.a.createElement(P.a,{className:"bp3-minimal",onClick:this.fetchData,icon:"refresh"})),r.a.createElement(H,{isOpen:this.state.isSettingsOpen,onClose:function(){return e.setState({isSettingsOpen:!1})},serverStatus:this.state.serverStatus,onSortChange:function(a){return e.setState({sortedBy:a.currentTarget.value})},sortedBy:this.state.sortedBy,sortOrder:this.state.sortOrder,onSortOrderChange:function(a){return e.setState({sortOrder:a.currentTarget.value})},addPack:this.addPack}),r.a.createElement(w.a,{isOpen:this.state.isStatsOpen,onClose:function(){return e.setState({isStatsOpen:!1})},autoFocus:!0,canEscapeKeyClose:!0,canOutsideClickClose:!0,enforceFocus:!0,hasBackdrop:!0,position:T.a.RIGHT,usePortal:!0,size:w.a.SIZE_LARGE},r.a.createElement("div",{className:F.a.DRAWER_BODY},r.a.createElement("div",{className:F.a.DIALOG_BODY},r.a.createElement(R,{games:Object(o.a)(this.props.games),packs:Object(o.a)(this.props.packs)})))),r.a.createElement("div",{className:"mainWrapper"},C.orderBy(Object(o.a)(n).concat(Object(o.a)(t)),[this.state.sortedBy,"playtimeForever"],[this.state.sortOrder]).filter(function(e){return!e.hidden}).map(function(a,t){return r.a.createElement(j,{key:a.appId,data:a,index:t,saveData:e.saveData,saveDataDlc:e.saveDataDlc,packages:e.props.games.filter(function(e){return e.items}),packId:e.state.packId,onAddedToPack:e.fetchGamesData})})))}}]),a}(n.Component),K=Object(_.b)(function(e){return{games:e.games,packs:e.packs}},function(e){return{fetchGames:function(){return e(A())},fetchPacks:function(){return e(U())},gameUpdate:function(a){e({type:"gameUpdate",game:a})},dispatchGamesToStore:function(a){e({data:a,type:"gamesToStore"})}}})(M),V=t(20),X=t(42),Y=window.__REDUX_DEVTOOLS_EXTENSION__?Object(V.c)(Object(V.a)(X.a),window.__REDUX_DEVTOOLS_EXTENSION__()):Object(V.a)(X.a),Z=Object(V.d)(function(e,a){switch(a.type){case W:return a.games.forEach(function(e){isNaN(parseInt(e.price))?e.price=0:e.price=parseInt(e.price),e.pricePerHour=b(e),e.totalPrice=S(e)}),Object(i.a)({},e,{games:a.games});case L:var t=a.packs;return t.forEach(function(a){a.games=[],a.type="pack",a.items.forEach(function(t){var n=e.games.find(function(e){return e.appId===parseInt(t)});n&&a.games.push(n)}),a.playtimeForever=0,a.games&&a.games.length&&(a.games.forEach(function(e){return a.playtimeForever+=e.playtimeForever}),a.logo=a.games[Math.floor(Math.random()*(a.games.length-1))].logo,a.pricePerHour=b(a)),a.totalPrice=a.price}),Object(i.a)({},e,{packs:t});case"gamesToStore":return Object(i.a)({},e,{games:Object(o.a)(e.games).concat(Object(o.a)(a.data))});case"gameUpdate":var n=e.games.map(function(e){return e.appId===a.game.appId?Object(i.a)({},e,a.game):e});return Object(i.a)({},e,{games:n});case"packsToStore":return Object(i.a)({},e,{games:Object(o.a)(e.games).concat(Object(o.a)(a.packs))})}return{games:[],packs:[]}},Y);s.a.render(r.a.createElement(_.a,{store:Z},r.a.createElement(K,null)),document.getElementById("root"))},22:function(e,a,t){e.exports={gameWrapper:"Game_gameWrapper__2alRl",hidden:"Game_hidden__lWcDH",gameIcon:"Game_gameIcon__1LZuN",options:"Game_options__3Kw8m",white:"Game_white__pcxy8"}},62:function(e,a,t){e.exports=t(112)},99:function(e,a,t){}},[[62,2,1]]]);
//# sourceMappingURL=main.94351ecb.chunk.js.map