import {
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { UserService } from "../../service";
import { GitHubUser } from "../../service/@types";

export const fetchByUsername = createAsyncThunk(
  "user/fetchByUsername",
  async function (username: string) {
    return UserService.getByUsername(username);
  }
);

export const clearUser = createAsyncThunk("user/clearUser", () => {

});

interface UserSliceState {
  user?: GitHubUser.Detailed;
  fetching: boolean;
}

const initialState: UserSliceState = {
  fetching: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  const pending = isPending(fetchByUsername);
  const rejected = isRejected(fetchByUsername);
  const fullfiled = isFulfilled(fetchByUsername);

  builder
    .addCase(fetchByUsername.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(clearUser.fulfilled, (state) => {
      state.user = undefined;
    })
    .addMatcher(pending, (state) => {
      state.fetching = true;
    })
    .addMatcher(rejected, (state, action) => {
      state.user = undefined;
      state.fetching = false;
    })
    .addMatcher(fullfiled, (state) => {
      state.fetching = false;
    });
});
