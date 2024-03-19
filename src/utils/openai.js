import OpenAI from "openai";
import { gpt_API } from "./constant";

const openai = new OpenAI({
    apiKey: gpt_API,
    dangerouslyAllowBrowser: true
  });

export default openai;