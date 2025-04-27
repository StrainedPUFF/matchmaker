import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router"; 

export default function MatchDetailScreen() {
  const { match } = useLocalSearchParams();

  // Parse match data from JSON
  const matchData = match ? JSON.parse(match as string) : null;

  if (!matchData) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{matchData.strEvent}</Text>
      <Text>Date: {matchData.dateEvent}</Text>
      <Text>League: {matchData.strLeague}</Text>
      <Text>Venue: {matchData.strVenue}</Text>
      <Text>Teams: {matchData.strHomeTeam} vs {matchData.strAwayTeam}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});
