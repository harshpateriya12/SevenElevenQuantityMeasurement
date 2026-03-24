# UC-JS-16: Handle Action Tab Click

## Actor

End User

## Trigger

User clicks on an action tab

## Preconditions

Event listeners are already attached

## Postconditions

Action updated, UI adjusted, result cleared


## Flow

1. Detect click on `.action-btn`
2. Update `state.action` using selected button
3. Highlight active tab using `setActive()`
4. Show/hide operators using `toggleOperators()` (only for Arithmetic)
5. Reset result using `showResult(0, "")`
