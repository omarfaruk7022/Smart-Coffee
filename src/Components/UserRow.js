import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const UserRow = ({ user, refetch, index }) => {
  const { email, role, name } = user;
  const makeAdmin = () => {
    swal({
      title: "Are you sure?",
      text: "If you make this user to Admin ,user can control this site",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          ` https://smart-coffee-server-production.up.railway.app/users/admin/${email}`,
          {
            method: "PUT",
            headers: {},
          }
        )
          .then((res) => {
            if (res.status === 403) {
              swal("You are not authorized to make admin");
            }
            return res.json();
          })
          .then((data) => {
            if (data.modified > 0) {
              refetch();
              swal("Success", "User is now admin", "success");
            }
          });
      }
    });
  };

  const deleteUser = () => {
    swal({
      title: "Are you sure?",
      text: "If you remove this user from,user can't control this site",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          ` https://smart-coffee-server-production.up.railway.app/users/admin/${email}`,
          {
            method: "PATCH",
            headers: {},
          }
        )
          .then((res) => {
            if (res.status === 403) {
              swal("You are not authorized to make admin");
            }
            return res.json();
          })
          .then((data) => {
            if (data.modified > 0) {
              refetch();
              swal("Success", "Admin is now user", "success");
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-xs bg-green-400">
            Make Admin
          </button>
        ) : (
          <h1>He is an {role}</h1>
        )}
      </td>
      <td>
        {role === "admin" ? (
          <>
            <button onClick={deleteUser} className="btn btn-xs bg-red-500">
              Remove Admin
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-xs disabled">Remove Admin</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
