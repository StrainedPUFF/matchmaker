import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable, Button, StyleSheet } from "react-native";
import { fetchMatches } from "../src/services/sportsAPI"; // Correct file structure
import { useRouter } from "expo-router"; // Navigation hook from Expo Router

type Match = {
  idEvent: string;
  strEvent: string;
  dateEvent: string;
};

const HomeScreen: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const router = useRouter(); // Initialize router for navigation

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
      {/* Navigation to Login & Signup */}
      <Button title="Login" onPress={() => router.push("/login")} />
      <Button title="Sign Up" onPress={() => router.push("/signup")} />
      <FlatList
        data={matches}
        keyExtractor={(item) => item.idEvent}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => router.push({
              pathname: "/MatchDetailScreen",
              params: { match: JSON.stringify(item) } // Convert match to JSON
            })
            }

            style={styles.matchItem}
          >
            <Text>{item.strEvent} - {item.dateEvent}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  matchItem: { padding: 10, borderBottomWidth: 1 },
});

export default HomeScreen;
