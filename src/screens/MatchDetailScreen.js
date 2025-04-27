import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MatchDetailScreen = ({ route }) => {
  const { match } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{match.strEvent}</Text>
      <Text>Date: {match.dateEvent}</Text>
      <Text>League: {match.strLeague}</Text>
      <Text>Venue: {match.strVenue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 }
});

export default MatchDetailScreen;
