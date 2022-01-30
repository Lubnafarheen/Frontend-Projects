const arrayOfObjects = [
  {
    name: "Manazar Lohsar",
    date: "20 January",
    Venue: "Home: Vandrarstigen 1,Spånga",
  },
  {
    name: "Kahmala",
    date: "20 January",
    Venue: "Home: Vandrarstigen 1,Spånga",
  },
  { name: "Amrin", date: "20 January", Venue: "Home: Vandrarstigen 1,Spånga" },
  { name: "Thyaba", date: "20 January", Venue: "Home: Vandrarstigen 1,Spånga" },
  { name: "Saima", date: "20 January", Venue: "Home: Vandrarstigen 1,Spånga" },
];

const newItems = arrayOfObjects.map(
  ({ name, date, Venue }) =>
    `we are cordiallyy inviting you ${name} and your family for a small get together on ${date} at our ${Venue} .`
);

console.log(newItems);
