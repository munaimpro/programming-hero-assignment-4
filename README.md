# programming-hero-assignment-4

Programming Hero Assignment 4



### Q1 - What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans - getElementById selects a single element by its id selector, getElementByClassName selects all elements with the same class name, and querySelector selects the first matching element with any css selectors such as - class, id, tag, attribute etc. and querySelectorAll selects all matching elements with any css selectors

### Q2 - How do you create and insert a new element into the DOM?

Ans - I will create a new element using document.createElement(), then I will add content, class name or attribute to this element, and keep it in a variable, then I select a parent element and insert the new element to it using methods append() or appendChild()

### Q3 - What is Event Bubbling? And how does it work?

Ans - If we have an event on our target element, then after the event trigger, the event also propegate to the parent elements of the target element, if they also have the same event. This scenario is called event bubbling, which we can stop by adding stopPropegation() in the target element or any of the parent element upto which we want

### Q4 - What is Event Delegation in JavaScript? Why is it useful?

Ans - Event delegation in JavaScript is a technique where a parent element handles events for its child elements using  event bubbling , so it is not necessary to assign event listeners to every child element separately. It is useful in JavaScript, because - It reduces the number of event listeners, It works fine for dynamically added elements, It improves performance etc.

### Q5 - What is the difference between preventDefault() and stopPropagation() methods?

Ans - The preventDefault() method prevents default browser's default action for an event, on the other hand, the stopPropagation() method stops the event bubbling. The preventDefault() method affects only the default behaviour of the event, but the stopPropagation() method affects the event propagation, not the default behavior
