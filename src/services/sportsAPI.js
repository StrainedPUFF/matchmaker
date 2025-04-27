const API_URL = "https://www.thesportsdb.com//api/v1/json/3/eventsnext.php?id=133602"; // MLS League ID

export const fetchMatches = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.events || [];
  } catch (error) {
    console.error("Error fetching matches:", error);
    return [];
  }
};
