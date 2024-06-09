// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{
  /* <div id="parent">
    <div id="child1">
        <h1>hi, I'm h1 tag</h1>
        <h2>hi, I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h3>hi, I'm h3 tag</h3>
        <h4>hi, I'm h4 tag</h4>
    </div>
</div> */
}
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi, I'm h1 tag!"),
    React.createElement("h2", {}, "Hi, I'm h2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "Hi, I'm h3 tag!"),
    React.createElement("h4", {}, "Hi, I'm h4 tag!"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
