import './App.css';
import List from './Components/List';
import Title from './Components/Title';

function App() {
  
  const listName = 'my new list';
  const myList = [
    {
      text: "Do something",
      isChecked: false,
    },
    {
      text: "Make something",
      isChecked: false,
    },
    {
      text: "Sleep",
      isChecked: true,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
      <Title title={listName}/>
      <List list={myList}/>
      </header>
    </div>
  );
}

export default App;
