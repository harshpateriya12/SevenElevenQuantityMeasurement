# UC-JS-11: Set Active Button

## Actor

End User

## Trigger

User clicks a selectable button

## Preconditions

Parent element contains all buttons

## Postconditions

Only clicked button is active

##  Flow

1. Call `setActive(parentEl, clickedEl, childSelector)`
2. Remove `"active"` class from all buttons
3. Add `"active"` class to clicked button
