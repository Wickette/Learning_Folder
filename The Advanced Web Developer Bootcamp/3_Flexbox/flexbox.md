# Introduction
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

http://flexboxfroggy.com/

A more efficient way to lay out, align and distribute space among items in a container

Container Properties 
* flex-direction
* justify-content
* flex-wrap
* align-items
* align-content

Flex Item Properties
* order
* flex
* flex-grow
* flex-shrink
* align-self

# display: flex;
```CSS
.container {
    display: flex;
}
/* aligns all items in a row  */
/* anytime you use flex - you need this line in order to use flex */
```

# Terminology

* flex container - the 'parent' container containing the `display: flex;`
* main axis - by default runs left to right
* cross axis - by default runs top to bottm
* flex items - the 'children' inside the flex container

# flex-direction
* specifies how items are placed in the flex container, defining the main axis and its cross axis

```CSS
.container {
    flex-direction: row;
}
/* this is the default behaviour (left to right)*/
```
```CSS
.container {
    flex-direction: row-reverse;
}
/* reverses the default row (right to left) */
```
```CSS
.container {
    flex-direction: column;
}
/* runs from top to bottom 'column' */
```
```CSS
.container {
    flex-direction: column-reverse;
}
/* a column running from bottom to top */
```

# flex-wrap

* specifies whether items are forced into a single line OR can be "wrapped into multiple line"

```CSS
.container {
    flex-wrap: wrap;
}
/* allows flex items to 'wrap' into a new line OR lines */
```
```CSS
.container {
    flex-wrap: wrap;
}
/* allows flex items to 'wrap' into a new line OR lines BUT changes the cross axis,  so new line OR lines will be pushed upward*/
```

# justify-content
* defines how space is distributed between items in felx container along the main axis

```CSS
.container {
    justify-content: flex-end;
}
/* all items in the flex container move to the 'end' of the row or column */
```
```CSS
.container {
    justify-content: flex-end;
}
/* all items in the flex container move to the 'center' of the row or column */
```
```CSS
.container {
    justify-content: space-between;
}
/* all items in the flex container have equal space between eachother */
```
```CSS
.container {
    justify-content: space-around;
}
/* all items in the flex container have equal space around eachother */
```

# align-items
* defines how space is distributed between items in the flex container along the cross axis

```CSS
.container {
    align-items: flex-start;
}
/* all items in the flex container are aligned at the 'top' */
```
```CSS
.container {
    align-items: flex-end;
}
/* all items in the flex container are aligned at the 'bottom' */
```
```CSS
.container {
    align-items: flex-start;
}
/* all items in the flex container are aligned in the center */
```
```CSS
.container {
    align-items: baseline;
}
/* all items in the flex container are aligned at the baseline, when items are different sizes */
```

# align-content
* defines how space is distributed BETWEEN ROWS in flex container along the cross axis

```CSS
.container {
    align-content: stretch;
}
/* default property will stretch the items to fit within the flex container */
```
```CSS
.container {
    align-content: flex-start;
}
/* will align items at the top  */
```
```CSS
.container {
    align-content: flex-end;
}
/* will align items at the bottom  */
```
```CSS
.container {
    align-content: space-between;
}
/* will add space between the rows  */
```
```CSS
.container {
    align-content: space-around;
}
/* will add space around the rows  */
```
```CSS
.container {
    align-content: center;
}
/* will align rows in the center  */
```

# align-self
* allows you to override align-items on idividual flex item

# order
* specifies the order used to lay out items in their flex container
* by default all items have an order number of 0
* so by specifying the order of each item, you can rearrange

# (flex)
* defines how a flex item will grow or shrink to fi the 'available' space in a container
* if you want one item bigger then the other items

```CSS
flex: 
    <'flex-grow'>
        <'flex-shrink'>
            <'flex-basis'>
```
**flex-basis** - like width, (width with rows, and height with columns) but not (specifies the ideal size of a flex item BEFORE it's placed into a flex container)

https://mastery.games/post/the-difference-between-width-and-flex-basis/

# flex-grow
* dictates how the unused space should be spread amongst flex items

```CSS
.box{
    flex-grow: 1;
}
.box-2{
    flex-grow:2;
}
/* box-2 will use twice as much of the space compared to the other boxes */
```

# flex-shrink
* dictates how items should shrink when there isn't enough space in the container

