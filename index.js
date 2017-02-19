//Code React element here\
const header = React.createElement('h1', {}, 'An Awesome Person');
const paragraph = React.createElement('p', {}, 'Who is learning React');
const list = React.createElement('ul', {className:'interests'}, [
    React.createElement('li', {}, 'JavaScript'),
    React.createElement('li', {}, 'React'),
    React.createElement('li', {}, 'Movies'),
    React.createElement('li', {}, 'Ice cream'),
]);
const meInReact = React.createElement('div', {className: 'me'}, [header, paragraph, list]);

ReactDOM.render(
    meInReact,
    document.querySelector('#main')
)
