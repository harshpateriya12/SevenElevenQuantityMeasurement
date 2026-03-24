# UC-JS-09: Arithmetic Operation

## Actor

System

## Trigger

Arithmetic action with valid inputs and operator

## Preconditions

Second value already normalized to FROM unit

## Postconditions

Returns result in FROM unit

## Flow

1. Call `performArithmetic(v1, v2normalised, op)`
2. Perform operation based on operator:

   * `+` → addition
   * `-` → subtraction
   * `*` → multiplication
   * `/` → division (check divide by zero)
3. Round result to 6 decimal places
4. Throw error for invalid operator
