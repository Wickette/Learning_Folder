# Keyframe Animations
* transitions allow us to animate a **single state change**
* keyframes allow for much more complex **multi-state animations**

# Keyframe Syntax
Step 1. Define
```CSS
@keyframes rainbowtext {
    0% {
        color: red;
        font-size: 20px;
    }
    25% {
        color: orange;
    }
    50% {
        color: yellow;
        font-size: 40px;
    }
    75% {
        color: green;
    }
    100% {
        color: blue;
        font-size: 40px;
    }
}
```

Step 2: Apply
```CSS
p {
    animation-name: rainbowtext;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
}
```

# Animation Properties

**Usual suspects**

* animation-name
* animation-duration
* animation-timing-function
* animation-delay

**"Newer" animation properties**

* animation-iteration-count - how many times should it repeat (3, 7 etc., infinite)
* animation-fill-mode - specifies how an animation should apply styles before and after the animation (forwards, backwards, both, none)
* animation-direction - reverse, forward, alternate(combines forward&reverse and alternates)
* animation-play-state - specifies whether the animation is running or paused (paused, running)

