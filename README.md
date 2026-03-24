# UC-JS-07: Apply Conversion Factor or Formula

## Actor

System

## Trigger

Conversion action with valid inputs

## Preconditions

Value is valid; conversion object has factor or formula

## Postconditions

Returns converted value (rounded to 6 decimals)

## Flow

1. Call `applyConversion(value, convObj)`
2. If `factor` exists → multiply value with factor
3. Else → apply formula by replacing `x` and evaluating
4. Round result to 6 decimal places and return
