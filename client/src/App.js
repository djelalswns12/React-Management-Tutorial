import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers=[{
  'id':1,
  'img': 'https://placeimg.com/64/64/2',
  'name':'김민준',
  'birthday':'970808',
  'gender':'남자',
  'job':'대학생',
},
{
  'id':2,
  'img': 'https://placeimg.com/64/64/5',
  'name':'이승현',
  'birthday':'990808',
  'gender':'여자',
  'job':'고등학생',
}
]

function App() {
  return (
      customers.map(c=>{
        return(
          <Customer
          key={c.id}
          id={c.id}
          name={c.name}
          img={c.img}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
          />
        )
      })

  );
}

export default App;
