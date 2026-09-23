import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

export default function HomeScreen() {
  const [item, setItem] = useState("");
  const [groceries, setGroceries] = useState<string[]>([]);

  function addItem() {
    if (item.trim() === "") {
      return;
    }
    setGroceries([...groceries, item.trim()]);
    setItem("");
  }

  function deleteItem(index: number) {
    const newGroceries = groceries.filter(
      (item, itemIndex) => itemIndex !== index,
    );
    setGroceries(newGroceries);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Grocery List</Text>
        <TextInput
          placeholder="Add an item..."
          value={item}
          onChangeText={setItem}
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </Pressable>
        <FlatList
          style={styles.listContainer}
          data={groceries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.groceryItem}>
              <Text style={styles.groceryText}>
                {index + 1}. {item}
                <Pressable
                  style={styles.deleteText}
                  onPress={() => deleteItem(index)}
                >
                  <Ionicons name="trash" size={18} color="red" />
                </Pressable>
              </Text>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 80,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 5,
    padding: 12,
    width: "100%",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    width: "100%",
  },
  groceryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#9cc6f4",
    marginTop: 10,
    borderRadius: 5,
  },
  groceryText: {
    fontSize: 16,
  },
  deleteText: {
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
});
