import {createClient} from '@sanity/client';

export const client = createClient({
  projectId: 'hnh7yhzk',
  dataset: 'production',
  apiVersion: '2023-03-17',
  useCdn: true,
  token: 'skrl3hX0LmAmxzQ77GF99PwParmgGDT7TNkvxhVVu1Zzm9XsKmQ0l1fUcaRK5ZUGjjdM8G7EBgf6QNKVRxTzaZplf13KNswAmu4KUkJNNGr7vuug0ztZSP3i7Oqnv1FWn2c2mww9c36wfVclGrpvzFppl49dkHFJGzwSn0E3cSHczfty73hG'
});
