import axios from "axios";
import React, { useEffect, useState, FC } from "react";
import { ITodo } from "../types/types";
import { List } from "./List";
import { TodoItem } from "./TodoItem";

export const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <List
      items={todos}
      renderItem={(todo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};
