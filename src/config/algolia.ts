import algoliasearch from "algoliasearch/lite";

// Algolia configuration
const algoliaConfig = {
  appId: "CG0KG7M72V", // Your Algolia Application ID
  searchKey: "a7fe13ade211742c5814460d8fef0c18", // Your Algolia Search-Only API Key
};

// Initialize Algolia
const searchClient = algoliasearch(
  algoliaConfig.appId,
  algoliaConfig.searchKey
);

export default searchClient;
