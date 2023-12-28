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
- Since pay per period was included in the challenge instructions, I assumed net pay was to be displayed.
- Since the number of pay periods was included in the challenge instructions, I assumed per pay period cost was to be displayed.
- The user specifies capitalization and the app doesn't force anything to be upper or lower case. I didn't know what specific business logic would apply to that.

## Technical decisions

- I am using a Next API for the data. I'm saving it in memory.
- I chose to calculate cost upon save, rather than on fetch so that the data model always was directly queryable for cost and no runtime calculations were needed.
- If I had more time there's a lot I would refactor out into separate modules, such as calculating benefit cost, the /people/[id] API route handling of both GET and POST requests, and a separate ListBenefits component instead of writing the display logic directly in page.tsx
- I can use a layout to add the "Back to People" link to the edit person and select benefits screens.
- For expediency, there is no form/API validation for things like first or last name being empty.
