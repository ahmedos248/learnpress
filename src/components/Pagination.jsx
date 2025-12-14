import React from "react";
import { IconButton } from "@material-tailwind/react";

export function Pagination({ currentPage, totalPages, goTo, next, prev }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-4">
      <IconButton
        size="lg"
        variant="text"
        onClick={prev}
        disabled={currentPage === 1}
        className="rounded-full border flex items-center gap-2"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </IconButton>

      <div className="flex items-center gap-2">
        {pages.map((page) => (
          <IconButton
            size="lg"
            key={page}
            variant={currentPage === page ? "filled" : "text"}
            color="gray"
            onClick={() => goTo(page)}
            className="rounded-full border exo-text text-base"
          >
            {page}
          </IconButton>
        ))}
      </div>

      <IconButton
        size="lg"
        variant="text"
        onClick={next}
        disabled={currentPage === totalPages}
        className="rounded-full border flex items-center gap-2"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </IconButton>
    </div>
  );
}
