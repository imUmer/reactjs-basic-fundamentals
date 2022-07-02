import { Link, Routes, Route } from "react-router-dom";
import User from "./User";
function DynamicRouting() {
  let users = [
    { id: 1, name: "Umer" },
    { id: 2, name: "Anni" },
    { id: 3, name: "Asad" },
    { id: 4, name: "Shahzad" },
  ];
  return (
    <div>
      {users.map(
        (user) => (
          // <Route>
          <Link to={"/user/" + user.id + "/" + user.name}>
            <h2>{user.name}</h2>
          </Link>
        )
        // </Route>
      )}
      <Routes>
        <Route path="/user/:id/:name" element={<User />}></Route>
      </Routes>
    </div>
  );
}
export default DynamicRouting;
