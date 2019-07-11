(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),s=t.n(c),i=t(9),o=t(39),m=t.n(o),l=t(54),p=t(28),u=t(29),d=t(33),f=t(30),h=t(34),v=t(12),g=t.n(v),E=t(27),b=function(e){var a=0;if(!e.items&&e.dlc.length>0&&e.dlc.forEach(function(e){a+=e.price}),"pack"===e.type){var t=0;return e.games.forEach(function(e){return t+=e.playtimeForever}),t<=60?e.price:Math.round(e.price/t/60)}if(e.playtimeForever<=60)return e.price+a;var n=e.playtimeForever/60;return(e.price+a)/n},O=function(e){var a=Math.floor(e/60),t=e%60;return t>10&&t.toString().length<2&&(t*=10),a?t?"".concat(a,"h ").concat(t,"m"):"".concat(a,"h"):"".concat(t,"m")},S=function(e){var a=e.price;return e.dlc&&e.dlc.length&&e.dlc.forEach(function(e){return a+=e.price}),a},k=t(13),y=t.n(k),_=t(6),N=t.n(_),C=t(31),I=t(20),D=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(d.a)(this,Object(f.a)(a).call(this,e))).handleInputSubmit=function(e,a){13===e.keyCode?t.props.saveData(a,t.state.value):t.setState({value:e.target.value})},t.definePriceHourClassName=function(e){var a=b(e);return a<=10?"darkGreen":a<=50?"green":a<=100?"yellow":a<=200?"orange":a>=200?"red":void 0},t.hideGame=function(e){t.setState({gameClassName:"hide",hidden:!0},function(){g.a.patch("http://steamify-api.61hub.com/v1/games/".concat(e),{hidden:t.state.hidden})})},t.toggleOptions=function(){t.setState({isExpanded:!t.state.isExpanded})},t.patchSubmitedData=function(e,a){a.preventDefault();e.toString();var n=t.selectRef.current.options[t.selectRef.current.selectedIndex].value,r=t.props.packages.find(function(e){return e.packId==n});g.a.patch("http://steamify-api.61hub.com/v1/packs/".concat(n),{items:Object(i.a)(r.items).concat([e])}).then(function(){t.props.onAddedToPack(),t.hideGame(e)})},t.renderOptions=function(){var e=t.props.data;return r.a.createElement("div",{className:y.a.options},r.a.createElement("div",null,"Item price:",r.a.createElement("input",{className:"priceInput",defaultValue:e.price,type:"number",onKeyUp:function(a){return t.handleInputSubmit(a,e.appId,e.playtimeForever)}})),r.a.createElement("div",{className:"hideButton"},r.a.createElement("button",{onClick:function(){return t.hideGame(e.appId)}},"Hide")),r.a.createElement("div",{className:"dropDownPacks"},"pack"!==e.type&&r.a.createElement("form",{onSubmit:function(a){return t.patchSubmitedData(e.appId,a)}},r.a.createElement("select",{ref:t.selectRef},t.props.packages&&t.props.packages.map(function(e){return r.a.createElement("option",{value:e.packId},e.name)})),r.a.createElement("button",null,"Package"))))},t.selectRef=r.a.createRef(),t.state={value:"",hidden:e.data.hidden,isExpanded:!1},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this,a=this.props.data,t=this.state.hidden,n="pack"===a.type,c=n?a.games:a.dlc;return r.a.createElement("div",null,r.a.createElement("div",{className:N()(y.a.gameWrapper,Object(E.a)({},y.a.hidden,t))},r.a.createElement("div",{className:y.a.gameIcon},r.a.createElement("img",{src:a.logo,alt:"Image logo"})),r.a.createElement("div",{className:"gameInformation"},r.a.createElement("div",{className:"gameName",onClick:this.toggleOptions},a.name),r.a.createElement("div",{className:"gameMinorInfo"},r.a.createElement("div",{className:"gameHourPrice ".concat(this.definePriceHourClassName(a))}),r.a.createElement("div",{className:"gameIndex"},"#",this.props.index+1),r.a.createElement("div",{className:"gameTotalPrice"},a.totalPrice,"P"))),r.a.createElement("div",{className:"gameDuration"},O(a.playtimeForever))),r.a.createElement("div",{className:N()(y.a.details,Object(E.a)({},y.a.expanded,this.state.isExpanded))},this.renderOptions(),r.a.createElement("div",{className:y.a.items},r.a.createElement("h3",null,n?"Items in pack:":"DLCs list:"),!C.isEmpty(c)&&c.map(function(e){return r.a.createElement("div",{className:y.a.item},e.name&&r.a.createElement("div",null,e.name),n?r.a.createElement("div",null,O(e.playtimeForever)):r.a.createElement("div",null,e.price))}),!n&&r.a.createElement("div",{className:y.a.addDlcWrapper},r.a.createElement("h3",null,"Add DLC"),r.a.createElement(I.b,{onSubmit:function(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.props).onAddDlcFormSubmit.apply(t,[a.appId].concat(r))},render:function(e){var a=e.handleSubmit,t=e.reset;return r.a.createElement("form",{onSubmit:function(){return a.apply(void 0,arguments).then(t)}},r.a.createElement(I.a,{name:"dlcName",component:"input",type:"text",placeholder:"DLC name"}),r.a.createElement(I.a,{name:"dlcPrice",component:"input",type:"number",placeholder:"DLC price"}),r.a.createElement("button",{type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))}})))))}}]),a}(n.Component),P=t(32),j=t(114),F=t(117),w=t(8),T=t(110),G=(t(93),t(95),t(97),t(99),t(14)),x=function(e){var a=e.games,t=e.packs,n=0,c=0;return a.forEach(function(e){e.hidden||(n+=S(e),c+=e.playtimeForever)}),t.forEach(function(e){n+=e.price,c+=e.playtimeForever}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stats"},r.a.createElement("div",null,"Total price: ".concat(n,"P")),r.a.createElement("div",null,"Total playtime: ".concat(Math.round(c/60),"hrs"))),r.a.createElement("div",{className:"twoWeeks"},r.a.createElement("h3",null,"Two weeks leaders:"),a.filter(function(e){return e.playtimeTwoWeeks}).sort(function(e,a){return a.playtimeTwoWeeks-e.playtimeTwoWeeks}).map(function(e){var a=Object(G.a)({},e);return a.playtimeForever=a.playtimeTwoWeeks,a}).map(function(e,a){return r.a.createElement(D,{data:e,index:a},e.name," ",O(e.playtimeTwoWeeks))})))},A=t(116),B=t(111),R=function(e){var a=e.isOpen,t=e.onClose,n=e.serverStatus,c=e.onSortChange,s=e.sortedBy,i=e.sortOrder,o=e.onSortOrderChange,m=e.addPack;return r.a.createElement(F.a,{isOpen:a,onClose:t,autoFocus:!0,canEscapeKeyClose:!0,canOutsideClickClose:!0,enforceFocus:!0,hasBackdrop:!0,position:w.a.RIGHT,usePortal:!0,size:F.a.SIZE_SMALL},r.a.createElement("div",{className:T.a.DRAWER_BODY},r.a.createElement("div",{className:T.a.DIALOG_BODY},r.a.createElement("div",{className:"loadingState ".concat(n)}),r.a.createElement(A.a,{label:"Sort by:",onChange:c,selectedValue:s},r.a.createElement(B.a,{label:"Price",value:"totalPrice"}),r.a.createElement(B.a,{label:"Hours",value:"playtimeForever"}),r.a.createElement(B.a,{label:"Price per hour",value:"pricePerHour"})),r.a.createElement(A.a,{label:"Order:",onChange:o,selectedValue:i},r.a.createElement(B.a,{label:"Asc",value:"asc"}),r.a.createElement(B.a,{label:"Desc",value:"desc"})),r.a.createElement(I.b,{onSubmit:m,render:function(e){var a=e.handleSubmit;return r.a.createElement("form",{onSubmit:a},r.a.createElement(I.a,{name:"packName",component:"input",type:"text",placeholder:"Package name"}),r.a.createElement(I.a,{name:"packPrice",component:"input",type:"number",placeholder:"Package price"}),r.a.createElement("button",{type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))}}))))},W="FETCH_GAMES_SUCCESS",H="gameUpdate",L="gamesToStore",U="FETCH_PACKS_SUCCESS",M=(t(112),function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={serverStatus:"",sortedBy:"playtimeForever",sortOrder:"desc",isSettingsOpen:!1,isStatsOpen:!1},t.fetchData=Object(l.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.fetchGames();case 2:return e.next=4,t.props.fetchPacks();case 4:case"end":return e.stop()}},e,this)})),t.saveData=function(e,a){t.setState({serverStatus:"loading"}),a=parseInt(a),g.a.patch("http://steamify-api.61hub.com/v1/games/".concat(e),{price:a}).then(function(e){return t.setState({serverStatus:"success"})}).catch(function(e){return t.setState({serverStatus:"error"})}),t.props.gameUpdate({appId:e,price:a})},t.addDlc=function(e,a){var n=a.dlcName,r=a.dlcPrice,c=t.props.games.find(function(a){return a.appId===e});return t.setState({serverStatus:"loading"}),g.a.patch("http://steamify-api.61hub.com/v1/games/".concat(e),{dlc:Object(i.a)(c.dlc).concat([{name:n,price:r}])}).then(function(e){t.props.gameUpdate(e.data),t.setState({serverStatus:"success"})}).catch(function(e){return t.setState({serverStatus:"error"})})},t.addPack=function(e){var a=e.packName,t=e.packPrice;g.a.post("http://steamify-api.61hub.com/v1/packs",{name:a,price:t})},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,a=this.props,t=a.games,n=a.packs;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"controls"},r.a.createElement(j.a,{className:"bp3-minimal",onClick:function(){return e.setState({isSettingsOpen:!0})},icon:"settings"}),r.a.createElement(j.a,{className:"bp3-minimal",onClick:function(){return e.setState({isStatsOpen:!0})},icon:"grouped-bar-chart"}),r.a.createElement(j.a,{className:"bp3-minimal",onClick:this.fetchData,icon:"refresh"})),r.a.createElement(R,{isOpen:this.state.isSettingsOpen,onClose:function(){return e.setState({isSettingsOpen:!1})},serverStatus:this.state.serverStatus,onSortChange:function(a){return e.setState({sortedBy:a.currentTarget.value})},sortedBy:this.state.sortedBy,sortOrder:this.state.sortOrder,onSortOrderChange:function(a){return e.setState({sortOrder:a.currentTarget.value})},addPack:this.addPack}),r.a.createElement(F.a,{isOpen:this.state.isStatsOpen,onClose:function(){return e.setState({isStatsOpen:!1})},autoFocus:!0,canEscapeKeyClose:!0,canOutsideClickClose:!0,enforceFocus:!0,hasBackdrop:!0,position:w.a.RIGHT,usePortal:!0,size:F.a.SIZE_LARGE},r.a.createElement("div",{className:T.a.DRAWER_BODY},r.a.createElement("div",{className:T.a.DIALOG_BODY},r.a.createElement(x,{games:Object(i.a)(this.props.games),packs:Object(i.a)(this.props.packs)})))),r.a.createElement("div",{className:"mainWrapper"},C.orderBy(Object(i.a)(n).concat(Object(i.a)(t)),[this.state.sortedBy,"playtimeForever"],[this.state.sortOrder]).filter(function(e){return!e.hidden}).map(function(a,t){return r.a.createElement(D,{key:a.appId,data:a,index:t,saveData:e.saveData,onAddDlcFormSubmit:e.addDlc,packages:e.props.games.filter(function(e){return e.items}),packId:e.state.packId,onAddedToPack:e.fetchData})})))}}]),a}(n.Component));M.defaultProps={games:[],packs:[]};var K=Object(P.b)(function(e){return{games:e.games,packs:e.packs}},{fetchGames:function(){return function(e){return g.a.get("http://steamify-api.61hub.com/v1/games").then(function(a){return e((t=a.data,{type:W,games:t}));var t})}},fetchPacks:function(){return function(e){return g.a.get("http://steamify-api.61hub.com/v1/packs").then(function(a){return e((t=a.data,{type:U,packs:t}));var t})}},gameUpdate:function(e){return{type:H,game:e}},gamesToStore:function(e){return{data:e,type:L}}})(M),V=t(22),X=t(42),Y=window.__REDUX_DEVTOOLS_EXTENSION__?Object(V.c)(Object(V.a)(X.a),window.__REDUX_DEVTOOLS_EXTENSION__()):Object(V.a)(X.a),z=Object(V.d)(function(e,a){switch(a.type){case W:return a.games.forEach(function(e){isNaN(parseInt(e.price))?e.price=0:e.price=parseInt(e.price),e.pricePerHour=b(e),e.totalPrice=S(e)}),Object(G.a)({},e,{games:a.games});case U:var t=a.packs;return t.forEach(function(a){a.games=[],a.type="pack",a.items.forEach(function(t){var n=e.games.find(function(e){return e.appId===parseInt(t)});n&&a.games.push(n)}),a.playtimeForever=0,a.games&&a.games.length&&(a.games.forEach(function(e){return a.playtimeForever+=e.playtimeForever}),a.logo=a.games[Math.floor(Math.random()*(a.games.length-1))].logo,a.pricePerHour=b(a)),a.totalPrice=a.price}),Object(G.a)({},e,{packs:t});case"gamesToStore":return Object(G.a)({},e,{games:Object(i.a)(e.games).concat(Object(i.a)(a.data))});case"gameUpdate":var n=e.games.map(function(e){return e.appId===a.game.appId?Object(G.a)({},e,a.game):e});return Object(G.a)({},e,{games:n});case"packsToStore":return Object(G.a)({},e,{games:Object(i.a)(e.games).concat(Object(i.a)(a.packs))})}return{games:[],packs:[]}},Y);s.a.render(r.a.createElement(P.a,{store:z},r.a.createElement(K,null)),document.getElementById("root"))},13:function(e,a,t){e.exports={gameWrapper:"Game_gameWrapper__2AG3X",hidden:"Game_hidden__2fBRt",gameIcon:"Game_gameIcon__2PFn2",options:"Game_options__oRGaS",items:"Game_items__FCx4C",item:"Game_item__3-19d",details:"Game_details__3t6zl",expanded:"Game_expanded__3K6Ps",addDlcWrapper:"Game_addDlcWrapper__jxUtc"}},62:function(e,a,t){e.exports=t(113)},99:function(e,a,t){}},[[62,2,1]]]);
//# sourceMappingURL=main.6403af03.chunk.js.map