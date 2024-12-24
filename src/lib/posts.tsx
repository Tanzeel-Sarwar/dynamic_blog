// Define the structure of a blog post
export interface Post {
    id: string;
    title: string;
    content: string;
    date: string;
  }
  
  // Mock data for blog posts
  export const posts: Post[] = [
    {
      id: '1',
      title: 'Understanding React Hooks',
      content: 'React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to allow developers to use state and other React features without writing a class.',
      date: '2023-06-01'
    },
    {
      id: '2',
      title: 'Next.js: The React Framework',
      content: 'Next.js is a popular React framework that provides features like server-side rendering, static site generation, and API routes out of the box. It simplifies the process of building React applications and improves performance.',
      date: '2023-06-05'
    },
    {
      id: '3',
      title: 'CSS-in-JS: Styled Components',
      content: 'Styled Components is a popular CSS-in-JS library that allows you to write actual CSS code to style your components. It provides a way to use component-level styles in your application, which can help in writing more maintainable code.',
      date: '2023-06-10'
    }
  ];
  
  