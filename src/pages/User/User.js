import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRouter from "../../components/helper/ProtectedRouter/ProtectedRouter";
import UserHeader from "../../components/UserHeader/UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost/UserPhotoPost";
import UserStats from "./UserStats/UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouter>
              <Feed />
            </ProtectedRouter>
          }
        />
        <Route
          path="/postar"
          element={
            <ProtectedRouter>
              <UserPhotoPost />
            </ProtectedRouter>
          }
        />
        <Route
          path="/estatistica"
          element={
            <ProtectedRouter>
              <UserStats />
            </ProtectedRouter>
          }
        />
      </Routes>
    </section>
  );
};

export default User;
