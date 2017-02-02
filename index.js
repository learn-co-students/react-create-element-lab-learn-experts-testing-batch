//Code React element here
/*
<div class="me">
  <h1>An Awesome Person</h1>
  <p>Who is learning React</p>
 
  <ul class="me__interests">
    <li>JavaScript</li>
    <li>React</li>
    <li>Movies</li>
    <li>Ice cream</li>
  </ul>
</div>
*/

const meInReact = React.createElement('div', {className: "me"}, [
	React.createElement('h1', {}, "An Awesome Person"),
	React.createElement('p', {}, "Who is learning React"),
	React.createElement('ul', {className: "me__interests"}, [
		React.createElement('li', {}, "JavaScript"),
		React.createElement('li', {}, "React"),
		React.createElement('li', {}, "Movies"),
		React.createElement('li', {}, "Ice cream")
	])
])

ReactDOM.render(meInReact, document.getElementById('main'));