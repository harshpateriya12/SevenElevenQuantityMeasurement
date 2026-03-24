# UC-JS-10: Populate Unit Dropdown

## Actor

End User

## Trigger

`getUnits()` returns unit data

## Preconditions

`selectEl` is valid, `units` is an array

## Postconditions

Dropdown filled with unit options and default prompt

## Flow

1. Call `populateDropdown(selectEl, units)`
2. Clear existing options
3. Add default option `"-- Select Unit --"` (disabled & selected)
4. Loop through units
5. Create `<option>` with value = symbol and text = label + symbol
6. Append options to dropdown
