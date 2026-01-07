import React from "react";
import Swal from "sweetalert2";

function UnsavedChangesAlert() {
  const handleLeavePage = () => {
    Swal.fire({
      title: "Do you want to save your changes?",
      text: "If you leave now, your unsaved changes will be lost.",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: "Don't Save",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
      denyButtonColor: "#f6c23e",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        // Real-world action: save data
        Swal.fire("Saved!", "Your changes have been saved.", "success");
      } else if (result.isDenied) {
        // Real-world action: discard data
        Swal.fire("Discarded", "Changes were not saved.", "info");
      }
      // Cancel = user stays on the page
    });
  };

  return <button onClick={handleLeavePage}>Leave Page</button>;
}

export default UnsavedChangesAlert;
