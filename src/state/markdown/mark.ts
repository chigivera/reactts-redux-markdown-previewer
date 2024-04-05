import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialText } from "../../markdown";

interface MarkInterface {
    text: string;
}

const initialState: MarkInterface = {
    text: initialText
};

const markSlice = createSlice({
    name: "mark",
    initialState,
    reducers: {
        parseMarkdown: (state, action: PayloadAction<string>) => {
            // Here, you would typically parse the markdown and update the state accordingly
            state.text = action.payload;
        }
    }
});

export const { parseMarkdown } = markSlice.actions;

export default markSlice.reducer;
