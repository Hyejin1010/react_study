(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),i=a.n(r),o=a(2),c=a.n(o),m=a(13),l=a(14),u=a(15),v=a(18),p=a(16),d=a(19),y=a(17),_=a.n(y);a(43);var f=function(e){e.id;var t=e.year,a=e.title,n=e.summary,r=e.poster,i=e.genres;return s.a.createElement("div",{className:"movies__movie"},s.a.createElement("img",{src:r,alt:a,title:a}),s.a.createElement("div",{className:"movie__data"},s.a.createElement("h3",{className:"movie__title"},a),s.a.createElement("h5",{className:"movie__year"},t),s.a.createElement("ul",{className:"genres"},i.map((function(e,t){return s.a.createElement("li",{key:t,className:"genres__genre"},i)}))),s.a.createElement("p",{className:"movie__summary"},n)))},g=(a(44),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(v.a)(this,Object(p.a)(t).call(this,e))).state={isLoading:!0,movies:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getMovies",value:function(){var e=Object(m.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,a=t.data.data.movies,this.setState({isLoading:!1,movies:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return s.a.createElement("section",{className:"container"},t?s.a.createElement("div",{className:"loader"},s.a.createElement("span",{className:"loader__text"},"Loading ...")):s.a.createElement("div",{className:"movies"},a.map((function(e){return s.a.createElement(f,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(n.Component));i.a.render(s.a.createElement(g,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.58b301fe.chunk.js.map