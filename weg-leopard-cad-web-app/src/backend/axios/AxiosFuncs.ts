import axios, { AxiosResponse } from 'axios';
import { ReleaseNote } from '../../models/ReleaseNote';

export const fetchReleaseNotes = async (): Promise<ReleaseNote[]> => {
  try {
    const response: AxiosResponse<ReleaseNote[]> = await axios.get('http://localhost:3001/release-notes');
    return response.data;
  } catch (error) {
    console.error('Error fetching release notes:', error);
    throw error;
  }
};
