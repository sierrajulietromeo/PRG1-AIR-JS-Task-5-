# Flight Planning  

A new airline wants to start running commercial passenger flights. In order to assess the feasibility of proposed flights they
want a program that can help calculate the likely profitability of running a flight between a UK and an overseas airport. The UK airport
will be either Manchester (MAN) or London Gatwick (LGW).

A comma separated (CSV) file called airports.csv has been provided that contains the name and code for each overseas airport, 
the distance from MAN and the distance from LGW.

A CSV file has also been provided with aeroplane information.

## Basic functionality

* Given a starting UK airport, an overseas airport and other information (see example below), the program should calculate the profitability for a given flight.

## Guidance

  1. Your solution should read in the contents of the mentioned CSV files. This will ensure that your solution will continue to work (e.g. for example if additional overseas airports are added).
  3. You are free to decide on the implementation details of this task. If you were to follow a procedural approach, one approach would be to have a number of functions that perform single tasks that work together to provide the desired output.
  4. You can decide whether the program will receive run-time data from the console, or from a file (e.g. a CSV or TXT file). 
  5. You should ensure that your program has robust error-handling. (What if a CSV file is missing? An aircraft has a finite capacity, don't oversell seats; An aircraft has a finite range!)
  6. Ensure appropriate rounding of floats is considered for calculated values.


Here is an example, including data from the CSV files or that is provided when the program is executed.

|  |  |Notes| 
|---|---|---|
| UK airport | MAN | Should match a UK airport in the CSV file
| Overseas airport | JFK | Should match an overseas airport in the CSV file
| Distance | 5376km | Should match the the data in the CSV file
| Type of aircraft | Large narrow body | Should match the data in the CSV file
| Maximum flight range | 5600km | Should match the data in the CSV file
| Running cost per total seat num per 100km | £7 | Should match the data in the CSV file
| Number of economy seats booked | 150 of 180 | Provided at run-time
| Number of business seats booked | 12 of 20 | Provided at run-time
| Number of first class seats booked | 2 of 4 | Provided at run-time
| Price of a economy class seat | £399 | Provided at run-time
| Price of a business class seat | £999 | Provided at run-time
| Price of a first class seat | £1899 | Provided at run-time
| Total income for flight (399 * 150) + (999 * 12) + (1899 * 2) | £75636 | Calculated by the program
| Flight cost £7 × (5376km / 100km) × (204 seats) | £72734.08 | Calculated by the program
| Flight profit  | £2901.92 | Calculated by the program



## Additional tasks

* Calculate the maximum revenue (assuming all seats are sold) for all departure airports, destinations airports and different aircraft.
* Calculate the break-even point, based on the number of seats sold for departure airports, destination airports and different aeroplane types.
* Test your program works with 2 additional UK airports, 2 additional overseas airports and 1 more aircraft type.
* Write the calculated results back to a file with all the necessary details. This file should be appended so that previous calculation are not overwritten. 


## Exceptional Tasks

* What additional functionality or presentation improvements can be made to this program?



