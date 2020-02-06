// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    return name.toUpperCase().charAt(0) === "R"
        ? `${name} plays banjo`
        : `${name} does not play banjo`
}

// refactor with regex
// const areYouPlayingBanjo = name => name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";

module.exports = areYouPlayingBanjo;