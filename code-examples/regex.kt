fun main(args: Array<String>) {

    // The string we'll be matching with patterns.
    val input = "Hello, world, hello."

    // The first regular expression pattern, created with the String.toRegex() method.
    val patternWorld = "world".toRegex()

    // The second pattern uses the case-insensitive option to match words with capital letters as well.
    // For all available options see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex-option/
    val patternHello = Regex("hello", setOf(RegexOption.IGNORE_CASE))

    // Finding if there is a match at all
    println("Is there a match for \"$patternHello\" in the string \"$input\"?")
    if (patternHello.containsMatchIn(input)) println("Yes!") else println("Nope.")

    println("Is there a match for \"$patternWorld\" in the string \"$input\"?")
    if (patternWorld.containsMatchIn(input)) println("Yes!") else println("Nope.")


    // Finding a match.
    var match = patternHello.find(input)

    if (match?.value?.isNotEmpty() == true) {
        println("Found a match: \"${match.value}\" at the position ${match.range}")
    }
    else {
        println("No matches here.")
    }

    match = match?.next()
    println("Found a match: \"${match?.value}\" at the position ${match?.range}")

    // Finding all matches in the input.
    val matches = patternHello.findAll(input)

    println("All matches found:")
    for ((index, result) in matches.withIndex()) {
        println("${index+1}. \"${result.value}\" at the position ${result.range}")
    }

    // Defining regular expression groups and looking for them.
    val patternWord = Regex("(?<hi>\\wello), (?<who>\\world)")

    val matchGroups = patternWord.find(input)

    println("The first 'who' group: ${matchGroups!!.groups["who"]?.value}")
    println("The first 'hi' group: ${matchGroups.groups["hi"]?.value}")
}