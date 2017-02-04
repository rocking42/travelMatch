# Luxury Escapes - Technical Task

## Specification
* Please complete the following task in Javascript. Feel free to use any open-source packages or libraries. The task should output the results provided below.

* The focus of this task is not to cover every logical edge case for every data scenario, but more to see how you approach a problem and structure your code.

* Please treat this as production-ready code and include automated tests to a level you are comfortable with.

* If you have time please create a Web application using React that publishes the list of resort and tour packages offered in order of suitability and allows the following inputs to be modified:
 - Continent
 - Total Price
 - Days

* Please be clear about any dependencies, versions required to successfully run the application

* Feel free to contact us if you have any queries.

## Outline

An online travel agent offers packages containing resort and tour bookings.

Our customer Anne, would like a 2 week holiday, has no more than 5K to spend, likes beach holidays in Asia and she would like to spend as much time as possible on diving and horse-riding activities.

Please find the best package deal for Anne allowing her to have the most activity days possible while ensuring she spends at least one day doing each activity. The resort must be in Asia  and within her budget.

Assume Anne has time to do an activity every day (14 days)

## Expect Output

Publish the resort, each tour, price of each component and total

i.e.

```
Package
=======
14 days in Kuta, Bali: $1000

Tours
-----
Horse-Riding:         2 Day Evening Horse Riding Trip X 2: $750
                      1 Day Evening Horse Riding Trip X 1: $1000

Diving:               5 day Dive Trip X 1: $2000

Total:                $4500
Total Activity Days:  10
```
