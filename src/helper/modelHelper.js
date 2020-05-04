export function genModalOpen(id_) {
  return () => {
    const modal = document.getElementById(id_);
    if (!modal) {
      return
    }
    modal.style.display = 'block';
  }
}

export function genModalClose(id_) {
  return () => {
    const modal = document.getElementById(id_);
    modal.style.display = 'none';
  }
}

export function genModalOutsideClose(id_) {
  return (event) => {
    const modal = document.getElementById(id_);
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
}

