---
date: 2019-08-29T21:08:27.728Z
title: Reading "Clean Code"
---
This week I started as an Apprentice at 8th Light! This first week was about going back to basics and reading Clean Code and learning TDD. 

I've read 4 chapters of Clean Code and have really enjoyed it. It's refreshing to learn _why_ we do things certain ways. These are some of my favorite quotes/ideas I wrote down:

### Chapter 1: Clean Code

* Craftmanship is knowledge AND practice. The practice part is IMPORTANT.
* "Leave it cleaner than you found it"
* "Bad code tempts the mess to grow"
* "Clean code is code that has been taken care of"
* "Clean code makes it easy for others to enhance it"

### Chapter 2: Meaningful Names

My favorite chapter so far. I think it was because I had the most experience with this problem and found myself doing a lot of what the book says to not do. I've definitely done something like `booksArray`, `booksList`, `books` type of thing in the same file to try to differentiate between variables. But now I see those aren't very helpful descriptive on _why_ they are different.

* Use pronounceable and searchable names.
* Be explicit, not implicit.
* Names should do the following: why it exists, what it does, how it is used
* "Avoid mental mapping...Clarity is king". Don't use your brain power to try to keep track of what means what and what refers to what, the naming should do this. Use your brain power to solve problems.

### Chapter 3: Functions
This chapter talks about how functions don't start clean and beautiful the first time you write them. This is where TDD comes into place. If you write the tests first, you can write messy code to make them pass, but then you keep refactoring the function to be clean while the tests keep passing. This is why you should take your time. It's not a one and done, it's an iterative process. You can split things out, change names, reorder functions, eliminate duplications, all while keeping the tests passing.

* "We want the code to read like a top down narrative"
* "Functions should do one thing. They should do it well. They should do it only".
* Single level of abstraction. 
* Have no side effects. This means it's doing more than one thing. 
* Be consistent, take your time. 
* "Don't Repeat Yourself" (the classic)
 

### Chapter 4: Comments
I think this was my least liked chapter so far. Maybe I have not ran into enough bad comments to feel so strongly against them as Uncle Bob does. I feel like I rather have more information than not enough. "Comments are always failures" feels like too strong a statement to me 🤷🏻‍♀️. 
* Good comments: amplification, TODO, intent, warnings, clarification. 
* "Truth can only be found in one place, the `code`"
* "Create a function that says the same thing as the comment"
* "Rather than spend your time writing the comments that explain the mess you've made, spend it cleaning that mess"
