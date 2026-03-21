import { Button, Host } from "@expo/ui/jetpack-compose";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Host matchContents>
        <Button onClick={() => router.push("/about")}>
          <Text>Navigate</Text>
        </Button>
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
