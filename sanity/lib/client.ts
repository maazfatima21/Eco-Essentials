import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 
  "skT6ycJoDYEkrdpAjlMTNfMGkmxhIKf75QQNm6y6mjz9bOXakohz5qcCecBzaSDg3HB6fWSv8x7pXAYaGv2dU2ibmS5pIaaYADFlywNqC2F7MT5QhLOnzcXkCMlnOmNTzBvMeYng52iosAMvjwfGBrICMgRz80jDlJdfsWgzCZQJLuw4R8kQ"
})
