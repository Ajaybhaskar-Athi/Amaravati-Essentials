import axios from 'axios';

export const getAll = async () => {
  const { data } = await axios.get('https://amaravati-essentials-backend-mhqoljl9h-ajaybhaskars-projects.vercel.app/api/foods');
  return data;
};

export const search = async searchTerm => {
  const { data } = await axios.get('https://amaravati-essentials-backend-mhqoljl9h-ajaybhaskars-projects.vercel.app/api/foods/search/' + searchTerm);
  return data;
};

export const getAllTags = async () => {
  const { data } = await axios.get('https://amaravati-essentials-backend-mhqoljl9h-ajaybhaskars-projects.vercel.app/api/foods/tags');
  return data;
};

export const getAllByTag = async tag => {
  if (tag === 'All') return getAll();
  const { data } = await axios.get('https://amaravati-essentials-backend-mhqoljl9h-ajaybhaskars-projects.vercel.app/api/foods/tag/' + tag);
  return data;
};

export const getById = async foodId => {
  const { data } = await axios.get('https://amaravati-essentials-backend-mhqoljl9h-ajaybhaskars-projects.vercel.app/api/foods/' + foodId);
  return data;
};

export async function deleteById(foodId) {
  await axios.delete('https://amaravati-essentials-backend-mhqoljl9h-ajaybhaskars-projects.vercel.app/api/foods/' + foodId);
}

export async function update(food) {
  await axios.put('https://amaravati-essentials-backend-mhqoljl9h-ajaybhaskars-projects.vercel.app/api/foods', food);
}

export async function add(food) {
  const { data } = await axios.post('https://amaravati-essentials-backend-mhqoljl9h-ajaybhaskars-projects.vercel.app/api/foods', food);
  return data;
}
