#  UC-JS-14: Render History List

## Actor

End User

## Trigger

History data loaded or new record added

## Preconditions

`#history-list` exists in DOM

## Postconditions

History displayed (newest first) or empty message shown


## Flow

1. Select `#history-list` element
2. Clear existing list content
3. If no records → show "No history yet"
4. Loop through records
5. Create `<li>` with expression, result, and timestamp
6. Append each item to the list
