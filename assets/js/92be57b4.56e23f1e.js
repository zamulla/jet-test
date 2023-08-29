"use strict";(self.webpackChunkjet_test=self.webpackChunkjet_test||[]).push([[429],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(r),d=i,v=h["".concat(s,".").concat(d)]||h[d]||p[d]||a;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:2},o="Outline of the main Overview document",l={unversionedId:"kotlin-overview/overview-outline",id:"kotlin-overview/overview-outline",title:"Outline of the main Overview document",description:"This is the outline for The Overview page that was mentioned in the high-level description of the section rework.",source:"@site/docs/kotlin-overview/overview-outline.md",sourceDirName:"kotlin-overview",slug:"/kotlin-overview/overview-outline",permalink:"/jet-test/docs/kotlin-overview/overview-outline",draft:!1,editUrl:"https://github.com/zamulla/jet-test/docs/kotlin-overview/overview-outline.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/jet-test/docs/kotlin-overview/overview"},next:{title:"Regex how-to",permalink:"/jet-test/docs/regex-search"}},s={},u=[{value:"Kotlin is useful for any project",id:"kotlin-is-useful-for-any-project",level:2},{value:"Kotlin has a robust standard library",id:"kotlin-has-a-robust-standard-library",level:2},{value:"Kotlin is interoperable with Java",id:"kotlin-is-interoperable-with-java",level:2},{value:"Heading: Kotlin runs without a virtual machine",id:"heading-kotlin-runs-without-a-virtual-machine",level:2},{value:"Kotlin is easy to learn",id:"kotlin-is-easy-to-learn",level:2}],c={toc:u},h="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"outline-of-the-main-overview-document"},"Outline of the main Overview document"),(0,i.kt)("p",null,"This is the outline for The Overview page that was mentioned in the high-level description of the section rework."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Intro: the \u201cKotlin is a programming language which...\u201d paragraph, facts and goals in the broadest terms. I'd cut and paste the first paragraph from the ",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/getting-started.html"},"Get started")," page. ","[",(0,i.kt)("em",{parentName:"li"},"That")," page could use something more specific as an intro, which would lead into the specific cases later on. Also it's kind of weird to send the reader to take the tour of the language without letting him get started. I would make the send-off softer, without the huge banner, and with a better reason than \u201cwhy not\u201d, because putting the ",(0,i.kt)("em",{parentName:"li"},"fun")," in ",(0,i.kt)("em",{parentName:"li"},"fun"),"damentals can be a little clearer.]"),(0,i.kt)("li",{parentName:"ul"},"The list of universal advantages of Kotlin as a language: mature, boilerplate-free, Java-compatible etc.")),(0,i.kt)("h2",{id:"kotlin-is-useful-for-any-project"},"Kotlin is useful for any project"),(0,i.kt)("p",null,"The list of use cases that was compiled earlier: mobile, web, server, data science, competitive programming, with links to the corresponding pages."),(0,i.kt)("h2",{id:"kotlin-has-a-robust-standard-library"},"Kotlin has a robust standard library"),(0,i.kt)("p",null,"A paragraph on the standard library standout features \u2014 collections, scope functions etc., with a link to the standard library overview. Then a paragraph on the official libraries, with a simple list and a link for further reading."),(0,i.kt)("h2",{id:"kotlin-is-interoperable-with-java"},"Kotlin is interoperable with Java"),(0,i.kt)("p",null,"Concisely presenting the comparison to Java and ease of calling the code back and forth, with links to the corresponding pages for details."),(0,i.kt)("h2",{id:"heading-kotlin-runs-without-a-virtual-machine"},"Heading: Kotlin runs without a virtual machine"),(0,i.kt)("p",null,"Explanation of Kotlin/Native and mention of Multiplatform, with links for further reading."),(0,i.kt)("h2",{id:"kotlin-is-easy-to-learn"},"Kotlin is easy to learn"),(0,i.kt)("p",null,"Here we can tout the amount and variety of educational material, and link ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/learning-materials-overview.html"},"here"),"."),(0,i.kt)("p",null,"At the very end, if the reader didn't follow any links and just reached the bottom of the page, \u2014 that where I'd put the \u201cStart Kotlin tour\u201d banner that I suggested to remove from \u201cGet started\u201d."))}p.isMDXComponent=!0}}]);