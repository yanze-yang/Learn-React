# Pass props to the component wrapped by HOC

When you pass `mynNum` to `<ClickCounter />`, it is passed to HOC.

Adding `{...this.props}` to `<WrappedComponent />` ensure the props on `<ClickCounter />` works.

# pass arguments to HOC

```jsx
const Hoc2 = () => {
  return (
    <div>
      <ClickCounter myNum={5} />
    </div>
  );
};
```

```jsx
import React, { Component } from "react";

const withCounter = (WrappedComponent, increment) => {
  class withCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((pre) => {
        return { count: pre.count + 1 };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          name="My name is John, from Hoc"
          {...this.props}
        />
      );
    }
  }
  return withCounter;
};

export default withCounter;
```

# pass arguments to HOC

```jsx
const withCounter = (WrappedComponent, incrementNum) => {
    incrementCount = () => {
      this.setState((pre) => {
        return { count: pre.count + incrementNum };
      });
    };
  }
};
```

```jsx
export default withCounter(HoverCounter, 10);
```
