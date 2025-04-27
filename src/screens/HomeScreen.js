import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { fetchMatches } from "../services/sportsAPI"; // Fetch data from API

const HomeScreen = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const loadMatches = async () => {
      const data = await fetchMatches();
      setMatches(data);
    };
    loadMatches();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Matches</Text>
      <FlatList
        data={matches}
        keyExtractor={(item) => item.idEvent}
        renderItem={({ item }) => (
          <View style={styles.matchItem}>
            <Text>{item.strEvent} - {item.dateEvent}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  matchItem: { padding: 10, borderBottomWidth: 1 }
});

export default HomeScreen;
