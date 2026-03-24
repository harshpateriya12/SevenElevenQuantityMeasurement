**UC-JS-17: Execute Calculation**
**Actor**

End User

**Trigger**

Input or dropdown change with all fields filled

**Preconditions**

Valid state and selected action mode

**Postconditions**

Result displayed, record saved, history updated

**Flow**
calculate() runs using async/await with error handling.
Based on action:
Conversion → Convert value and show result
Comparison → Convert to base unit and compare
Arithmetic → Normalize units and perform operation
Create record with type, action, result, timestamp
Save using saveHistory()
Fetch and display updated history
Show error message if any issue occurs
