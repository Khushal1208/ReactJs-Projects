Command:- npm i @reduxjs/toolkit
npm i react-redux

# Refer redux toolkit website :- redux-toolkit.js.org

# code terminologies
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    incrementByAmount: (state, action) => state + action.payload
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;


# Terms:-
1. Action - it is an event or combination of event and aditional info ex:- payload like value = 5
2. Slice -   state ko manage karta hai aur uske saath related reducers aur actions ko ek sath rakhta hai.(contains Intial state , reducer function , state updation)
3. Reducers - isme state ko manage karne ka logic hota hai. takes state and action as input and generates new state based on that action.
4. store - isme state ki information hoti hai jisko reducers ke logic se manage kia jata hai .
5. state - data.

# LifeCyle of Redux ToolKit
lets take example of couter and button UI , onlick button will increment counter
onlick -> handleCLick -> Action Dispatch -> store -> Reducer -> Logic execute -> store -> updation of state -> updation on UI (Change will Reflect).



# Steps:-
1. created redux/store.js (no reducer is registered till now).
2. wrap the app component inside provider in main.jsx
esa humne isiliye kiya hai kyounki hum chahte hai humare jo store hai wo puri application me kahi se bhi access kiya ja sake. 
3. feacturs/counter/counterSlice.jsx is created
4. counterSlice will be registerd inside store beacuse to perform action on particular actions/events. 
5. abb hum useSelector hook ko use karenge jisse ki hum Value ko access karpaye.
The selector function is responsible for selecting a part of the Redux store's state or computing derived data. 
useDispatch hook ko hume use karna hi padega agar hume dispatch karna hai to.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
