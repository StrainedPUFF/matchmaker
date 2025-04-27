import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { getUserProfile, updateUserProfile } from "../src/services/profileService";
import { auth } from "../src/services/firebase";
import { onAuthStateChanged } from "firebase/auth";

const ProfileScreen = () => {
  const [profile, setProfile] = useState({ name: "", favoriteTeam: "" });
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        fetchProfile(currentUser.uid); // Call fetch only if user is authenticated
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  const fetchProfile = async (uid: string) => {
    const data = await getUserProfile(uid);
    if (data) setProfile(data);
  };

  const handleUpdate = async () => {
    if (!user) {
      console.error("User is not logged in");
      return;
    }
    await updateUserProfile(user.uid, profile);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      {!user ? (
        <Text style={{ color: "red" }}>Please log in to view your profile.</Text>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={profile.name}
            onChangeText={(text) => setProfile({ ...profile, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Favorite Team"
            value={profile.favoriteTeam}
            onChangeText={(text) => setProfile({ ...profile, favoriteTeam: text })}
          />
          <Button title="Update Profile" onPress={handleUpdate} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 }
});

export default ProfileScreen;
