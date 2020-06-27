# Refs and the DOM

In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props.

However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow.

The child to be modified could be:

- a DOM element
- an instance of a React component (Class Componet)

## When to Use Refs

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

## Creating Refs in a Class Component

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 1. React.createRef();
    // create a ref to store the textInput DOM element
    this.inputRef = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);

    // 2. callback ref (older)
    this.callbackRef = null;
    this.setCallbackRef = (element) => {
      this.callbackRef = element;
    };
  }

  componentDidMount() {
    // 1.1
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.inputRef.current.focus();
    console.log(this.inputRef);

    // 2.1
    // this.callbackRef directly accesses the input DOM, no `current`
    // React will call the ref callback with the DOM when the component mounts,
    // and call it with null when the component unmounts.
    // we need check if the value is not null.
    if (this.callbackRef) {
      this.callbackRef.focus();
      console.log(this.callbackRef);
    }

    // 3. use refs[name] (bad)
    this.refs.inputName.focus();
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `inputRef` that we created in the constructor
    return (
      <div>
        <input ref={this.inputRef} />
        <input ref={this.setCallbackRef} />
        <input ref="inputName" />
        <button onClick={this.focusTextInput}>focus</button>
      </div>
    );
  }
}
```

## Creating Refs in a Function Component

```jsx
function CustomTextInput(props) {
  // 1. use React Hooks - useRef()
  const inputRef_1 = useRef(null);

  // 2. use React.createRef()
  const inputRef_2 = React.createRef();

  function focusTextInput() {
    inputRef_1.current.focus();
    inputRef_2.current.focus();
  }

  return (
    <div>
      <input ref={inputRef_1} />
      <input ref={inputRef_2} />
      <button onClick={this.focusTextInput}>focus</button>
    </div>
  );
}
```
