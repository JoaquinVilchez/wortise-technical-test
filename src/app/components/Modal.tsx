'use client';

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
}

export default function Modal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
}: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-md rounded-lg border border-gray-400 bg-white p-4 px-6 shadow-lg">
          <DialogTitle className="font-bold text-2xl my-2">{title}</DialogTitle>
          <Description className="text-gray-600 text-sm">
            {description}
          </Description>

          <div className="flex justify-end gap-4 pt-4">
            <Button
              onClick={onClose}
              className="rounded bg-gray-500 px-4 py-2 text-sm hover:bg-gray-300"
            >
              {cancelText}
            </Button>

            <Button
              onClick={onConfirm}
              className="rounded bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
            >
              {confirmText}
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
