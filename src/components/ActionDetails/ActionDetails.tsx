import React, {useState} from 'react';

const ActionDetails = () => {
  const [input, setInput] = useState<string>();

  const removeDollarSign = (value) => (value[0] === '$' ? value.slice(1) : value)
  const getReturnValue = (value) => (value === '' ? '' : `$${value}`)

  const handleChange = (ev) => {
    ev.preventDefault()
    const inputtedValue = ev.currentTarget.value
    const noDollarSign = removeDollarSign(inputtedValue)
    if (isNaN(noDollarSign)) return
    setInput(getReturnValue(noDollarSign))
  }

  return (
    <div>
      <h1 data-testid={"detail-id"}>Hello World</h1>
      <button data-testid={"detail-click-me-button-id"} onClick={() => {
        console.log("Clicked")
      }}>Click me!
      </button>
      <form>
        <input value={input} onChange={handleChange} data-testid={"input-id"} aria-label={"input"}/>
        <button type={"submit"} data-testid={"detail-submit-button-id"}>submit</button>
      </form>
    </div>
  );
}

export default ActionDetails;
