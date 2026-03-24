# UC-JS-06: Load All History Records

## Actor

System

## Trigger

Page load or after saving a calculation

## Preconditions

`json-server` is running

## Postconditions

Returns history records (newest first)


## Flow

1. Call `getHistory()`
2. Fetch data from `/history` API with sorting by timestamp (desc)
3. Parse and return JSON response
4. Return empty array if no records
