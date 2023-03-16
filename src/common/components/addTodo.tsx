import React, { useState } from 'react';
import { type Todo } from '../types/interfaces';

type Props = {
  onAdd: (todo: Todo) => void;
}

const AddTodo: React.FC<Props> = ({ onAdd }) => {
const [title, setTitle] = useState('');

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
if (title.trim()) {
const newTodo: Todo = {
id: Date.now(),
title,
completed: false,
};
onAdd(newTodo);
setTitle('');
}
};

return (
<form onSubmit={handleSubmit}>
<input type="text" value={title} onChange={e => setTitle(e.target.value)} />
<button type="submit">Add</button>
</form>
);
};

export default AddTodo;