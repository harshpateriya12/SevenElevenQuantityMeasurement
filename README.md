# UC-JS-15: Handle Type Card Click

## Actor

End User

## Trigger

User clicks on a type card

## Preconditions

Event listeners are attached

## Postconditions

State updated, dropdowns refreshed, inputs and result cleared

## Flow

1. Detect click on `.type-card`
2. Update `state.type`
3. Highlight selected card using `setActive()`
4. Clear input fields and result
5. Fetch units using `getUnits()`
6. Populate dropdowns using `populateDropdown()`
7. Reset selected units in state
