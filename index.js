//Code React element here
const meInReact =
  React.createElement('div', {className: 'me'},
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, 'Who is learning React'),
    React.createElement('ul', {className: 'me__interests'},
      [
        React.createElement('li', { className: 'first' }, 'JavaScript'),
        React.createElement('li', { className: 'second' }, 'React'),
        React.createElement('li', { className: 'third' }, 'Movies'),
        React.createElement('li', { className: 'fourth' }, 'Ice cream')
      ]
    ));

ReactDOM.render(meInReact, document.getElementById('main'));
