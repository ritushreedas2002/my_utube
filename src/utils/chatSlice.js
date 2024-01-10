import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";


const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
        //making the length upto 25 and after that start deleting from top
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.push(action.payload); //pushing the new data on bottom and older on top
      //NOTE: in div container made it container flex-col-reverse....
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;