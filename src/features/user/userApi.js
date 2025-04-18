import api from "../../services/api";

export const loginUser = async ({ email, password }) => {
  const response = await api.get("/user");
  const users = response.data;

  const foundUser = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!foundUser) throw new Error("Invalid credentials");

  return foundUser;
};
