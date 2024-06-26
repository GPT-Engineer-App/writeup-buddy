import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog.jsx";
import { useToast } from "@/components/ui/use-toast";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  

  const fetchArticles = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      const res = await fetch("https://hopeful-desire-21262e95c7.strapiapp.com/api/articles");
      const data = await res.json();
      setArticles(data.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      setError("Title and description are required");
      return;
    }

    try {
      const url = editingArticle ? `https://hopeful-desire-21262e95c7.strapiapp.com/api/articles/${editingArticle.id}` : "https://hopeful-desire-21262e95c7.strapiapp.com/api/articles";
      const method = editingArticle ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { title, description } }),
      });

      if (res.ok) {
        setOpen(false);
        setTitle("");
        setDescription("");
        setError(null);
        setEditingArticle(null);
        fetchArticles();
      } else {
        setError("Error saving article");
      }
    } catch (error) {
      setError("Error saving article");
    }
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
    setTitle(article.attributes.title);
    setDescription(article.attributes.description);
    setOpen(true);
  };

  

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Articles</CardTitle>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>{editingArticle ? "Edit Article" : "Create Article"}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingArticle ? "Edit Article" : "Create Article"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title">Title</label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="description">Description</label>
                <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <Button type="submit">{editingArticle ? "Save" : "Create"}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {articles.map((article) => (
          <div key={article.id}>
            {article.attributes.title}
            <Button onClick={() => handleEdit(article)}>Edit</Button>
            
          </div>
        ))}
        <Button onClick={handleLogout}>Logout</Button>
      </CardContent>
      
    </Card>
  );
}
