import App from "./App";

const PORT = process.env.PORT || 4000;

App.listen(PORT, function () {
  console.log(`server running in" + ${PORT}`);
});
