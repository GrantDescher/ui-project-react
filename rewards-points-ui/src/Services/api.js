import data from "../data";

export const fetchData = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, 500);
  });
}