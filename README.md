# Paylocity Coding Challenge

## Getting Started

### Install

```bash
npm install
```

### Running the development server:

```bash
npm run dev
```

### Opening the app

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assumptions

- The requirements state that benefits cost $1000 per employee and $500 for dependents, but this does not specify how much each benefits itself costs, so I've assumed each benefit (medical, dental, vision) costs a separate $1000/500.
- Initial implementation I am displaying total annual cost rather than per pay period because the requirements were not specific, but I'd like to go back and display a per pay period amount in addition to the yearly.
- I wasn't sure how employees being paid $2,000 per paycheck worked into the problem so I omitted it. If I had more time, maybe I'd add expected net pay rather than just the benefits cost.

## Technical decisions

- I am using a Next API for the data. I'm saving it in memory.
- I chose to calculate cost upon save, rather than on fetch so that the data model always was directly queryable for cost and no runtime calculations were needed.
- If I had more time there's a lot I would refactor out into separate modules, such as calculating benefit cost, the /people/[id] API route handling of both GET and POST requests, and a separate ListBenefits component instead of writing the display logic directly in page.tsx
- I can use a layout to add the "Back to People" link to the edit person and select benefits screens.
- For expediency, there is no form/API validation for things like first or last name being empty.
