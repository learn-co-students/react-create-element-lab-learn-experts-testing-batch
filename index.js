const title = React.createElement('h1', {}, "An Awesome Person")
const desc = React.createElement('p', {}, "Who is learning React")
const interestList = React.createElement('ul', {className: "me_interests"},
  [
    React.createElement('li', {}, "JavaScript"),
    React.createElement('li', {}, "React"),
    React.createElement('li', {}, "Movies"),
    React.createElement('li', {}, "Ice cream")
  ]
)
const meInReact = React.createElement('div', {className: "me"}, [title, desc, interestList])

ReactDOM.render(
  meInReact,
  document.getElementById('main')
)
