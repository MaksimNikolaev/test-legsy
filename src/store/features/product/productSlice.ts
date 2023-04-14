import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../../utils/API';
import { IProduct, IProductPhoto, IProductResult } from '../../../interfaces/IProduct';
import { generateDataArray } from '../../../utils/generateDataArray';

interface ProductsState {
  data: IProductResult[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  data: [],
  loading: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get(`${API_URL}/get_supplier_cards?supplier_id=31460`);
    const data = await response.data;

    const [response1, response2] = await Promise.all([
      axios.post(`${API_URL}/cards_detail`, { nm_ids: data }),
      axios.post(`${API_URL}/cards_photo`, { nm_ids: data }),
    ]);
    const product: IProduct[] = response1.data;
    const productPhoto: IProductPhoto = response2.data;
    const result = product.map((item) => {
      if (productPhoto[item.id]) {
        item.photo = productPhoto[item.id];
      }
      const { name, brand, priceU, photo, ...rest } = item;
      return { Название: item.name, Номенклатура: item.id, Бренд: item.brand, Цена: `${Number(item.priceU) / 100} руб`, Фото: item.photo, График: generateDataArray(), ...rest };
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'Failed to fetch products';
      });
  },
});

export const productsReducer = productsSlice.reducer;