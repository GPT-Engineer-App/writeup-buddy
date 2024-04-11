import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate fields
    const validationErrors = {};
    if (!email) validationErrors.email = "Email is required";
    if (!username) validationErrors.username = "Username is required";
    if (!password) validationErrors.password = "Password is required";
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Redirect to login on successful registration
      navigate("/login");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="username">Username</label>
            <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            {errors.username && <p className="text-red-500">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <Button type="submit">Register</Button>
        </form>
      </CardContent>
    </Card>
  );
}
