// split.js or split.ts
export function splitStringUsingRegex(inputString) {
    const characters = [];
    const regex = /[\s\S]/gu; // Matches any character, including newlines.

    let match;

    while ((match = regex.exec(inputString)) !== null) {
        characters.push(match[0]); // Pushes the matched character into the array.
    }

    return characters; // Returns the array of characters.
}