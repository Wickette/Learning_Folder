# Animations with CSS
**Psuedoclasses** - a keyword added to a selector that specifies a special state of the selected element(s)
* :hover
* :focus
* :active

https://codepen.io/Colt/pen/QgpzMy?editors=1100

**:hover** - tiggers by a user mousing over
```CSS
div:hover {
    background: purple;
}
```

**:focus** - triggers when an element "receives focus"
```CSS
input:focus {
    background: purple;
}
```

**:active** - triggers when an element is "being activated by user"
```CSS
button:active {
    background: purple;
}
```
***

**Transform** - lets you manipulate the coordinate space of the CSS visual formatting model; lets you move, warp, rotate, and scale elements
* translate
* scale
* rotate

**Translation** - move something around

https://codepen.io/Colt/pen/GEmOjv?editors=1100
```CSS
div {
    transform: translateX(100px);
};
/* will shift all divs over 100px to the right */
.variations {
    transform: translateX(10px);
    transform: translateY(10px);
    transform: translate(10px 10px);
    transform: translate(10px);
};
```
**Scaling** - alter the size of an element
```CSS
div {
    transform: scale(2);
    /* doubles the size of all divs */
};
.variations {
    transform: scaleX(2);
    transform: scaleY(2);
    transform: scale(2,5);
    transform: scale(5);
};
```
**Transform-Origin** - lets you modify the origin for transformations of an element

https://codepen.io/Colt/pen/VWJGJE

```CSS
.transformed {
    background-color: #3498db;
    transform: scale(2);
    /* the below, will transform the element starting from the upper left-hand corner. "Cements the element by the upper left-hand corner" */
    transform-origin: 0 0;
};
.variations {
    transform-origin: left;
    transform-origin: bottom;
    transform-origin: right;
    transform-origin: top;
    transform-origin: right top; /* etc */
}
```

**Rotate** - using CSS to...rotate things

https://codepen.io/Colt/pen/GEbPQY

```CSS
div {
    transform: rotate(45deg);
    /* essentially, stick a pin in the top-left, and rotate from there rather than the default (center) */
    transform-origin: 0 0;
};
```
```CSS
div {
    /* you can't have 2 seperate transforms like below */
    transform: rotate(90deg);
    transform: scale(2);
    /* the scale(2) will over ride the rotate(90deg) */
    /* instead chain the transforms like below */
    transform: rotate(90deg) scale(2);
};
```

# CSS Transitions
https://codepen.io/Colt/pen/GEbbLO

**Transitions** - allow us to control animation speed when chaning CSS properties
* ex. double the size of a div "over 3 seconds"

## 4 Transition Properties
* transition-duration
* transition-property
* transition-timing-function
* transition-delay

**transition-duration** - how long should the transition last?

https://codepen.io/Colt/pen/MoMNEw
```CSS
div {
    transition-duration: 1s;
    transition-duration: 0.5s;
    transition-duration: 1s, 3s;
}
```
**transition-property** - what prperties should be transitioned

https://codepen.io/Colt/pen/MoMNEw
```CSS
div {
    transition-property: background;
    transition-property: opacity;
    transition-property: all;
    transition-property: color, opacity;
}
```
```CSS
.combined {
    transition-property: background, border-radius;
    transition-duration: 5s, 1s;
    /* background takes 5s, border-radius takes 1s */
}
```


**transition-delay** - how long a delay before the transition starts

https://codepen.io/Colt/pen/JrqepQ
```CSS
div {
    transition-delay: 4s;    
    transition-delay: 5ms, 10s;    
}
```

**transition-timing-function** - what's the "acceleration curve" for the transition

```CSS
div {
    transition-timing-function: ease-in;
    transition-timing-function: ease-out;
    transition-timing-function: linear;
}
```

https://easings.net/

https://matthewlein.com/tools/ceaser

https://cubic-bezier.com/#.17,.67,.83,.67

## Transition Shorthand (all in one line)
```CSS
div {
    transition: transform 1.5s ease-in 1;
    /* property, duration, timing-function, delay */
}
.multiple-properties {
    transition: transform 1.5s ease-in 1, background-color 0.5s linear;
    /* 2 properties being affected (transform and background-color) */
}
```

