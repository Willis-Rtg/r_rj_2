import ApolloClient from "apollo-boost";

const defaults = {
  isLogIn: Boolean(localStorage.getItem("token")) || false,
};

const resolvers = {
  Mutation: {
    localLogin: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: { isLogIn: true },
      });
      return null;
    },
    localLogout: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location.reload();
      return null;
    },
  },
};

export default new ApolloClient({
  // uri: "https://eu1.prisma.sh/kshwan1023-33bb1f/r_prisma/dev",
  uri: "https://r-prisma.herokuapp.com/",
  clientState: {
    defaults,
    resolvers,
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    SetCookie: "HttpOnly;Secure;SameSite=Strict",
  },
});
