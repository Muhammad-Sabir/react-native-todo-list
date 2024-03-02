import uuid from "react-native-uuid";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { ITask } from "./models/task.model";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [tasksList, setTasksList] = useState<ITask[]>([]);

  const addTaskHandler = (enteredText: string) => {
    setTasksList((currentTasks) => [
      ...currentTasks,
      { key: uuid.v4(), text: enteredText },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <TaskInput onAddTask={addTaskHandler} />
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasksList}
          renderItem={(task) => {
            return <Task task={task.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  tasksContainer: {
    flex: 5,
  },
});
