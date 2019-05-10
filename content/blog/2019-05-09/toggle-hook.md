---
title: I used my first React Hook!
date: "2015-05-09"
---

Today I was working on a div that toggles open and close when you click it to show a list of items. I started the component as a functional component. After I finished the UI and all the pretty css, I started thinking about the toggling. This is the first time since bootcamp that I'm writing a toggle from scratch. I remember using jQuery there to add and remove the class, but we don't use jQuery anymore. 

So here's my journey into creating a toggle:

1. Google "how to toggle vanilla js" (since I didn't want to use jQuery)
2. getElementById?? No I don't need that. I can use onClick on the div because React. 
3. So since I have access to onClick, write a function and pass it to that adds and removes the `.open` class.
4. What does the `.open` class need again? Google "css toggle class"....
5. `Display: none;` when the div is closed and `Display: block;` when it's open. So that means initial state is closed and default class should be `display: none;`. 
6. Oh I need state! onClick changes the state and flip the class. Got it!!
7. Oh I need state.....I need to change this component to a Class. 
8. No wait.
![A lightbulb turns on over someone's head as they get an idea.
](https://media.giphy.com/media/Mjq9vmDuJlBKw/giphy.gif)
9. REACT HOOK USESTATE!!!!!!!!!!!!!!! * air horns *



My beautiful toggle looks like this

```javascript
import React from 'react'

const ToggleDiv = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)

  <div className='toggle' onClick={toggle}>
     <p>TITLE</p>
     <span>
       {isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} /> } 
     </span>
  </div>
  <div className={`container ${isOpen ? 'open' : ''}`}>
    {list of stuff}
  </div>
}

export default ToggleDiv
```


```css
.toggle {
  margin-top: 2px;
  display: none;
}

.open {
  display: block;
}
```

Super awesome 'a-ha' moment and feeling. I love how I can use `isOpen` anywhere throughout the component. I used it to set the chevron icon to show if the div is open or closed. It flips between pointing up and down. 
