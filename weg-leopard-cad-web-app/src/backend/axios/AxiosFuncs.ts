import axios, { AxiosResponse } from "axios";
import { ReleaseNote } from "../../models/ReleaseNote";
import { Section } from "../../models/QuickGuide";
import { FeedbackFormData } from "../../models/Feedback";

const baseUrl = "http://10.1.66.57:";

export const sendEmail = async (formData: FeedbackFormData) => {
  try {
    const response = await axios.post(baseUrl + "3000/send-email", formData);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
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
