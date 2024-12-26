# Portfolio

1. Cloning the Repository
```bash
git clone https://github.com/eveakoko/My-Portfolio.git
cd My-Portfolio
```

2. Installation

Install the project dependencies using npm:
```bash
npm install
```

3. Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

```bash
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the EmailJS website.

4. Running the Project
```bash
npm run dev
```