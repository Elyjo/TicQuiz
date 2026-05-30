import { algorithmique } from "@/data/courses/d2a/l1/semester1/algorithmique";

export function getCourse(path, subjectId) {
  if (
    path?.dept === "d2a" &&
    path?.level === "l1" &&
    path?.semester === "semester1"
  ) {
    const courses = {
      algorithmique,
    };

    return courses[subjectId];
  }

  return null;
}