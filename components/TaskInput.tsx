import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const TaskInput = ({
  onAddTask,
}: {
  onAddTask: (enteredText: string) => void;
}) => {
  const [enteredTaskText, setEnteredTaskText] = useState("");

  const taskInputHandler = (enteredText: string) => {
    setEnteredTaskText(enteredText);
  };

  const onAddHandler = () => {
    onAddTask(enteredTaskText);
    setEnteredTaskText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your item..."
        onChangeText={taskInputHandler}
        value={enteredTaskText}
      />
      <Button title="Add Item" onPress={onAddHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default TaskInput;
