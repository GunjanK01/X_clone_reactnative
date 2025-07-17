// export const protectRoute = async (req, res, next) => {
//   if (!req.auth().isAuthenticated) {
//     return res.status(401).json({ message: "Unauthorized - you must be logged in" });
//   }
//   next();
// };

export const protectRoute = (req, res, next) => {
  if (!req.auth || !req.auth.userId) {
    return res.status(401).json({ message: "Unauthorized - you must be logged in" });
  }
  next();
};
