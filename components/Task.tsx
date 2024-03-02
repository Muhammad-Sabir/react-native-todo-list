import { View, Text, StyleSheet } from "react-native";

const Task = ({ task }: { task: string }) => {
  return (
    <View style={styles.task}>
      <Text style={styles.taskText}>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    marginHorizontal: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "black",
    marginBottom: 8,
  },
  taskText: {
    color: "white",
    textAlign: "center",
  },
});

export default Task;
