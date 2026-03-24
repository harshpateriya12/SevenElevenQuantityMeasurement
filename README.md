# UC-JS-02: App Initialisation

## Actor

End User

## Trigger

Page load (`DOMContentLoaded`)

## Preconditions

`json-server` running, JS files loaded

## Postconditions

Dropdowns filled, history loaded, events attached
## Flow

1. Run code on `DOMContentLoaded`
2. Initialize `state` with default values
3. Attach event listeners
4. Load default units (`Length`)
5. Set first type and action as active
6. Hide operator row
7. Load and render history
