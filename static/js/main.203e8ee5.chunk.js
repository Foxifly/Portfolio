(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/profile-photo.c87982ef.jpg"},,function(e,a,t){e.exports=t.p+"static/media/codecademy-logo.8bf89e75.png"},,function(e,a,t){e.exports=t.p+"static/media/albion-college-logo.a8857c2c.png"},,function(e,a,t){e.exports=t(62)},,,,,function(e,a,t){},,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/spurofthemoment.b0fc1219.jpg"},function(e,a,t){e.exports=t.p+"static/media/froggerclone.a084f2b7.jpg"},function(e,a,t){e.exports=t.p+"static/media/memorygame.6f22369a.jpg"},function(e,a,t){e.exports=t.p+"static/media/foxbot.4bb016fb.jpg"},function(e,a,t){e.exports=t.p+"static/media/foxdensite.63ec469c.jpg"},function(e,a,t){e.exports=t.p+"static/media/jamming.a3e67e54.jpg"},function(e,a,t){e.exports=t.p+"static/media/myreads.42233b83.jpg"},function(e,a,t){e.exports=t.p+"static/media/pixelartmaker.c72e2776.jpg"},function(e,a,t){e.exports=t.p+"static/media/udacity-logo.e485d738.png"},function(e,a,t){e.exports=t.p+"static/media/FrontEndDev-Certificate.765f4e18.svg"},function(e,a,t){e.exports=t.p+"static/media/FrontEndApps-Credential.f0e4ec63.png"},function(e,a,t){e.exports=t.p+"static/media/BuildWebsiteUIs-Credential.14bfe962.png"},function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(18),o=t.n(r),c=(t(26),t(2)),s=t(3),l=t(4),d=t(5),m=t(6),u=t(9),p=t(10),h=t(8),b=t(11),g=(t(30),t(7));p.b.add(g.b,g.d,g.h,b.d,b.c);var f=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(d.a)(a).call(this,e))).state={isHide:!0},t.hideBar=t.hideBar.bind(Object(u.a)(Object(u.a)(t))),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"hideBar",value:function(){window.scrollY>710?this.setState({isHide:!1}):window.scrollY<=710&&this.setState({isHide:!0})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.hideBar)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.hideBar)}},{key:"render",value:function(){var e=this.state.isHide?"hide":"";return i.a.createElement("nav",{className:"topbar "+e},i.a.createElement("ul",{"aria-label":"navigation links",className:"nav-list"},i.a.createElement("li",{"aria-describedby":"social-media-link",className:"sm-nav-item"},i.a.createElement("a",{className:"social-media-link","aria-label":"facebook",target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/mystiqueyq"},i.a.createElement(h.a,{icon:["fab","facebook-square"]}))),i.a.createElement("li",{"aria-describedby":"social-media-link",className:"sm-nav-item"},i.a.createElement("a",{className:"social-media-link","aria-label":"github",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Foxifly?tab=repositories"},i.a.createElement(h.a,{icon:["fab","github"]}))),i.a.createElement("li",{"aria-describedby":"social-media-link",className:"sm-nav-item"},i.a.createElement("a",{className:"social-media-link","aria-label":"linkedin",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/lciastko/"},i.a.createElement(h.a,{icon:["fab","linkedin"]}))),i.a.createElement("li",{"aria-describedby":"social-media-link",className:"sm-nav-item"},i.a.createElement("a",{className:"social-media-link","aria-label":"resume",target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/document/d/1tqaZf6iVW4Nzqr6PZrKaVlHSD-_FWOqWCngYtlq77wo/edit?usp=sharing"},i.a.createElement(h.a,{icon:["fas","file"]}))),i.a.createElement("li",{"aria-describedby":"social-media-link",className:"sm-nav-item"},i.a.createElement("a",{className:"social-media-link","aria-label":"email",href:"mailto:laciastko@gmail.com"},i.a.createElement(h.a,{icon:["fas","envelope"]})))))}}]),a}(n.Component),y=t(15),v=t.n(y),E=(t(32),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(d.a)(a).call(this,e))).state={isAboutHidden:!0},t.state={isAboutHidden:!0},t.openAbout=t.openAbout.bind(Object(u.a)(Object(u.a)(t))),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"openAbout",value:function(){var e=!this.state.isAboutHidden;this.setState({isAboutHidden:e})}},{key:"render",value:function(){var e=this.state.isAboutHidden;return e?i.a.createElement("article",{className:"about"},i.a.createElement("div",{"aria-hidden":"true",className:"anchor",id:"about"}),i.a.createElement("div",{"aria-labelledby":"heading-about",className:"title-heading-wrapper"},i.a.createElement("h2",{"aria-describedby":"about-text-wrapper",className:"heading-about"},"About")),i.a.createElement("div",{className:"about-container"},i.a.createElement("div",{className:"image-wrapper"},i.a.createElement("div",{"aria-describedby":"about-text-wrapper",className:"image-container"},i.a.createElement("img",{alt:"Lindsay Ciastko",className:"profile-photo",src:v.a}))),i.a.createElement("section",{"aria-labelledby":"heading-about","aria-label":"About Lindsay",className:"about-text-wrapper"},i.a.createElement("p",null,"Enhancing peoples' lives drives me to create revolutionary concepts passionately. I love designing customer-focused and customer-centric user experiences, which propels me to think \"outside the box\" to develop unique ideas. I offer my singleminded devotion to innovative concepts, developing unparalleled designs, and leading technical development. My technical understanding and creative mindset enable me to quickly discover customers' pain points and assemble originative solutions accordingly. This has been my drive and concentration throughout my career and studies."),i.a.createElement("button",{onClick:this.openAbout},"Show More")))):0==e?i.a.createElement("article",{className:"about"},i.a.createElement("div",{"aria-hidden":"true",className:"anchor",id:"about"}),i.a.createElement("div",{"aria-labelledby":"heading-about",className:"title-heading-wrapper"},i.a.createElement("h2",{"aria-describedby":"about-text-wrapper",className:"heading-about"},"About")),i.a.createElement("div",{className:"about-container"},i.a.createElement("div",{className:"image-wrapper"},i.a.createElement("div",{"aria-describedby":"about-text-wrapper",className:"image-container"},i.a.createElement("img",{alt:"Lindsay Ciastko",className:"profile-photo",src:v.a}))),i.a.createElement("section",{"aria-labelledby":"heading-about","aria-label":"About Lindsay",className:"about-text-wrapper"},i.a.createElement("p",null,"Enhancing peoples' lives drives me to create revolutionary concepts passionately. I love designing customer-focused and customer-centric user experiences, which propels me to think \"outside the box\" to develop unique ideas. I offer my singleminded devotion to innovative concepts, developing unparalleled designs, and leading technical development. My technical understanding and creative mindset enable me to quickly discover customers' pain points and assemble originative solutions accordingly. This has been my drive and concentration throughout my career and studies."),i.a.createElement("p",null,"Whether it is helping someone understand their wants/desires, resolve their technical issues, or designing a digital or tangible product, I have always put people at the center of my thoughts, actions, and processes. While I am independently motivated, I appreciate collective efforts and collaborate productively within group settings."),i.a.createElement("p",null,"Furthermore, my innovation, problem-solving, and critical thinking abilities will support any continued organizational efforts. I am most passionate about constructing and refining design models that wow users with their usefulness. This is the cornerstone of establishing the foundation for client growth and retention, which inevitably drives success."),i.a.createElement("p",null,"Core Expertise:",i.a.createElement("ul",null,i.a.createElement("li",{class:"core-expertise"}," Project Management "),i.a.createElement("li",{class:"core-expertise"}," UI/UX Design "),i.a.createElement("li",{class:"core-expertise"}," User Engagement "),i.a.createElement("li",{class:"core-expertise"}," Usability Testing "),i.a.createElement("li",{class:"core-expertise"}," Prototyping "),i.a.createElement("li",{class:"core-expertise"}," Front-End Development "))),i.a.createElement("p",null,"Searching for a professional with technical proficiency in UX/UI design, usability testing, and project management? We should connect!"),i.a.createElement("button",{onClick:this.openAbout},"Show Less")))):void 0}}]),a}(n.Component)),w=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(d.a)(a).call(this,e))).state={modal:!1},t.handleClick=t.handleClick.bind(Object(u.a)(Object(u.a)(t))),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"handleClick",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this.props.course,a=this.state.modal;return i.a.createElement("div",{"aria-labelledby":"course-type",className:"education-content"},i.a.createElement("h3",{"aria-describedby":"course-description",className:"course-type"},e.type),i.a.createElement("img",{alt:e.name,className:"course-logo",src:e.logo}),i.a.createElement("p",{className:"course-description"},e.description),i.a.createElement("button",{onClick:this.handleClick,className:"more-info"},"More Info"),a&&i.a.createElement("div",{"aria-hidden":!this.state.modal,className:"modal"},i.a.createElement("div",{"aria-labelledby":"name",className:"edu-modal-content"},i.a.createElement("div",{"aria-labelledby":"name","aria-describedby":"date",className:"heading-wrapper"},i.a.createElement("h3",{className:"name",id:"name"},e.type," (",e.name,")"),i.a.createElement("h4",{className:"date"},e.date)),i.a.createElement("div",{className:"cert-img-wrapper"},i.a.createElement("img",{className:"cert-img",alt:"".concat(e.type," certificate from ").concat(e.name),src:e.certificate})),i.a.createElement("div",{"aria-labelledby":"name","aria-describedby":"description",className:"description-wrapper"},i.a.createElement("p",{className:"description"},e.long_description)),i.a.createElement("div",{"aria-labelledby":"name","aria-describedby":"description",className:"course-link-wrapper-1"},i.a.createElement("a",{className:"edu-link",target:"_blank",rel:"noopener noreferrer",href:e.certificate_url},"Certificate")),i.a.createElement("div",{"aria-labelledby":"name","aria-describedby":"description",className:"course-link-wrapper-2"},i.a.createElement("a",{className:"edu-link",target:"_blank",rel:"noopener noreferrer",href:e.course_url},"Course")),i.a.createElement("div",{"aria-labelledby":"name","aria-describedby":"description",className:"close-button-wrapper"},i.a.createElement("button",{onClick:this.handleClick,className:"invalid-input-button"},"Close")))))}}]),a}(n.Component),j=(t(34),t(19)),k=t.n(j),N=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.courseWork;return i.a.createElement("article",{className:"education"},i.a.createElement("div",{"aria-hidden":"true",className:"anchor",id:"education"}),i.a.createElement("div",{className:"title-heading-wrapper"},i.a.createElement("h2",null,"Education")),i.a.createElement("div",{className:"education-container"},e.map(function(e){return i.a.createElement(w,{key:e.key,course:e})}),i.a.createElement("div",{className:"albion-education-content"},i.a.createElement("h3",null,"Physics Major, Chemistry Minor"),i.a.createElement("img",{alt:"albion college",className:"albion-logo",src:k.a}),i.a.createElement("p",null,"Graduated with a 3.11 GPA. Completed project using the Discovery Channel Telescope in Happy Jack, AZ to collect data on Binary Star Systems. These data were analyzed using command prompt."))))}}]),a}(n.Component);p.b.add(g.j,g.a,g.f,g.k,g.c,g.g,g.i,g.e,b.b,b.e);var O=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(d.a)(a).call(this,e))).state={hover:!1},t.onMouseEnterHandler=t.onMouseEnterHandler.bind(Object(u.a)(Object(u.a)(t))),t.onMouseLeaveHandler=t.onMouseLeaveHandler.bind(Object(u.a)(Object(u.a)(t))),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"onMouseEnterHandler",value:function(){this.setState({hover:!0})}},{key:"onMouseLeaveHandler",value:function(){var e=this;setTimeout(function(){e.setState({hover:!1})},200)}},{key:"render",value:function(){var e=this.props.projectInfo;return i.a.createElement("div",{className:"project-content"},i.a.createElement("div",{style:{width:"100%",height:220,backgroundImage:"url(".concat(e.image,")"),backgroundSize:"cover",backgroundPosition:"center"},className:"project-image",onMouseEnter:this.onMouseEnterHandler,onMouseLeave:this.onMouseLeaveHandler},this.state.hover&&i.a.createElement("div",{className:"hidden-overlay"},i.a.createElement("h3",{className:"project-name"},e.name),i.a.createElement("p",{className:"project-date"},e.date),i.a.createElement("div",{className:"project-lang-container"},e.language.map(function(e){return i.a.createElement("p",{key:e,className:"lang-icon"},i.a.createElement(h.a,{icon:["fab",e]}))})),i.a.createElement("p",{className:"project-bio"},e.bio),i.a.createElement("a",{className:"linkButton",target:"_blank",rel:"noopener noreferrer",href:e.demo},i.a.createElement(h.a,{icon:["fas","desktop"]})),i.a.createElement("a",{className:"linkButton",target:"_blank",rel:"noopener noreferrer",href:e.github},i.a.createElement(h.a,{icon:["fas","link"]})))))}}]),a}(n.Component),x=(t(36),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.projectList;return i.a.createElement("article",{className:"projects"},i.a.createElement("div",{"aria-hidden":"true",className:"anchor",id:"projects"}),i.a.createElement("div",{className:"title-heading-wrapper"},i.a.createElement("h2",null,"Projects")),i.a.createElement("div",{className:"project-container"},e.map(function(e){return i.a.createElement(O,{key:e.name,projectInfo:e})})))}}]),a}(n.Component)),C=(t(38),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={actionWords:["amazing","beautiful","special","creative","big","innovative","inventive","new","exciting"],actionWord:"awesome"},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"changeActionWord",value:function(){var e=this.state.actionWords[Math.floor(Math.random()*this.state.actionWords.length)];this.setState({actionWord:e})}},{key:"componentDidMount",value:function(){setInterval(function(){this.changeActionWord()}.bind(this),5e3)}},{key:"render",value:function(){return i.a.createElement("article",{className:"contact"},i.a.createElement("div",{"aria-hidden":"true",className:"anchor",id:"contact"}),i.a.createElement("h2",{"aria-describedby":"connect-paragraph",className:"connect"},"LET'S CONNECT"),i.a.createElement("p",{"aria-labelledby":"connect",className:"connect-paragraph"},"I would love to connect with you. I am currently available for freelance projects, open job positions, and more.",i.a.createElement("br",null)," ","Let's work together to build something ".concat(this.state.actionWord,"."),i.a.createElement("br",null)," ",i.a.createElement("br",null)," ",i.a.createElement("a",{href:"mailto:laciastko@gmail.com",role:"button",className:"contact-button"},"CONTACT")))}}]),a}(n.Component)),A=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("footer",{"aria-labelledby":"copyright"},i.a.createElement("h5",{"aria-describedby":"rights-reserved",className:"copyright"},"Copyright 2018 - Lindsay A Ciastko"),i.a.createElement("h6",{"aria-describedby":"copyright",className:"rights-reserved"},"All Rights Reserved"))}}]),a}(n.Component),S=t(20),M=t.n(S);t(44);p.b.add(g.j,g.a,g.f,g.k,g.c,g.g,g.i,g.e,b.a);var I=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={designHidden:!0,determinationHidden:!0,developmentHidden:!0},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({designHidden:!1})},2e3),setTimeout(function(){e.setState({developmentHidden:!1})},3e3),setTimeout(function(){e.setState({determinationHidden:!1})},4e3)}},{key:"render",value:function(){var e=this.state,a=e.designHidden,t=e.determinationHidden,n=e.developmentHidden;return i.a.createElement("div",null,i.a.createElement("div",{"aria-labelledby":"lindsay",className:"main-landing"},i.a.createElement("div",{"aria-labelledby":"lindsay","aria-describedby":"icon-container",className:"name-wrapper"},i.a.createElement("h1",{className:"lindsay"}," Lindsay Ciastko")),i.a.createElement("div",{className:"icon-container"},i.a.createElement("div",{role:"img",alt:"html5",className:"code-icon"},i.a.createElement(h.a,{icon:["fab","html5"]})),i.a.createElement("div",{role:"img",alt:"css",className:"code-icon"},i.a.createElement(h.a,{icon:["fab","css3-alt"]})),i.a.createElement("div",{role:"img",alt:"javascript",className:"code-icon"},i.a.createElement(h.a,{icon:["fab","js-square"]})),i.a.createElement("div",{role:"img",alt:"react",className:"code-icon"},i.a.createElement(h.a,{icon:["fab","react"]})),i.a.createElement("div",{role:"img",alt:"node",className:"code-icon"},i.a.createElement(h.a,{icon:["fab","node"]})),i.a.createElement("div",{role:"img",alt:"sass",className:"code-icon"},i.a.createElement(h.a,{icon:["fab","sass"]})),i.a.createElement("div",{role:"img",alt:"git",className:"code-icon"},i.a.createElement(h.a,{icon:["fab","git"]})),i.a.createElement("div",{role:"img",alt:"gulp",className:"code-icon"},i.a.createElement(h.a,{icon:["fab","gulp"]}))),i.a.createElement("div",{"aria-describedby":"desc-word-1",className:"desc-word-wrapper"},!a&&i.a.createElement("h2",{"aria-hidden":!a,className:"desc-word-1"},"Design."),!n&&i.a.createElement("h2",{"aria-hidden":!a,className:"desc-word-2"},"Development."),!t&&i.a.createElement("h2",{"aria-hidden":!a,className:"desc-word-3"},"Determination.")),i.a.createElement("div",{"aria-labelledby":"go-down",className:"down"},i.a.createElement("a",{href:"#about"},i.a.createElement("div",{role:"button","aria-label":"go down",className:"go-down"},i.a.createElement(h.a,{icon:["fas","chevron-circle-down"]})))),i.a.createElement("div",{role:"navigation",className:"nav-container"},i.a.createElement("a",{href:"#about"},i.a.createElement("div",{className:"nav-wrapper-a"},"ABOUT")),i.a.createElement("a",{href:"#education"},i.a.createElement("div",{className:"nav-wrapper-b"},"EDUCATION")),i.a.createElement("a",{href:"#projects"},i.a.createElement("div",{className:"nav-wrapper-c"},"PROJECTS")),i.a.createElement("a",{href:"#contact"},i.a.createElement("div",{className:"nav-wrapper-d"},"CONTACT")))))}}]),a}(n.Component),T=M()(I),H=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.courseWork,t=e.projectList;return i.a.createElement("main",{className:"App"},i.a.createElement(f,null),i.a.createElement(T,null),i.a.createElement(E,null),i.a.createElement(N,{courseWork:a}),i.a.createElement(C,null),i.a.createElement(x,{projectList:t}),i.a.createElement(A,null))}}]),a}(n.Component),W=[{name:"Spur of the Moment",language:["html5","css3-alt","js-square","react"],image:t(46),date:"September 2018",github:"https://github.com/Foxifly/Udacity-Map-Project",demo:"https://foxifly.github.io/Udacity-Map-Project/",bio:"Part of the final project for Udacity's Front End Course, Spur of the Moment is an accessibility friendly application brought to life using Google Maps, Yelp, and more."},{name:"Arcade Game Clone",language:["html5","css3-alt","js-square"],image:t(47),date:"August 2018",github:"https://github.com/Foxifly/Arcade-Game-Clone",demo:"https://udacity.lindsayciastko.com/FroggerClone/Arcade%20Game%20Clone/",bio:"Used Object Oriented JavaScript to create a Frogger game clone. As provided by Udacity, students were to create player and enemy entity classes that would spawn on the canvas."},{name:"Memory Game",image:t(48),language:["html5","css3-alt","js-square"],date:"May 2018",github:"https://github.com/Foxifly/Udacity-Memory-Game",demo:"https://udacity.lindsayciastko.com/memorygame/",bio:"This app runs on the browser and generates a matching game for users to play. The goal of the game is to pair each card with a card that has a matching image."},{name:"Fox Bot",image:t(49),language:["node"],date:"Ongoing",github:"https://github.com/Foxifly/Fox-Bot",demo:"https://plug.dj/foxdenedm",bio:"Fox Bot is an chat application created using Node.js for a music sharing site, Plug.dj. This bot creates several calls to Plug.dj's API to perform its functions. "},{name:"Fox Den EDM Website",image:t(50),language:["html5","css3-alt","sass","js-square","gulp"],date:"November 2018",github:"https://github.com/Foxifly/Fox-Den-Site-WIP",demo:"https://foxdenedm.com/secretagentman",bio:"Built a website to go along with Fox Bot for a music sharing site, Plug.dj. This website connects to Fox Bot's databases to pull in live data and statistics."},{name:"Jamming",image:t(51),language:["js-square","react"],date:"June 2018",github:"https://github.com/Foxifly/jamming",demo:"https://foxifly.github.io/jamming/",bio:"The Codecademy final project required students to create an application that uses the Spotify API to authenticate a user through Spotify in order to create playlists and publish tracks."},{name:"My Reads",image:t(52),language:["js-square","react"],date:"September 2018",github:"https://github.com/Foxifly/My-Reads-Project",demo:"https://foxifly.github.io/My-Reads-Project/",bio:"MyReads is a book sorting and tracking application that allows users to sort and search for books that they are currently reading, want to read, and read. "},{name:"Pixel Art Maker",image:t(53),language:["html5","css3-alt","js-square"],date:"September 2018",github:"https://github.com/Foxifly/Pixel-Art-Maker",demo:"https://udacity.lindsayciastko.com/pixelartmaker/pixelart.html",bio:"This Pixel Art Maker allows users to generate a canvas to draw on and customize. Users can adjust the canvas size, background color, pen color, and more with this single page app."}],L=[{key:"1",name:"Udacity",type:"Front End Development",logo:t(54),date:"April 2018 - October 2018",description:"Nanodegree scholarship obtained through Grow with Google April 2018. Completed 7 projects over the course of six months.",long_description:"I was awarded a Grow with Google scholarship for Udacity\u2019s Front End Development Nanodegree. This course taught me advanced topics in HTML, CSS, JQuery, JavaScript, and React. At the end of the whole program, I was able to build my own accessibility-friendly map application, Spur of the Moment, that integrated with the Google Maps, Yelp, HERE, and PetFinder APIs. Though there were some challenging moments working on this project, I enjoyed working on it every step of the way. I am proud of what I was able to accomplish with Udacity's Nanodegree.",certificate:t(55),certificate_url:"https://confirm.udacity.com/WKVSX4PP",course_url:"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"},{key:"2",name:"Codecademy",type:"Building Web Applications",logo:t(17),date:"April 2018 - June 2018",description:"Learned how to develop interactive front-end applications using JavaScript, Object Oriented Javascript, and React.JS.",long_description:"Completed an 8 week interactive course that discussed the basics of JavaScript, Object Oriented Javascript, and React.JS. To complete the program, the final capstone project was a React Application that connects with the Spotify API. This application allowed users to search for songs from spotify, create a playlist, and push that playlist on Spotify. This project taught me how to utilize requests, React, and JavaScript to create my first React project.",certificate:t(56),certificate_url:"https://www.credential.net/9mf16v0r",course_url:"https://help.codecademy.com/hc/en-us/articles/115000727594-What-curriculum-is-covered-in-Build-Front-End-Apps-from-Scratch"},{key:"3",name:"Codecademy",type:"Building Website UIs",logo:t(17),date:"April 2018 - June 2018",description:"Studied in-depth concepts of website usability, accessibility, color theory, typography, and layouts using HTML and CSS.",long_description:"Completed an 8 week interactive course that discussed the design aspect of HTML and CSS. Covered topics in color theory, typography, and layouts. Additionally, discussed the accessibility aspect of web design. Learned about ARIA roles and labels and how they are utilized and beneficial in everyday HTML. For the capstone project, I took existing HTML and CSS to redesign an imaginary eCommerence website. I made the website responsive using CSS Grid, and added colors for a more user friendly UI. ",certificate:t(57),certificate_url:"https://www.credential.net/bjazfapw",course_url:"https://help.codecademy.com/hc/en-us/articles/115003852494-What-curriculum-is-covered-in-Build-Website-UIs"}],F=(t(58),t(60),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={projectList:[],courseWork:[]},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){this.setState({projectList:W,courseWork:L})}},{key:"render",value:function(){var e=this.state,a=e.projectList,t=e.courseWork;return i.a.createElement(H,{courseWork:t,projectList:a})}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,2,1]]]);
//# sourceMappingURL=main.203e8ee5.chunk.js.map