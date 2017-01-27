//Code React element here

var meInReact = React.createElement('div', {className: 'me'}, [
  React.createElement('h1', {}, 'An Awesome Person'), 
  React.createElement('p', {}, 'Who is learning React'),
  React.createElement('ul', {className: 'me_interests'}, [
    React.createElement('li', {}, 'JavaScript'), 
    React.createElement('li', {}, 'React'), 
    React.createElement('li', {}, 'Movies'), 
    React.createElement('li', {}, 'Ice cream'), 
  ])
]);

ReactDOM.render(meInReact, document.getElementById('main'));