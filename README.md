# UC-JS-12: Show Result

## Actor

End User

## Trigger

Calculation is successful

## Preconditions

`#result-value` and `#result-unit` exist in DOM

## Postconditions

Result displayed with highlight animation

## Flow

1. Call `showResult(value, unitSymbol)`
2. Update `#result-value` with value
3. Update `#result-unit` with unit
4. Add `"highlight"` class
5. Remove class after 1500 ms

---
