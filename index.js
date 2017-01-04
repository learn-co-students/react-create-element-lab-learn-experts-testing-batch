//Code React element here

var title = React.createElement('h1', {}, 'An Awesome Person');

var content = React.createElement('p', {}, 'Who is learning React');

var interests = React.createElement('ul', {}, 
  [
    React.createElement('li', {}, 'JavaScript'),
    React.createElement('li', {}, 'React'),
    React.createElement('li', {}, 'Movies'),
    React.createElement('li', {}, 'Ice cream')
  ]);

var meInReact = React.createElement('div', {className: 'me'}, [title, content, interests] );

ReactDOM.render(me, document.getElementByID('main'));