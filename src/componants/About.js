import React from 'react'
import about from '../cssModules/about.module.css';

function About() {
  return (
    <div className={about.container}>
      <div className={about.head}>
        <h1>Welcome to CloudNoteBook: Your Personal Note-Taking Haven!</h1>
        <br />
        <p>At CloudNoteBook, we believe that organizing your thoughts should be effortless, efficient, and accessible from anywhere. Whether you're a student, a professional, or simply someone who loves jotting down ideas, our platform provides the perfect digital canvas for all your note-taking needs.</p>
      </div>

      <div className={about.keyfeature}>
        <h3> Key Features:</h3>

        <p><b>1. User-Friendly Interface:</b> We've designed our platform with simplicity in mind. You'll find it easy to navigate and use, whether you're a tech-savvy user or a beginner.</p>

        <p><b>2. Note Creation:</b> With CloudNoteBook, you can create notes on any topic or subject matter. Our user-friendly editor allows you to type, copy-paste, or even upload files directly into your notes.</p>

        <p><b>3. Editing Made Simple:</b> Need to make changes? No problem. You can effortlessly edit your notes, formatting text, adding images, and organizing content to suit your needs.</p>

        <p><b>4. Secure Login & Signup:</b> Your privacy is our priority. To access CloudNoteBook, simply sign up or log in with your email address. Rest assured that your personal information is safe and secure.</p>

        <p><b>5. Customizable Organization:</b> Keep your notes tidy with folders and tags. Organize your notes by subject, project, or any system that suits your style.</p>

        <p><b>6. Search and Find:</b> Our powerful search feature helps you locate notes quickly, even in a large collection. Never lose track of an important idea again.</p>

        <p><b>7. Sync Across Devices:</b> Access your notes from your desktop, laptop, tablet, or smartphone. Your notes are seamlessly synced, ensuring you're always up to date.</p>

        <p><b>8. Share and Collaborate:</b> Collaborate with colleagues or friends by sharing your notes or entire notebooks. Work together in real-time to brainstorm, plan, or study.</p>

        <p><b>9. Version History:</b> Worried about making changes you might regret? We've got you covered with version history, so you can revert to previous versions of your notes if needed.</p>

        <p><b>10. Delete with Confidence:</b> If you no longer need a note, our platform allows you to securely delete it. Your data is handled with care.</p>
      </div>

      <div className={about.choice}>
        <h3> Why Choose CloudNoteBook?</h3>

        <p> <b>A. Efficiency:</b> Say goodbye to paper clutter and disorganized digital files. CloudNoteBook streamlines your note-taking process, making it faster and more efficient.</p>

        <p> <b>B. Accessibility:</b> Access your notes whenever and wherever you need them. Your notes are available 24/7, ensuring you're always prepared.</p>

        <p> <b>C. Security:</b> We take data security seriously. Your personal information and notes are protected with state-of-the-art encryption.</p>

        <p> <b>D. Collaboration:</b> CloudNoteBook isn't just for individual use. Collaborate with peers, classmates, or colleagues seamlessly.</p>

        <p> <b>E. Simplicity:</b> Our user-friendly interface means you can start taking notes right away without a steep learning curve.</p>

        <p> Join thousands of satisfied users who have made CloudNoteBook their go-to platform for all things note-related. Sign up today to experience the future of note-taking. Welcome to CloudNoteBook - where your ideas come to life!</p>
      </div>
    </div>
  )
}

export default About