import React, { useState } from 'react';
import { ThumbsUp, MessageCircle, Share2, Bookmark } from 'lucide-react';

const BlogAndComments = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Getting Started with Web Development in 2025",
      content: "Web development has evolved significantly over the years. As a beginner, it's essential to understand the core technologies: HTML, CSS, and JavaScript. Start with the basics and gradually move to modern frameworks like React and Node.js...",
      author: "Sarah Johnson",
      likes: 156,
      comments: [
        { id: 1, text: "Great introduction for beginners!", author: "Dev Explorer", timestamp: "2025-02-10T10:00:00Z" },
        { id: 2, text: "Would love to see more content about React!", author: "Tech Enthusiast", timestamp: "2025-02-11T15:30:00Z" }
      ],
      tags: ["Web Development", "Programming", "Beginners"],
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "The Future of AI in Portfolio Building",
      content: "Artificial Intelligence is revolutionizing how we create and manage portfolios. From automated design suggestions to content optimization, AI tools are making it easier than ever to showcase your work professionally...",
      author: "Michael Chen",
      likes: 234,
      comments: [
        { id: 1, text: "AI has really changed the game!", author: "AI Enthusiast", timestamp: "2025-02-09T09:15:00Z" }
      ],
      tags: ["AI", "Portfolio", "Technology"],
      image: "/api/placeholder/800/400"
    }
  ]);

  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    tags: ''
  });

  const [newComment, setNewComment] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    const blog = {
      id: blogs.length + 1,
      ...newBlog,
      tags: newBlog.tags.split(',').map(tag => tag.trim()),
      author: 'Current User',
      likes: 0,
      comments: [],
      image: "/api/placeholder/800/400"
    };
    setBlogs([blog, ...blogs]);
    setNewBlog({ title: '', content: '', tags: '' });
  };

  const handleComment = (blogId) => {
    if (!newComment.trim()) return;
    
    const updatedBlogs = blogs.map(blog => {
      if (blog.id === blogId) {
        return {
          ...blog,
          comments: [...blog.comments, {
            id: blog.comments.length + 1,
            text: newComment,
            author: 'Current User',
            timestamp: new Date().toISOString()
          }]
        };
      }
      return blog;
    });
    
    setBlogs(updatedBlogs);
    setNewComment('');
  };

  return (
    <div className="max-w-screen-2xl pt-40 mx-auto p-6 bg-gradient-to-b from-pink-50 to-white min-h-screen">
      <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-t-lg">
          <h2 className="text-2xl font-bold">Create New Blog Post</h2>
        </div>
        <div className="p-6">
          <form onSubmit={handleBlogSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-pink-700">Title</label>
              <input
                type="text"
                value={newBlog.title}
                onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                placeholder="Enter blog title"
                className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-pink-700">Content</label>
              <textarea
                value={newBlog.content}
                onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                placeholder="Write your blog content..."
                className="w-full h-32 px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-pink-700">Tags</label>
              <input
                type="text"
                value={newBlog.tags}
                onChange={(e) => setNewBlog({ ...newBlog, tags: e.target.value })}
                placeholder="Enter tags (comma-separated)"
                className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <button 
              type="submit"
              className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-colors"
            >
              Publish Blog
            </button>
          </form>
        </div>
      </div>

      <div className="space-y-6">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-pink-100 p-6">
              <img src={blog.image} alt={blog.title} className="rounded-lg mb-4 w-full object-cover" />
              <h3 className="text-2xl font-bold text-pink-800">{blog.title}</h3>
              <p className="text-pink-600 mb-2">By {blog.author}</p>
              <div className="flex gap-2">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <p className="mb-6 text-gray-700">{blog.content}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <button className="flex items-center gap-2 text-pink-600 hover:text-pink-700">
                  <ThumbsUp className="h-4 w-4" />
                  {blog.likes}
                </button>
                <button 
                  className="flex items-center gap-2 text-pink-600 hover:text-pink-700"
                  onClick={() => setSelectedBlog(blog.id)}
                >
                  <MessageCircle className="h-4 w-4" />
                  {blog.comments.length}
                </button>
                <button className="flex items-center gap-2 text-pink-600 hover:text-pink-700">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
                <button className="flex items-center gap-2 text-pink-600 hover:text-pink-700">
                  <Bookmark className="h-4 w-4" />
                  Save
                </button>
              </div>

              {selectedBlog === blog.id && (
                <div className="space-y-4 border-t border-pink-100 pt-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Write a comment..."
                      className="flex-1 px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <button 
                      onClick={() => handleComment(blog.id)}
                      className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-colors"
                    >
                      Comment
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {blog.comments.map(comment => (
                      <div key={comment.id} className="bg-pink-50 p-4 rounded-lg">
                        <p className="text-gray-800">{comment.text}</p>
                        <p className="text-sm text-pink-600 mt-2">
                          {comment.author} • {new Date(comment.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogAndComments;