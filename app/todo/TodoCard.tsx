import React from 'react'
import { Todo } from '../../typings';
import Link from 'next/link';

const fetchTodoList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  return todos;
}


async function TodoCard() {
  const todos = await fetchTodoList();
  return (
    <>
      {todos.map((todos) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4" key={todos.id}>
          <Link href={`/todo/${todos.id}`}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{todos.title}</div>
            </div>
            <div className="px-6 pt-1 pb-2">
              {todos.completed == false ? (
                <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pending</span>
              ) : (
                <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Done</span>
              )}



            </div>
          </Link>

        </div>
      ))}

    </>
  )
}

export default TodoCard