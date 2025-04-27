import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { getUserProfile, updateUserProfile } from "../services/profileService";
import { auth } from "../services/firebase";

const ProfileScreen = () => {
  const [profile, setProfile] = useState({ name: "", favoriteTeam: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getUserProfile(auth.currentUser.uid);
      if (data) setProfile(data);
    };
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    await updateUserProfile(auth.currentUser.uid, profile);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 }
});

export default ProfileScreen;
