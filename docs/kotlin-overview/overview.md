---
sidebar_position: 1
---

# Overview

Some users complain that the current Kotlin overview is a “platform” overview instead of a language overview.

I'll infer a more specific complaint as far as I understand it: the “platform” they mention is the collection of tools, IDEs and services that make it easy and efficient to use Kotlin in any project. The problem for these users then probably is that conceptually it's a bit of a cart before the horse: tell me about the language first, then I'll be interested in the tools supporting the language. If I don't like or understand the language, I don't really need the bells and whistles.

What we have now under “Kotlin overview” is a list of use cases which are ordered, I guess, in the order of their relative popularity. I think use cases work well as a method of clustering information for an overview, easy to follow and relate. But it looks a bit like a list of apple varieties mixed with orange varieties.

So for the first problem, of **new structure**: organize the use cases in a more uniform manner; defocus technologies and tools, elevate the broader themes of programming.

## High-level description of a language overview

I'll describe changes to the current structure:

1. There should be a main page, the overview of the overview.
   * In The Overview we can compile the non-platform-specific advantages of using Kotlin (like maturity of the language and and ease of learning, a paragraph each) and link to the following pages with specific advantages, or further into documentation — overview should not explain, it should overview.
   * I made an [outline of The Overview page](overview-outline.md) as the “main document of the Kotlin overview section” (second problem posed in the assignment).
2. Add pages for mobile and web development similar to [Kotlin for server side](https://kotlinlang.org/docs/server-overview.html): easy-to-understand benefits of the language for the particular case, then concrete implementations and tools.
   * In the spirit of a language overview I would put the links from “Next steps” on the server side page directly below the intro list of benefits, again, to give the lay of the land before diving into specific (and looong) list of tools.
   * The page for mobile development would deal with Android and iOS, leading logically to an acquaintance with Multiplatform.
   * The page for web development would combine information about Kotlin/Wasm and Kotlin/JS.
   * Leave “Kotlin for data science” and “Kotlin for competitive programming” as they are, niche but important use cases.
3. Add a page about Java interoperability: I remember it being a big deal in the past, but I'd ask a product lead / devrel if it's actually something to focus on. Regardless, this stuff is gold, I think, as long as Java remains among the 3-5 most popular languages: <https://kotlinlang.org/docs/comparison-to-java.html>
4. Give an overview for the standard library and official libraries (as of now they don't seem to have an overview at all, even in the dedicated sections of the docs). Like, we have them, they have this stuff and that stuff, they're solid, check them out if you're wondering what's covered and what isn't.
5. Leave “Kotlin Native” as it is as well. Programming ends with running the code, the overview should be about that too.
6. Remove the dedicated page for Kotlin Multiplatform and make it the very first page inside the “Multiplatform development” section. Everything relevant should mention and lead to Multiplatform, but it really looks out of place in the language overview. Vice versa, the “Multiplatform development” section without a general overview of multiplatform development looks a bit haphazard.

So in the end the section should look something like this:

* Kotlin overview
  * Language overview
  * Kotlin for mobile development
  * Kotlin for web
  * Kotlin for server side
  * Kotlin for data science
  * Kotlin for competitive programming
  * Comparison of Java and Kotlin
  * Standard and official libraries
  * Kotlin/Native