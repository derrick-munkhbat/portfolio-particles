import React from "react";

export function Chip({ label }) {
  return (
    <div className=" inline-block px-4 py-2 bg-slate-200 rounded-full text-slate-200">
      {label}
    </div>
  );
}
