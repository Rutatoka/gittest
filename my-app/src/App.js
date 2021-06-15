import React, { useState } from 'react';
import Product from './product.js';
import './App.css';
import './App.css';
import User from "./User.js";
import Employee from "./Employee.js";
import {nanoid} from "nanoid";
import Users from "./Users";
function App() {
	const data = [
	{surname:'Strezhov', name:'Alexandr', patronymic:'Ivanovich' ,salary:'35000', age:'25'},
	{surname: 'Volkov', name:'Ivan',patronymic:'Petrovich', salary:'53000', age:'35'},
	{surname: 'Salov', name:'Maxim', patronymic:'Dmitrievich', salary:'25000', age:'45'}
	]
	
	return <table>
	<User surname={data[0].name} name={data[0].surname} age={data[0].age}/>
	<User surname={data[1].name} name={data[1].surname} age={data[1].age}/>
	<User surname={data[2].name} name={data[2].surname} age={data[2].age}/>
	</table>
//счетчик, условие 
	// let [count, setCount] = useState(0);
	// let [inCart, setInCart] = useState(false);
	
	// return <div>
	// 	<span>{count ? 'в корзине' : 'не в корзине'}</span>
	// 	<button onClick={() => setInCart(!inCart)}>btn</button>
	// 	<span>{count}</span>
	// 	<button onClick={() => setCount(count + 1)}>+</button>
	// </div>;



// Высчитывает квадрат числа, и передает значение
		// const [value, setValue] = useState(0);
		// const [value2, setValue2] = useState('');
		// function handleChange(event) {
		// 	setValue(event.target.value);
		// }
		// return <div>
		// 		<input value={value} onChange={handleChange} />
		// <span>{value ** 2}</span>
		// <br/>
		// 	<input value={value2} onChange={event => setValue2(event.target.value)} />
		
		// 	<span>text: {value2}</span>
		// </div>;

		



// Высчитывает количество символов
	// const [value, setValue] = useState('');
	
	// return <div>
	// <input value={value} onChange={event => setValue(event.target.value)} />
	// <p>text: {value.length}</p>
	// </div>;





// Высчитывает год рождения
	// const [value, setValue] = useState('');
	// const now = new Date()
	
	// return <div>
	// <input value={value} onChange={event => setValue(event.target.value)} />
	// <p>text: {value}</p>
	// <p>{now.getFullYear()-value}</p>
	// </div>;




// мгновенная сумма
	// const [value1, setValue1] = useState(0);
	// const [value2, setValue2] = useState(0);
	
	// function handleChange1(event) {
	// 	setValue1(+event.target.value);
	// }
	// function handleChange2(event) {
	// 	setValue2(+event.target.value);
	// }
	// return <div>
	// 	<input value={value1} onChange={handleChange1} />+
	// 	<input value={value2} onChange={handleChange2} />
	// 	<p>result: {value1 + value2}</p>
	// </div>



// сумма при нажатии на кнопку
		// const [value1, setValue1] = useState(0);
		// const [value2, setValue2] = useState(0);
		// const [result, setResult] = useState(0);
		
		// function handleChange1(event) {
		// 	setValue1(event.target.value);
		// }
		
		// function handleChange2(event) {
		// 	setValue2(event.target.value);
		// }
		
		// function handleClick() {
		// 	setResult(Number(value1) + Number(value2));
		// }
		
		// return <div>
		// 	<input value={value1} onChange={handleChange1} />
		// 	<input value={value2} onChange={handleChange2} />
			
		// 	<button onClick={handleClick}>btn</button>
		// 	<p>result: {result}</p>
		// </div>;
	
	

// Разница в датах
		// const date = new Date().toDateString('YYYY-MM-DD');
		// const [value, setValue] = useState(date);
		// const [value1, setValue1] = useState(date);
		// const [dif, setDif] = useState(0);
		
		// function diffDates() {
		// let day_1 = new Date(value)
		// let day_2 = new Date(value1)
		// return setDif((day_1 - day_2) / (60 * 60 * 24 * 1000));
		// }
		
		// return <div>
		// <input value={value} onChange={event => setValue(event.target.value)} />
		// <input value={value1} onChange={event => setValue1(event.target.value)} />
		// <button onClick={diffDates}>btn</button>
		// <p>Raznica = {dif}</p>
		// </div>;







//Выводит транслит 
		// function transliteration(str) {
		// 	const ru = {
		// 	'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
		// 	'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
		// 	'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
		// 	'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
		// 	'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
		// 	'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya'
		// 	};
		// 	let n_str = [];
		// 	str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');
		// 	for (var i = 0; i < str.length; ++i) {
		// 	n_str.push(
		// 	ru[str[i]]
		// 	|| ru[str[i].toLowerCase()] == undefined && str[i]
		// 	|| ru[str[i].toLowerCase()].toUpperCase()
		// 	);
		// 	}
		// 	return n_str.join('');
		// 	}
		// 	const [value, setValue] = useState('');
		// 	return <div>
		// 	<textarea value={value} onChange={event => setValue(event.target.value)}
		// 	/>
		// 	<p>{transliteration(value)}</p>
		// 	</div>;






	// Привет пока при нажатии
			// const [checked, setCheck] = useState(true);
			// const [text, setText] = useState(true)
			// return <div>
			// <input type="checkbox" checked={checked} onChange={() => setCheck(!checked)}/>
			// <button onClick={() => setText(checked ? 'Hello User' : 'Bye user')}>Check?</button>
			// <p>condition: {text}</p>
			// </div>;




// Мгновенная реакция
			// const [checked, setCheck] = useState(true);
			// const [checked1, setCheck1] = useState(true);
			// const [checked2, setCheck2] = useState(true);
			// return <div>
			// <input type="checkbox" checked={checked} onChange={() => setCheck(!checked)}/>
			// <input type="checkbox" checked={checked1} onChange={() => setCheck1(!checked1)}/>
			// <input type="checkbox" checked={checked2} onChange={() => setCheck2(!checked2)}/>
			// <p>состояние: {checked ? 'знаю HTML' : 'не знаю HTML'}</p>
			// <p>состояние: {checked1 ? 'знаю CSS' : 'не знаю CSS'}</p>
			// <p>состояние: {checked2 ? 'знаю JS' : 'не знаю JS'}</p>
			// </div>;
			
		// Проверка на 18
			// const [checked, setCheck] = useState(true);
			// let message;
			// if (checked) {
            // message = <div>
            // <h2>Ура, вам уже есть 18</h2>
            // <p>здесь расположен контент только для взрослых</p>
            // </div>
            // } 
			// else {
            // message = <div>
            // <p>увы, вам еще нет 18 лет</p>
            //  </div>
            // }

            // return <div>
            // <input type="checkbox" checked={checked} onChange={() => setCheck(!checked)}/><span>Есть 18?</span>
            // {message}
            // </div>;

			// const [checked, setCheck] = useState(true);




// Выпадающие списки
// const [value, setValue] = useState('');

// return <div>
// <select name="" id="" value={value} onChange={(event) => setValue(event.target.value)}>
// <option>city-1</option>
// <option>city-2</option>
// <option>city-3</option>
// <option>city-4</option>
// <option>city-5</option>
// </select>

// <p>{value}</p>
// </div>;


// выавдающий список
// let arr = ['city-1', 'city-2', 'city-3', 'city-4', 'city-5']
// const [value, setValue] = useState('');
// let options = arr.map((city, index) => {
// return <option key={index}>{city}</option>;
// })
// return <div>
// <select value={value} onChange={(event) => setValue(event.target.value)}>
// {options}
// </select>
// <p>City is: {value}</p>
// </div>;





// Возрастной диапозон
// const [value, setValue] = useState('');

// return <div>
// <select value={value} onChange={(event) => setValue(event.target.value)}>
// <option value="1">0-12</option>
// <option value="2">13-17</option>
// <option value="3">18-25</option>
// <option value="4">25</option>
// </select>
// <p>
// {value === '1' && 'Вам от 0 до 12 лет'}
// {value === '2' && 'Вам от 12 до 17 лет'}
// {value === '3' && 'Вам от 18 до 25 лет'}
// {value === '4' && 'Вам более 25 лет'}
// </p>
// </div>;







// const [value, setValue] = useState(1);
	
// 	function changeHandler(event) {
// 		setValue(event.target.value);
// 	}
	
// 	return <div>
// 		<input
// 			type="radio"
// 			name="radio"
// 			value="1"
// 			checked={value === '1' ? true : false}
// 			onChange={changeHandler}
// 		/>
// 		<input
// 			type="radio"
// 			name="radio"
// 			value="2"
// 			checked={value === '2' ? true : false}
// 			onChange={changeHandler}
// 		/>
// 		<input
// 			type="radio"
// 			name="radio"
// 			value="3"
// 			checked={value === '3' ? true : false}
// 			onChange={changeHandler}
// 		/>
// 	</div>

// Выбор JS
// const [value, setValue] = useState('');
// let text = <p>Красавчик</p>

// function changeHadler(event) {
// return setValue(event.target.value)
// }

// return <div>
// <input type="radio"
// name={'radio'}
// value={'javascript'}
// checked={value === 'javascript' ? true : false}
// onChange={changeHadler}
// /><span>javascript</span>


// <input type="radio"
// name={'radio'}
// value={'c#'}
// checked={value === 'c#' ? true : false}
// onChange={changeHadler}
// /><span>c#</span>

// <input type="radio"
// name={'radio'}
// value={'python'}
// checked={value === 'python' ? true : false}
// onChange={changeHadler}
// /><span>python</span>

// <p>Ваш любимый язык: {value}.</p>
// {value === 'javascript' && text}
// </div>;




// Значение по умолчанию
// const [value, setValue] = useState('Hello World');

// return <div>
// <input defaultValue={value} />
// </div>;




// Переворот элементов
// const [arr, setArr] = useState([4, 3, 6, 1])
// const copy = Object.assign([], arr)

// return <div>
// <button onClick={() => setArr(copy.reverse())}>change</button>
// <p>{copy}</p>
// </div>;




// Добавление вводимого элемента в список
// const [arr, setArr] = useState(['a', 'b', 'c', 'd', 'e'])
// const [value, setValue] = useState('')
// const result = arr.map((elem, index) => {
// return <li key={index}>{elem}</li>
// });

// return <div>
// <input value={value} onChange={event => setValue(event.target.value)}
// onBlur={() => {setArr([...arr, value]); setValue('') } }/>
// <ul>
// <li>{result}</li>
// </ul>
// </div>;



// Кнопка удаления элемента списка
// const [arr, setArr] = useState(['a', 'b', 'c', 'd', 'e'])
// const result = arr.map((elem, index) => {
// return <li key={index}>{elem}
// <button onClick={()=>setArr([...arr.slice(0, index), ...arr.slice(index+1)])}>delete</button>
// </li>
// });

// return <div>
// <ul>
// {result}
// </ul>
// </div>;




// Массив и среднее арифмитическое
// const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// function getAverage(arr) {
// let sum = 0;

// for (const elem of arr) {
// sum += +elem;
// }

// return sum/arr.length;
// }
// function changeHandler(index, event) {
// setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)]);
// }

// const result = notes.map((note, index) => {
// return <input
// key={index}
// value={note}
// onChange={event => changeHandler(index, event)}
// />;
// });

// return <div>
// {result}
// {getAverage(notes)}
// </div>;






// Изменения инпута
// const [notes, setNotes] = useState([1, 2, 3, 4, 5])
// const [editNotes, setEditNotes] = useState(null)

// const result = notes.map((elem, index) => {
// return <li key={index}>{elem}
// <button onClick={() => setEditNotes(index)}>Edit</button>
// </li>
// })

// return <div>
// <ul>
// {result}
// <input type="text" value={notes ? notes[editNotes] : ''}
// onChange={event => setNotes([...notes.slice(0, editNotes), event.target.value, ...notes.slice(editNotes + 1)])
// } onBlur={event => setEditNotes(event.target.value = '')}/>
// </ul>
// </div>;







// замена по кнопке
// const initObj = {
// 	prop1: 'value1',
// 	prop2: 'value2',
// 	prop3: 'value3',
// 	}
	
// 	const [obj, setObj] = useState(initObj);
	
	
// 	return <div>
// 	<span>{obj.prop1}</span>
// 	<span>{obj.prop2}</span>
// 	<span>{obj.prop3}</span>
	
// 	<button onClick={()=>setObj({...obj,...{prop1:'!'}})}>changeObj1</button>
// 	<button onClick={()=>setObj({...obj,...{prop2:'!!'}})}>changeObj1</button>
// 	<button onClick={()=>setObj({...obj,...{prop3:'!!!'}})}>changeObj1</button>
// 	</div>;





// При нажатии появляется и скрывается текст
// const [visible1, setVisible1] = useState(false);
// const [visible2, setVisible2] = useState(false);
// const [visible3, setVisible3] = useState(false);

// let elem1;
// if(visible1){
// elem1 = <p>elem 1</p>;
// };

// let elem2;
// if(visible2){
// elem2 = <p>elem 2</p>;
// };

// let elem3;
// if(visible3){
// elem3 = <p>elem 3</p>;
// };

// return (
// <div>
// <button onClick={() => setVisible1(!visible1)}>{visible1 ? 'hide' : 'show'}</button>
// <button onClick={() => setVisible2(!visible2)}>{visible2 ? 'hide' : 'show'}</button>
// <button onClick={() => setVisible3(!visible3)}>{visible3 ? 'hide' : 'show'}</button>
// {elem1}
// {elem2}
// {elem3}
// </div>
// );


// Редактирование и созранинеи
// const [value, setValue] = useState('Example')
// const [edit, setEdit] = useState(false)
// let elem

// if (!edit){
// elem = <span onClick={() => setEdit(true)}>{value}</span>
// } else {
// elem = <input value={value}
// onChange={event => setValue(event.target.value)}
// onBlur={() => setEdit(false)}/>
// }

// return <p>
// {elem}
// <button onClick={() => setEdit(true)}>Edit</button>
// <button onClick={() => setEdit(false)}>Save</button>
// </p>




// Изменение и сохранение
// const initNotes = [
// 	{text: 'note1', isEdit: false},
// 	{text: 'note2', isEdit: false},
// 	{text: 'note3', isEdit: false}
// 	];
// 	console.log(initNotes)
// 	const [notes, setNotes] = useState(initNotes)
	
// 	const result = notes.map((note, index) =>
// 	{
// 	let elem;
// 	if (!note.isEdit) {
// 	elem = <li key={index}>
// 	<span>{note.text}</span>
// 	<button onClick={()=>startEdit(index)}>{!note.isEdit ? 'Edit' :'Save'}</button>
// 	</li>
// 	} else {
// 	elem = <div><input value={note.text} onChange={event => changeNote(index, event)} />
// 	<button onClick={()=>endEdit(index)}>Save</button>
// 	</div>
// 	}
	
// 	return <li key={index}>{elem}</li>
// 	})
	
// 	function changeNote(index,event) {
// 	const copy = Object.assign([], notes)
// 	copy[index].text = event.target.value
// 	setNotes(copy)
// 	}
	
// 	function startEdit(id) {
// 	const copy = Object.assign([], notes)
// 	copy[id].isEdit = true
// 	setNotes(copy)
// 	}
	
// 	function endEdit(id) {
// 	const copy = Object.assign([], notes)
// 	copy[id].isEdit = false
// 	setNotes(copy)
// 	}
	
// 	return <ul>
// 	{result}
// 	</ul>









}
export default App;