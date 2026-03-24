# UC-JS-03: Fetch Units by Type

## Actor

System

## Trigger

User selects a type or app loads

## Preconditions

`json-server` running with units data

## Postconditions

Returns list of units for selected type

## Flow

1. Call `getUnits(type)`
2. Fetch data from `/units?type=${type}`
3. Check `res.ok` for success
4. Parse and return JSON data
5. Return empty array if no units found


## Exception

* Throw error if response fails
* Handle network errors in caller

