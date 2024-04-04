(this["webpackJsonpcloud-heroes"]=this["webpackJsonpcloud-heroes"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"domain":"{AUTH0_DOMAIN}","clientId":"{AUTH0_CLIENTID}","scope":"openid profile email"}')},26:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(19),n=a.n(c),i=(a(26),a(4)),r=a(0);var o=()=>Object(r.jsx)("div",{className:"hello",children:Object(r.jsx)("h2",{className:"my-5 text-center",children:"Welcome Cloud Heroes"})}),l=a.p+"static/media/insights.c8ac0b08.gif";var j=()=>Object(r.jsxs)("footer",{className:"bg-light p-3 text-center",children:[Object(r.jsx)("img",{src:l,height:"80px",align:"center",alt:"Logo"}),"Cloud Insights Copyright 2024",Object(r.jsx)("header",{align:"center",children:"v1.0.1"})]});var d=a(11),h=a(10);var b=()=>{const{loginWithRedirect:e}=Object(h.b)();return Object(r.jsx)("button",{className:"btn btn-primary btn-block",onClick:()=>e(),children:"Log In"})};var m=()=>{const{logout:e}=Object(h.b)();return Object(r.jsx)("button",{className:"btn btn-danger btn-block",onClick:()=>e({returnTo:window.location.origin}),children:"Log Out"})},u=a(41);var x=()=>{const{isAuthenticated:e}=Object(h.b)();return Object(r.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(r.jsx)(d.b,{to:"/dev.cloud-heroes",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Home"}),Object(r.jsx)(d.b,{to:"/quiz",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Quiz"}),e&&Object(r.jsx)(d.b,{to:"/exam",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Exam"}),Object(r.jsx)(d.b,{to:"/about",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"About"}),Object(r.jsx)(d.b,{to:"/resources",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Resources"}),e&&Object(r.jsx)(d.b,{to:"/profile",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Profile"}),e&&Object(r.jsx)(u.a,{children:Object(r.jsx)(b,{})}),e&&Object(r.jsx)(u.a,{children:Object(r.jsx)(m,{})})]})};var p=()=>Object(r.jsx)("div",{className:"nav-container mb-3",children:Object(r.jsx)("nav",{className:"navbar navbar-expand-md navbar-light bg-light",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{}),Object(r.jsx)(x,{})]})})});var O=[{question:"What was the first video game ever made?",options:["Pong","Spacewar!","Tetris","Computer Space"],answer:"Spacewar!"},{question:"Which company developed the first commercial antivirus software?",options:["Symantec","McAfee","Norton","Kaspersky Lab"],answer:"McAfee"},{question:"Which animal is featured in the official PHP logo?",options:["Elephant","Hippo","Giraffe","Lion"],answer:"Elephant"},{question:"What does 'HTTP' stand for?",options:["HyperText Transfer Protocol","Hyperlink Transfer Technology Protocol","Hyperlink Text Transfer Protocol","HyperText Technology Protocol"],answer:"HyperText Transfer Protocol"},{question:"Which programming language is known as the backbone of the World Wide Web?",options:["Java","C#","Python","HTML"],answer:"HTML"},{question:"What is the name of the world's first computer programmer?",options:["Charles Babbage","Ada Lovelace","Alan Turing","Grace Hopper"],answer:"Ada Lovelace"},{question:"In what year was the iPhone first introduced?",options:["2005","2007","2009","2011"],answer:"2007"},{question:"What was Google's original name?",options:["BackRub","Googol","SearchMaster","WebSearch"],answer:"BackRub"},{question:"Which of these companies was not founded in a garage?",options:["Amazon","Google","Apple","Microsoft"],answer:"Amazon"},{question:"What does 'GPU' stand for?",options:["Graphical Processing Unit","Graphics Performance Unit","Graphics Processing Unit","Graphical Performance Unit"],answer:"Graphics Processing Unit"},{question:"What is the capital of France?",options:["New York","London","Paris","Dublin"],answer:"Paris"},{question:"Who painted the Mona Lisa?",options:["Vincent Van Gogh","Leonardo da Vinci","Pablo Picasso","Claude Monet"],answer:"Leonardo da Vinci"},{question:"What is the largest planet in our solar system?",options:["Earth","Jupiter","Saturn","Mars"],answer:"Jupiter"}];var g=function(){const[e,t]=Object(s.useState)(0),[a,c]=Object(s.useState)(0),[n,i]=Object(s.useState)(!1),[o,l]=Object(s.useState)(""),[j,d]=Object(s.useState)(null);return Object(r.jsx)("div",{className:"Quiz",children:n?Object(r.jsxs)("div",{className:"score-section",children:["You scored ",a," out of ",O.length]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"question-section",children:[Object(r.jsxs)("div",{className:"question-count",children:[Object(r.jsx)("h2",{className:"my-5 text-center",children:"Practice quiz"}),Object(r.jsxs)("span",{children:["Question ",e+1]}),"/",O.length]}),Object(r.jsx)("div",{className:"question-text",children:O[e].question})]}),Object(r.jsx)("div",{className:"answer-section",children:O[e].options.map((s=>Object(r.jsx)("button",{onClick:()=>(s=>{const n=O[e].answer;l(s),s===n?(c(a+1),d(!0)):d(!1),setTimeout((()=>{const a=e+1;a<O.length?(t(a),d(null),l("")):i(!0)}),1e3)})(s),style:{backgroundColor:o===s?j?"lightgreen":"pink":""},children:s},s)))}),o&&Object(r.jsx)("div",{style:{marginTop:"10px"},children:j?"Correct! \ud83c\udf89":"Sorry, that\u2019s not right. \ud83d\ude22"})]})})};var v=()=>Object(r.jsxs)("div",{className:"hello",children:[Object(r.jsx)("h2",{className:"my-5 text-center",children:"About Us"}),Object(r.jsx)("p",{children:"Cloud Heroes is an interactive app hosted on the cloud, offering captivating exam quizzes for users to engage with. Rooted in two fundamental principles - straightforward and thrilling gameplay, along with high-quality practice quizzes. We understand the importance of simplicity in engaging quizzes, thus we've crafted an interactive quiz experience that is incredibly user-friendly and immensely enjoyable. Well, almost too enjoyable."})]});var f=()=>Object(r.jsx)("div",{className:"hello",children:Object(r.jsx)("h2",{className:"my-5 text-center",children:"Exam"})});var N=()=>Object(r.jsxs)("div",{className:"hello",children:[Object(r.jsx)("h2",{className:"my-5 text-center",children:"Resources"}),Object(r.jsxs)("p",{children:['Where can you get started with Hands-On \u2728"AWS Projects"\u2728??',Object(r.jsx)("p",{children:"Here are some resources :"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://aws.amazon.com/getting-started/",children:"AWS Getting Started Resource Centre"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://workshops.aws/",children:"AWS Workshops"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://aws.amazon.com/education/awseducate/",children:"AWS Educate"})})]}),"Happy Building"]})]});var w=()=>Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"External API"}),Object(r.jsxs)("p",{children:["You use will use a button to call an external API using an access token, and the API will validate it using the API's audience value.",Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"This route should be protected"}),"."]}),Object(r.jsxs)("div",{className:"btn-group mt-5",role:"group","aria-label":"External API Requests Examples",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-primary",children:"Get Public Message"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",children:"Get Protected Message"})]}),"test"(Object(r.jsxs)("div",{className:"mt-5",children:[Object(r.jsx)("h6",{className:"muted",children:"Result"}),Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("code",{className:"col-12 text-light bg-dark p-4",children:JSON.stringify("test",null,2)})})})]}))]});var y=()=>Object(r.jsx)(s.Fragment,{children:Object(r.jsx)(o,{})}),k=a(42),P=a(43),q=a(44);var W=()=>{const{user:e}=Object(h.b)();return Object(r.jsx)(k.a,{className:"mb-5",children:Object(r.jsxs)(P.a,{className:"align-items-center profile-header mb-5 text-center text-md-left",children:[Object(r.jsx)(q.a,{md:2,children:Object(r.jsx)("img",{src:e.picture,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})}),Object(r.jsxs)(q.a,{md:!0,children:[Object(r.jsx)("h2",{children:e.name}),Object(r.jsx)("p",{className:"lead text-muted",children:e.email})]})]})})};var T=()=>Object(r.jsx)(s.Fragment,{children:Object(r.jsx)(g,{})});var A=()=>Object(r.jsx)(s.Fragment,{children:Object(r.jsx)(v,{})});var C=()=>Object(r.jsx)(s.Fragment,{children:Object(r.jsx)(f,{})});var S=()=>Object(r.jsx)(s.Fragment,{children:Object(r.jsx)(N,{})});a(39);var H=()=>Object(r.jsxs)("div",{id:"app",className:"d-flex flex-column h-100",children:[Object(r.jsx)(p,{}),Object(r.jsx)("div",{className:"container flex-grow-1",children:Object(r.jsx)("div",{className:"mt-5",children:Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{path:"/",exact:!0,component:y}),Object(r.jsx)(i.a,{path:"/dev.cloud-heroes",exact:!0,component:y}),Object(r.jsx)(i.a,{path:"/quiz",component:T}),Object(r.jsx)(i.a,{path:"/profile",component:W}),Object(r.jsx)(i.a,{path:"/external-api",component:w}),Object(r.jsx)(i.a,{path:"/about",component:A}),Object(r.jsx)(i.a,{path:"/exam",component:C}),Object(r.jsx)(i.a,{path:"/resources",component:S})]})})}),Object(r.jsx)(j,{})]}),I=a(15);var z=a(5),G=Object(z.a)();const L={domain:I.domain,clientId:I.clientId},M={domain:L.domain,clientId:L.clientId,redirectUri:window.location.origin,onRedirectCallback:e=>{G.push(e&&e.returnTo?e.returnTo:window.location.pathname)}};n.a.render(Object(r.jsx)(h.a,{...M,children:Object(r.jsx)(d.a,{children:Object(r.jsx)(H,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.6a3e4cc9.chunk.js.map