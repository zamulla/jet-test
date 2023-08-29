"use strict";(self.webpackChunkjet_test=self.webpackChunkjet_test||[]).push([[372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3},o="Regex how-to",i={unversionedId:"regex-search",id:"regex-search",title:"Regex how-to",description:"Regular expressions are a powerful tool for searching within text. Kotlin standard library provides classes for implementing your regular expressions logic, and this guide provides some basic usage examples for these classes.",source:"@site/docs/regex-search.mdx",sourceDirName:".",slug:"/regex-search",permalink:"/jet-test/docs/regex-search",draft:!1,editUrl:"https://github.com/zamulla/jet-test/docs/regex-search.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Outline for the main document of the overview section",permalink:"/jet-test/docs/kotlin-overview/overview-outline"},next:{title:"Compose HTML tutorial",permalink:"/jet-test/docs/compose-html-tutorial"}},s={},p=[{value:"Setup",id:"setup",level:2},{value:"Is there a match?",id:"is-there-a-match",level:2},{value:"Find a match",id:"find-a-match",level:2},{value:"Find all matches",id:"find-all-matches",level:2},{value:"Find groups",id:"find-groups",level:2},{value:"...and more!",id:"and-more",level:2}],u={toc:p},h="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"regex-how-to"},"Regex how-to"),(0,r.kt)("p",null,"Regular expressions are a powerful tool for searching within text. Kotlin standard library provides classes for implementing your regular expressions logic, and this guide provides some basic usage examples for these classes."),(0,r.kt)("p",null,"We'll assume that you are familiar with regular expression syntax in general. The how-to only covers Kotlin implementation specifically."),(0,r.kt)("p",null,"All of the source code presented below is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zamulla/jet-test/blob/main/code-examples/regex.kt"},"available on GitHub")," as a single file ready to be run \u2014 just create a Kotlin project in IDEA."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Let's declare a string that we're going to be operating on in the course of this guide:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val input = "Hello, world, hello."\n')),(0,r.kt)("p",null,"Then let's create a couple of patterns, one using the ",(0,r.kt)("inlineCode",{parentName:"p"},"String.toRegex")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val patternWorld = "world".toRegex()\n')),(0,r.kt)("p",null,"And another, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"RegEx")," constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val patternHello = Regex("hello", setOf(RegexOption.IGNORE_CASE))\n')),(0,r.kt)("p",null,"This pattern uses the case-insensitive ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex-option/"},"option")," to match words with capital letters as well."),(0,r.kt)("p",null,"Now you're ready to get matching."),(0,r.kt)("h2",{id:"is-there-a-match"},"Is there a match?"),(0,r.kt)("p",null,"The simplest problem is to find out whether the provided input matches a pattern at all. The ",(0,r.kt)("inlineCode",{parentName:"p"},"containsMatchIn")," method returns a boolean value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'println("Is there a match for \\"$patternHello\\" in the string \\"$input\\"?")\nif (patternHello.containsMatchIn(input)) println("Yes!") else println("Nope.")\n')),(0,r.kt)("p",null,"The result is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Is there a match for "hello" in the string "Hello, world, hello."?\nYes!\n')),(0,r.kt)("h2",{id:"find-a-match"},"Find a match"),(0,r.kt)("p",null,"To find matches one by one, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Regex.find()")," method. The result is an object of the ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchResult")," class, which we'll store in the ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," variable. It has a ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," \u2014 the matched string fragment and the position of this fragment within the input string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'var match = patternHello.find(input)\nif (match?.value?.isNotEmpty() == true) {\n    println("Found a match: \\"${match.value}\\" at the position ${match.range}")\n}\nelse {\n    println("No matches here.")\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchResult")," class also has the ",(0,r.kt)("inlineCode",{parentName:"p"},"next()")," method, which allows you to get the next match for the same string/pattern pair:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"match = match?.next()\n")),(0,r.kt)("p",null,"If you print out the results for both old and new values of the variable, you'll see this in the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Found a match: "Hello" at the position 0..4\nFound a match: "hello" at the position 14..18\n')),(0,r.kt)("h2",{id:"find-all-matches"},"Find all matches"),(0,r.kt)("p",null,"To get all matches found within the text, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Regex.findAll()")," method. It returns a sequence of ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchResult")," objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val matches = patternHello.findAll(input)\n\nprintln("All matches found:")\nfor ((index, result) in matches.withIndex()) {\n    println("${index+1}. \\"${result.value}\\" at the position ${result.range}")\n}\n')),(0,r.kt)("p",null,"Printed out results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'All matches found:\n1. "Hello" at the position 0..4\n2. "hello" at the position 14..18\n')),(0,r.kt)("h2",{id:"find-groups"},"Find groups"),(0,r.kt)("p",null,"Regular expressions are often written using groups \u2014 meaningful sections of a pattern. With Kotlin, you can find individual groups within the matches:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val patternWord = Regex("(\\\\wello), (\\\\world)")\n\nval matchGroups = patternWord.find(input)\n\n// We\'re looking for the group[1] value since group[0] always corresponds\n// to the entire matched string.\nprintln("The first group found: ${matchGroups!!.groups[1]?.value}")\n')),(0,r.kt)("p",null,"Since Kotlin 1.9.0 you can also define named groups and retrieve them without juggling the index. Here we named two groups ",(0,r.kt)("inlineCode",{parentName:"p"},"hi")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"who")," within a pattern that matches most of the input sentence:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val patternWord = Regex("(?<hi>\\\\wello), (?<who>\\\\world)")\n\nval matchGroups = patternWord.find(input)\n\nprintln("The first \'who\' group: ${matchGroups!!.groups["who"]?.value}")\nprintln("The first \'hi\' group: ${matchGroups.groups["hi"]?.value}")\n')),(0,r.kt)("p",null,"The result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The first 'who' group: world\nThe first 'hi' group: Hello\n")),(0,r.kt)("h2",{id:"and-more"},"...and more!"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Regex")," class also provides methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"for replacing found matches and splitting the input string around them,"),(0,r.kt)("li",{parentName:"ul"},"for a more specific search within the string,"),(0,r.kt)("li",{parentName:"ul"},"for converting the created pattern to an object of the Java ",(0,r.kt)("inlineCode",{parentName:"li"},"Pattern")," class.")),(0,r.kt)("p",null,"Try it out \u2014 the exhaustive description of the class is available in the ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/"},"standard library reference"),". Let us know if it's everything you dreamed of in that weird nightmare you had about regular expressions."))}c.isMDXComponent=!0}}]);