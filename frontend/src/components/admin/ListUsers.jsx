import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import Loader from "../layouts/Loader.jsx";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData.js";
import AdminLayout from "../layouts/AdminLayout.jsx";
import { useDeleteUserMutation, useGetAdminUsersQuery } from "../../redux/api/userApi.js";

const ListUsers = () => {
    const { data, isLoading, error } = useGetAdminUsersQuery();

    const [ deleteUser, { error: deleteError, isLoading: isDeleteLoading, isSuccess }] = useDeleteUserMutation();

    useEffect(() => {
        if (error) {
            toast.error(error?.data?.message);
        }
        if (deleteError) {
            toast.error(deleteError?.data?.message);
        }
        if (isSuccess) {
            toast.success("User Deleted")
        }

    }, [error, deleteError, isSuccess]);

    const deleteUsersHandler = (id) => {
        deleteUser(id);
    }

    const setUsers = () => {
        const users = {
            columns: [
                {
                    label: "ID",
                    field: "id",
                    sort: "asc",
                },
                {
                    label: "User Name",
                    field: "name",
                    sort: "asc",
                },
                {
                    label: "User Email",
                    field: "email",
                    sort: "asc",
                },
                {
                    label: "Role",
                    field: "role",
                    sort: "asc",
                },
                {
                    label: "Actions",
                    field: "actions",
                    sort: "asc",
                },

            ],
            rows: [],
        };

        data?.users?.forEach((user) => {
            users.rows.push({
                id:`${user?._id?.substring(0, 16)}...`,
                name: user?.name,
                email: user?.email,
                role: user?.role,
                actions: (
                    <>
                        <Link to={`/admin/users/${user?._id}`} className="btn btn-outline-primary">
                            <i className="fa fa-pencil"></i>
                        </Link>
                        <button className="btn btn-outline-danger ms-2"
                            disabled={isDeleteLoading}
                            onClick={() => deleteUsersHandler(user?._id)}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </>
                )

            })
        })

        return users;
    }

    if (isLoading) return <Loader />
    return (
        <>
            <AdminLayout>
                <MetaData title={"All Users"} />
                <h1 className="my-5"> {data?.users?.length} Users</h1>

                <MDBDataTable
                    data={setUsers()}
                    className="px-3"
                    bordered
                    striped
                    hover
                />
            </AdminLayout>
        </>
    )
}

export default ListUsers;