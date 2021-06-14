import React from 'react';

function App() {
	const age = 11;
	
	return <div>
		{age<18 ? <p>lox</p> : <p>net</p>}
	</div>;
}

export default App;