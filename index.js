marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  },
});
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}" class='link'>${text}</a>`;
};

function App() {
  const [text, setText] = React.useState(placeholder);
  return (
    <main>
      <h1 className='title'>Markdown Previewer</h1>
      <textarea
        name='text'
        id='editor'
        cols='50'
        rows='10'
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      ></textarea>
      <Preview text={text} />
    </main>
  );
}

function Preview({ text }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(text, { renderer: renderer }),
      }}
      id='preview'
    ></div>
  );
}

const placeholder = `# This is a (h1)Heading

## This is a (h2)Heading 2

This is a [link](https://www.freecodecamp.org)

This is inline code \`<div></div>\`

This is a code block
\`\`\`
function example(x,y){
  return x+y
}
\`\`\`

This is a list
1. example 1
1. example 2
1. example 3

This is a 
> Block quote

Here is an image
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

This is **Bolded Text**`;

ReactDOM.render(<App />, document.getElementById('root'));
