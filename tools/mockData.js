const courses = [
  {
    id: 1,
    title: "Book 1",
    slug: "book1",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "Book 2",
    slug: "book2",
    authorId: 2,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Book 3",
    slug: "book3",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Book 4",
    slug: "book4",
    authorId: 3,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Book 5",
    slug: "book5",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Book 6",
    slug: "book6",
    authorId: 1,
    category: "JavaScript"
  },
];

const authors = [
  { id: 1, name: "Alan Walker" },
  { id: 2, name: "Martin Garrix" },
  { id: 3, name: "Ed Sheeran" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
