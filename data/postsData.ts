// data/postsData.ts

export interface BlogPost {
    title: string;
    description?: string;
    image?: string;
    date: string;
    link: string;
    featured?: boolean;
    content?: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      title: 'The Future of AI in Business',
      description:
        'How artificial intelligence is transforming industries and driving innovation.',
      image: '/images/blog-ai-future.jpg',
      date: 'December 1, 2024',
      link: '/blog/the-future-of-ai-in-business',
      featured: true,
      content: `
  **Artificial Intelligence (AI)** is no longer a concept of the future—it's a reality shaping the present. In today's business landscape, AI-driven solutions enable companies to:
  - Automate processes
  - Gain deeper insights from data
  - Enhance customer experiences
  
  From predictive analytics and chatbots to supply chain optimization, the possibilities are endless. By leveraging AI, businesses can improve efficiency, reduce costs, and unlock new opportunities.
  
  As technology continues to evolve, the future of AI in business looks bright, offering a competitive edge to those who embrace it.
      `,
    },
    {
      title: '5 Web Development Trends for 2024',
      description:
        'Stay ahead of the curve with these game-changing web development trends.',
      image: '/images/blog-web-trends.jpg',
      date: 'November 15, 2024',
      link: '/blog/web-development-trends-2024',
      featured: true,
      content: `
  As we move into **2024**, web development is at an exciting crossroads. Emerging technologies and changing user expectations drive innovation at an unprecedented pace.
  
  **Top Trends:**
  1. **Progressive Web Apps (PWAs)**: Enhanced user experiences and offline functionality.
  2. **WebAssembly (Wasm)**: Near-native performance in the browser.
  3. **Serverless Architectures**: Reduced infrastructure overhead and seamless scaling.
  4. **Micro-Frontends**: Composable pieces for improved maintainability.
  5. **AI-Driven Personalization**: Tailor-made experiences using machine learning.
  
  Staying informed of these trends ensures developers and businesses remain competitive and deliver outstanding user experiences.
      `,
    },
    {
      title: 'Scaling Your Business with Cloud Technologies',
      date: 'November 10, 2024',
      link: '/blog/scaling-with-cloud',
      content: `
  As your business grows, cloud technologies offer scalability and cost-efficiency. By leveraging AWS, Azure, or GCP:
  - Dynamically adjust resources
  - Pay only for what you use
  - Focus on innovation rather than maintenance
  
  This flexibility supports rapid expansion and efficient resource utilization.
      `,
    },
    {
      title: 'Building Better User Experiences with Design Thinking',
      date: 'October 25, 2024',
      link: '/blog/design-thinking',
      content: `
  **Design Thinking** puts users at the heart of product development. Through empathy, ideation, and rapid prototyping, you can create:
  - Intuitive interfaces
  - Engaging journeys
  - Delightful experiences
  
  This approach ensures that digital solutions meet real user needs.
      `,
    },
    {
      title: 'How Machine Learning is Revolutionizing Healthcare',
      date: 'October 5, 2024',
      link: '/blog/machine-learning-healthcare',
      content: `
  **Machine Learning (ML)** is transforming healthcare by:
  - Predictive diagnostics
  - Personalized treatment plans
  - Improved patient outcomes
  
  By analyzing vast patient data sets, ML models support medical professionals in making more informed decisions, ultimately enhancing care and efficiency.
      `,
    },
  ];
  