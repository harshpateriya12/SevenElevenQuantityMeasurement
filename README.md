# UC-JS-05: Save Calculation Record to History

## Actor

System

## Trigger

Successful calculation completion

## Preconditions

Record object is prepared with required fields

## Postconditions

Record saved in database with generated ID

## Flow

1. Call `saveHistory(record)`
2. Send POST request to `/history` API
3. Include record data in JSON format
4. Receive and return saved record with ID
