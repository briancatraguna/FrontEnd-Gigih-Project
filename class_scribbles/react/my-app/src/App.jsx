import './App.css';
import data from './data/data.js'

const my_list = data.map((item,index)=>{
    if (item.rating == 'g'){
      return (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.rating}</p>
          <p>{item.uploadedDate}</p>
          <img src={item.url}/>
        </div>
      )
    }
})

function App() {
  return (
    <div className="App">
      {my_list}
    </div>
  );
}

export default App;
