import InputNewTodo from "@/components/inputNewTodo";
import styles from "./page.module.css";
import TodoList from "@/components/todoList";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>To Do App</h1>
      </div>
      <section>
        <InputNewTodo />
      </section>
      <section>
        <TodoList />
      </section>
    </main>
  );
}
