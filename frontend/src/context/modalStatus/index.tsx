"use client";

import { createContext, useContext, useState } from "react";

interface ModalStatusProviderProps {
  children: React.ReactNode;
}

export interface IModalStatusContext {
  opened: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

export const ModalStatusContext = createContext({} as IModalStatusContext);

export const useModalStatus = () => {
  const context = useContext(ModalStatusContext);
  if (!context) {
    throw new Error("useModalStatus must be used within a ModalStatusProvider");
  }
  return context;
};

export const ModalStatusProvider = ({ children }: ModalStatusProviderProps) => {
  const [opened, setOpened] = useState(false);
  const handleOpenModal = () => {
    setOpened(true);
  };
  const handleCloseModal = () => {
    setOpened(false);
  };

  return (
    <ModalStatusContext.Provider
      value={{ opened, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalStatusContext.Provider>
  );
};
