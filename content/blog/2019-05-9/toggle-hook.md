##I used my first React Hook! 

I was working on a div that would toggle open and close on click. I started the component as a stateless functional component (is that the term?). Basically not a Class component. 
After I finished the UI, I started thinking about the toggling open and close. This is the first time I'm implementing toggling since bootcamp.
I remember using jQuery there, but we don't do that anymore. 

Here's my story:

1. Google "how to toggle vanilla js"
2. getElementById?? No I don't need that. I can use onClick on the div because React. 
3. Oh ok so listen onClick and then use a function that adds and removes the `.open` class.
4. What does the `.open` class need again? Google css toggle class....`Display: none;` when the div is closed. So initial state is closed and `display: none;`
5. Oh I need state! onClick change the state and flip the class. Got it!!
6. Oh I need state.....I need to change this component to a Class.
7. REACT HOOK USESTATE!!!!!!!!!!!!!!! *air horns*



My beautiful toggle looks like this

```const toggleOpen = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)

  <div className='toggle' onClick={toggle}>
        <p>TITLE (count)</p>
        <span>
          {isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} /> } 
        </span>
      </div>
      <div className={`container ${isOpen ? 'open' : ''}`}>
        {list of stuff}
  </div>

}
```
