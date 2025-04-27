import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getFavoriteMatches } from "../src/services/favorites";
import { auth } from "../src/services/firebase";

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await getFavoriteMatches(auth.currentUser.uid);
      setFavorites(data);
    };
    fetchFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorite Matches</Text>
      <FlatList
        data={favorites}
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

export default FavoritesScreen;
