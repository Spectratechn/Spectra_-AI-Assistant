/* Base Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f9;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

/* Hero Section */
.hero {
  background: linear-gradient(to right, #4e73df, #6a9eff);
  color: white;
  padding: 60px 20px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.tagline {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.description {
  margin-bottom: 20px;
}

/* Buttons */
.buttons .btn {
  display: inline-block;
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  background: #6a9eff;
  transition: background 0.3s;
}

.buttons .btn.secondary {
  background: #4e73df;
}

.buttons .btn:hover {
  background: #345bbd;
}

/* Section */
.section {
  padding: 40px 20px;
  text-align: center;
  background: #fff;
  margin: 20px 0;
}

/* Footer */
footer {
  text-align: center;
  padding: 20px;
  background: #4e73df;
  color: white;
}
