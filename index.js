// const title = React.createElement('h1', {}, 'My First React Code');
// const container = React.createElement('div', {}, title);
 
// ReactDOM.render(
//   container,
//   document.getElementById('main')
// );

//Code React element here
const title = React.createElement('h1', {}, 'An Awesome Person');
const subTitle = React.createElement('p', {}, 'Who is learning React');
const l1 = React.createElement('li', {}, 'JavaScript');
const l2 = React.createElement('li', {}, 'React');
const l3 = React.createElement('li', {}, 'Movies');
const l4 = React.createElement('li', {}, 'Ice cream');
const list = React.createElement('ul', {className: 'me__interests'}, [l1,l2,l3,l4]);

const meInReact = React.createElement('div',{className: 'me'}, [title, subTitle, list]);

ReactDOM.render(
  meInReact,
  document.getElementById('main')
);


// <div class="me">
//   <h1>An Awesome Person</h1>
//   <p>Who is learning React</p>
 
//   <ul class="me__interests">
//     <li>JavaScript</li>
//     <li>React</li>
//     <li>Movies</li>
//     <li>Ice cream</li>
//   </ul>
// </div>
