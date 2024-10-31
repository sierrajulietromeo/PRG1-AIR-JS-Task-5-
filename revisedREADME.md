# Flight Planning

A new airline is taking off and needs your help to plan profitable flights between the UK (Manchester or London Gatwick) and various overseas destinations. You'll be using sample flight data to build a program that calculates the potential profitability of each flight.

## Data Files

*   `airports.csv`: Contains names, codes, and distances from Manchester and London Gatwick for each overseas airport.
*   `aeroplanes.csv`: Provides information about the aeroplanes in the airline's fleet.
*   `valid_flight_data.csv`: Contains sample booking data and ticket prices for potential flights.
*   `invalid_flight_data.csv`: Contains similar data but with intentional errors for testing your program's error handling.

## Task 1: Calculate Profitability

Your program should:

1.  Read data from `airports.csv`, `aeroplanes.csv`, and `valid_flight_data.csv`.
2.  Calculate the expected profit or loss for each flight.
3.  Display the flight details and profit/loss calculations. (Bonus points for writing this output to a `.txt` file!)

## Task 2: Handle Errors

Your program should also:

1.  Read data from `invalid_flight_data.csv`.
2.  Gracefully handle data errors (e.g., invalid airport codes, overbooked flights).
3.  Avoid calculating impossible figures.

## Guidance

*   Design your program to read data from the CSV files, allowing for future updates (e.g., adding new airports).
*   Consider using a procedural approach with functions for specific tasks.
*   Ensure proper rounding of calculated values.

## Example Calculation

Here's how to calculate the profit for a flight from Manchester (MAN) to JFK (John F. Kennedy International) using a large narrow-body aircraft:

**Flight Details:**

*   UK airport: MAN
*   Overseas airport: JFK
*   Aircraft type: Large narrow body
*   Economy seats booked: 150
*   Business seats booked: 12
*   First-class seats booked: 2
*   Economy seat price: £399
*   Business seat price: £999
*   First-class seat price: £1899

**Data from CSV Files:**

|Source File|Field|Value|
|:---|:---|:---|
|`airports.csv`|Distance from MAN to JFK|5376 km|
|`aircraft.csv`|Running cost per seat per 100km|£7|
|`aircraft.csv`|Maximum flight range|5600 km|
|`aircraft.csv`|Total seats|204|

**Calculations:**

1.  **Income:**

    |Class|Seats Booked|Price per Seat|Total Income|
    |:---|:---|:---|:---|
    |Economy|150|£399|£59,850|
    |Business|12|£999|£11,988|
    |First Class|2|£1899|£3,798|
    |**Total**|||**£75,636**|

2.  **Cost:**

    |Description|Calculation|Value|
    |:---|:---|:---|
    |Total seats taken|150 (economy) + 12 (business) + 2 (first-class)|164|
    |Cost per seat for the entire flight|£7/seat/100km \* (5376 km / 100 km)|£376.32/seat|
    |Total cost|£376.32/seat \* 164 seats|£61,732.48|

3.  **Profit:**

    £75,636 (income) - £61,732.48 (cost) = **£13,903.52**

## Aim for Excellence

*   Implement robust error handling (invalid codes, flight range, overbooking).
*   Follow good coding standards and refactor your code.
*   Write your own tests to validate your program.

## Rubric

(The rubric table remains largely the same, focusing on functionality, programming conventions, and robustness.)
