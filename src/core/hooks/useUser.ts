import { unwrapResult } from "@reduxjs/toolkit";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import * as UserActions from "../store/User.store";

export default function useUser() {
  const dispatch = useDispatch<AppDispatch>();

  const [username, setUsername] = useState("");

  const loading = useSelector((state: RootState) => state.user.fetching);

  const user = useSelector((state: RootState) => state.user.user);

  const fetchUser = useCallback(
    async function () {
      if (username.length === 0) {
        throw new Error("Usuário não informado");
      } else {
        dispatch(UserActions.fetchByUsername(username))
          .then(unwrapResult)
          .then(() => {
            setUsername("");
          })
          .catch((error) => {
            setUsername("");
            throw error;
          });
      }
    },
    [dispatch, username]
  );

  return { username, setUsername, loading, fetchUser, user };
}
