import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, id, category: name as any };
            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
        });
    };
    const onDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;

        setToDos((oldToDos) => {
            const delToDo = { text, id, category: name as any };
            const newTodo = oldToDos.filter((toDo) => toDo.id !== delToDo.id);
            return newTodo;
        });
    };
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING && (
                <button name={Categories.DOING} onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== Categories.TO_DO && (
                <button name={Categories.TO_DO} onClick={onClick}>
                    To Do
                </button>
            )}
            {category !== Categories.DONE && (
                <button name={Categories.DONE} onClick={onClick}>
                    Done
                </button>
            )}
            <button onClick={onDeleteClick}>remove</button>
        </li>
    );
}

export default ToDo;
