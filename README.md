# UC-JS-01: Create JSON Server Database

## Actor

End User (Developer)

## Trigger

Initial project setup

## Preconditions

`json-server` installed

## Postconditions

API endpoints available on port 3000

## Flow

1. Create `db.json` file
2. Add collections:

   * `units` → unit details
   * `conversions` → conversion data
   * `history` → empty array
3. Run server using `json-server --watch db.json --port 3000`
4. Verify API using `/units` endpoint
