
import { createSlice, createAsyncThunk,type PayloadAction } from '@reduxjs/toolkit';
import api from '@/services/api';
// ====================
// Types
// ====================

export interface User {
  _id: string;
  name: string;
   email: string;
   dob:string;
  
  // add more fields as needed
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const storedUser = localStorage.getItem("user");
const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  loading: false,
  error: null,
};




export const getUserProfile = createAsyncThunk<User, void, { rejectValue: string }>(
  'auth/getUserProfile',
  async (_, thunkAPI) => {
    try {
      const res = await api.get('/profile');
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch user profile');
    }
  }
);

export const loginUser = createAsyncThunk<User, { email: string; password: string }, { rejectValue: string }>(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('/login', credentials);
      const user  = response.data;
      localStorage.setItem('user', JSON.stringify(user)); 
      return  user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const registerUser = createAsyncThunk<User, { name: string; email: string; password: string,dob:string, }, { rejectValue: string }>(
  'auth/signupUser',
  async (userData, thunkAPI) => {
    try {
      const response = await api.post('/register', userData);
      const user = response.data;
       localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Signup failed');
    }
  }
);

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      await api.post('/logout');
      localStorage.removeItem('user');
      return;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Logout failed');
    }
  }
);


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getUserProfile
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      })

      // loginUser
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      })

      // signupUser
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      })

      // logoutUser
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
        state.error = null;
        localStorage.removeItem('user');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export default authSlice.reducer;
