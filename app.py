import os
import sqlite3
from flask import Flask, request, redirect, render_template

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Connect to ContactForm database
db = sqlite3.connect("ContactForm.db")

@app.route("/index", methods=["GET", "POST"])
def index():

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure email was submitted
        if not request.form.get("emailadd"):
            return ("Please provide a valid email address")

        # Ensure name was submitted
        elif not request.form.get("fname"):
            return ("Please provide your name")

        # Ensure comments were submitted
        elif not request.form.get("subject"):
            return ("Please be sure to leave a message!")

        # Inserts contact into the database
        else:
            db.execute("INSERT INTO Contacts (email, name, comments) VALUES (emailadd, firstname, subject)")
        
        db.close()
        
        return ("/static/index.html")
    
    else:
        return ("/static/index.html")

if __name__ == '__main__':
    app.run()

        