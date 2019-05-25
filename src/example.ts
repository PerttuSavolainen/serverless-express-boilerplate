const exampleLambda = async (req: any, res: any) => {
  console.log("This is an example lambda");
  res.send("Hello there!");
};

export default exampleLambda;