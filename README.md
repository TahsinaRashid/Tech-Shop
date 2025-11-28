🛒 Tech-Shop

Tech-Shop is a simple and clean e-commerce application built with Next.js 14, providing product listing, product details pages and user authentication using NextAuth.
Products are managed through a global ProductContext and data is stored in localStorage - making the project perfect for learning state management and dynamic routing.

🚀 Live Demo:
🔗 https://tech-shop-prapti.netlify.app/

🚀GitHub Repo:
🔗 https://github.com/TahsinaRashid/Tech-Shop

⭐ Features:
-Add new products with image, title, price & description
-View all products in a grid layout
-Click any product to see detailed information
-Dynamic route: /products/[id]
-Uses Context API for global product state
-Authentication handled via NextAuth.js
-Fully responsive design built with Tailwind CSS
-Toast notifications (react-hot-toast)

⚙️ Setup & Installation Instructions
1. Clone the Repository
-git clone https://github.com/TahsinaRashid/Tech-Shop.git
-cd tech-shop

2. Install Dependencies
-npm install

3. Create Environment Variables

-Create a file:.env.local
-Add:
NEXTAUTH_SECRET=your_secret_key
 & NEXTAUTH_URL=http://localhost:3000

4.Run the Project
-npm run dev

5.Your app will be available at:http://localhost:3000

🛠️ Technologies Used:
-Next.js
-React
-Tailwind CSS
-Context API 
