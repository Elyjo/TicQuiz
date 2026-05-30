"use client";

import { useEffect, useState } from "react";
import { d2a } from "@/data/curriculum/d2a";

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const path = JSON.parse(
      localStorage.getItem("userPath")
    );

    if (!path) return;

    if (path.dept === "d2a") {
      setSubjects(
        d2a[path.level][path.semester]
      );
    }
  }, []);

  return (
    <div>
      {subjects.map(subject => (
        <p key={subject.id}>
          {subject.name}
        </p>
      ))}
    </div>
  );
}