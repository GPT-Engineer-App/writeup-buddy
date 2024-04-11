import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetch("https://hopeful-desire-21262e95c7.strapiapp.com/api/articles")
        .then((res) => res.json())
        .then((data) => {
          setArticles(data.data);
          setLoading(false);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Articles</CardTitle>
      </CardHeader>
      <CardContent>
        {articles.map((article) => (
          <div key={article.id}>{article.attributes.title}</div>
        ))}
        <Button onClick={handleLogout}>Logout</Button>
      </CardContent>
    </Card>
  );
}
