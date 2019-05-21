---
title: TIL #1 useLayoutEffect
date: "2019-05-20"
---

Today I learned how to use React Hook `useLayoutEffect()`. 

I had a class component that was using `componentDidMount()` and I knew I could use a hook instead. After trying `useEffect()`, I realized that it runs after render, and what I needed to update was running before that. So it wasn't working. I read the docs and found `useLayoutEffect()`. I also needed to unsubscribe to the listener I had, so I learned you return a function in the effect hook that unsubscribes you from the listener. And lastly, I learned that you need to watch the state that is changing, not the setState function. 

Woo for more hooks in my app!
