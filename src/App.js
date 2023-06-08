import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/classCounter';
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/buttons/MyButton';
import MyInput from './components/UI/input/MyInput';


function App() {
  const [value, setValue] = useState('Инпут')

  const [articles, setArticles] = useState ([
    {id: 1, title: 'Первая карточка', body: 'Автозаполнение'},
    {id: 2, title: 'Вторая карточка', body: 'Автозаполнение'},
    {id: 3, title: 'Третья карточка', body: 'Автозаполнение'},
    {id: 4, title: 'Четвёртая карточка', body: 'Автозаполнение'},
    {id: 5, title: 'Пятая карточка', body: 'Автозаполнение'},
  ])

  const [articles2] = useState ([
    {id: 1, title: 'Python', body: 'Автозаполнение'},
    {id: 2, title: 'C++', body: 'Автозаполнение'},
    {id: 3, title: 'C#', body: 'Автозаполнение'},
    {id: 4, title: 'Java', body: 'Автозаполнение'},
    {id: 5, title: 'Java Script', body: 'Автозаполнение'},
  ])

  const [title, setTitle] = useState ('')
  const [body, setBody] = useState ('')
  function addNewPost (e) {
    e.preventDefault();

    
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setArticles([...articles, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <h1>{value}</h1>
        <input type='text' 
        value={value} 
        onChange={event => setValue(event.target.value)}> 
      </input>

      <p>Подключение через функциональный компонент</p>
      <Counter/>

      <p>Подключение через класс компонента (устар)</p>
      <ClassCounter/>


      <p>Добавление классов</p>
      <PostItem post={{id: 1, title: 'Java Script', body: 'Lalalal'}}/>
      <PostItem post={{id: 2, title: 'HTML', body: 'Lalalal'}}/>
      <PostItem post={{id: 3, title: 'CSS', body: 'Lalalal'}}/>

      <hr></hr>
      <p>Добавить заметку:</p>
      <form onSubmit={addNewPost}>
        <MyInput 
          value={title}
          onChange = {e => setTitle(e.target.value)} 
          type='text' 
          placeholder='Название поста'
        >
        </MyInput>
        <MyInput
                value = {body}
                onChange = {e => setBody(e.target.value)}
                type='text'
                placeholder='Описание поста'>
        </MyInput>
        <MyButton type="submit" >Добавить</MyButton>
      </form>
      <PostList articles={articles} title="Динамический список постов"/>


      <PostList articles={articles2} title="Динамический список постов"/>

      </div>
  );
}

export default App;
