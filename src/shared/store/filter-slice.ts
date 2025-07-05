import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type IFilterValue } from "@/shared/types/filter";

interface FilterState {
  filterValue: IFilterValue;
}

const initialState: FilterState = {
  filterValue: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterValue: (state, action: PayloadAction<IFilterValue>) => {
      state.filterValue = action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export default filterSlice.reducer;
