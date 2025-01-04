# Portfolio

1. Cloning the Repository
```bash
git clone https://github.com/eveakoko/My-Portfolio.git
cd My-Portfolio
```

2. Installation

Install the project dependencies using npm:
```bash
npm install --legacy-peer-deps
```

3. Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

```bash
VITE_APP_EMAILJS_SERVICE_ID=your_emailjs_user_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the EmailJS website.

4. Running the Project
```bash
npm run dev
```
