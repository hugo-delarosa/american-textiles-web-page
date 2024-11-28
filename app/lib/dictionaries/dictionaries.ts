import 'server-only'


// Define the dictionary type (based on the JSON structure)
type Dictionary = Record<string, any>;

// Create the dictionaries object with specific types
const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
};

// Create a function to get the dictionary for a given locale
export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const loadDictionary = dictionaries[locale];
  if (!loadDictionary) {
    throw new Error(`Dictionary for locale '${locale}' is not available.`);
  }
  return loadDictionary();
};