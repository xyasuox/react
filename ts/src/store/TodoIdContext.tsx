import React, { useState, createContext, ReactNode } from "react";

interface TodoIdContextProps {
    todoId: number;
    setTodoId: React.Dispatch<React.SetStateAction<number>>;
}

export const TodoIdContext = createContext<TodoIdContextProps> ({
    todoId: 0,
    setTodoId: () => console.warn("not implement"),
});

export const TodoIdProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [todoId, setTodoId] = useState(0);

    return (
        <TodoIdContext.Provider
            value={{
              todoId,
              setTodoId,
            }}
        >
            {children}
        </TodoIdContext.Provider>
    );
};