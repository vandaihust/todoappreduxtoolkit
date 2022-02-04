import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../Todo';
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import { todosRemainingSeletor } from '../../redux/selectors';
// import { addTodo } from '../../redux/actions';
import todoListSlice from './TodoListSlice';
export default function TodoList() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const todoList = useSelector(todosRemainingSeletor);

  const handleAddButtonClick = (data) => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: name,
        priority: priority,
        complete: false,
      }))
    handleDelete()
  }
  const handleDelete = () => {
    setName('');
    setPriority('Medium')
  }
  const handleChangeInput = (e) => {
    setName(e.target.value)
  }
  const handleChangeSelect = (value) => {
    setPriority(value)
  }
  return (

    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed}></Todo>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input onChange={handleChangeInput} value={name} />
          <Select onChange={handleChangeSelect} value={priority} >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
