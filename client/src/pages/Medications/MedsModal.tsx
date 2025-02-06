import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className: string;
};

export function MedsModal({ children, onClose, isOpen, className }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={modal} onClose={onClose} className={className}>
      <div>{children}</div>
    </dialog>
  );
}
