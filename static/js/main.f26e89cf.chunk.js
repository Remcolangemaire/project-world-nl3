(this["webpackJsonpproject-world-nl3"]=this["webpackJsonpproject-world-nl3"]||[]).push([[0],{116:function(e,t,c){},127:function(e,t,c){},129:function(e,t,c){},130:function(e,t,c){},131:function(e,t,c){},132:function(e,t,c){},133:function(e,t,c){},134:function(e,t,c){},135:function(e,t,c){},137:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),a=c(32),s=c.n(a),r=(c(116),c(6)),o=c(94),l=c(95),j=c(47),d=c.n(j),u=c(21),b=c(38),h=c.p+"static/media/Logo .c9447ace.PNG",m=c(2),x=function(){Object(u.f)();var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)({width:void 0,height:void 0}),s=Object(r.a)(a,2),j=s[0],x=s[1];Object(i.useEffect)((function(){var e=function(){x({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(i.useEffect)((function(){j.width>768&&c&&n(!1)}),[j.width,c]);var p=function(){n((function(e){return!e}))};return Object(m.jsx)("header",{className:d.a.header,children:Object(m.jsxs)("div",{className:d.a.header__content,children:[Object(m.jsx)(b.b,{to:"/",className:d.a.header__content__logo,children:Object(m.jsx)("img",{src:h,alt:"logo"})}),Object(m.jsx)("nav",{className:"".concat(d.a.header__content__nav," ").concat(c&&j.width<768?d.a.isMenu:""),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(b.b,{to:"/page-Services",onClick:p,children:"Services"})}),Object(m.jsx)("li",{children:Object(m.jsx)(b.b,{to:"/page-shop",onClick:p,children:"Shop"})}),Object(m.jsx)("li",{children:Object(m.jsx)(b.b,{to:"/page-blog",onClick:p,children:"Blog"})}),Object(m.jsx)("li",{children:Object(m.jsx)(b.b,{to:"/page-about",onClick:p,children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)(b.b,{to:"/page-contact",onClick:p,children:"Contact"})})]})}),Object(m.jsx)("div",{className:d.a.header__content__toggle,children:c?Object(m.jsx)(l.a,{onClick:p}):Object(m.jsx)(o.a,{onClick:p})})]})})},p=c(175),O=c(176),g=c(174),v=c(24);function f(){return Object(m.jsxs)(g.a,{variant:"body2",color:"text.secondary",align:"center",children:[Object(m.jsx)(v.SocialIcon,{url:"https://twitter.com/Remcolang",network:"twitter",style:{marginRight:15}}),Object(m.jsx)(v.SocialIcon,{url:"https://www.instagram.com/remcolangemaire/",network:"instagram",style:{marginRight:15}}),Object(m.jsx)(v.SocialIcon,{url:"https://www.youtube.com/channel/UC-qODza4NJhV_fJfnE1jWww",network:"youtube",style:{marginRight:15}}),Object(m.jsx)(v.SocialIcon,{url:"https://www.facebook.com/profile.php?id=100008816744304",network:"facebook"})]})}var w=function(e){var t=e.description;return e.title,Object(m.jsx)(p.a,{component:"footer",sx:{bgcolor:"background.paper",py:5},children:Object(m.jsxs)(O.a,{maxWidth:"lg",children:[Object(m.jsx)(g.a,{variant:"h6",align:"center",gutterBottom:!0,children:Object(m.jsx)("h1",{children:"Follow"})}),Object(m.jsx)(g.a,{variant:"subtitle1",align:"center",color:"text.secondary",component:"p",children:t}),Object(m.jsx)(f,{})]})})},y=function(e){var t=e.children;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),Object(m.jsx)("div",{children:t}),Object(m.jsx)(w,{})]})},k=(c(127),c(84)),_={width:"80vw",height:"80vh"},N={lat:23.745,lng:55.523},I={disableDefaultUI:!0,zoomControl:!0};function q(){var e=Object(k.b)({id:"google-map-script",googleMapsApiKey:"AIzaSyCDPoG4hm5PMe-JLi9b0UwE9of7faaiTo4"}).isLoaded,t=n.a.useState(null),c=Object(r.a)(t,2),i=(c[0],c[1]);n.a.useCallback((function(e){var t=new window.google.maps.LatLngBounds;e.fitBounds(t),i(e)}),[]),n.a.useCallback((function(e){i(null)}),[]);return e?Object(m.jsx)(k.a,{mapContainerStyle:_,center:N,zoom:3,options:I,children:Object(m.jsx)(m.Fragment,{})}):Object(m.jsx)(m.Fragment,{})}var S=n.a.memo(q),C=c(68),L=function(){return Object(m.jsxs)("div",{className:"map-hero-container",children:[Object(m.jsx)(C.a,{cursor:!1,sequence:["Where to?",2e3],wrapper:"h1"}),Object(m.jsx)(S,{})]})},R=(c(129),function(){return Object(m.jsx)("div",{className:"front-hero-container frontheadline-text",children:Object(m.jsx)(C.a,{cursor:!1,sequence:["Start your adventure"],wrapper:"h1"})})}),H=function(){return Object(m.jsxs)("div",{className:"hero-container",children:[Object(m.jsx)(R,{}),Object(m.jsx)(L,{})]})},J=c(165),B=c(166),T=c(167),z=(c(130),function(e){return Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:"card__body",children:[Object(m.jsx)("h2",{className:"card__title",children:e.title}),Object(m.jsx)("p",{className:"card__description",children:e.description})]})})}),M=c(40),W=(c(92),function(e){return Object(m.jsx)("div",{className:"foto-carousel-container",children:Object(m.jsxs)(M.a,{indicators:!1,interval:null,children:[Object(m.jsx)(M.a.Item,{children:Object(m.jsx)("img",{src:e.img1,alt:e.alt})}),Object(m.jsx)(M.a.Item,{children:Object(m.jsx)("img",{src:e.img2,alt:e.alt})})]})})}),A=function(e){return Object(m.jsx)(J.a,{className:"imga",children:Object(m.jsxs)(B.a,{children:[Object(m.jsx)(T.a,{children:Object(m.jsx)(z,{title:e.title,description:e.description})}),Object(m.jsx)(T.a,{children:Object(m.jsx)(W,{img1:e.img1,img2:e.img2,alt:e.alt})})]})})},E=(c(131),c(132),function(e){return Object(m.jsx)(J.a,{className:"imga",children:Object(m.jsxs)(B.a,{children:[Object(m.jsx)(T.a,{children:Object(m.jsx)(W,{img1:e.img1,img2:e.img2,alt:e.alt})}),Object(m.jsx)(T.a,{children:Object(m.jsx)(z,{title:e.title,description:e.description})})]})})}),F=function(e){return Object(m.jsx)(J.a,{children:Object(m.jsxs)(B.a,{children:[Object(m.jsxs)(T.a,{sm:7,children:[Object(m.jsx)("div",{className:"vertical",children:Object(m.jsx)(z,{title:e.title1,description:e.description1})}),Object(m.jsx)("div",{className:"vertical",children:Object(m.jsx)(z,{title:e.title2,description:e.description2})})]}),Object(m.jsx)(T.a,{children:Object(m.jsx)(W,{img1:e.img1,img2:e.img2,alt:e.alt})})]})})},G=function(e){return Object(m.jsx)(J.a,{children:Object(m.jsxs)(B.a,{children:[Object(m.jsx)(T.a,{children:Object(m.jsx)(W,{img1:e.img1,img2:e.img2,alt:e.alt})}),Object(m.jsxs)(T.a,{sm:7,children:[Object(m.jsx)("div",{className:"vertical",children:Object(m.jsx)(z,{title:e.title1,description:e.description1})}),Object(m.jsx)("div",{className:"vertical",children:Object(m.jsx)(z,{title:e.title2,description:e.description2})})]})]})})},D=c.p+"static/media/IMG_0557.376e7d95.jpg",K=c.p+"static/media/DJI_0040.bf388be8.jpg",P=c.p+"static/media/DSC_8988-2.716e2bb2.jpg",U=function(){return Object(m.jsxs)("div",{className:"iceland-contentcontainer",children:[Object(m.jsx)("div",{className:" componenten-container",children:Object(m.jsx)(A,{img1:K,img2:P,alt:"hoi",title:"Kopstuk ",description:" Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia svitae quibusdaiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium."})}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:" componenten-container",children:Object(m.jsx)(E,{img1:K,img2:P,alt:"hoi",title:"Kopstuk ",description:" Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia svitae quibusdaiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium."})}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:" componenten-container",children:Object(m.jsx)(F,{img1:D,img2:D,alt:"hoi",title1:"Kopstuk ",description1:" Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia svitae quibusdaiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium.",title2:"Kopstuk ",description2:" Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia svitae quibusdaiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium."})}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:" componenten-container",children:Object(m.jsx)(G,{img1:D,img2:D,alt:"hoi",title1:"Kopstuk ",description1:" Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia svitae quibusdaiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium.",title2:"Kopstuk ",description2:" Lorem ipsum dolor sit amet. Qui illo sunt ut consequatur quia svitae quibusdaiores ut ipsum consequatur aut totam temporibus. Hic consequatur nihil ut obcaecati odit aut autem praesentium."})})]})},Q=c(177),V=c(172),Y=c(102),X=c.n(Y),Z=c(104),$=c.n(Z),ee=c(103),te=c.n(ee),ce=c(105),ie=c(173),ne=c(178),ae=c(179);var se=function(e){var t=e.post;return Object(m.jsxs)(ne.a,{sx:{position:"relative",backgroundColor:"grey.800",color:"#fff",mb:4,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:"url(".concat(t.image,")")},children:[Object(m.jsx)("img",{style:{display:"none"},src:t.image,alt:t.imageText}),Object(m.jsx)(p.a,{sx:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"}}),Object(m.jsx)(V.a,{container:!0,children:Object(m.jsx)(V.a,{item:!0,md:6,children:Object(m.jsxs)(p.a,{sx:{position:"relative",p:{xs:3,md:6},pr:{md:0}},children:[Object(m.jsx)(g.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,children:t.title}),Object(m.jsx)(g.a,{variant:"h5",color:"inherit",paragraph:!0,children:t.description}),Object(m.jsx)(ae.a,{variant:"subtitle1",href:"#",children:t.linkText})]})})})]})},re=c(180),oe=c(170),le=c(181),je=c(182);var de=function(e){var t=e.post;return Object(m.jsx)(V.a,{item:!0,xs:12,md:6,children:Object(m.jsx)(oe.a,{component:"a",href:"#",children:Object(m.jsxs)(re.a,{sx:{display:"flex"},children:[Object(m.jsxs)(le.a,{sx:{flex:1},children:[Object(m.jsx)(g.a,{component:"h2",variant:"h5",children:t.title}),Object(m.jsx)(g.a,{variant:"subtitle1",color:"text.secondary",children:t.date}),Object(m.jsx)(g.a,{variant:"subtitle1",paragraph:!0,children:t.description}),Object(m.jsx)(g.a,{variant:"subtitle1",color:"primary",children:"Continue reading..."})]}),Object(m.jsx)(je.a,{component:"img",sx:{width:160,display:{xs:"none",sm:"block"}},image:t.image,alt:t.imageLabel})]})})})},ue=c(13);c(101);g.a,g.a,g.a,g.a,g.a,ae.a;var be=function(){return Object(m.jsx)(V.a,{item:!0,xs:12,md:8,sx:{"& .markdown":{py:3}},children:Object(m.jsx)(U,{})})},he=c(168);var me=function(e){var t=e.archives,c=e.description,i=e.social,n=e.title;return Object(m.jsxs)(V.a,{item:!0,xs:12,md:4,children:[Object(m.jsxs)(ne.a,{elevation:0,sx:{p:2,bgcolor:"grey.200"},children:[Object(m.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:n}),Object(m.jsx)(g.a,{children:c})]}),Object(m.jsx)(g.a,{variant:"h6",gutterBottom:!0,sx:{mt:3},children:"Archives"}),t.map((function(e){return Object(m.jsx)(ae.a,{display:"block",variant:"body1",href:e.url,children:e.title},e.title)})),Object(m.jsx)(g.a,{variant:"h6",gutterBottom:!0,sx:{mt:3},children:"Social"}),i.map((function(e){return Object(m.jsx)(ae.a,{display:"block",variant:"body1",href:"#",sx:{mb:.5},children:Object(m.jsxs)(he.a,{direction:"row",spacing:1,alignItems:"center",children:[Object(m.jsx)(e.icon,{}),Object(m.jsx)("span",{children:e.name})]})},e.name)}))]})},xe=(c.p,c.p,c.p,c(133),{title:"This is our blog",description:"We post here our newest blogs, this is just everything in one page. You can click on a country below, and check out the blog for that country",image:c.p+"static/media/IMG_0639.88a6c227.jpg",imageText:"main image description",linkText:"Continue reading\u2026"}),pe=[{title:"Featured post",date:"Nov 12",description:"This is a wider card where we show iceland content.",image:D,imageLabel:"Image Text"},{title:"Post title",date:"Nov 11",description:"This is a wider card where we show bali content.",image:D,imageLabel:"Image Text"}],Oe={title:"About",description:"Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",archives:[{title:"March 2020",url:"#"},{title:"February 2020",url:"#"},{title:"January 2020",url:"#"},{title:"November 1999",url:"#"},{title:"October 1999",url:"#"},{title:"September 1999",url:"#"},{title:"August 1999",url:"#"},{title:"July 1999",url:"#"},{title:"June 1999",url:"#"},{title:"May 1999",url:"#"},{title:"April 1999",url:"#"}],social:[{name:"GitHub",icon:X.a},{name:"Twitter",icon:te.a},{name:"Facebook",icon:$.a}]},ge=Object(ce.a)();function ve(){return Object(m.jsx)("div",{className:"blog-background",children:Object(m.jsx)("div",{className:"blog-container",children:Object(m.jsxs)(ie.a,{theme:ge,children:[Object(m.jsx)(Q.a,{}),Object(m.jsx)(O.a,{maxWidth:"lg",children:Object(m.jsxs)("main",{children:[Object(m.jsx)(se,{post:xe}),Object(m.jsx)(V.a,{container:!0,spacing:4,children:pe.map((function(e){return Object(m.jsx)(de,{post:e},e.title)}))}),Object(m.jsx)("hr",{}),Object(m.jsxs)(V.a,{container:!0,spacing:5,sx:{mt:3},children:[Object(m.jsx)(be,{}),Object(m.jsx)(me,{title:Oe.title,description:Oe.description,archives:Oe.archives,social:Oe.social})]})]})})]})})})}var fe=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(ve,{})})},we=(c(134),function(e){var t=e.number;return Object(m.jsx)(J.a,{className:"aboutus-text",style:{paddingTop:20,paddingRight:100,paddingLeft:100,paddingBottom:20},children:Object(m.jsxs)(M.a,{className:"carousel-container",interval:null,controls:!1,activeIndex:t,indicators:!1,children:[Object(m.jsxs)(M.a.Item,{children:[Object(m.jsx)("h1",{children:"Remco"}),Object(m.jsx)("p",{children:"Hey! I\u2019m Remco, I\u2019m an software engineer based in Sassenheim, NL and the maker of this website. I\u2019m currently studying web development. Besides making websites in my free time, I am busy with crypto, pc hardware, software programs. So I am a little bit of a nerd in tech. On the other side I am a very active person. I used to do top sport in speedskating, next to that I cycle, run, body build. I love to travel the world and make a vacation active, so with our plan I hope to combine these aspects. "}),Object(m.jsx)(v.SocialIcon,{url:"https://twitter.com/Remcolang",network:"twitter",style:{marginRight:15}}),Object(m.jsx)(v.SocialIcon,{url:"https://www.instagram.com/remcolangemaire/",network:"instagram",style:{marginRight:15}}),Object(m.jsx)(v.SocialIcon,{url:"https://www.youtube.com/channel/UC-qODza4NJhV_fJfnE1jWww",network:"youtube",style:{marginRight:15}}),Object(m.jsx)(v.SocialIcon,{url:"https://www.facebook.com/profile.php?id=100008816744304",network:"facebook"})]}),Object(m.jsxs)(M.a.Item,{children:[Object(m.jsx)("h1",{children:"Jord"}),Object(m.jsx)("p",{children:"Hey! I\u2019m Jord, I\u2019m an adventure/travel photographer based in Noordwijk, NL. I\u2019m currently the main photographer behind ProjectWorldNL, and love to travel the world to tell our story through my photography. By sharing our experiences and encouraging others to go out and explore. At the moment I\u2019m unfortunately not able to fully live the dream, because I\u2019m still a third year Industrial Design student. But would love to make this a full time job!"}),Object(m.jsx)(v.SocialIcon,{url:"https://twitter.com/Jord33Sytsema",network:"twitter",style:{marginRight:15}}),Object(m.jsx)(v.SocialIcon,{url:"https://www.instagram.com/george_the_mx5/",network:"instagram",style:{marginRight:15}}),Object(m.jsx)(v.SocialIcon,{url:"https://www.youtube.com/channel/UC0A0v9kaUGL27KCkGmS_Vog",network:"youtube",style:{marginRight:15}}),Object(m.jsx)(v.SocialIcon,{url:"https://www.facebook.com/jord.sytsema",network:"facebook"})]}),Object(m.jsxs)(M.a.Item,{children:[Object(m.jsx)("h1",{children:"Third slide label"}),Object(m.jsx)("p",{children:"Who am I? To be honest some times I don't even know the awnser to that question. Others often call me crazy and impulsive, wich is something I can't argue with to be honest. Since I've given up my study to play for an e-sports team, I've finnaly been able to find out where my passion lies and who I am. I became a pretty succesfull coach and analist in the gaming industry. But decieded I wanted to take a step back from that life in 2022. Being a bit lost after quiting, I one day reciesved a message from a friend to go and travel the world. Offcourse I couldn't recist and had to say yes to this oppertunity. Which leads us to the current day, in wich were constantly looking at our next oppertunity to travel, explore and intorduce to others.  "}),Object(m.jsx)(v.SocialIcon,{url:"https://twitter.com/Remcolang",network:"twitter",style:{marginRight:15}}),Object(m.jsx)(v.SocialIcon,{url:"https://www.instagram.com/remcolangemaire/",network:"instagram",style:{marginRight:15}}),Object(m.jsx)(v.SocialIcon,{url:"https://www.youtube.com/channel/UC-qODza4NJhV_fJfnE1jWww",network:"youtube",style:{marginRight:15}}),Object(m.jsx)(v.SocialIcon,{url:"https://www.facebook.com/profile.php?id=100008816744304",network:"facebook"})]})]})})});we.defaultProps={number:1};var ye=we,ke=c.p+"static/media/IMG_7993.2168973f.png",_e=c.p+"static/media/IMG_8272.1f412ec6.png",Ne=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(m.jsxs)("div",{className:"about-hero-container imgas",children:[Object(m.jsx)(B.a,{className:"content-containers",children:Object(m.jsxs)("div",{className:"wrapper imgass",children:[Object(m.jsx)("div",{onClick:function(){return n(0)},children:Object(m.jsx)("img",{src:ke,alt:"Remco"})}),Object(m.jsx)("div",{onClick:function(){return n(1)},children:Object(m.jsx)("img",{src:_e,alt:"Remco"})})]})}),Object(m.jsx)(B.a,{children:Object(m.jsx)(ye,{number:c})})]})},Ie=function(){return Object(m.jsx)("div",{className:"hero-container",children:Object(m.jsx)(Ne,{})})},qe=(c(135),c(48)),Se=function(){return Object(m.jsxs)("div",{className:"contactcont",children:[Object(m.jsx)("h1",{children:"Contact us"}),Object(m.jsxs)("div",{id:"contact-container",children:[Object(m.jsxs)("div",{className:"contact-info",children:[Object(m.jsx)("h4",{children:"Contact Information"}),Object(m.jsx)("p",{children:"Fill up the form and then click send"}),Object(m.jsxs)("div",{className:"icon-text",children:[Object(m.jsx)(qe.a,{}),Object(m.jsx)("span",{children:"+31-623493617"})]}),Object(m.jsxs)("div",{className:"icon-text",children:[Object(m.jsx)(qe.a,{}),Object(m.jsx)("span",{children:"+31-610695887"})]}),Object(m.jsxs)("div",{className:"icon-text",children:[Object(m.jsx)(qe.b,{}),Object(m.jsx)("span",{children:"projectworldnl@gmail.com"})]}),Object(m.jsxs)("div",{className:"social-media",children:[Object(m.jsx)("a",{href:"#",className:"icon-circle",children:Object(m.jsx)(qe.c,{className:"iconsize"})}),Object(m.jsx)("a",{href:"#",className:"icon-circle",children:Object(m.jsx)(qe.c,{className:"iconsize"})}),Object(m.jsx)("a",{href:"#",className:"icon-circle",children:Object(m.jsx)(qe.c,{className:"iconsize"})})]})]}),Object(m.jsx)("form",{children:Object(m.jsxs)("div",{className:"col",children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"First Name"}),Object(m.jsx)("input",{type:"text"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"First Name"}),Object(m.jsx)("input",{type:"text"})]})]})})]})]})},Ce=(c(93),function(){return Object(m.jsx)("div",{className:"header-padding background-contact",children:Object(m.jsx)(Se,{})})}),Le=function(){return Object(m.jsx)("div",{className:"background-services",children:Object(m.jsx)("h1",{children:"Coming soon"})})};var Re=function(){return Object(m.jsx)("div",{className:"background-shop",children:Object(m.jsx)("h1",{children:"Coming soon"})})};var He=function(){return Object(m.jsx)(y,{children:Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{path:"/",exact:!0,children:Object(m.jsx)(H,{})}),Object(m.jsx)(u.a,{path:"/page-shop",children:Object(m.jsx)(Re,{})}),Object(m.jsx)(u.a,{path:"/page-blog",children:Object(m.jsx)(fe,{})}),Object(m.jsx)(u.a,{path:"/page-about",children:Object(m.jsx)(Ie,{})}),Object(m.jsx)(u.a,{path:"/page-Services",children:Object(m.jsx)(Le,{})}),Object(m.jsx)(u.a,{path:"/page-contact",children:Object(m.jsx)(Ce,{})})]})})};c(136);s.a.render(Object(m.jsx)(b.a,{children:Object(m.jsx)(He,{})}),document.getElementById("root"))},47:function(e,t,c){e.exports={header:"Header_header__1fCsm",header__content:"Header_header__content___-3kf",header__content__logo:"Header_header__content__logo__lYdgf",header__content__nav:"Header_header__content__nav__2k7VY",isMenu:"Header_isMenu__2kdVd",header__content__toggle:"Header_header__content__toggle__I6XNt"}},92:function(e,t,c){},93:function(e,t,c){}},[[137,1,2]]]);
//# sourceMappingURL=main.f26e89cf.chunk.js.map