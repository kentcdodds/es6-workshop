test('public class fields help us avoid .bind-ing everything', () => {
  class FakeReactComponent {
    constructor(props) {
      this.props = props
      this.setState = () => {} // just for fun
    }
  }

  class MyComponent extends FakeReactComponent {
    // WORKSHOP_START
    constructor(...args) {
      super(...args)
      // we don't want to have to do this...
      this.handleClick = this.handleClick.bind(this) // sad :-(
    }
    // convert this to a public class field so it's autobound
    handleClick({target: {value}}) {
      this.props.onClick(value)
    }
    // WORKSHOP_END
    // FINAL_START
    handleClick = ({target: {value}}) => {
      this.props.onClick(value)
    }
    // FINAL_END
    render() {
      // weird JSX stuff here
    }
    // this is just so we can test things out
    testClick(value) {
      const fakeEvent = {target: {value}}
      this.handleClick(fakeEvent)
    }
  }

  const onClick = jest.fn()
  const myComponent = new MyComponent({onClick})
  myComponent.testClick('hello world')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onClick).toHaveBeenCalledWith('hello world')
})

//////// Elaboration & Feedback /////////
// WORKSHOP_START
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Public+Class+Fields&em=
*/
// WORKSHOP_END
test('I submitted my elaboration and feedback', () => {
  // WORKSHOP_START
  const submitted = false // change this when you've submitted!
  // WORKSHOP_END
  // FINAL_START
  const submitted = true
  // FINAL_END
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
