let counter = 0;
function Message() {
	counter++;
	return <h1>Total Counter {counter}</h1>;
}

export default Message;
