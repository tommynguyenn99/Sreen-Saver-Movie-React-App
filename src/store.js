
import { configureStore } from '@reduxjs/toolkit' //create react app redux toolkit  
import counterReducer from '.counterSlice' //import our reducer from step 4 
export default configureStore({ 
reducer: { 
counter: counterReducer //add our reducer from step 4 
} 
}) 