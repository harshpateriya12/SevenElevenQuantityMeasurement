# UC-JS-04: Fetch Conversion Record

## Actor

System

## Trigger

Conversion requires factor or formula

## Preconditions

Conversion entry exists in database

## Postconditions

Returns conversion object for unit pair

## Flow

1. Call `getConversion(from, to)`
2. Fetch data from `/conversions` API with query params
3. Parse JSON response (array)
4. If empty → throw error
5. Return first conversion object
