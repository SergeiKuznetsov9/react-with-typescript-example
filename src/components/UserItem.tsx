import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

export const UserItem: FC<UserItemProps> = ({ user }: UserItemProps) => {
  return (
    <Link to={`${user.id}`}>
      <div style={{ padding: 15, border: "2px solid grey" }}>
        {user.id}. {user.name} lives in {user.address.city} on the{" "}
        {user.address.street} street
      </div>
    </Link>
  );
};
