import tw from "twin.macro";
import styled from "styled-components";

export const HomeWrapper = styled.main`
  ${tw`flex flex-col items-center justify-center min-h-screen`};
  background-color: #111010;
  font-family: "Roboto", sans-serif;
`;

export const Heading = styled.h1`
  ${tw`text-white text-6xl font-bold mt-16 `};
`;

export const FieldsContainer = styled.div`
  ${tw`flex flex-col items-center justify-center mt-16 mb-auto w-full`}
`;

export const CreateWishText = styled.h2`
  ${tw`text-2xl font-bold`};
  color: #0070f3;
  font-family: "Patua One";
`;

export const NameInput = styled.input`
  ${tw`p-2 rounded h-12 w-2/5 border-t-0 border-r-0 border-l-0 bg-gray-800 text-white bg-transparent mt-6 focus:outline-none`};
  font-family: "Patua One";
  border: 1px solid white;
`;
