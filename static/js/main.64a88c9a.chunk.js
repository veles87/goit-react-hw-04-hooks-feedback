(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={List:"Statistics_List__ujLfc",Item:"Statistics_Item__2Km_4"}},,,,function(e,t,a){e.exports={Section:"Section_Section__LqS2d",Title:"Section_Title__1oXjm"}},,function(e,t,a){e.exports={Container:"Container_Container__3tQ9A"}},function(e,t,a){e.exports={Button:"FeedbackOptions_Button__1av3d"}},function(e,t,a){e.exports={Message:"Notification_Message__3hCAI"}},,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(7),i=a.n(s),r=a(4),o=a(8),d=a.n(o),l=a(0);var u=function(e){var t=e.children;return Object(l.jsx)("div",{className:d.a.Container,children:t})},b=a(6),j=a.n(b),f=function(e){var t=e.title,a=e.children;return Object(l.jsxs)("section",{className:j.a.Section,children:[Object(l.jsx)("h1",{className:j.a.Title,children:t}),a]})};f.defaultPropes={title:"",children:[]};var h=f,O=a(3),m=a.n(O),v=a(9),x=a.n(v),p=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return function(e){var t=e.feedback,a=e.onLeaveFeedback;return Object(l.jsx)("button",{className:x.a.Button,type:"button","data-feedback":t,onClick:a,children:t},t)}({feedback:e,onLeaveFeedback:a})}))};p.propTypes={options:m.a.arrayOf(m.a.string),onLeaveFeedback:m.a.func.isRequired};var k=p,_=a(10),g=a.n(_),N=function(e){var t=e.message;return Object(l.jsx)("p",{className:g.a.Message,children:t})};N.defaultProps={message:""};var S=N,L=a(2),I=a.n(L),F=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.positivePercentage;return Object(l.jsx)(l.Fragment,{children:c?Object(l.jsxs)("ul",{className:I.a.List,children:[Object(l.jsxs)("li",{className:I.a.Item,children:["Good:",t]}),Object(l.jsxs)("li",{className:I.a.Item,children:["Neutral:",a]}),Object(l.jsxs)("li",{className:I.a.Item,children:["Bad:",n]}),Object(l.jsxs)("li",{className:I.a.Item,children:["Total:",c]}),Object(l.jsxs)("li",{className:I.a.Item,children:["Positive feedback: ",s,"%"]})]}):Object(l.jsx)(S,{message:"No feedback given"})})},C=["good","neutral","bad"];var P=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(0),i=Object(r.a)(s,2),o=i[0],d=i[1],b=Object(n.useState)(0),j=Object(r.a)(b,2),f=j[0],O=j[1],m=function(){return a+o+f};return Object(l.jsxs)(u,{children:[Object(l.jsx)(h,{title:"Please leave feedback",children:Object(l.jsx)(k,{options:C,onLeaveFeedback:function(e){switch(e.target.dataset.feedback){case"good":c((function(e){return e+1}));break;case"neutral":d((function(e){return e+1}));break;case"bad":O((function(e){return e+1}));break;default:return}}})}),Object(l.jsx)(h,{title:"Statistics",children:Object(l.jsx)(F,{good:a,neutral:o,bad:f,total:m(),positivePercentage:Math.round(a/m()*100)||0})})]})};a(18),a(19);i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.64a88c9a.chunk.js.map