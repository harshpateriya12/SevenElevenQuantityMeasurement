# UC-JS-13: Toggle Operator Row

## Actor

End User

## Trigger

User clicks an action tab

## Preconditions

`#operator-selector` exists in DOM

## Postconditions

Operator row shown only for Arithmetic action

## Flow

1. Call `toggleOperators(show)`
2. Select `#operator-selector`
3. Set display:

   * `"flex"` if `show = true`
   * `"none"` if `show = false`
