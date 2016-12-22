//Code React element here
const el = React.createElement

let interests = ["JavaScript", "React", "Movies", "Ice cream"]

const meInReact = el('div', {className: 'me'},
    el('h1', {}, 'An Awesome Person'), 
    el('p', {}, 'Who is learning React'),
    el('ul', {className: 'me__interests'}, 
        interests.map(function(interest, index){
            return el('li', {key: index}, interest)
        })
    )
)

ReactDOM.render(meInReact, document.getElementById('main'))