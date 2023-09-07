function newValue() {
  const object = {
    c1: "test1",
    c2: "test2",
  };
  return (
    <>
      <h1>{object.c1}</h1>
      <h2>{object.c2}</h2>
    </>
  );
}

export const FirstApp = () => {
  const newMessage = "andres";

  return (
    <>
      <h1>Andres</h1>
      <h2>{newMessage}</h2>
      <div>{newValue()}</div>
    </>
  );
};
