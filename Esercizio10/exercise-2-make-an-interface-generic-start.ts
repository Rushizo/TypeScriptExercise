/**
 * START: Follow the instructions below.
 */

// Make this `LanguagesType` interface generic.
// This should fix the type errors on Lines 14 and 21.
// Hint: The type for the `languages` property should use a type variable.

interface Country <Type> {
    name: Type;
    languages: Type;
}

type LanguagesObj1 = Country<string>
type LanguagesObj2 = Country<any>

const languagesObj1: LanguagesObj1 = {
    name: "New Zealand",
    languages: "English, Māori"
};

console.log(languagesObj1.languages);

const languagesObj2: LanguagesObj2 = {
    name: "Spain",
    languages: ["Spanish", "Catalan", "Galician", "Basque", "Valencian"],
};

console.log(languagesObj2.languages.join(", "));

// ----

export {};
