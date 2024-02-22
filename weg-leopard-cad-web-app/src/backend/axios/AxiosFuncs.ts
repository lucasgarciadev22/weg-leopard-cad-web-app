import axios, { AxiosResponse } from "axios";
import { ReleaseNote } from "../../models/ReleaseNote";
import { Section } from "../../models/QuickGuide";

const baseUrl = "http://10.1.66.57:";

export const fetchReleaseNotes = async (): Promise<ReleaseNote[]> => {
  try {
    const response: AxiosResponse<ReleaseNote[]> = await axios.get(
      baseUrl + "3002/release-notes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching release notes:", error);
    throw error;
  }
};

export const fetchQuickGuideData = async (): Promise<Section[]> => {
  try {
    const response: AxiosResponse<Section[]> = await axios.get(
      baseUrl + "3001/quick-guide"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching quick guide data:", error);
    throw error;
  }
};
