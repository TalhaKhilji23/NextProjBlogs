"use client";
import { Amplify } from "aws-amplify";
import awsConfig from "../aws-exports";

export default function Wrapper({ children }) {
  Amplify.configure(awsConfig);
  return children;
}
