import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = {
    title: "TeraBox Reaches 400 Million Users Worldwide",
    excerpt: "We're thrilled to announce that TeraBox has officially reached 400 million users globally, making us one of the fastest-growing cloud storage platforms.",
    image: "🎉",
    author: "Sarah Chen",
    date: "January 15, 2025",
    category: "Company News",
    readTime: "5 min read"
  };

  const blogPosts = [
    {
      title: "10 Advanced TeraBox Features You Might Not Know About",
      excerpt: "Discover hidden gems and power-user features that can transform your cloud storage experience.",
      image: "💡",
      author: "David Rodriguez",
      date: "January 10, 2025",
      category: "Tips & Tricks",
      readTime: "8 min read"
    },
    {
      title: "The Future of Cloud Storage: AI Integration",
      excerpt: "How artificial intelligence is revolutionizing file organization and search capabilities.",
      image: "🤖",
      author: "Lisa Park",
      date: "January 8, 2025",
      category: "Technology",
      readTime: "6 min read"
    },
    {
      title: "Security Best Practices for Cloud Storage",
      excerpt: "Essential tips to keep your files safe and secure in the cloud environment.",
      image: "🔒",
      author: "Michael Johnson",
      date: "January 5, 2025",
      category: "Security",
      readTime: "7 min read"
    },
    {
      title: "Remote Work Revolution: How Teams Use TeraBox",
      excerpt: "Case studies of successful remote teams and how they leverage cloud storage for collaboration.",
      image: "🏠",
      author: "Emily Chen",
      date: "January 3, 2025",
      category: "Business",
      readTime: "10 min read"
    },
    {
      title: "Mobile Photography Backup: Complete Guide",
      excerpt: "Everything you need to know about automatically backing up photos from your smartphone.",
      image: "📸",
      author: "James Wilson",
      date: "December 28, 2024",
      category: "Mobile",
      readTime: "5 min read"
    },
    {
      title: "TeraBox vs Competitors: 2025 Comparison",
      excerpt: "An honest comparison of features, pricing, and performance across major cloud storage providers.",
      image: "⚖️",
      author: "Sarah Chen",
      date: "December 25, 2024",
      category: "Comparison",
      readTime: "12 min read"
    }
  ];

  const categories = [
    { name: 'All Posts', count: 47 },
    { name: 'Company News', count: 8 },
    { name: 'Tips & Tricks', count: 15 },
    { name: 'Technology', count: 12 },
    { name: 'Security', count: 9 },
    { name: 'Business', count: 3 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            TeraBox Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Stay updated with the latest news, tips, and insights from the TeraBox team.
          </p>
          
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Featured Post */}
            <Card className="mb-12 overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-12">
                    <div className="text-6xl">{featuredPost.image}</div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <Badge className="mb-4 bg-blue-100 text-blue-800">{featuredPost.category}</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {featuredPost.date}
                        </div>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-12 text-center">
                      <div className="text-4xl">{post.image}</div>
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3 bg-gray-100 text-gray-800">{post.category}</Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.date}
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            {/* Categories */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <span className="text-gray-700">{category.name}</span>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter and never miss an update.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Enter your email" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPage;