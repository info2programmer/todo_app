import React from 'react'
import { Todo } from '../../../typings';
import { notFound } from 'next/navigation';

type pageProps = {
    params: {
        todoid: string
    }
}

const fetchTodoData = async (todoid: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoid}`, { next: { revalidate: 60 } });
    const todo: Todo = await res.json();
    return todo;
}

async function TodoPage({ params: { todoid } }: pageProps) {
    const todoData = await fetchTodoData(todoid.toString());

    if(!todoData.id) return notFound();
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4 bg-gray-200 ml-20" key={todoData.id}>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{todoData.title}</div>
            </div>
            <div className="px-6 pt-1 pb-2">
                {todoData.completed == false ? (
                    <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pending</span>
                ) : (
                    <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Done</span>
                )}



            </div>
        </div>

    )
}

export default TodoPage