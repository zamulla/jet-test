---
sidebar_position: 4
---

# Compose HTML tutorial

1. What are we trying to achieve: make a browser click counter built as a Kotlin/JS app.
2. What you'll need:
   * Intellij IDEA. While you can use any environment suitable for Gradle projects, this tutorial demonstrates specifically how the project would work in IDEA.
   * JDK 11 or newer. Whatever your environment, it should have at least JDK 11 installed or integrated.
3. Create a project
   * How to download the template: fork it if you like, but in any case
     1. Open the link <https://github.com/JetBrains/compose-multiplatform-html-library-template> and copy the https or SSH address, depending on your Github setup.
     2. File → New → Project from Version Control, paste the address.
   * Create the project from scratch, starting with the Gradle configuration:
     * gradle.properties
       * ```
         org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8
         kotlin.code.style=official
         kotlin.version=1.9.0
         compose.version=1.4.3
         ```
     * settings.gradle.kts
       * rootProject.name !!!
       * ```
         pluginManagement {
             repositories {
                  gradlePluginPortal()
                  maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
             }
             plugins {
                  kotlin("multiplatform").version(extra["kotlin.version"] as String)
                  id("org.jetbrains.compose").version(extra["compose.version"] as String)
             }
         }
            
            rootProject.name = "change-to-your-project-name"
         ```

       
       * build.gradle.kts (Reload All Gradle Projects)
         * [build.gradle.kts](build.gradle.kts)
   * Structure of the source code:
     * kotlin/main.kt
       * the main() function renders the Composable of our choosing
       * the Composable called Body includes:
         * a counter for storing the number of clicks (using the [remember and mutableStateOf](https://developer.android.com/jetpack/compose/state#state-in-composables) to store data within the Composable)
         * a div for displaying that number
         * a button which increases the number of clicks when pressed 
       * [main.kt]
     * resources/index.html Important parts are:
       * correct id of the root element as in the line `renderComposable(rootElementId = "root")`
       * the `rootProject.name = "cleverly-titled"` from settings.gradle.kts in the line `<script src="cleverly-titled.js"></script>`
       * [index.html]
4. Run the project:
   * To build the current version, start the Gradle task kotlin browser → jsBrowserRun, or with the command `./gradlew jsBrowserRun` 
   * To make IDEA watch changes in the files and rebuild the project on the fly, use the command `./gradlew jsBrowserRun --continuous`. You can also modify the Gradle taks in IDEA to make it start like this by default:

Further reading