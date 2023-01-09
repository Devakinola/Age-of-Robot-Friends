const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px black solid",
        height: "78vh",
      }}
    >
      {" "}
      {props.children}{" "}
    </div>
  );
};

export default Scroll;
