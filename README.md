# UC-JS-08: Compare Two Measurement Values

## Actor

System

## Trigger

Comparison action with valid inputs

## Preconditions

Both values converted to base unit

## Postconditions

Returns comparison result as a sentence

## Flow

1. Call `compareValues(v1, u1, v2, u2, base1, base2)`
2. Compare base values:

   * If `base1 > base2` → return **GREATER**
   * If `base1 < base2` → return **LESS**
   * Else → return **EQUAL**
3. Format result as readable sentence
