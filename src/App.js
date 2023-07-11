// 순서1 - 전역데이터를 변경해주는 규칙을 가지고 있는 변형자 함수 생성
const reducer = (state, action) => {
	/*
		(state,
		(action) => {
			if (action.type === 'minus') return state - action.payload;
			if (action.type === 'plus') return state + action.payload;
			else return state;
		});
		*/

	switch (action.type) {
		case 'minus':
			return state - action.payload;
		case 'plus':
			return state + action.payload;
		default:
			return state;
	}
};

function App() {
	//순서 2 - 변형자함수와 초기값을 인수로 전달받아서 전역 State와 전달자 함수를 생성해주는 iseReducer호출'
	//const [초기값으로 만들어진 전역 State, 해당 State변경하기 위한 action객체 전달 함수] = useReducer(변형함수, 초기값)
	const [Num, dispatch] = useReducer(reducer, 0);

	return (
		<main>
			<h1>{num}</h1>

			{/* 순서3 - 이벤트 발생시 useReducer로 활성화 시킨 dispatch함수로 액션객체 리듀서에 전달  */}
			<button onClick={() => dispatch({ type: 'minus', payload: 1 })}>minus</button>
			<button onClick={() => dispatch({ type: 'plus', payload: 1 })}>plus</button>
		</main>
	);
}

export default App;
